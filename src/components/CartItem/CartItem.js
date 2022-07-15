import './CartItem.css'
import { useContext } from "react";
import CartContext from '../../context/CartContext'


const CartItem = ({title, category , quantity, price, id, img}) => {
    const {removeItem} = useContext(CartContext)
   

    return (
        <li className="cart-item">
            <img className="cart-image" src={img} alt={title}/>
            <div>
                <p className="cart-category">{category}</p>
                <p id="cart-title">{title}</p>
            </div>
            <div>
                <p className='cart-quantity'><span>Cantidad:</span> {quantity}</p>
            </div>
            <p className="cart-price"><span>Precio:</span> ${price}</p>
            <p className="cart-subtotal"><span>Subtotal:</span>  ${quantity * price}</p>
            <button onClick={()=>{removeItem(id)}} className="cart-remove"> Eliminar </button>
        </li>
    )
}

export default CartItem