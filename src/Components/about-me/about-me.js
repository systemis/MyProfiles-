import React, { Component } from 'react';

import TitleHeading from "../title-heading-comprise-bottom-text.js";
import AvatarMeImage from "../Accest/me/avatar-me.png";

var InfoMeItem = React.createClass({
    hand(){
        console.log("D");

        if(this.props.className == "email"){
            return(
                <h4><a href={this.props.link}> {this.props.value} </a></h4>
            )
        }else{
            return(
                <h4> {this.props.value}</h4>
            )   
        }
    },

    render: function(){
        return(
            <div className="about-info-me-item">
                <div className="info-me-title">
                    <strong> {this.props.title} </strong>
                </div>

                <div className="info-me-value">
                    {
                        this.hand()
                    }
                </div>
            </div>
        )
    }
})


var ShowAvatarMeImageGroup = React.createClass({
    render: function(){
        return(
            <div className="col-md-5 col-sm-5 content-about-me-show-avatar-me">
                <img src={AvatarMeImage} alt="Avatar me" />
            </div>
        )
    }
})

var ShowInfomationAboutMe = React.createClass({
    render: function(){
        return(
            <div className="col-md-7 col-sm-7 show-info-me-group">
                <InfoMeItem title="Jobs TITLE " value="Android and Font-End developer"/>
                <InfoMeItem title="Name " value="Phạm Văn Thinh"/>
                <InfoMeItem title="Age " value="15"/>
                <InfoMeItem title="Andress" value="45 Nguyễn Hoàng, Đà Nẵng, Việt Nam"/>
                <InfoMeItem title="Email" value="systemofpeter@gmail.com" link="#" className="email"/>
            </div>
        )
    }
})

class AboutMe extends Component {
    render() {
        return (
            <div className="container content-about-me" id="content-about-me">
                <TitleHeading Title="About" Value="A few words about me" />
                <div className="row clearfix">
                    <ShowAvatarMeImageGroup />
                    <ShowInfomationAboutMe />
                </div>
            </div>
        );
    }
}

export default AboutMe;