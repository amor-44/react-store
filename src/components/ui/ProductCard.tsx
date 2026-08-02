import type { Product } from "../../types/Product";
import { useCart } from "../../hooks/useCart";

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    const { addToCart } = useCart();
    return (
        <div>
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>${product.price.toFixed(2)}</p>
            <button onClick={() => addToCart(product)} className="bg-indigo-600 text-white px-4 py-2 rounded-md">Add to cart</button>
        </div>
    );
}
