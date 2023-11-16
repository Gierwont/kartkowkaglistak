import logo from './logo.svg';
import './App.css';
import Item from './components/item';
import ItemList from './components/itemList';
import Menu from './components/menu';
import { useState } from 'react';

function App() {


  const [DUMMY_DATA , setDUMMY_DATA] = useState([
    {
      name: "a",
      price: 1
    },
    {
      name: "b",
      price: 2
    },
    {
      name: "c",
      price: 3
    },
    {
      name: "d",
      price: 4
    }
  ])
  const saveInnerDataHandler = (e) => {
    setDUMMY_DATA((prevState) =>
    {return[...prevState , e]}
    )
    console.log(DUMMY_DATA)
  }

  return (
    <div>
      <ItemList data={DUMMY_DATA}/>
      <Menu onSaveInnerData={saveInnerDataHandler}/>
    </div>
  );
}

export default App;
