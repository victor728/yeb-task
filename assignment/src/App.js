import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {

  state = {
    userInput: ' '

  }
     
  inputchangehandler = (event) => {
   this.setState({userInput: event.target.value});

  }
    
  

   render() {
    const charList = this.state.userInput.split('').map((ch, index) => {
       return <Char character = {ch} key={index} />
    });


    return (
      <div className="App">
        <input type="text" 
        onChange={this.inputchangehandler} 
        value={this.state.userInput}
         />


    <p>{this.state.userInput}</p>


    <Validation inputLength={this.state.userInput.length}/> 
    
        {charList}
      </div>
    );

 //return React.createElement('div',{className:'App'}, React.createElement('h1','null', 'Hi, I\ am a react'));
  }
}

export default App;
