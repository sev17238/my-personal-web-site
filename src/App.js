import React, {Component} from 'react';
import Layout from './hoc/Layout/Layout';
import MainContainer from './containers/MainContainer';
import {Route, Switch} from 'react-router-dom';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Layout>
          <Switch>
              <Route path="/" component={MainContainer}/>
              <Route render={()=> <h1>{'Problems! Page not Found :('}</h1>}/>
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
