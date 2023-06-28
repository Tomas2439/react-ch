import './Item.css'

const Item = ({ id, name, price, img, stock }) => {

    return (
        <div className='ProductContainer'>
            <article className='CardItem'>
                <header className='Header'>
                    <h2>{name}</h2>
                </header>
                <picture>
                    <img src={img} alt={name} className='ItemImg' />
                </picture>
                <section>
                    <p className='Info'>
                        Precio: ${price}
                    </p>
                    <p className='Info'>
                        stock disponible: {stock}
                    </p>
                </section>
                <footer className='ItemFooter'>
                    <button className='Option'>Detalles</button>
                </footer>
            </article>
        </div>

    )
}
export default Item;