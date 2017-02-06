import React, { Component } from 'react';

class NavBar extends Component {
  render(){
    return (
        <nav className="blue">
          <div className="nav-wrapper">
            <a href="#" className="brand-logo">Federal Monetary Policy</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><a href="sass.html">Federal Reserve</a></li>
              <li><a href="badges.html">Commercial Bank</a></li>
              <li><a href="collapsible.html">Household Bank</a></li>
            </ul>
          </div>
        </nav>
      )
  }
}


export default NavBar;
