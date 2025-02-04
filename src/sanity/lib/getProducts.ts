import { client } from "./sanityClient";

export interface Product {
  // Required fields
  id: number; // Unique identifier (if Sanity uses _id, normalize this field when fetching data)
  _id?: string; // Optional _id for compatibility with Sanity
  name: string; // Product name
  title: string; // Product title
  price: number; // Regular price
  priceWithoutDiscount: number; // Price before any discounts
  image: { asset: { url: string } }; // Image URL from Sanity
  imageUrl: string; // Simplified URL field

  // Optional fields
  category?: string; // Category of the product
  description?: string; // Product description
  inventory?: number; // Number of items in stock
  tags?: string[]; // Tags for the product
  badge?: string; // Badges for special tags like "New", "Featured"
  quantity?: number; // Quantity in the cart
  salePrice?: number; // Sale price (if applicable)
  isNew?: boolean; // Whether the product is new
  label?: string; // Custom label
  labelColor?: string; // Label color

  // Allow additional fields
  [key: string]: unknown; // To support flexible properties
}

// ✅ Function to fetch ALL products from Sanity
export async function getProducts(): Promise<Product[]> {
  const query = `*[_type == "products"] {
    _id,
    title,
    name,
    price,
    priceWithoutDiscount,
    image {
      asset -> {
        url
      }
    },
    category,
    description,
    inventory,
    tags,
    badge
  }`;

  const products = await client.fetch(query);

  // Normalize the fetched products to match the `Product` type
  return products.map((product: Product) => ({
    ...product,
    id: product._id || product.id, // Normalize _id to id
    imageUrl: product.image?.asset?.url || "", // Normalize image URL
  }));
}

// ✅ Function to fetch a SINGLE product by ID from Sanity
export async function getProductById(id: string): Promise<Product | null> {
  const query = `*[_type == "products" && _id == $id][0] {
    _id,
    title,
    name,
    price,
    priceWithoutDiscount,
    image {
      asset -> {
        url
      }
    },
    category,
    description,
    inventory,
    tags,
    badge
  }`;

  const product = await client.fetch(query, { id });

  // Normalize the fetched product to match the `Product` type
  return product
    ? {
        ...product,
        id: product._id || product.id, // Normalize _id to id
        imageUrl: product.image?.asset?.url || "", // Normalize image URL
      }
    : null;
}
