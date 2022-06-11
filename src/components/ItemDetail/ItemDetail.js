import './ItemDetail.css'

const ItemDetail = ({ id, title, img, price, description }) => {
    return (
        <div className='productBox'>
            <p className='productTitle' >{title}</p>
            <li className='productDetail'>
            <img className='bigPicture'src={img} alt={title}/>
            <div className='detailBox'>
            <p className="itemTitle">{title}</p>
            <p className="description">{description}</p>
            <p className="ItemPrice">$ {price}</p>
            <button className='carritoBtn'>Agregar al carrito</button>
            </div>
            </li>
        </div>
    )
}

export default ItemDetail