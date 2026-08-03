import type { Product } from "../../types/Product";
import { useCart } from "../../hooks/useCart";
import { Link } from "react-router-dom";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <div className="flex flex-col rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900 dark:shadow-black/20">
      <div className="flex h-56 items-center justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain"
        />
      </div>

      <div className="mt-4 flex flex-1 flex-col">
        <h3 className="line-clamp-2 min-h-12 font-semibold text-gray-900 dark:text-white">
          {product.title}
        </h3>

        <p className="mt-3 text-xl font-bold text-indigo-600 dark:text-indigo-400">
          ${product.price.toFixed(2)}
        </p>

        <div className="mt-auto flex gap-2 pt-4">
          <Link
            to={`/products/${product.id}`}
            className="flex-1 rounded-md bg-gray-200 px-3 py-2 text-center text-sm font-medium text-gray-900 transition-colors hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
          >
            View Details
          </Link>

          <button
            onClick={() => addToCart(product)}
            className="flex-1 cursor-pointer rounded-md bg-indigo-600 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-700"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
