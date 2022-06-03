import "./ItemListContainer.css"
import { useState, useEffect } from 'react'
import { getProducts } from '../../asyncmock'
import ItemList from '../ItemList/ItemList'


const ItemListContainer = (props) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts().then(response => {
            setProducts(response)
        })
    }, [])

    return (
        <div className="ItemListContainer">
             <h2 className="ItemListTitle">{props.greeting}</h2>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer
