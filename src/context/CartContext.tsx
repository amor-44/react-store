import { createContext, useState } from "react";
import type { ReactNode } from "react";
import type { CartItem } from "../types/CartItem";
import type { Product } from "../types/Product";

interface CartContextType {
    cartItems: CartItem[];
    addToCart: (product: Product) => void;
    removeFromCart: (product: Product) => void;
    clearCart: () => void;
}

interface CartProviderProps {
    children: ReactNode;
}

export const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children }: CartProviderProps) => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    const addToCart = (product: Product) => {
        setCartItems((prev) => {
            const existingItem = prev.find((item) => item.product.id === product.id);
            if (existingItem) {
                return prev.map((item) =>
                    item.product.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...prev, { product, quantity: 1 }];
        });
    };

    const removeFromCart = (product: Product) => {
        setCartItems((prev) => {
            const existingItem = prev.find((item) => item.product.id === product.id);
            if (existingItem && existingItem.quantity > 1) {
                return prev.map((item) =>
                    item.product.id === product.id
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                );
            }
            return prev.filter((item) => item.product.id !== product.id);
        });
    };

    const clearCart = () => {
        setCartItems([]);
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};
