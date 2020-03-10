import React from 'react';
import {  Link, withRouter } from 'react-router-dom';

class Navbar extends React.Component {

  constructor() {
    super();
    this.state = {
      isOpen: false
    };
  }

  toggleNavbar() {
    this.setState({  isOpen: !this.state.isOpen });
  }
 
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.setState({ isOpen: false });
    }
  }

  render () {
    return <div>
      <a href="#" className="menu-button" id="menuButton">
        <span className="burger-icon">
          <div>
            <Link to="/">Home</Link>
            <Link to="/gallery">Gallery</Link>
          </div>
        </span>
      </a>
    </div>;
  }
}

export default withRouter(Navbar);