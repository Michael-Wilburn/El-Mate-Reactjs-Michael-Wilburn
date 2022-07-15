import './NavBar.css'
import CardWidget from '../CardWidget/CardWidget'
import CartWidget from '../CartWidget/CartWidget'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'


const NavBar = () => {
   
    const handleClick = () => {
        const menu = document.getElementById('list');
        if(window.innerWidth <= 768){
            menu.className === 'nav-list' ? menu.className = 'nav-list-menu': menu.className = 'nav-list'
        }
    }

    return (
        <nav className="nav">
            <Link to='/' className="nav-logo"><CardWidget/></Link>   
            <ul className="nav-list" id="list" onClick={() =>{handleClick()}}>
                <li className="nav-item">
                    <NavLink to='/category/mates' className={({ isActive }) => isActive ? 'nav-item-active': 'nav-item'}>
                        Mates
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/category/bombillas' className={({ isActive }) => isActive ? 'nav-item-active': 'nav-item'}>
                        Bombillas
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/category/mochilasMateras' className={({ isActive }) => isActive ? 'nav-item-active': 'nav-item'}>
                        Mochilas Materas
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/category/equiposDeMate' className={({ isActive }) => isActive ? 'nav-item-active': 'nav-item'}>
                        Equipos de Mate
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/category/yerberas' className={({ isActive }) => isActive ? 'nav-item-active': 'nav-item'}>
                        Yerberas
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/category/termos' className={({ isActive }) => isActive ? 'nav-item-active': 'nav-item'}>
                        Termos
                    </NavLink>
                </li>
            </ul>
            <div className="responsive-menu">
                <input type="checkbox" id="checkbox-menu"/>
                <label htmlFor={"checkbox-menu"} onClick={() =>{handleClick()}} >
                    <FontAwesomeIcon id="menu"  icon={faBars}/>
                </label>
            </div>
            <Link  to='/cart' className='nav-cart'><CartWidget/></Link>
        </nav>
    )
}

export default NavBar
