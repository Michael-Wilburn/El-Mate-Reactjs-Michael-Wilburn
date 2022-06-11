import logo from './mate.png'
import './CardWidget.css'

const CardWidget = (props) => {
    return (
        <div className="cardWidget">
            <img src={logo}/>
            {props.greeting}
        </div>
        
    )
}

export default CardWidget