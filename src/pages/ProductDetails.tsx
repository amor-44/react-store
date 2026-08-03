import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProductsById } from "../services/productService";
import type { Product } from "../types/Product";


const ProductDetails = () => {
const {id} = useParams();
const navigate = useNavigate();


const [product, setProduct] = useState<Product | null>(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState("");

useEffect(() => {
    const fetchProduct = async () => {
        try {
            const productData = await getProductsById(Number(id));
            setProduct(productData);
        } catch (err) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError("An unknown error occurred");
            }
        } finally {
            setLoading(false);
        }
    };
    fetchProduct();
}, [id]);

if (loading){
    return <div>Loading...</div>
}
if (error){
    return <div>Error: {error}</div>
}   
    return (
    <div>
      {product ? (
        <div>
          <h1>{product.title}</h1>
          <img src={product.image} alt={product.title} style={{ maxWidth: '300px' }} />
          <p>{product.description}</p>
          <p><strong>Price:</strong> ${product.price}</p>
          <p><strong>Category:</strong> {product.category}</p>
        <button onClick={() => navigate('/products')}>
            Back to Products
        </button>
        </div>
      ) : (
        <p>Product not found.</p>
      )}
    </div>
  );
};

export default ProductDetails;