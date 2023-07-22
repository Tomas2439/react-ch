import carrito from '../../assets/carrito-compras.png'
import './CartWidget.css'
import { useContext } from 'react'
import { CartContext } from '../../context/cartContext'
import { Link } from 'react-router-dom'

const CartWidget = () =>{
    const {totalQuantity} = useContext(CartContext);
    return (
        <div className='caja'>
            <Link to='/cart'>
                <span><img src={carrito} alt='carrito'></img></span>
                {
                    totalQuantity > 0 && <strong> {totalQuantity}</strong>
                }
            </Link>
        </div>
    )
}
export default CartWidget