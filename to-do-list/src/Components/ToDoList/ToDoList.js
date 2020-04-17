import React from 'react';
import './ToDoList.css';

const ToDoList = (props) =>{

  return(
        <div className="Todolist">  
            <p>{props.day}: {props.activity}</p>{props.children}
        </div>
    ); 
      
           
        
};


export default ToDoList;