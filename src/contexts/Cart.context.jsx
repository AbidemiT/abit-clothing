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

const removeCartItem = (cartItems, cartItemToRemove) => {
    // check if a productToAdd Item exists in our cartsItem
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id);

    if (existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
    }

    return cartItems.map((cartItem) => cartItem.id === cartItemToRemove.id ? {...cartItem, quantity: cartItem.quantity - 1 } : cartItem)

}
const removeSelectedItem = (cartItems, cartItemToRemove) => {
    // check if a productToAdd Item exists in our cartsItem
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id);

    if (existingCartItem) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
    }

}

export const CartContext = createContext({
    showCartDropdown: null,
    setShowCartDropdown: () => {},
    cartItems: [],
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    removeFromCart: () => {},
    cartItemsCount: 0,
    cartTotal: 0
})

export const CartProvider = ({ children }) => {
    const [showCartDropdown, setShowCartDropdown] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [cartItemsCount, setCartItemsCount] = useState(0)
    const [cartTotal, setCartTotal] = useState(0)
    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    }
    const removeItemFromCart = (cartItemToRemove) => {
        setCartItems(removeCartItem(cartItems, cartItemToRemove))
    }

    const removeFromCart = (cartItemToRemove) => {
        setCartItems(removeSelectedItem(cartItems, cartItemToRemove))
    }

    useEffect(() => {
        const newItemsCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)

        setCartItemsCount(newItemsCount)
    }, [cartItems])

    useEffect(() => {
        const newCartTotal = cartItems.reduce((total, cartItem) => total + (cartItem.quantity * cartItem.price), 0)

        setCartTotal(newCartTotal)
    }, [cartItems])


    const value = { showCartDropdown, setShowCartDropdown, cartItems, addItemToCart, cartItemsCount, removeItemFromCart, removeFromCart, cartTotal }

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}