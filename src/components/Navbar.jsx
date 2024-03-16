import { Link } from "react-router-dom";
import styles from "./navbar.module.css";
import CartWidget from "./CartWidget";

export const Navbar = ({Navbar}) => {
  return (
    <nav className={`nuevo d-flex justify-content-center ${styles.nuevo}`}>
    <h1 className={styles.h1}>COMPUTER-Z WORLD</h1>
        <Link to="/">
            <button className="btn m-1 btn-outline-dark">Home</button>
        </Link>
        <Link to="/category/Samsung">
            <button className="btn m-1 btn-outline-dark">Samsung</button>
        </Link>
        <Link to="/category/LG">
            <button className="btn m-1 btn-outline-dark">LG</button>
        </Link>
        <Link to="/category/Lenovo">
            <button className="btn m-1 btn-outline-dark">Lenovo</button>
        </Link>
        <Link to="/category/Aoc">
            <button className="btn m-1 btn-outline-dark">Aoc</button>
        </Link>
        <Link to="/cart">
            <button className="btn m-1 btn-outline-dark">Carrito</button>
        </Link>
        <CartWidget/>
    </nav>
  );
};
