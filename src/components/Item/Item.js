import { Link } from 'react-router-dom'
 
const Item = ({ price ,title ,img, id}) => {
    return (
        <li className="Item">
            <img className="product-img" src={img} alt={title}/>
            <p className="ItemPrice">$ {price}</p>
            <p className="ItemName">{title}</p>
            <button><Link to={`/detail/${id}`}>Ver Detalle</Link></button>
        </li>
        
    )
}

export default Item