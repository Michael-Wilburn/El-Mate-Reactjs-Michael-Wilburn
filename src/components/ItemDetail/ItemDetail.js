import { useState } from 'react'
import './ItemDetail.css'
import { useContext } from 'react'
import CartContext from '../../context/CartContext'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({id, title, img, category, price, description, stock}) => {
    const [quantityAdded, setTotalQuantity] = useState(0)
    const {addItem, isInCart} = useContext(CartContext)
    const ItemAdded = isInCart(id)

    const handleOnAdd = (quantity) =>{
        if(quantity > 0){
            addItem({id, title, img, category, price, description, stock,quantity});
            setTotalQuantity(quantity)
        }

    }
    
    return (
        <div className='productBox'>
            <p className='productTitle' >{title}</p>
            <li className='productDetail'>
            <img className='bigPicture'src={img} alt={title}/>
            <div className='detailBox'>
            <p className="itemTitle">{title}</p>
            <p>{category}</p>
            <p className="description">{description}</p>
            <p className="ItemPrice">$ {price}</p>
            {!ItemAdded ? <ItemCount className='ItemCount' onAdd={handleOnAdd} stock={stock}/> : <Link to='/cart'><button className='carritoBtn' >Terminar Compra</button></Link>}
            </div>
            </li>
        </div>
    )
}

export default ItemDetail;