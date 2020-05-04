import React, {Component } from 'react';
import Task from '../Task/Task';
//import DateTime from 'react-datetime';




class AddTask extends Component{
    constructor(props){
        super(props);
        
            this.state={
                taskItem:"",
                Tasks: [],
               // dateTimeDue:  '1561881986756',
               // complete: false
            }
        
    }
    
    updateTaskInput=(key,value)=>{
        this.setState({
            [key]: value
        });
    };
    
    addTaskItem=()=>{
        const taskItem={
             id: 1 + Math.random(),
             value: this.state.taskItem.slice()
    
        };
    
        const Tasks = [...this.state.Tasks];
    
        Tasks.push(taskItem);
    
        this.setState({
            Tasks,
            taskItem: ''
        });
    
    }
    
    deleteTaskHandler=(id)=>{
        const Tasks = [...this.state.Tasks];
    
        const updateTasks = Tasks.filter(task =>task.id !== id);
    
        this.setState({Tasks : updateTasks});
    }
    


    render(){

        const  Tasks =(
            <div >
             {this.state.Tasks.map(task => {
             return(
                 <Task

                 key={task.id}
                 Tasks={task.value}
                 clicked={()=>this.deleteTaskHandler(task.id)}
                
                 />);
             } ) }
             </div>
        );

        return(
           <div>
               <input 
                type ="text"
                value= {this.state.taskItem}
                onChange ={(event)=>{this.updateTaskInput('taskItem',event.target.value)}} />
                
                <button onClick={ ()=>{this.addTaskItem()}}>ADD</button>

                <br/>

                {Tasks}
           </div>
        );
    }
}

export default AddTask;