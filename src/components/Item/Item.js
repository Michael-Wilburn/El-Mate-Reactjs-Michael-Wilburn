import './Item.css'
import { Link } from 'react-router-dom'
 
const Item = ({ price ,title ,img, id}) => {

    return (
        <li className="item">
            <img className="item-picture" src={img} alt={title}/>
            <p className="item-price">$ {price}</p>
            <p className="item-name">{title}</p>
            <button className='item-btn'><Link to={`/detail/${id}`}>Ver Detalle</Link></button>
        </li>
        
    )
}

export default Item