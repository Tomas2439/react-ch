import carrito from '../../assets/carrito-compras.png'
import './CartWidget.css'
const CartWidget = () =>{
    return (
        <div className='caja'>
            <><strong>7</strong></>
            <img src={carrito} alt='carrito'></img>
        </div>
    )
}
export default CartWidget