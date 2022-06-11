import "./ItemDetailContainer.css"
import { useState, useEffect} from 'react'
import { getProductById } from '../../asyncmock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    const {productId} = useParams();
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        setLoading(true);
        getProductById(productId).then(response => {
            setProduct(response)
        }).catch(error => {
            console.log(error);
        }).finally(() => {
            setLoading(false);
        })
    }, [productId])

    if(loading){
        return <FontAwesomeIcon className="loader" icon={faSpinner}/>
    }

    return (
        <>
            <ItemDetail {...product}/>
        </>
    )
}


export default ItemDetailContainer