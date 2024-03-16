import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import ToDoList from './ToDoList';
import { TiDeleteOutline } from "react-icons/ti";
function App() {
  const [inputList,setInputList]=useState();
  const [items,setItems]=useState([]);

  const itemEvent=(event)=>{
    setInputList(event.target.value);
  };
  const deleteItem=(id)=>{
        setItems((oldItem)=>{
          return oldItem.filter((arrElem,index)=>{
              return index!==id;
          });
        });
  };
  const listOfItems=()=>{
    setItems((oldItem)=>{
      return [...oldItem,inputList];
    });
    setInputList("");
  };
  return (
   <>
    <div className='main_div'>
      <div className='center_div'>
        <br/>
        <h1>ToDo List</h1>
        <br/>
        <input type="text" placeholder="Add an item" onChange={itemEvent} value={inputList}/>
        <button  onClick={listOfItems}> + </button>

        <ol>
          {/* <li>{inputList}</li> */}
          {items.map((itemval,index)=>{
            return <ToDoList key={index} id={index} text={itemval} onSelect={deleteItem}/>
          })}
        </ol>
      </div>
    </div>
   </>
  );
}

export default App;
