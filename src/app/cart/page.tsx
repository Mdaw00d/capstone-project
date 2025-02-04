"use client";

import Header from "../components/header";
import Footer from "../components/footer";
import { useCart } from "../cartContext";



export default function Cart() {
  const { state, dispatch } = useCart();
const { cart } = state; // Now `cart` is available

  





  // Remove item from cart
  const removeFromCart = (id: number) => {
    dispatch({ type: "REMOVE_FROM_CART", id });
  };
  
 

  // Calculate subtotal
  const subtotal = cart.reduce((total, item) => {
    const price = item.salePrice || item.price;
    const quantity = item.quantity || 1;
    return total + price * quantity;
  }, 0);
  

  return (
    <main>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

        {cart?.length === 0 || !cart ? (
          <div className="text-center mt-10">
            <p className="text-lg text-gray-600">Your cart is empty</p>
          </div>
        ) : (
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item.id} // Ensure 'id' exists on Product
                className="flex justify-between items-center border-b py-4"
              >
                <div>
                  <p className="text-lg font-semibold">{item.name}</p>
                  <p className="text-gray-600">Quantity: {item.quantity || 1}</p>
                  <p className="text-gray-800">
                    Price: Rs.{" "}
                    {(
                      (Number(item.salePrice) || Number(item.price)) *
                      (item.quantity || 1)
                    ).toFixed(2)}
                  </p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition duration-200"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}

        {cart && cart.length > 0 && (
          <div className="mt-8">
            <h2 className="text-xl font-bold">
              Subtotal: Rs. {subtotal.toFixed(2)}
            </h2>
          </div>
        )}
      </div>
      <Footer />
    </main>
  );
}
