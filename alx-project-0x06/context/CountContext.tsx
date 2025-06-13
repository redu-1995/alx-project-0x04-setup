// src/context/CountContext.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";

interface CountContextProps {
  count: number;
  increment: () => void;
  decrement: () => void;
}

const CountContext = createContext<CountContextProps | undefined>(undefined);

// ✅ Correct prop typing for children
interface CountProviderProps {
  children: ReactNode;
}

export const CountProvider = ({ children }: CountProviderProps) => {
  const [count, setCount] = useState<number>(0);

  const increment = () => setCount((c) => c + 1);
  const decrement = () => setCount((c) => (c > 0 ? c - 1 : 0));

  return (
    <CountContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CountContext.Provider>
  );
};

export const useCount = () => {
  const context = useContext(CountContext);
  if (!context) {
    throw new Error("useCount must be used within a CountProvider");
  }
  return context;
};
