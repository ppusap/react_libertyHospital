import React, {Component}  from 'react';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import { Home } from './Home';
import { Scholarship } from './Scholarship';

import { NoMatch } from './NoMatch';
import { Layout } from './components/Layout.js';
import { NavigationBar } from './components/NavigationBar.js';
import {steps} from './components/MultiStep/Steps';
import MultiStep from 'react-multistep'



class App extends Component {
  render() {
  return (
<React.Fragment>
  <NavigationBar/>
  <Layout>
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route  path="/Scholarship" component={Scholarship} />
      <Route  path="/NewApplication" component={() =><MultiStep steps={steps} />} />
      
      <Route component={NoMatch} />
    </Switch>
  </Router>
  </Layout>
</React.Fragment>
  );
}
}

export default App;
