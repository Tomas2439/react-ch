import { useState, useEffect } from 'react'
import { getProductos } from '../../asynmock'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = () =>{
    const [productos, setProductos] = useState([]);
    useEffect( ()=> {
        getProductos()
            .then(respuesta => setProductos(respuesta))
    },[])


    return(
        <div>
            <h2>Colección en Venta</h2>
            <ItemList productos={productos}/>
        </div>
    )
}
export default ItemListContainer;