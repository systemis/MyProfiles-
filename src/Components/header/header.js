import  React, { Component } from 'react';

import AboutMe from "./about-me.js";
import NavigationMenu from "./navigation.js";

class Header extends Component {
    render() {
        return (
            <div className="header">
                <AboutMe />
                <NavigationMenu />
            </div>
        );
    }
}

export default Header;