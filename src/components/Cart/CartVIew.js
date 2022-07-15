import { Link } from 'react-router-dom'
import { useContext } from 'react'
import CartContext from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'
import  './CartView.css'

const CartView = () => {

    const {cart,totalToPay, clear} = useContext(CartContext)


    return(
        <>
        <h2>Carrito</h2>
        {totalToPay ? <ul className="cart-list">{cart.map(item => <CartItem key={item.id} {...item} />)}</ul> :
         <Link to='/'><button className="cart-backstore">Volver a la tienda</button></Link> }
        <h3 className="cart-total">Total: ${totalToPay}</h3> 
        <div>
            {totalToPay ? <button className="cart-clear" onClick={()=>{clear()}} >Limpiar Carrito</button> :''}
            {totalToPay ? <Link to='/checkout'><button className="cart-order">Generar Orden</button></Link> :''}
        </div>
     
        </>
    )   
}

export default CartView