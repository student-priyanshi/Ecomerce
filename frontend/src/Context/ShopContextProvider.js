import React, { createContext, useState } from 'react';
import all_product from '../Assets/Frontend_Assets/all_product.js';

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
    
    const getDefaultCart = () => {
        let cart = {};
        all_product.forEach((item) => {
            cart[item.id] = 0; 
        });
        return cart;
    };

    const [cartItems, setCartItems] = useState(getDefaultCart());

    
    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    };

    
    const removeToCart = (itemId) => {
        setCartItems((prev) => {
            if (prev[itemId] > 0) {
                return { ...prev, [itemId]: prev[itemId] - 1 };
            }
            return prev;
        });
    };

    const getTotalCartAmount = () => {
        let totalAmount = 0;

        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                
                let itemInfo = all_product.find(
                    (product) => product.id === Number(item)
                );

                
                if (itemInfo) {
                    totalAmount += itemInfo.new_price * cartItems[item];
                }
            }
        }

        return totalAmount;
    };

    const getTotalCartItems = () => {
        let totalItem = 0;
        for(const item in cartItems)
        {
            if (cartItems[item]>0)
            {
                totalItem+=cartItems[item];
            }
        }
        return totalItem;
    }

    const contextValue = { all_product, cartItems, addToCart, removeToCart, getTotalCartAmount, getTotalCartItems };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
