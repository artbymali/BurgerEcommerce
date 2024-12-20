import React, { createContext, useContext, useState, useEffect } from 'react'

const BasketContext = createContext({
    items: [],
    addItem: () => {},
    removeItem: () => {},
    deleteButton: () => {},
    getTotalItemCount: () => 0,
    getTotalPrice: () => 0

})

export const BasketProvider = ({children}) => {
    const [items, setItems] = useState(() => {

        const storedItems = localStorage.getItem('basket');

        return storedItems ? JSON.parse(storedItems) : [];
    });

    useEffect(() => {
        localStorage.setItem('basket', JSON.stringify(items))
    }, [items])
    

    const addItem = (product) => {
        setItems((prevItems) => {
            const existingItem = prevItems.find(item => item.product.id === product.id)

            if (existingItem) {
                return prevItems.map(item => 
                    item.product.id === product.id ? {...item, quantity: item.quantity + 1} : item
                )
            } else {
                return [...prevItems, { product, quantity: 1}]
            }
        })
    }

    const removeItem = (product) => {
        setItems((prevItems) => 
            prevItems.reduce((acc, item) => {
                if (item.product.id === product.id) {
                    if (item.quantity > 1) {
                        acc.push({...item, quantity: item.quantity - 1});
                    }
                } else {
                    acc.push(item);
                }
                return acc
            }, [])
        )
    }

    const getTotalPrice = () => {
        return items.reduce((total, item) => total + (item.product.price ?? 0) * item.quantity, 0)
    }

    const getTotalItemCount = () => {
        return items.reduce((count, item) => count + item.quantity, 0)
      };

    const deleteButton = (productId) => {
        setItems((prevItems) => prevItems.filter((item) => item.product.id !== productId))
    }

      return (
        <BasketContext.Provider value={{items, addItem, removeItem, getTotalItemCount, getTotalPrice , deleteButton}}>
            {children}
        </BasketContext.Provider>
      )

}

export const useBasket = () => {
    return useContext(BasketContext);
  };