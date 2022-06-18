import { Link } from 'react-router-dom'
 
const Item = ({ price ,title ,img, id}) => {


    const handleClick = (e) =>{
        e.stopPropagation()
        console.log('hice click en item')
    }
    return (
        <li className="Item" onClick={handleClick}>
            <img className="product-img" src={img} alt={title}/>
            <p className="ItemPrice">$ {price}</p>
            <p className="ItemName">{title}</p>
            <button className='ItemBtn'><Link to={`/detail/${id}`}>Ver Detalle</Link></button>
        </li>
        
    )
}

export default Item