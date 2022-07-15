import { useState } from "react"
import "./ItemCount.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const ItemCount = ({onAdd, stock, initial = 0}) =>{
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
        <div className="counter">
            <div className="counter-box">
                <button className='counterBtn' id='btn-left' onClick={decrement}> - </button>
                <p className='counter-number'>{count}</p>
                <button className='counterBtn' id='btn-right' onClick={increment}> + </button>
            </div>
            <button className='counterAdd' onClick={()=> onAdd(count)}> <FontAwesomeIcon className="counterCart" icon={faShoppingCart}/> Agregar al carrito</button>
        </div>
    )
}

export default ItemCount