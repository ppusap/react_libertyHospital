import React, {Component}  from 'react';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import { Home } from './Home';
import { Scholarship } from './Scholarship';
import { Grants } from './Grants';
import { NoMatch } from './NoMatch';
import { Layout } from './components/Layout.js';
import { NavigationBar } from './components/NavigationBar.js';
import { Jumbotron } from './components/Jumbotron';


class App extends Component {
  render() {
  return (
<React.Fragment>
  <NavigationBar/>
  <Jumbotron/>
  <Layout>
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route  path="/Scholarship" component={Scholarship} />
      <Route  path="/Grants" component={Grants} />
      <Route component={NoMatch} />
    </Switch>
  </Router>
  </Layout>
</React.Fragment>
  );
}
}

export default App;
