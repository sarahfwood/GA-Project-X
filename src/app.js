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

      <div className="content">
        <div className="container">
          <section className="section">
            <div>
              <h1>Photobook</h1>
              <p>Some of my favourite snaps</p>
            </div>
            <ul>
              {this.state.list.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
          <section className="section">
            <form className="form" id="addItemForm">
              <input type="text" className="input" id="addInput" placeholder="Search..." />
              <button className="button" onClick={this.addItem}>
                Search
              </button>
            </form>
          </section>
        </div>
      </div>
    )
  }
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
)