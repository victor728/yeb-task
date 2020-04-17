import React, {Component} from 'react';

class status extends Component{
    
       state ={
           status: 'Not Done'
       };

       statusHandler=()=>{
        this.setState({status: 'Done'});
       };


    render(){
        return(
            <div>
                {this.state.status}
              <button onClick={this.statusHandler}>click here</button>
            </div>
       );
    }
}


export default status;