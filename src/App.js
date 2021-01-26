import React from 'react';
import './App.css';
import Header from './components/Header';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
function App() {
  return (
    <Router>
    <div className="App">
    <Header/>
    <Switch>
    <Route path='/' exact component={Home}/>
    </Switch>
    </div>
    </Router>
  );
}

export default App;
