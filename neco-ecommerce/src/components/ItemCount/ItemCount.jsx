import './ItemCount.css'
import { useState } from 'react'

const ItemCount = ({ stock, initial, onAdd}) => {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if(quantity < stock){
            setQuantity(quantity+1)
        }
    }

    const decrement = () => {
        if(quantity>1){
            setQuantity(quantity-1)
        }
    }

    return(
        <div className='Contador'>
            <div className='Controles'>
                <button className='Boton' onClick={increment}> + </button>
                <h4 className='Numero'>{quantity}</h4>
                <button className='Boton' onClick={decrement}> - </button>
            </div>
            <div>
                <button className='Agregar Boton' onClick={ () => onAdd(quantity)} disabled={!stock}>Agregar al Carrito</button>
            </div>
        </div>
    )
}
export default ItemCount;
