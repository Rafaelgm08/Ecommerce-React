import { createContext, useState } from "react";

///creamos el contexto
export const CartContext = createContext(null);

//creamos el provider
export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState ([]);
    
//agregar productos al carritogit 
    const addItem = (item, quantity) => {
      const cartCopy = [...cart];
        
        //verificamos si el team ya se encuentra dentro del carrito
       const index = cartCopy.findIndex ( product => product.id === item.id); 
       
       if (index != -1) {
          cartCopy[index].quantity = cartCopy[index].quantity + quantity;
          setCart(cartCopy);
       } else {
        //si da -1 es por que el producto no se encuentra en el carrito 
        //creamos un nuevo objeto con lo que necesitamos 
        //armamos el objeto del item para guardar en el cart
        const newItem = {
          ...item,
          quantity,
          subTotal: item.price * quantity
        }
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
//componentes que van a recibir todo el contexto, los children son las etiquetas dentro de un componente
return <CartContext.Provider value={{cart,addItem, removeItem, clearCart}}>{children}</CartContext.Provider>

};
