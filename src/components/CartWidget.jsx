import cart from "../assets/cart.svg"
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

export const CartWidget = () => {
  const { totalItems } = useContext(CartContext);
  return (
    <div className="h-25">
        <img src={cart} alt="cart-widget"/>
        <strong> {totalItems} </strong>
    </div>
  )
}

export default CartWidget
