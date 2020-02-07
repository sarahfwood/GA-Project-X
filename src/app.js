import React from 'react'
import ReactDOM from 'react-dom'
import {  BrowserRouter, Switch, Route } from 'react-router-dom'


import Navbar from './components/Navbar'
import Home from './components/Home'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [
        ''
      ]
    }
  }

  const App = () => (
    <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact patjh="/" component={Home} />
    </Switch>
    </BrowserRouter>
  )

  render() {
    return (
      <div>
        <h1>Photobook</h1>
        <p>Some of my favourite snaps</p>
      </div>
    )
  }
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
)