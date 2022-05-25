import CardWidget from './cardWidget/CardWidget'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {
    return (
        <nav className="nav">
        <a href="#" className="brand"><CardWidget greeting="el mate"/></a>          
        <ul className="nav-list">
                <li className="nav-item">
                    <a href="#">Mates</a>
                </li>
                <li className="nav-item">
                    <a href="#">Bombillas</a>
                </li>
                <li className="nav-item">
                    <a href="#">Mochilas Materas</a>
                </li>
                <li className="nav-item">
                    <a href="#">Equipos de Mate</a>
                </li>
                <li className="nav-item">
                    <a href="#">Yerberas</a>
                </li>
                <li className="nav-item">
                    <a href="#">Termos</a>
                </li>
            </ul>
            <div class="cart-btn">
                <span className="nav-icon"><FontAwesomeIcon className="cartIcon" icon={faShoppingCart}/></span>
                <div className="cart-items">0</div>
            </div>
        </nav>
    )
}

export default NavBar
