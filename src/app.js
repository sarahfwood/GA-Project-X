import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [
        ''
      ]
    }
  }

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