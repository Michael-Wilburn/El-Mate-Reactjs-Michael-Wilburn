import { useState } from "react"

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
        <div>
            <p className='ItemCount'>{count}</p>
            <button className='carritoBtn' onClick={decrement}> - </button>
            <button className='carritoBtn' onClick={increment}> + </button>
            <button className='carritoBtn' onClick={()=> onAdd(count)}> Agregar al carrito</button>
        </div>
    )
}

export default ItemCount