import type { Product } from "../types/Product";    

async function getProducts(): Promise<Product[]>{
    const res = await fetch("https://fakestoreapi.com/products");
    if (!res.ok){
        throw new Error(`Failed to fetch ${res.statusText}`);
    }
    const data = await res.json();
    return data;
}

export default getProducts;     