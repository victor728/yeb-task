import React, { Component } from 'react';
import ToDoList from '../Components/ToDoList/ToDoList';
import Status from '../Components/Status/status';

class App extends Component {
     
  state = {
    Lists:[
      { id: 'c01', day: 'Day 1', activity:'Go to the gym'},
      { id: 'c02', day: 'Day 2', activity:'Go to the School'},
      { id: 'c03', day: 'Day 3', activity:'Go to the Church'},
      { id: 'c04', day: 'Day 4', activity:'Go to the Market'},
      { id: 'c05', day: 'Day 5', activity:'Go to to visit Friends'}
      ],
      showList : false
    }


    deleteSingleHandler = (listIndex) => {
      const lists = [...this.state.Lists];
      lists.splice(listIndex,1);
      this.setState({lists:lists});
      }


    statusToggleHandler=()=>{
    const doesShow = this.state.showList;
    this.setState({showList:!doesShow});

    };


  render() {

      const style ={
        textAlign: 'center',
        fontSize: '28px',
        color: 'blue'
      }

     const buttonStyle={
      marginLeft:'46%',
      cursor :'pointer'
     }
     

      let Lists =null;

      if(this.state.showList){

     Lists  = (
      <div>
           {this.state.Lists.map( (list,index) => {
       return  <ToDoList
            day= {list.day}
            activity={list.activity}
            key={index}
            click={() =>this.deleteSingleHandler(index)}
       ><Status/> </ToDoList>
       
       } ) }
        </div>
      )
      }
    return (
      <div>
        <h1 style={style}>Todo List App</h1>
        <button style={buttonStyle} onClick={this.statusToggleHandler}>Click to see List</button>
        {Lists}
      </div>
    );
  }
}

export default App;
