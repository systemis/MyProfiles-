import React, { Component } from 'react';

class NavigationMenu extends Component {
    render() {
        return (
<nav className="navbar navbar-default">
  <div className="container-fluid">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>                        
      </button>
      <a className="navbar-brand" href="#">Systemis</a>
    </div>
    <div className="collapse navbar-collapse" id="myNavbar">
      <ul className="nav navbar-nav navbar-right">
        <li className="active"><a href="#">Home</a></li>
        <li><a href="#content-about-me"> About me </a> </li>
        <li><a href="#content-service">Service</a></li>
        <li><a href="#content-edu-skills">Skills</a></li>
        <li><a href="#content-my-gallery">Gallery</a></li>
        <li><a href="#content-what-i-did">What i did</a></li>
        <li><a href="#content-contact-me">Contact</a></li>
      </ul>
    </div>
  </div>
</nav>
        );
    }
}

export default NavigationMenu;