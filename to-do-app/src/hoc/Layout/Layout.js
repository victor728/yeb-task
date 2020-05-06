import React, {Component} from 'react';
import Classes from'./Layout.css';
import Auxiliary from '../Auxiliary/Auxiliary';
import Tabs from '../../Components/Navigation/Tabs/Tabs';
import Toolbar from '../../Components/Navigation/Toolbar/Toolbar';

class Layout extends Component {
    render(){
        return(
            <Auxiliary>
                <Toolbar >
                <Tabs/>
                </Toolbar>
                
                <main className={Classes.Content}>
                    {this.props.children}
                </main>
            </Auxiliary>
        );
    }
}

export default Layout;