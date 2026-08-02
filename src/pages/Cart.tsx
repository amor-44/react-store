import { useCart } from "../hooks/useCart";

const Cart = () => {
    const { cartItems, removeFromCart, clearCart } = useCart();

    const total = cartItems.reduce(
        (sum, item) => sum + item.product.price * item.quantity,
        0
    );

    return (
        <div>
            <h1>Cart</h1>

            {cartItems.map((item) => (
                <div key={item.product.id}>
                    <img
                        src={item.product.image}
                        alt={item.product.title}
                    />

                    <h3>{item.product.title}</h3>

                    <p>${item.product.price.toFixed(2)}</p>

                    <p>Quantity: {item.quantity}</p>

                    <button onClick={() => removeFromCart(item.product)}>
                        Remove
                    </button>
                </div>
            ))}

            <p>Total: ${total.toFixed(2)}</p>

            <button onClick={clearCart}>
                Clear Cart
            </button>
        </div>
    );
};

export default Cart;