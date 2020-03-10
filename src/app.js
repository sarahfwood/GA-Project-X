import React from 'react';
import ReactDOM from 'react-dom';
import {  BrowserRouter, Switch, Route } from 'react-router-dom';


import Navbar from './components/Navbar';
import Home from './components/Home';
import Gallery from './components/Gallery';

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/gallery" component={Gallery}/>
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);