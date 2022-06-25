import { Link, NavLink } from 'react-router-dom'
import { useContext } from 'react'
import CartContext from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'



const CartView = () => {

    const {cart,totalToPay} = useContext(CartContext)
    

    return(
        <>
        <h2>Carrito</h2>
        {totalToPay ? <ul>{cart.map(item => <CartItem key={item.id} {...item} />)}</ul> : <Link to='/'><button>Crear Orden</button></Link> }
        <h3>Total: ${totalToPay}</h3> 
        </>
    )   
}

export default CartView