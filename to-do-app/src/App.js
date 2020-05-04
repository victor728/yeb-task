import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import TodoAppBuilder from './Container/TodoAppBuilder/TodoAppBuilder';


class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <TodoAppBuilder/>
        </Layout>
      </div>
    );
  }
}

export default App;
