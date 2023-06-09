import './Item.css'
import { Link } from 'react-router-dom';

const Item = ({ id, name, img, price, stock }) => {
    return (
        <div className='ProductContainer'>
            <article className='CardItem'>
                <header className='Header'>
                    <h2>
                        {name}
                    </h2>
                </header>
                <picture>
                    <img src={img} alt={name} className='ItemImg' />
                </picture>
                <section>
                    <p className='Info'>
                        Precio: ${price}
                    </p>
                    <p className='Info'>
                        Stock disponible: {stock}
                    </p>
                </section>
                <footer className='ItemFooter'>
                    <Link to={`/item/${id}`} className='Option'>Detalles</Link>
                </footer>
            </article>
        </div>
    )
}
export default Item;