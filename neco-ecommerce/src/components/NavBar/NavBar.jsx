import CartWidget from "../CartWidget/CartWidget"
import './Navbar.css'
import {NavLink, Link} from 'react-router-dom'

const Navbar = () => {
    return(
        <nav className="Navbar">
            <Link to='/'>
                <h3 className="Logo">NecoOtaku</h3>
            </Link>
            <div className="Categories">
                <ul>
                    <li>
                        <NavLink to={'/category/Figuras'} > Figuras </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/category/Mangas'}> Mangas </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/category/Coleccion'}> Coleccion </NavLink>
                    </li>
                </ul>
            </div>
            <CartWidget/>
        </nav>
    )
}
export default Navbar;