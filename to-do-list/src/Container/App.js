import React, { Component } from 'react';
import ToDoList from '../Components/ToDoList/ToDoList';
import Status from '../Components/Status/status';

class App extends Component {
     
  state = {
    Lists:[
      {day: 'Day 1', activity:'Go to the gym'},
      {day: 'Day 2', activity:'Go to the School'},
      {day: 'Day 3', activity:'Go to the Church'},
      {day: 'Day 4', activity:'Go to the Market'},
      {day: 'Day 5', activity:'Go to to visit Friends'}
      ]

    }

    statusHandler= ()=>{
     let message = 'Not Done';
     if (message===true){
       message = 'Done';
       console.log(message);

     }

    }


  render() {
      const style ={
        textAlign: 'center'
      }
    const Lists  = this.state.Lists.map( (list,index) => {
       return ( 
         <div>
        <ToDoList
            day= {list.day}
            activity={list.activity}
            key={index}
            
                    
       ><Status/> </ToDoList>
       
         </div>
       );
       });
       
    
    return (
      <div>
        <h1 style={style}>Todo List App</h1>
        {Lists}
      </div>
    );
  }
}

export default App;
