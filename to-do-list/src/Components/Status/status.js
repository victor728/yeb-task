import React, {Component} from 'react';

class status extends Component{
    
       state ={
           status: 'Not Done'
       };

       statusHandler=()=>{
        this.setState({
            status: 'Done'
        }
        );
       };


    render(){
        return(
            <di>
                {this.state.status}
            <button type="checkbox" onClick={this.statusHandler}>click here</button>
            </di>

        );
    }
}


export default status;