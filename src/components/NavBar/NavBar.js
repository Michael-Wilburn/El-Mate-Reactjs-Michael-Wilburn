import CardWidget from '../cardWidget/CardWidget'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './NavBar.css'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="nav">
            <Link to='/'><CardWidget greeting="el mate"/></Link>   
        <ul className="nav-list">
                <li className="nav-item">
                    <NavLink to='/category/mates' className={({ isActive }) => isActive ? 'nav-item' : 'nav-item-active'}>
                        Mates
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/category/bombillas' className={({ isActive }) => isActive ? 'nav-item' : 'nav-item-active'}>
                        Bombillas
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/category/mochilasMateras' className={({ isActive }) => isActive ? 'nav-item' : 'nav-item-active'}>
                        Mochilas Materas
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/category/equiposDeMate' className={({ isActive }) => isActive ? 'nav-item' : 'nav-item-active'}>
                        Equipos de Mate
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/category/yerberas' className={({ isActive }) => isActive ? 'nav-item' : 'nav-item-active'}>
                        Yerberas
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/category/termos' className={({ isActive }) => isActive ? 'nav-item' : 'nav-item-active'}>
                        Termos
                    </NavLink>
                </li>
            </ul>
            <div className="cart-btn">
                <span className="nav-icon"><FontAwesomeIcon className="cartIcon" icon={faShoppingCart}/></span>
                <div className="cart-items">0</div>
            </div>
        </nav>
    )
}

export default NavBar
