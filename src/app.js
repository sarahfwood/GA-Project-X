import React from 'react'
import ReactDOM from 'react-dom'
import {  BrowserRouter, Switch, Route } from 'react-router-dom'


import Navbar from './components/Navbar'
import Home from './components/Home'
import Images from './components/Images'

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/images" component={Images}/>
    </Switch>
  </BrowserRouter>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)