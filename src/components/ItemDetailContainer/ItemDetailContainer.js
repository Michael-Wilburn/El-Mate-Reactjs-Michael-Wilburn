import "./ItemDetailContainer.css"
import { useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../services/firebase'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    const {productId} = useParams();
    const [loading, setLoading] = useState(true);

    
    useEffect(() => {
        setLoading(true);

        const docRef = doc(db, 'products', productId)

        getDoc(docRef).then(resp =>{
         const productFormatted = { id: resp.id, ...resp.data() }
         setProduct(productFormatted)
        }).catch(error =>{
            console.log(error)
        }).finally(()=>{
            setLoading(false)
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