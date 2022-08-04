import { createContext, useState, useEffect, useContext } from 'react'

const addCartItem = (cartItems, productToAdd) => {
    // check if a productToAdd Item exists in our cartsItem
    const existingCartItem = cartItems.find(cartItem => cartItem.id === productToAdd.id);

    // if it exists increase the quantity
    if (existingCartItem) {
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1 } : cartItem)
    }

    // If cartItem doesn't exist return present cartItems and add new productToAdd with quantity 1
    return [...cartItems, {...productToAdd, quantity: 1}]
}

export const CartContext = createContext({
    showCartDropdown: null,
    setShowCartDropdown: () => {},
    cartItems: [],
    addItemToCart: () => {}
})

export const CartProvider = ({ children }) => {
    const [showCartDropdown, setShowCartDropdown] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const addItemToCart = (productToAdd) => {
        console.log({cartItems});
        console.log({productToAdd});
        console.log(addCartItem(cartItems, productToAdd));
        setCartItems(addCartItem(cartItems, productToAdd))
    }


    const value = { showCartDropdown, setShowCartDropdown, cartItems, addItemToCart }

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}