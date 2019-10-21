import React, {Component} from 'react';

//import './css/bootstrap.min.css';
import './css/styles.css';  
import './css/bootstrapValidator.min.css';

import {BrowserRouter as Router, Route, Switch, Link, Redirect} from "react-router-dom";

//Pages
import MainPage from "./pages";
import Login from "./pages/Login";
import Program from "./pages/Program"

class App extends Component {
  render(){
    return(
      <Router>
        <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Program" component={Program} />
        <Route exact path="/Program/" component={MainPage} />
        </Switch>
      </Router>
    );  
  }
}

export default App;
