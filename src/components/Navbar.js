import React from 'react'
import {  Link, withRouter } from 'react-router-dom'

class Navbar extends React.Component {

  constructor() {
    super()
    this.state = {
      isOpen: false
    }
  }

  toggleNavbar() {
    this.setState({  isOpen: !this.state.isOpen })
  }
 
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.setState({ isOpen: false })
    }
  }

  render () {
    return <div>
      <a href="#" className="menu-button" id="menuButton">
        <span className="burger-icon">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/images">Images</Link></li>
        </span>
      </a>
    </div>
  }
}

export default withRouter(Navbar)