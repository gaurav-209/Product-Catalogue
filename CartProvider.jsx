import React, { useEffect, useState } from 'react'
import CartContext from './CartContext'

const CartProvider = ({ children }) => {
    const [cart, setcart] = useState([])
    const [error, setError] = useState("")

    useEffect(() => {
        const savedCart = localStorage.getItem('cart')
        if (savedCart) {
            setcart(JSON.parse(savedCart))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart])

    const addToCart = (product) => {
        setcart(prev => {
            let existingProduct = cart.find(item => item.id === product.id)
            if (existingProduct) {
                if (existingProduct.quantity >= product.inventory) {
                    setError(`No more stock available for ${product.name}`)
                    setTimeout(() => setError(''), 3000)
                    return prev
                }
                else {
                    setError("")
                    return prev.map((item) =>
                        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                    )
                }
            } else {
                if (product.inventory < 1) {
                    setError(`Product ${product.name} is out of stock`)
                    setTimeout(() => setError(''), 3000)
                    return prev
                } else {
                    return [...prev, { ...product, quantity: 1 }]
                }
            }
        })
    }

    const removeFromCart = (id) => {
        setcart(prev => prev.filter(item => item.id != id))
    }

    const increaseQuantity = (id, inventory) => {
        setcart(prev => {
            const updatedCart = prev.map(item => {
                if (item.id === id) {
                    if (item.quantity >= inventory) {
                        setError(`No more stock available for ${item.name}`);
                        setTimeout(() => setError(''), 3000);
                        return item;
                    }
                    return { ...item, quantity: item.quantity + 1 };
                }
                return item;
            });
            return updatedCart;
        });
    };


    const decreaseQuantity = (id) => {
        setcart(prev =>

            prev.map(item =>
                item.id === id ? { ...item, quantity: item.quantity - 1 } : item
            ).filter(item => item.quantity > 0)
        )

    }



    return (
        <div>
            <CartContext.Provider value={{ cart, error, addToCart, removeFromCart, increaseQuantity, decreaseQuantity }}>
                {children}
            </CartContext.Provider>
        </div>
    )
}

export default CartProvider
