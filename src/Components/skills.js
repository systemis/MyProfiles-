import React, { Component } from 'react';

import TitleHeading from "./title-heading-comprise-bottom-text.js";

var MySkillItem = React.createClass({
    setStyleProgress(progress, color){
        return{
            width: progress.toString() + "%",
            "background-color": color
        }
    },

    render: function(){
        return(
            <div className="my-skill-item">
                <div className="show-skills-name">
                    {this.props.Data.Name}
                </div>
                <div className="progress">
                    <div className="progress-bar" role="progressbar"
                         aria-valuenow={parseInt(this.props.Data.Level)} aria-valuemin="0" 
                         aria-valuemax="100" 
                         style={
                             this.setStyleProgress(this.props.Data.Level, 
                             this.props.Data.Color)}
                    >
                        {this.props.Data.Level}%
                    </div>
                </div>
            </div>
        )
    }
})

class Skills extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="col-md-6 content-skills-group">
                 <TitleHeading className="white-color" 
                    Title={this.props.TitleGroup}
                    Value=""/>
                <div className="show-my-skills">
                    {
                        this.props.SkillsData.map((value, index) => {
                            return(
                                <MySkillItem key={index} Data={value} />
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Skills;