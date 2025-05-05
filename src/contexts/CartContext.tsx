
import React, { createContext, useState, useContext, ReactNode } from 'react';
import { toast } from '@/hooks/use-toast';

type CartItem = {
  id: number;
  name: string;
  price: number;
  image: string;
  unit: string;
  quantity: number;
  farmerName: string;
};

type CartContextType = {
  items: CartItem[];
  isCartOpen: boolean;
  toggleCart: () => void;
  closeCart: () => void;
  addToCart: (product: Omit<CartItem, 'quantity'>) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  cartTotal: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  const addToCart = (product: Omit<CartItem, 'quantity'>) => {
    setItems((currentItems) => {
      // Check if item already exists in cart
      const existingItem = currentItems.find(item => item.id === product.id);
      
      if (existingItem) {
        // Increase quantity if item exists
        toast({
          title: "Quantity updated",
          description: `${product.name} quantity has been updated in your cart`,
        });
        return currentItems.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      } else {
        // Add new item with quantity 1
        toast({
          title: "Added to cart",
          description: `${product.name} has been added to your cart`,
        });
        return [...currentItems, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId: number) => {
    setItems((currentItems) => {
      const itemToRemove = currentItems.find(item => item.id === productId);
      if (itemToRemove) {
        toast({
          title: "Removed from cart",
          description: `${itemToRemove.name} has been removed from your cart`,
        });
      }
      return currentItems.filter(item => item.id !== productId);
    });
  };

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity < 1) {
      removeFromCart(productId);
      return;
    }
    
    setItems((currentItems) => 
      currentItems.map(item => 
        item.id === productId 
          ? { ...item, quantity } 
          : item
      )
    );
  };

  const cartTotal = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider value={{
      items,
      isCartOpen,
      toggleCart,
      closeCart,
      addToCart,
      removeFromCart,
      updateQuantity,
      cartTotal,
    }}>
      {children}
    </CartContext.Provider>
  );
};
