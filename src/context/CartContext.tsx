'use client';
import { createContext, useContext, useState, ReactNode } from 'react';

export type MenuItem = {
  id: number;
  name: string;
  price: string;
  numericPrice: number;
  image: string;
  quantity?: number;
};

interface CartContextType {
  cart: MenuItem[];
  addToCart: (item: MenuItem) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  total: number;
  itemCount: number;
  isOpen: boolean;
  toggleCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<MenuItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const addToCart = (item: MenuItem) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) => i.id === item.id ? { ...i, quantity: (i.quantity || 1) + 1 } : i);
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const increaseQuantity = (id: number) => {
    setCart((prev) => prev.map((item) =>
      item.id === id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
    ));
  };

  const decreaseQuantity = (id: number) => {
    setCart((prev) => prev
      .map((item) => item.id === id ? { ...item, quantity: Math.max(0, (item.quantity || 1) - 1) } : item)
      .filter((item) => item.quantity! > 0)
    );
  };

  const toggleCart = () => setIsOpen((prev) => !prev);

  const total = cart.reduce((sum, item) => sum + (item.numericPrice * (item.quantity || 1)), 0);
  const itemCount = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, increaseQuantity, decreaseQuantity, total, itemCount, isOpen, toggleCart }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart harus di dalam CartProvider');
  return context;
};