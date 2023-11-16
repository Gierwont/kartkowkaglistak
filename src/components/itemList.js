import Item from "./item"

const ItemList = (props) => {
    return(
        <div>
            {props.data.map((item) => (
                <Item  name={item.name} price={item.price}/>
            ))}
        </div>
    )
}

export default ItemList