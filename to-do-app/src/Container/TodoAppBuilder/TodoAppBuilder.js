import React, {Component} from 'react';
import {Route,Switch} from 'react-router-dom';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import AddTask from '../../Components/AddTask/AddTask';
import TaskDone from '../../Components/TaskDone/TaskDone';
import TaskOverdue from '../../Components/TaskOverdue/TaskOverdue';


class TodoAppBuilder extends Component{
     

    render(){
        return(
            <Auxiliary>
                <Switch>
                <Route path='/' exact component={AddTask}/>
                <Route path='/done' component={TaskDone}/>
                <Route path='/overdue' component={TaskOverdue}/>
                </Switch>
                
            </Auxiliary>
                
           
        );
    }
}

export default TodoAppBuilder;