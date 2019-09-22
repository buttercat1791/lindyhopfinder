import React, { Component } from 'react';

import Header from "./header.component.js";

import bgImage from '../dancingFeet.jpg';

var pillSearchStyle = {
  position: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",
  width: "66%"
};

var bgStyle = {
  width: "100%",
  height: "100vh",
  backgroundImage: `url(${bgImage})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover"
};

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="bg" style={ bgStyle }>
          <form action="">
            <div class="p-1 bg-light rounded rounded-pill shadow-sm mb-4" style={ pillSearchStyle }>
              <div class="input-group">
                <div class="input-group-prepend">
                  <button id="button-addon2" type="submit" class="btn btn-link text-warning"><i class="fa fa-search"></i></button>
                </div>
                <input type="search" placeholder="Find swing dancing near you!" aria-describedby="button-addon2" class="form-control border-0 bg-light" />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Home;