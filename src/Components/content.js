import  React, { Component } from 'react';
import $ from "jquery";

import AboutMe from "./about-me/about-me.js";
import Service from "./service/service.js";
import EduAndSkills from "./edu&skills/edu-skills.js";
import MSkillsAExperience from "./moreskills-experience/moreskills-experience";
import Gallery from "./gallegy/my-gallery.js";
import IDid from "./what-i-did/what-i-did.js";
import Contact from "./contact/contact.js";

class Content extends Component {
    render() {
        return (
            <div className="content"> 
                <AboutMe />
                <Service />
                <EduAndSkills />
                <MSkillsAExperience />
                <Gallery />
                <IDid />
                <Contact />
            </div>
        );
    }
}

export default Content;