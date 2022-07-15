import  './Checkout.css';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import CartContext from '../../context/CartContext';
import {addDoc, collection, writeBatch, getDocs, query, where, documentId,Timestamp} from 'firebase/firestore';
import { db } from '../../services/firebase/index';
import Swal from "sweetalert2";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";

const Checkout = () => {
    const {cart,totalToPay,clear} = useContext(CartContext)
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const [values, setValues] = useState({
        name: '',
        address: '',
        email: '',
        emailCheck:'',
        phone: '',
    });

    const handleChange = (evt) => {
        const { target } = evt;
        const { name, value } = target;
        setValues({ ...values, [name]: value });
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
    
        let missingInputData = false;
        for (const value in values) {
          if (values[value] === "") {
            missingInputData = true;
          }
        }
        if (missingInputData) {
          Swal.fire(
            "Falta de Datos",
            "Tienes que completar todos los datos del formulario para confirmar tu compra.",
            "error"
          );
        } else if(values.emailCheck !== values.email){
          Swal.fire(
            "E-mail no coincide",
            "Repita correctamente su dirección de correo electrónico para finalizar la compra.",
            "error"
          );
        } else {
          handleCreateOrder();
        }
      };

    const handleCreateOrder = () =>{
        const objOrder = {
            buyer: {
                name: values.name,
                email: values.email,
                phone: values.phone,
                address: values.address
            },
            items: cart,
            date: Timestamp.fromDate(new Date()),
            total: totalToPay
        }

        const batch = writeBatch(db)
        const ids = cart.map(prod => prod.id)
        const outOfStock = []
        const collectionRef = collection(db, 'products')
        setLoading(true);
        getDocs(query(collectionRef, where(documentId(), 'in', ids)))
        .then(response => {
            response.docs.forEach(doc =>{
                const dataDoc = doc.data()

                const prod = cart.find(prod => prod.id === doc.id)
                const prodQuantity = prod.quantity

                if(dataDoc.stock >= prodQuantity){
                    batch.update(doc.ref, { stock : parseInt(dataDoc.stock) - parseInt(prodQuantity)})
                } else{
                    outOfStock.push({id: doc.id, ...dataDoc})
                }
            })
        }).then((() => {
            if(outOfStock.length === 0){
                const collectionRef = collection(db,'orders')
                return addDoc(collectionRef, objOrder)
            } else{
                return Promise.reject({type : 'out_of_stock', products: outOfStock })
            }
        })).then(({id})=>{
            setLoading(false)
            batch.commit();
            Swal.fire({
                title: "Orden exitosa!",
                html: `Tu número de orden es: <br><br><b>${id}</b><br><br> En breve recibiras un e-mail con la orden de tu compra.`,
                icon: "success",
            });
            clear();
            navigate("/");
            setValues({
                name: '',
                address: '',
                email: '',
                emailCheck:'',
                phone: '',
            });
        }).catch(error =>{
            if(error.type === 'out_of_stock'){
                setLoading(false)
                Swal.fire({
                    title: "Error al procesar la orden",
                    html: `Alguno de los productos que seleccionaste no tienen stock.<br><br>Disculpas por la molestia. Por favor, intenta crear tu orden nuevamente.`,
                    icon: "error",
                  });
                clear();
                navigate("/");
                setValues(
                {
                    name: '',
                    address: '',
                    email: '',
                    emailCheck:'',
                    phone: '',
                })
            } else {
                console.log(error)
            }
        }).finally()
        
    }
    if(loading){
        return <FontAwesomeIcon className="loader" icon={faSpinner}/>
    }

    return(
        <div className="container">
        <h2 className="container-title">Formulario de Compra</h2>
        <form className="checkout">
            <input
              className="checkout-input"
              type="text"
              placeholder="Nombre y Apellido"
              onChange={handleChange}
              name="name"
              value={values.name}
            />
            <input
              className="checkout-input"
              type="text"
              placeholder="Dirección"
              onChange={handleChange}
              name="address"
              value={values.lastname}
            />
            <input
              className="checkout-input"
              type="email"
              placeholder="Correo electrónico"
              onChange={handleChange}
              name="email"
              value={values.email}
            />
            <input
              className="checkout-input"
              type="email"
              placeholder="Repetir correo electrónico"
              onChange={handleChange}
              name="emailCheck"
              value={values.emailCheck}
            />
            <input
              className="checkout-input"
              type="text"
              placeholder="+54 (Código de área) Número "
              onChange={handleChange}
              name="phone"
              value={values.phone}
            />
            <div className="checkout-btn">
            {totalToPay ? <Link to='/'><button
            onClick={handleSubmit} className="cart-order">Realizar Compra</button></Link> :''}
            </div>
        </form>
        <h3 className="cart-total">Total: ${totalToPay}</h3> 
        </div>
    )   
}

export default Checkout