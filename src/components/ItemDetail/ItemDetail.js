import { useState } from 'react'
import './ItemDetail.css'
import { useContext } from 'react'
import CartContext from '../../context/CartContext'
import { Link } from 'react-router-dom'

const InputCount = ({onAdd, stock, initial = 1}) =>{
    const [count, setCount] = useState(initial)

    const handleChange = (e) =>{
      setCount(e.target.value)
    }
    return(
        <div>
            <input type='number' onChange={handleChange} value={count}/>
            <button onClick={() => onAdd(parseInt(count))}>Agregar al carrito</button>
        </div>
    )
}

const ButtonCount = ({onAdd, stock, initial = 0}) =>{
    const [count, setCount] = useState(initial)
    const increment = () =>{
        if(count < stock){
            setCount(count + 1)
        }
    }
    const decrement = () =>{
        if(count > 0){
            setCount(count - 1)
        }
    }
    return (
        <div>
            <p>{count}</p>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
            <button onClick={()=> onAdd(count)}> Agregar al carrito</button>
        </div>
    )
}


const ItemDetail = ({id, title, img, category, price, description, stock}) => {
    const [quantityAdded, setTotalQuantity] = useState(0)
    
    const {addItem, isInCart} = useContext(CartContext)
    const ItemAdded = isInCart(id)

    const [inputType, setInputType] = useState('button');
   
    // const changeCount = () =>{
    //     const input = inputType === 'button' ? 'input' : 'button';
    //     setInputType(input)
    // }

    const handleOnAdd = (quantity) =>{
        addItem({id, title, price, quantity});
        setTotalQuantity(quantity)
    }

    const Count = inputType === 'button' ? ButtonCount : InputCount;
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
            {/* <button onClick={changeCount}>Cambiar contador</button> */}
            {/* {inputType === 'button' ? <ButtonCount onAdd={handleOnAdd}/> : <InputCount onAdd={handleOnAdd}/>} */}
            {!ItemAdded ? <Count onAdd={handleOnAdd} stock={stock}/> : <Link to='/cart'>Terminar Compra</Link>
            }
            </div>
            </li>
        </div>
    )
}

export default ItemDetail;