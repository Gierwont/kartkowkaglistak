import { useState } from "react"

const Menu = (props) => {
    const [inputText , setInputText] = useState('')
    const [inputNumber , setInputNumber] = useState(0)
    const [newObject , setNewObject] = useState({
        name: "",
        price: 0
    })

    const textHandler = (e) =>{
        setNewObject((prevState) =>
        {return{
            ...prevState, name: e.target.value
        }})
    }
    const numberHandler = (e) =>{
        setNewObject((prevState) =>
        {return{
            ...prevState, price: e.target.value
        }})
    }
    const Clicked = () =>{
        props.onSaveInnerData(newObject)
    }

    return(
        <div>
            <input onChange={textHandler} type="text"/><br></br>
            <input onChange={numberHandler} type="number"/><br></br>
            <button onClick={Clicked}> Prześlij</button>
        </div>
    )
}

export default Menu