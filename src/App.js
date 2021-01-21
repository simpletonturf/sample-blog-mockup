import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import home from './components/Home/Home';
import contact from './components/contact/contact';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/' component={home} />
          <Route exact path='/contactus' component={contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
