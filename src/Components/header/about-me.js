import  React, { Component } from 'react';

import AvatarMe from "../Accest/me/avatar-me.png";

var SocialNetWorkItem = React.createClass({
    render: function() {
        return (
            <li className="social-net-work-item">
                <a href={this.props.link} >
                    <i className={this.props.className}> </i>
                </a>
            </li>
        )
    }
})

var ShowAvatarAndJobs = React.createClass({
    render: function(){
        return(
            <div className="show-avatar-jobs">
                <div className="show-avatar-me">
                    <img src={AvatarMe} alt="me" />
                </div>

                <div className="show-simple-info">
                    <div className="show-name">
                        <h1> Hey, tôi là Phạm Văn Thịnh. </h1>
                    </div>

                    <div className="show-jobs">
                        <p>Android/FornEnd developer</p>
                    </div>

                    <div className="show-voculary"> 
                        <p>Theo đuổi đam mê đồng nghĩa với thành công đang theo đuổi bạn đấy.</p>
                    </div>
                </div>
            </div>
        )
    }
})

var SocialNetWorkList = React.createClass({
    render: function(){
        return(
            <div className="header-about-me-social-network-list">
                <ul>
                    <SocialNetWorkItem link="https://www.facebook.com/profile.php?id=100009763863563" className="fa fa-facebook" /> 
                    <SocialNetWorkItem link="https://twitter.com/numberjonhpham" className="fa fa-twitter" /> 
                    <SocialNetWorkItem link="https://plus.google.com/u/0/108877427984476073932" className="fa fa-google-plus" /> 
                    <SocialNetWorkItem link="https://github.com/systemis" className="fa fa-github" /> 
                </ul>
            </div>
        )
    }
})

class AboutMe extends Component {
    render() {
        return (
            <div className="header-about-me-layout">
                <ShowAvatarAndJobs />
                <SocialNetWorkList />
            </div>
        );
    }
}

export default AboutMe;