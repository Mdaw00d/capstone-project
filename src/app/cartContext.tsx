"use client";

import React, { createContext, useContext, useReducer } from "react";
import { Product } from "@/types/index"




type CartState = {
  cart: Product[];
};

type CartAction =
  | { type: "ADD_TO_CART"; product: Product }
  | { type: "REMOVE_FROM_CART"; id: number }
  | { type: "CLEAR_CART" };

const initialState: CartState = {
  cart: [],
};

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const existingProduct = state.cart.find(
        (item) => item.id === action.product.id
      );
      if (existingProduct) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.product.id
              ? { ...item, quantity: (item.quantity || 1) + 1 }
              : item
          ),
        };
      }
      return {
        ...state,
        cart: [...state.cart, { ...action.product, quantity: 1 }],
      };
    }
    case "REMOVE_FROM_CART": {
      const productToRemove = state.cart.find(
        (item) => item.id === action.id
      );

      if (productToRemove?.quantity && productToRemove.quantity > 1) {
        // If the product's quantity is more than 1, decrease the quantity
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.id
              ? { ...item, quantity: item.quantity! - 1 }
              : item
          ),
        };
      }
      // Otherwise, remove the product completely
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.id),
      };
    }
    case "CLEAR_CART": {
      return {
        ...state,
        cart: [],
      };
    }
    default:
      return state;
  }
};

const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
}>({ state: initialState, dispatch: () => null });

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
