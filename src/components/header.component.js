import React from 'react';
import { Component } from 'react';

import { Navbar, Nav, NavItem, Glyphicon } from "./header.component.js";

class Header extends Component {
  render() {
    return(
      <nav class="navbar navbar-default">
        <div class="container-fluid">
          <div class="navbar-header">
            <a class="navbar-brand" href="#">Lindy Hop Finder</a>
          </div>
        </div>
      </nav>
    )
  }
}

export default Header;