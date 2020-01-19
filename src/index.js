import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Home from './components/home'

function Routing(){
  return(
    <Router>
      <div>
        <Route path="/" component={App} />
        <Route path="/home" component={Home} />
      </div> 
    </Router>
  )
}


ReactDOM.render(
  <Routing />
  ,document.getElementById('root')
);
