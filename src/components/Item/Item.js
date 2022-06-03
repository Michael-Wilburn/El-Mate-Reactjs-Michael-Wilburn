const Item = ({ price ,title ,img ,description }) => {
    return (
        <li className="Item">
            <img className="product-img" src={img} alt={title}/>
            <p className="ItemPrice">$ {price}</p>
            <p className="ItemName">{title}</p>
            <p>{description}</p>
            <button>Agregar al carrito</button>
        </li>
    )
}

export default Item