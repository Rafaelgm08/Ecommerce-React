//mapear los productos y renderizar por cada producto un componente Item (card) y va a recibir los props y un objeto 

import { Item } from "./Item"
import styles from "./itemlist.module.css";

export const ItemList = ( {products} ) => {
  return (
    <div className={`container row row-cols-3 ${styles.items}`}>
{products.map( product => <Item key={product.id} {...product} /> )}
    </div>

  )
}
