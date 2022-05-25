import logo from './mate.png'
import './CardWidget.css'

const CardWidget = (props) => {
    return (
        <div className="cardWidget">
            <img src={logo}/>
            <a href="#">{props.greeting}</a>
        </div>
        
    )
}

export default CardWidget