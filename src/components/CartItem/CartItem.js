import './CartItem.css'
import { useContext } from "react";
import CartContext from '../../context/CartContext'

const CartItem = ({title, category , quantity, price, id}) => {
    const {removeItem} = useContext(CartContext)
   

    return (
        <li className="Cart-Item">
            <p>{category}</p>
            <p id="Cart-title">{title}</p>
            <p>Cantidad: {quantity}</p>
            <p>$ {price}</p>
            <p>Subtotal: ${quantity * price}</p>
            <button onClick={()=>{removeItem(id)}}> Remover </button>
        </li>
    )
}

export default CartItem