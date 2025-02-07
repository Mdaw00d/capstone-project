"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image"; // Import Next.js Image component
import { useCart } from "../cartContext"; // Import useCart hook (adjust the path as needed)

export type Product = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  description: string;
  image: string;
  title: string;
  _id: string | null;
};

const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const { dispatch } = useCart(); // Use dispatch from the context

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/products"); // Replace with your actual API endpoint
        if (!response.ok) throw new Error("Failed to fetch products");
        const data: Product[] = await response.json();
        setProducts(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p className="text-center text-gray-500">Loading products...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  const addToCart = (product: Product) => {
    dispatch({ type: "ADD_TO_CART", product });
    alert(`${product.name} added to cart!`);
  };

  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-md shadow-md">
            <Image
              src={product.imageUrl}
              alt={product.name}
              width={500} // Adjust width as needed
              height={400} // Adjust height as needed
              className="w-full h-40 object-cover rounded-md"
            />
            <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
            <p className="text-gray-600">{product.description}</p>
            <p className="text-xl font-bold mt-2">${product.price}</p>
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded-md mt-2"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </main>
  );
};

export default ProductsPage;
