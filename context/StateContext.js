import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';

const Context = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('');
  const [selectedRoomType, setSelectedRoomType] = useState('');
  
  
  

  let foundProduct;
  let index;

 

  const onRemove = (product) => {
    // foundProduct = cartItems.find((item) => item._id === product._id);
    // const newCartItems = cartItems.filter((item) => item._id !== product._id);

    // setTotalPrice((prevTotalPrice) => prevTotalPrice -foundProduct.price * foundProduct.quantity);
    // setTotalQuantities(prevTotalQuantities => prevTotalQuantities - foundProduct.quantity);
    // setCartItems(newCartItems);
  }

  return (
    <Context.Provider
      value={{
        showCart,
        setShowCart,
        selectedProduct,
        setSelectedProduct,
        selectedRoomType, 
        setSelectedRoomType,
         
      }}
    >
      {children}
    </Context.Provider>
  )
}

export const useStateContext = () => useContext(Context);