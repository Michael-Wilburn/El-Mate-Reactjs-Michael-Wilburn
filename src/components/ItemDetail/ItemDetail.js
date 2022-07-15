import './ItemDetail.css'
import { useContext } from 'react'
import CartContext from '../../context/CartContext'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import Swal from "sweetalert2";

const ItemDetail = ({id, title, img, category, price, description, stock}) => {

    const {addItem, isInCart} = useContext(CartContext)
    const ItemAdded = isInCart(id)

    const handleOnAdd = (quantity) =>{
        if(quantity > 0){
            addItem({id, title, img, category, price, description, stock,quantity});
        
            notification(quantity,category);
        }
    }
    const notification = (quantity,category) =>{
        let word = '';
        quantity === 1 ? word = 'una unidad' : word = 'unas unidades';
    
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Item agregado',
            html: `Se agrego ${quantity} ${word} de ${title} ${category} al carrito. `,
            showConfirmButton: false, 
            timer: 2000
          })
    }

    const onLoad = () => {
        if(window.innerWidth > 768){
            const pictureHeight = document.getElementById('picture').offsetHeight;
            document.getElementById('productDetail').style.height = `${pictureHeight}px`
        }

    };
     
    return (
        <div className='product'>
            <p className='product-title' >{title}</p>
            <li className='product-detail' id='productDetail'>
                <img className='product-picture' onLoad={onLoad} src={img} alt={title} id="picture"/>
                    
                <div className='product-detailBox'>
                <p className="product-detail-title">{title}</p>
                <p className="product-category">{category}</p>
                <p className="product-description"><span>Descripción: </span>{description}</p>
                <p className="product-price"> <span>$ </span>{price}</p>
                {!ItemAdded ? <ItemCount onAdd={handleOnAdd} stock={stock}/> : <Link to='/cart'><button className="product-end" >Terminar Compra</button></Link>}
                </div>
            </li>
        </div>
    )

}

export default ItemDetail;