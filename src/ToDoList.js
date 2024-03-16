import React from 'react'
import { TiDeleteOutline } from "react-icons/ti";
const ToDoList=(props)=> {
    
    return (
        <>
        <div className='todo_style'>
              <TiDeleteOutline className='fa-times' onClick={()=>{props.onSelect(props.id)}}/>
             <li> {props.text} </li>
        </div>
        </>
    );
}

export default ToDoList;
