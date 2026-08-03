import type { Product } from "../types/Product";

async function getProducts(): Promise<Product[]> {
  const res = await fetch("https://fakestoreapi.com/products");

  if (!res.ok) {
    throw new Error(`Failed to fetch ${res.statusText}`);
  }

  const data = await res.json();

  return data;
}

async function getProductsById(id: number): Promise<Product> {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);

  if (!res.ok) {
    throw new Error(`Failed to fetch product ${id}`);
  }

  const data = await res.json();

  return data;
}

export { getProducts, getProductsById };

export default getProducts;