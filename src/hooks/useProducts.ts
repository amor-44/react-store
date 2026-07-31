import { useEffect, useState } from "react";
import type { Product } from "../types/Product";
import getProducts from "../services/productService";


function useProducts() {    
const [products, setProducts] = useState<Product[]>([]);
const [loading, setLoading] = useState<boolean>(true)
const [error,setError] = useState<Error | null>(null)

useEffect(() => {
    const fetchProducts = async () => {
        try {
            const data = await getProducts();
            setProducts(data);
        } catch (err) {
            setError(err as Error);
        } finally {
            setLoading(false);
        }
    };
        fetchProducts();
}, []);

return { products, loading, error };

}

export default useProducts;