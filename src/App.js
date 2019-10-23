import React, {Component}  from 'react';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import { Home } from './Home';
import { Scholarship } from './Scholarship';
import  MainPage  from './components/PMHome.js';
import  Login  from './components/Login';
import  Program from './components/Program';
import  Status from './components/Status';


import { NoMatch } from './NoMatch';
import { Layout } from './components/Layout.js';
import { NavigationBar } from './components/NavigationBar.js';
import {steps} from './components/MultiStep/Steps';
import MultiStep from 'react-multistep';
import ProgramManagement from './components/ProgramManagement'
import { sequence } from './components/Scholarship/sequence';



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
      v<Route exact path="/Scholarship_TrackStatus" component={Status} />
      <Route  exact path="/Scholarship_NewApplication" component={() =><MultiStep steps={sequence} />} />
      <Route exact path="/ProgramManagement" component={MainPage} />
      <Route exact path="/Login" component={Login} />
      <Route exact path="/Program" component={Program} />
      Scholarship_TrackStatus
      <Route component={NoMatch} />
    </Switch>
  </Router>
  </Layout>
</React.Fragment>
  );
}
}

export default App;
