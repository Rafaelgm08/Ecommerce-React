import { useContext } from "react";
import { ItemCount } from "./ItemCount";
import styles from "./itemdetail.module.css";
import { CartContext } from "../context/CartContext";
import Swal from "sweetalert2"


export const ItemDetail = ({id, name, description, stock, precio, img }) => {

const { addItem } = useContext(CartContext);


const onAdd = ( quantity ) => {

const item = {
    id,
    precio,
    name
}


    addItem(item, quantity)

    Swal.fire({
        icon: "success",
        title: "Se agrego el producto al carrito"
      })

}

    return (
            <div className={`card ${styles.card}`}>
                <div className="card-body">
                    <p className="card-text">{description}</p>
                    <img className="img-detail p-5"src={img} alt="" />
                    <p>Precio:{precio}</p>
                    {/* <Link to="/">
                        <button className="btn btn-dark">Volver</button>
                    </Link> */}
                    <ItemCount stock={stock} onAdd={onAdd}/>
                </div>
        </div>

    );
};