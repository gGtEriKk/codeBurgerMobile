import React, { createContext, useState } from 'react'

export const AppContext = createContext({})

const ContextProvider = ({ children }) => {
    const [user, setUser] = useState({})
    const [cart, setCart] = useState([])

    const DISCOUNT_TAX = 0.1
    const DELIVERY_TAX = 10
    const ORDER_NUMBER = new Date().getTime()

    const addToCart = (product) => {
        const existentIndex = cart?.findIndex(p => p.id === product.id)

        let oldCart = cart

        if (existentIndex !== -1) {
            oldCart[existentIndex] = product
        } else {
            oldCart.push(product)
        }
        setCart(oldCart)
    }

    const removeFromCart = (productId) => {
        const filteredProducts = cart?.filter(product =>{
            return product.id!== productId
        })
        setCart(filteredProducts)
    }

    return (
        <AppContext.Provider value={{
            user,
            setUser,
            addToCart,
            cart,
            removeFromCart,
            DISCOUNT_TAX,
            DELIVERY_TAX,
            ORDER_NUMBER
        }}>
            {children}
        </AppContext.Provider>
    )
}

export default ContextProvider