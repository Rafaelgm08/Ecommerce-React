import styles from "./itemcount.module.css";
import { useState } from "react";


export const ItemCount = ({ stock, initial = 1, onAdd }) => {
    const [count, setCount] = useState(initial);

const increment = () => {
    if (count < stock) {
        return setCount(count+1)
    }
    setCount(count);
};

const decrement = () => {
    if (count === 0) {
        return setCount(0);
    }
    setCount(count - 1);
}; 


return (
    <div className="container">
    <div>
        <div className={`d-flex flex-column col-6 ${styles.contador}`}>
         <button className="btn btn-outline-secondary mx-1" onClick={increment}>+</button>
         <strong className="count mt-4 mb-4 ms-4">{count}</strong>
         <button className="btn btn-outline-secondary mx-1" onClick={decrement}>-</button>
    </div>
    </div>
    <br />
    <br />
    <button className={`btn btn-outline-primary ${styles.newbutton}`} onClick={()=> onAdd(count)}>Agregar al carrito</button>
    </div>
        
)

}
