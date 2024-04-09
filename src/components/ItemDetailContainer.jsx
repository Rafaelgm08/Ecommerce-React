import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "./ItemDetail";
import { Item } from "./Item";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../config/firebaseConfig";

export const ItemDetailContainer = () => {


  const { id } = useParams();

    const [item, setItem] = useState(null);

      const getProductDB= (id) => {
        const productRef = doc( db, "products", id );

      getDoc(productRef)
      .then ( response => {
        const product = {
          id: response.id,
          ...response.data()
        }
        setItem(product);

      })
    }

    useEffect(() => {
      getProductDB(id);
       
    }, [])

  return (
    <>
   {Item && <ItemDetail {...item} />}
   </>
  )
}
