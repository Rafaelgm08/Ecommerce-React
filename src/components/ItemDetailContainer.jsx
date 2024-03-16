import { useEffect, useState } from "react";
import { getProduct } from "../asyncMock";
import { useParams } from "react-router-dom";
import { ItemDetail } from "./ItemDetail";
import { Item } from "./Item";

export const ItemDetailContainer = () => {


  const { id } = useParams();

    const [item, setItem] = useState(null);

    useEffect(() => {
        getProduct(id).then ( Response => setItem(Response))
    }, [])

  return (
    <>
   {Item && <ItemDetail {...item} />}
   </>
  )
}
