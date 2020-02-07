import React from 'react'
import ReactDOM from 'react-dom'
import {  BrowserRouter, Switch, Route } from 'react-router-dom'


import Navbar from './components/Navbar'
import Home from './components/Home'

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact patjh="/" component={Home} />
    </Switch>
  </BrowserRouter>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)