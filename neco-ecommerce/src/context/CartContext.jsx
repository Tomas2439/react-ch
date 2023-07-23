import { createContext, useState } from "react";

export const CartContext = createContext({
    cart: [],
    total: 0,
    totalQuantity:0,
})

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0);
    const [totalQuantity, setTotalQuantity] = useState(0);

    console.log(cart)
    //funcion agregar producto de al carrito
    const addItem = (item, quantity) => {
        const isInCart = cart.find(prod => prod.item.id === item.id);

        if(!isInCart(item.id)) {
            setCart(prev => [...prev, {...item, quantity}]);
            setTotalQuantity(prev => prev + quantity);
            setTotal(prev => prev + (item.price * quantity));
        }else{
            const cartUpdated = cart.map(prod => {
                if(prod.item.id === item.id){
                    return {...prod, quantity: prod.quantity + quantity};
                }else{
                    return prod;
                }
            });
            setCart(cartUpdated);
            setTotalQuantity(prev => prev + quantity);
            setTotal(prev => prev + q)
        }
    }
    //funcion remover UN ITEM del carrito
    const removeItem = (id) => {
        const productRemoved = cart.find(prod => prod.item.id === id);
        const cartUpdated = cart.filter(prod => prod.item.id !== id);
        setCart(cartUpdated);
        setTotalQuantity(prev => prev - productRemoved.quantity);
        setTotal(prev => prev - (productRemoved.item.price * productRemoved.quantity));
    }
    //funcion LIMPIAR TODO el carrito
    const clearCart = () =>{
        setCart([]);
        setTotal(0);
        setTotalQuantity(0);
    }
    
    return(
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, total, totalQuantity}}>
            {children}
        </CartContext.Provider>
    )
}