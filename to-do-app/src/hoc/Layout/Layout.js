import React, {Component} from 'react';
import Classes from'./Layout.css';
import Auxiliary from '../Auxiliary/Auxiliary';

class Layout extends Component {
    render(){
        return(
            <Auxiliary>
                <div>Toolbar</div>
                
                <main className={Classes.Content}>
                    {this.props.children}
                </main>
            </Auxiliary>
        );
    }
}

export default Layout;