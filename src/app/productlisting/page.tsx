"use client";
import { useCart } from "../cartContext";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";
import { Product } from "@/sanity/lib/getProducts"



export default function Products() {
  const { dispatch } = useCart();
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("/api/products");
        if (response.ok) {
          const data: Product[] = await response.json();
          console.log("Fetched products:", data); // Debugging

          setProducts(data);
          setFilteredProducts(data);

          const uniqueCategories = Array.from(
            new Set(data.map((product) => product.category || "Uncategorized"))
          ).sort() as string[];
          setCategories(uniqueCategories);
        } else {
          setError(`Failed to fetch: ${response.status}`);
        }
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Failed to fetch products. Please try again later.");
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  const handleCategoryChange = (category: string | null) => {
    setSelectedCategory(category);
    setFilteredProducts(
      category
        ? products.filter((product) => product.category === category)
        : products
    );
  };



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

 

  const addToCart = (product: Product) => {
    dispatch({ type: "ADD_TO_CART", product });
    alert(`${product.name} added to cart!`);
  };

  return (
    <main>
      <Header />

      <div className="container mx-auto px-4 py-8">
        <h2 className="text-[32px] font-semibold text-center mb-8">
          All Products
        </h2>

        <div className="mb-8 flex justify-end">
          <select
            className="border border-gray-300 rounded-md p-2"
            onChange={(e) =>
              handleCategoryChange(
                e.target.value === "" ? null : e.target.value
              )
            }
            value={selectedCategory || ""}
          >
            <option value="">All Categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <Link
              key={product.id}
              href={`/productlisting/${product.id}`}
              passHref
            >
              <div className="card group w-full h-full relative cursor-pointer border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="img relative">
                  <Image
                    src={product.imageUrl || "/placeholder.jpg"}
                    alt={product.name}
                    width={300}
                    height={200}
                    className="w-full h-64 object-cover rounded-t-lg"
                  />
                  <div className="absolute top-2 left-2 flex gap-2">
                    {product.isNew && (
                      <button className="w-[54px] h-[26px] text-[13px] rounded-md bg-green-500 text-white">
                        New
                      </button>
                    )}
                    {product.label && (
                      <button
                        className={`w-[54px] h-[26px] text-[13px] rounded-md ${product.labelColor} text-white`}
                      >
                        {product.label}
                      </button>
                    )}
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="text-[16px] font-normal text-[#007580]">
                    {product.name}
                  </h4>
                  <h5 className="mt-2 font-bold">
                    Rs. {product.salePrice || product.price}
                  </h5>
                  <button
              onClick={() => addToCart(product)}
              className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Add to Cart
            </button>
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
