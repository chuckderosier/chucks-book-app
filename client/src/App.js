import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from './components/HomePage.js'
import UserPage from './components/UserPage.js'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/user' component={UserPage} />
          <Route path='/' component={HomePage} />
        </Switch>
      </Router>
    )
  }
}

export default App;
