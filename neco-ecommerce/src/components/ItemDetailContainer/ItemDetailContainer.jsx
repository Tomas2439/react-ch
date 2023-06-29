import { useState, useEffect } from "react";
import { getUnProducto } from "../../asynmock";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () =>{
    const [producto, setProducto] = useState(null);

    useEffect(() => {
        getUnProducto('4')
            .then(response => {
                setProducto(response)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    return(
        <div>
            <ItemDetail {...producto}/>
        </div>
    )
}
export default ItemDetailContainer;