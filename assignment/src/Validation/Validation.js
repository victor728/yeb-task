import React from 'react';


const validation = (props) => {

    // VALIDATION MESSAGE
     let validationMessage = 'text long enough';

     if(props.inputLength <= 5){
         validationMessage = 'text too short';
     }
    
    
    
    return (

    <p>{validationMessage}</p>
        //alternate solution
        // <div>
        //     {
        //         props.inputLength > 5 ?

        //         <p>text too long</p> :

        //         <p>text too short</p>
        //     } 

        // </div>
        
    );
};

export default validation;