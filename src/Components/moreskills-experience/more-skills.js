import React, {Component} from 'react'
import TitleHeading from "../title-heading-comprise-bottom-text.js";

var ProgressBar = require('react-progressbar.js');
var Circle = ProgressBar.Circle;

var MoreSkillItem = React.createClass({
    options: {
        strokeWidth: 2
    },

    containerStyle: {
        width: '200px',
        height: '200px',
        color: "red"
    },

    render: function(){
        return(
            <div className="more-skill-item col-md-4 col-sm-4 container">
                <Circle
                    progress={"92"}
                    text={'test'}
                    options={this.options}
                    initialAnimate={false}
                    containerStyle={this.containerStyle}
                    containerClassName={'.progressbar'} 
                />
                <h2> HTML </h2>
            </div>
        )
    }
})

class MoreSkills extends Component {
    render () {
        return (
            <div className="more-skills-experience-more-skills col-md-6">
                <TitleHeading 
                    className="white-color"
                    Title="More Skills" 
                    />
                <div className="row">
                    <MoreSkillItem key="1"/>
                    <MoreSkillItem key="2"/>
                    <MoreSkillItem key="3"/>
                </div>
            </div>
        )
    }
}


export default MoreSkills;