import { createContext, useEffect, useState } from "react";

///creamos el contexto
export const CartContext = createContext(null);

//creamos el provider
export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState ([]);
    const [totalItems, setTotalItems] = useState(0);
    const [total, setTotal] = useState(0);
   
    
    
//agregar productos al carritogit 
    const addItem = (item, quantity) => {
      const cartCopy = [...cart];
        
        //verificamos si el team ya se encuentra dentro del carrito
       const index = cartCopy.findIndex ( product => product.id === item.id); 
       
       if (index != -1) {
          cartCopy[index].quantity = cartCopy[index].quantity + quantity;
          cartCopy[index].subTotal = cartCopy[index].precio * cartCopy[index].quantity;
          setCart(cartCopy);
       } else {
        //si da -1 es por que el producto no se encuentra en el carrito 
        //creamos un nuevo objeto con lo que necesitamos 
        //armamos el objeto del item para guardar en el cart
        const newItem = {
          ...item,
          quantity,
          subTotal: item.precio * quantity,
        };

//hacemos una copia del cart actual y agregamos el nuevo item
       setCart([...cart, newItem]); 
       console.log(cart)
       }
        
     
     };
     const removeItem = (id) => {
        //quitar un producto del carrito 
       const cartFilter = cart.filter( item => item.id !== id);
       setCart(cartFilter);
      };
      const clearCart = () => {
        setCart([]);
      };
      const handleTotal = () => {
        const newTotal = cart.reduce((acc, item) => acc + item.precio * item.quantity, 0);
        setTotal(newTotal);
      };
      const handleTotalItems = () => { 
        const newTotalItems = cart.reduce( (acc, item) => acc + item.quantity, 0 );
        setTotalItems(newTotalItems);
    
       };

      useEffect (() => {
        handleTotal();
        handleTotalItems();
}, [cart])

//componentes que van a recibir todo el contexto, los children son las etiquetas dentro de un componente
return <CartContext.Provider value={{cart,total, totalItems, addItem, removeItem, clearCart}}>{children}</CartContext.Provider>

};
