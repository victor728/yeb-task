import React from 'react'; 
import Classes from './Tab.css';
import {NavLink} from 'react-router-dom';


const tab =(props)=>(
<li className={Classes.Tab}>
    <NavLink to={props.link}>

        {props.children}</NavLink>
</li>
);

export default tab;
    