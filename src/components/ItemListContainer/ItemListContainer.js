import "./ItemListContainer.css"
import { useState, useEffect } from 'react'
import { getProducts, getProductsByCategory } from '../../asyncmock'
import ItemList from '../ItemList/ItemList'
import { useParams } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { getDocs, collection , query , where } from 'firebase/firestore'
import { db } from '../../services/firebase'
 
const ItemListContainer = (props) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const {categoryId} = useParams();
    
    useEffect(() => {
        setLoading(true);

        const collectionRef = categoryId ? (query(collection(db, 'products'), where('category','==',categoryId))) 
        : (collection(db, 'products'));

        getDocs(collectionRef).then(resp => {
            const productsFormatted = resp.docs.map(doc => {
                return { id:doc.id, ...doc.data() }
            })
            setProducts(productsFormatted)
        }).catch(error => {
            console.log(error);
        }).finally(()=>{
            setLoading(false)
        })

        // if(!categoryId){
        //     getProducts().then(response => {
        //         setProducts(response)
        //     }).catch(error => {
        //         console.log(error);
        //     }).finally(() => {
        //         setLoading(false);
        //     })
        // } else {
        //     getProductsByCategory(categoryId).then(response =>{
        //         setProducts(response)
        //     }).catch(error => {
        //         console.log(error);
        //     }).finally(() => {
        //         setLoading(false);
        //     })
        // }
    }, [categoryId]);

    if(loading){
        return <FontAwesomeIcon className="loader" icon={faSpinner}/>
    }

    return (
        <div className="ItemListContainer">
             <h2 className="ItemListTitle">{categoryId ? categoryId : 'Catalogo de Productos'}</h2>
            {products.length > 0 
                ? <ItemList products={products}/>
                : <h1>No hay productos</h1>
            }
        </div>
    )
}

export default ItemListContainer
