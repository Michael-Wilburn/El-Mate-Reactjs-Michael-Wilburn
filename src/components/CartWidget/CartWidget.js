import './CartWidget.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react'
import CartContext from '../../context/CartContext'


const CartWidget = () => {
    const {totalQuantity} = useContext(CartContext)
    return (
        <div className="cart-btn">
            <span>
                <FontAwesomeIcon className="cartIcon" icon={faShoppingCart}/>
            </span>
            <div className="cart-items">{totalQuantity}</div>
        </div>
        
    )
}

export default CartWidget


