import { useState } from 'react';
import { Product } from '../components/Product';

interface CartItem extends Product {
  quantity: number;
}

export function useCart() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    const existingCartItem = cartItems.find((item) => item.id === product.id);

    if (existingCartItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCartItems((prevCartItems) => [...prevCartItems, { ...product, quantity: 1 }]);
      console.log('Cart:', cartItems);
    }
  };

  const removeFromCart = (productId: number | string) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return { cartItems, addToCart, removeFromCart, getTotalPrice };
}