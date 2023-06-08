import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
const NavBar = () => {
    return(
        <header className='navbar'>
            <h1 className='logo'>Neco Ecommerce</h1>
            <nav className='botones'>
                <ul>
                    <li>Figuras</li>
                    <li>Mangas</li>
                    <li>Colección</li>
                </ul>
            </nav>
            <CartWidget/>
        </header>
    )
}
export default NavBar