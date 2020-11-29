import React from 'react';
import './App.css';
import Navbar from './Composants/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import Admin from './Pages/Admin';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Dashboard} />
          <Route path='/admin' component={Admin} />
        </Switch>
      </Router>
    </>
  );
}

export default App;



