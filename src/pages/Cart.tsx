import { useCart } from "../hooks/useCart";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();

  const total = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const totalItems = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <section className="min-h-[calc(100vh-8rem)] bg-white px-4 py-8 text-gray-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">

        <div className="mb-8">
          <h1 className="text-3xl font-bold">
            Shopping Cart
          </h1>

          <p className="mt-2 text-gray-500 dark:text-gray-400">
            {totalItems} {totalItems === 1 ? "item" : "items"} in your cart
          </p>
        </div>

        {cartItems.length === 0 ? (
          <div className="flex min-h-80 flex-col items-center justify-center rounded-xl border border-gray-200 bg-gray-50 p-8 text-center shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <h2 className="text-2xl font-semibold">
              Your cart is empty
            </h2>

            <p className="mt-2 text-gray-500 dark:text-gray-400">
              Looks like you haven't added anything to your cart yet.
            </p>

            <Link
              to="/products"
              className="mt-6 rounded-md bg-indigo-600 px-6 py-3 font-medium text-white transition-colors hover:bg-indigo-700"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-3">

            <div className="space-y-4 lg:col-span-2">
              {cartItems.map((item) => (
                <div
                  key={item.product.id}
                  className="flex flex-col gap-5 rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900 sm:flex-row sm:items-center"
                >
                  <div className="flex h-40 w-full shrink-0 items-center justify-center rounded-lg bg-gray-50 p-4 dark:bg-slate-950 sm:h-32 sm:w-32">
                    <img
                      src={item.product.image}
                      alt={item.product.title}
                      className="h-full w-full object-contain"
                    />
                  </div>

                  <div className="flex flex-1 flex-col">
                    <h3 className="line-clamp-2 text-lg font-semibold">
                      {item.product.title}
                    </h3>

                    <p className="mt-2 text-lg font-bold text-indigo-600 dark:text-indigo-400">
                      ${item.product.price.toFixed(2)}
                    </p>

                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                      Quantity: {item.quantity}
                    </p>

                    <button
                      onClick={() => removeFromCart(item.product)}
                      className="mt-4 w-fit cursor-pointer text-sm font-medium text-red-500 transition-colors hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
                    >
                      Remove
                    </button>
                  </div>

                  <div className="text-left sm:text-right">
                    <p className="text-lg font-bold">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="h-fit rounded-xl border border-gray-200 bg-gray-50 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <h2 className="text-xl font-bold">
                Order Summary
              </h2>

              <div className="mt-6 space-y-4">
                <div className="flex justify-between text-gray-600 dark:text-gray-400">
                  <span>Items</span>
                  <span>{totalItems}</span>
                </div>

                <div className="flex justify-between text-gray-600 dark:text-gray-400">
                  <span>Subtotal</span>
                  <span>${total.toFixed(2)}</span>
                </div>

                <div className="border-t border-gray-200 pt-4 dark:border-slate-700">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span className="text-indigo-600 dark:text-indigo-400">
                      ${total.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              <button
                onClick={clearCart}
                className="mt-6 w-full cursor-pointer rounded-md bg-red-500 px-4 py-3 font-medium text-white transition-colors hover:bg-red-600"
              >
                Clear Cart
              </button>

              <Link
                to="/products"
                className="mt-3 block w-full rounded-md bg-indigo-600 px-4 py-3 text-center font-medium text-white transition-colors hover:bg-indigo-700"
              >
                Continue Shopping
              </Link>
            </div>

          </div>
        )}
      </div>
    </section>
  );
};

export default Cart;