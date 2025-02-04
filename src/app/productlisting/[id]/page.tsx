"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import Link from "next/link";
import { Product } from "@/types/index";
import { useCart } from "@/app/cartContext";

 

export default function ProductDetail() {
  const { dispatch } = useCart();
 

  const { id } = useParams(); // Get the dynamic product ID from URL

  const [product, setProduct] = useState<Product | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        try {
          const response = await fetch("/api/products");
          if (!response.ok) {
            throw new Error(`Failed to fetch products: ${response.status}`);
          }
          const products: Product[] = await response.json();

          console.log("Fetched Products:", products); // Debugging step

          setProducts(products);

          const foundProduct = products.find(
            (p) => p.id.toString() === id.toString()
          );
          if (!foundProduct) {
            setError("Product not found");
            return;
          }

          // Ensure imageUrl is always a string
          setProduct({
            ...foundProduct,
            imageUrl:
              foundProduct.imageUrl ||
  
              "/placeholder.jpg",
          });
        } catch (error) {
          console.error("Error fetching product:", error);
          setError("Failed to fetch product. Please try again later.");
        } finally {
          setLoading(false);
        }
      };
      fetchProduct();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg font-semibold">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg font-semibold text-red-600">{error}</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg font-semibold text-gray-500">Product not found</p>
      </div>
    );
  }
 
   const addToCart = (product: Product) => {
      dispatch({ type: "ADD_TO_CART", product });
      alert(`${product.name} added to cart!`);
    };

  return (
    <main>
      <Header />

      {/* Product Details */}
      <div className="flex flex-col md:flex-row justify-center md:gap-x-20 mt-32 px-4 md:px-0">
        <div className="flex justify-center mb-10 md:mb-0">
          <Image
            src={product.imageUrl} // Always a string
            alt={product.name || "Product Image"}
            width={675}
            height={450}
            className="w-full ml-10 md:w-[675px] -mt-32 h-auto object-contain"
          />
        </div>
        <div className="text-center md:text-left">
          <h1 className="text-[40px] md:text-[50px] font-bold -mt-20">
            {product.name}
          </h1>
          <p className="text-[20px] font-semibold p-2 bg-[#007580] rounded-full pl-3 w-auto md:w-[144px] text-white mb-10 mx-auto md:mx-0">
            Rs. {product.salePrice || product.price}
          </p>
          <hr />
          <p className="font-light mt-3 text-lg">
            Upgrade your living space with the {product.name}, a perfect blend
            of comfort and style. Ideal for any modern home, this product offers
            both luxury and functionality, ensuring relaxation with a sleek
            design that complements your décor.
          </p>

          <button
              onClick={() => addToCart(product)}
              className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Add to Cart
            </button>
        </div>
      </div>

      {/* Featured Products */}
      <div className="mt-20 px-4 md:px-0">
        <h2 className="text-4xl font-bold ml-5 text-center md:text-left mb-10">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products
            .filter((item) => item.id !== product.id) // Exclude the current product
            .map((product) => (
              <Link
                key={product.id}
                href={`/productlisting/${product.id}`}
                passHref
              >
                <div className="card group w-full h-full relative cursor-pointer border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="img relative">
                    <Image
                      className="w-full h-48 object-cover"
                      src={
                        product.imageUrl ||
                        
                        "/placeholder.jpg"
                      } // Always a string
                      alt={product.name || "Product Image"}
                      width={300}
                      height={200}
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="text-[16px] font-normal text-[#007580]">
                      {product.name}
                    </h4>
                    <h5 className="mt-2 font-bold">
                      Rs. {product.salePrice || product.price}
                    </h5>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
