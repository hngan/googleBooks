import React from 'react';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import Saved from './pages/Saved'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      
      <Router>
      <Navbar />
        <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/search" component={Home}/>
        <Route exact path="/saved" component={Saved}/>
        <Route component={Home}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
