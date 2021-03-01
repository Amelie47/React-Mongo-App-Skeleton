// client/src/App.js
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header';
import { MembersList, MembersInsert, MembersUpdate } from './pages/index';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Router>
          <Header></Header>
          <Switch>
            <Route path='/members/list' exact component={MembersList} />
            <Route path='/members/create' exact component={MembersInsert} />
            <Route path='/members/update/:id' exact component={MembersUpdate} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
