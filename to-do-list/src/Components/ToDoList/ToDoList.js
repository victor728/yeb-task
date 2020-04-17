import React from 'react';
import Classes from './ToDoList.css';


const ToDoList = (props) =>{

  return(
        <div className={Classes.Todolist}>  
            <p onClick={props.click}>{props.day}: {props.activity}</p>{props.children}
        </div>
    ); 
      
           
        
};


export default ToDoList;