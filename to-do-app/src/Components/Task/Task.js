import React from 'react';
import Classes from '../AddTask/AddTask.css';
const task = (props) =>{

    return(
          <div className={Classes.AddTask}>
          <ul>
              <li>
              {props.Tasks} 
              <button onClick={props.clicked}>X</button>
              </li>
          
          </ul>
          </div>
          
      ); 
  
        
             
          
  };

  export default task;