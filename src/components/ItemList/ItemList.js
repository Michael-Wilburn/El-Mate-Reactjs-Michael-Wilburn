import Item from "../Item/Item"

const ItemList = ({ products }) => {
    return(
        <ul className="ItemList" onClick={() => console.log('hice click en itemlist')}>
            {products.map(prod => <Item key={prod.id} {...prod} />)}
        </ul>
    )
}

export default ItemList