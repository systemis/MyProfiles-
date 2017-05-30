import React, {Component} from 'react'

import $ from "jquery";

var IDidItem = React.createClass({
    render: function(){
        return (
            <div className="i-did-item col-dm-3 col-sm-3 col-xs-6">
                <div className="show-icon">
                    <i className={this.props.Data.Icon} ></i>
                </div>
                <div className="show-name">
                    {this.props.Data.Name}
                </div>
                <div className="show-count">
                    {this.props.Data.Count}
                </div>
            </div>
        )
    }
})

var use = () => {
    $(document).ready(() => {
        $(".show-icon").hover(() => {
            console.log("D");
        })
    })
}

class IDid extends Component {
    constructor(props){
        super(props);
        this.IDidData = [
            {Icon: "fa fa-mobile", "Name": "Android Project", Count: "70"},
            {Icon: "fa fa-globe", "Name": "Web Project", Count: "32"},
            {Icon: "fa fa-clock-o", "Name": "Hour Program", Count: "719"},
            {Icon: "fa fa-coffee", "Name": "Cafe cup", Count: "1290"}
        ]
    }
    render () {
        use = new use();

        return (
            <div className="content-what-i-did row container-fluid" id="content-what-i-did">
                {
                    this.IDidData.map((value, index) => {
                        return <IDidItem key={index} Data={value} />
                    })
                }
            </div>
        )
    }
}

export default IDid