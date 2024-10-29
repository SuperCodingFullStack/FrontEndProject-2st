import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState(new Set());

  const toggleSelectProduct = (id) => {
    const newSelected = new Set(selectedProducts);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedProducts(newSelected);
  };

  const calculateTotal = () => {
    return [...selectedProducts].reduce((total, id) => {
      const product = products.find((p) => p.id === id);
      return total + product.price * product.quantity;
    }, 0);
  };

  return (
    <CartContext.Provider
      value={{
        products,
        setProducts,
        selectedProducts,
        toggleSelectProduct,
        calculateTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
