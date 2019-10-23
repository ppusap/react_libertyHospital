import React, {Component}  from 'react';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';

import  MainPage  from './PMHome.js';
import Login from './Login';
import Program from './Program';

class ProgramManagement extends Component {
    render() {
    return (
    <Router>
      <Switch>
        <Route exact path="/ProgramManagement" component={MainPage} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Program" component={Program} />
      </Switch>
    </Router>
    );
  }
  }
  
  export default ProgramManagement;
  