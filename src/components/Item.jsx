import { Link } from "react-router-dom";
import styles from "./item.module.css";


export const Item = ({ id, img, description, precio }) => {
  return (
 <div className={styles.principal}>
    <div className={`card ${styles.cardd}`}>
        <div className={`card-body ${styles.newCard}`}>
          <img className="img-ref" src={img} alt="" srcset=""/>
            <p className="card-text">{description}</p>
            <p className="card-text">${precio}</p>
            <Link to={`/item/${id}`} >
            <button className="btn btn-outline-success">Detalles</button>
            </Link>
        </div>
    </div>
 </div>
  );
};