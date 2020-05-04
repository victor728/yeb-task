import React, {Component} from 'react';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import AddTask from '../../Components/AddTask/AddTask';


class TodoAppBuilder extends Component{
     

    render(){
        return(
            <Auxiliary>
                <AddTask/>
                <div>Task Done</div>
                <div>Task Overdue</div>

            </Auxiliary>
                
           
        );
    }
}

export default TodoAppBuilder;