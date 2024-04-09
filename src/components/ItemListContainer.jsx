import { useEffect, useState } from "react";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, where } from "firebase/firestore";
import { db } from "../config/firebaseConfig";


export const ItemListContainer = () => {

const { category } = useParams();

  const { } = useParams()
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


const getProductsDB = ( category ) => {
  const myProducts = category ? query (collection(db, "products"), where ("categroy", "==", category)) : collection(db, "products")
  //obtener los documentos de la base de datos 
  getDocs(myProducts)
  .then(  response  => {
    // const item = {
    //   id: response.docs[0].id,
    //   ...response.docs[0].data()
    // }

    //hacer un nuevo objeto donde tengamos nuestros documentos de firebase ordenados
    //ordenamos los productos recibidos de nuestra base de datos para guardar en nuestro state
    const productList = response.docs.map ( doc => {
      const item = {
        id:doc.id,
        ...doc.data(),

      };
      return item;
    });
    //guardamos nuestros productos ordenados en nuestro state
    setProducts(productList);
    setIsLoading(false);

  });
};

  useEffect(() => {
    setIsLoading(true);
    getProductsDB(category);
    // seedProducts();
  
  }, [category]);
  //renderizar, pasarle a mi componente item list para que se encargue de mapear
  return (
    <>
      {isLoading ? <h2>Cargando productos...</h2> : <ItemList products={products} />}
    </>
  )
};

  // setIsLoading(true);
    // getProducts().then(Response => {
    //    if(category){
    //       const productsFilter = Response.filter( product => product.category === category)
    //    setProducts(productsFilter)
    //     } else {
    //       setProducts(Response);
    //     }
    //   setIsLoading(false);
    // })
