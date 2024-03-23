
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import styles from "./cart.module.css";



export const Cart = () => {

  const { cart, removeItem, clearCart } = useContext( CartContext );

  console.log(cart)
  return (
    <>
    <div className={`container pt-5 my-1 ${styles.cart}`}>
      {cart.map((item) => (
        <div key={item.id} className="d-flex flex-column p-3 my-2 border border-1 w-50 ">
          <p>Cantidad: {item.quantity} </p>
          <p>Precio Unitario: {item.precio} </p>
          <div>
            <button className="btn btn-danger" onClick={() => removeItem(item.id)}>
              Eliminar
            </button> 
          </div>
        </div>
      ))}
    </div>
    <div className="container">
        <h4>Total</h4>
        <button className="btn btn-outline-success" onClick={clearCart}>
          Vaciar Carrito
        </button>
    
    </div>
  </>
  )
}
