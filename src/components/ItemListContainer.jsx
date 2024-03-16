import { useEffect, useState } from "react";
import { getProducts } from "../asyncMock";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {

const { category } = useParams();

  const { } = useParams()
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getProducts().then(Response => {
       if(category){
          const productsFilter = Response.filter( product => product.category === category)
       setProducts(productsFilter)
        } else {
          setProducts(Response);
        }
      setIsLoading(false);
    })
  }, [category])
  //renderizar, pasarle a mi componente item list para que se encargue de mapear
  return (
    <>
      {isLoading ? <h2>Cargando productos...</h2> : <ItemList products={products} />}
    </>
  )
}
