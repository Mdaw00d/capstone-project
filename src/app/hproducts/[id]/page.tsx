"use client";

import { getProductById, Product } from "@/sanity/lib/getProducts";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import { useCart } from "@/app/cartContext"; 



export default function ProductDetail() {
  const { dispatch } = useCart();
  const addToCart = (product: Product) => {
    dispatch({ type: "ADD_TO_CART", product });
    alert(`${product.name} added to cart!`);
  };
  const params = useParams();
  const id = params?.id as string; // Ensure id is a string
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProduct() {
      if (!id) return;
      try {
        const productData = await getProductById(id);
        setProduct(productData);
      } catch (err) {
        console.warn("⚠️ Failed to fetch product", err);
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [id]);

  if (loading) {
    return <p className="text-center text-lg font-semibold">Loading...</p>;
  }

  if (!product) {
    return (
      <p className="text-center text-lg font-semibold text-red-600">
        Product not found
      </p>
    );
  }

  return (
    <main>
      <Header />
      <div className="flex flex-col md:flex-row justify-center md:gap-x-20 mt-32 px-4 md:px-0">
        <div className="flex justify-center mb-10 md:mb-0">
          <Image
            src={product.image.asset.url}
            alt={product.title}
            width={675}
            height={450}
            className="w-full ml-10 md:w-[675px] -mt-32 h-auto object-contain"
          />
        </div>
        <div className="text-center md:text-left">
          <h1 className="text-[40px] md:text-[50px] font-bold -mt-20">
            {product.title}
          </h1>
          <p className="text-[20px] font-semibold p-2 bg-[#007580] rounded-full pl-3 w-auto md:w-[144px] text-white mb-10 mx-auto md:mx-0">
            Rs. {product.price}
          </p>
          <hr />
          <p className="font-light mt-3 text-lg">
            {product.description || "No description available."}
          </p>
        </div>
        
      </div>
      <button
              onClick={() => addToCart(product)}
              className="-mt-28 absolute bg-[#007580] text-white ml-[600px] px-20 py-3 rounded hover:bg-blue-600"
            >
              Add to Cart
            </button>
      <Footer />
    </main>
  );
}
