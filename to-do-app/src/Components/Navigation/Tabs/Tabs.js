import React from "react";
import Tab from '../Tabs/Tab/Tab';
import Classes from './Tabs.css';

const tabs =()=>{
    return(
        <ul className={Classes.Tabs}>
            <Tab link='/' exact>Task</Tab>
            <Tab link='/done'>Done</Tab>
            <Tab link='/overdue'>Overdue</Tab>
        </ul>
 

    );
}
  
      


 export default tabs;       