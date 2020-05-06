import React from 'react';
import Tabs from '../Tabs/Tabs';
import Classes from './Toolbar.css';


const toolbar =(props)=>{
    return(
        <header className={Classes.Toolbar}>


        <nav>
         <Tabs/>
        </nav>
        </header>

        
    );
}
export default toolbar;