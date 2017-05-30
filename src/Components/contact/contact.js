import React, {Component} from 'react'
import $ from "jquery";

var Script = () => {
    $(document).ready(() => {

    });
}

var ContactItem = React.createClass({
    render: function(){
        return (
            <div className="contact-me-item col-md-4 col-sm-4 ">
                <div className="child">
                    <div className="show-icon">
                        <i className={this.props.Data.Icon} />
                    </div>

                    <div className="show-way">
                        {this.props.Data.Way} 
                    </div>

                    <div className="show-value">
                        {this.props.Data.Value}
                    </div>
                </div>
            </div>
        )
    }
})

class Contact extends Component {
    constructor(props){
        super(props);

        this.ContactData = [
            {Icon: "fa fa-map-marker", Way: "Andress", Value: "45 Nguyen Hoang, Da Nang"},
            {Icon: "fa fa-envelope", Way: "Email", Value: "systemofpeter@gmail.com"},
            {Icon: "fa fa-phone", Way: "Call", Value: "09011111"}
        ]
    }

    render () {
        return (
            <div className="content-contact-me container-fluid row" id="content-contact-me">
                <div className="container">
                    {
                        this.ContactData.map((value, index) => {
                            return <ContactItem key={index} Data={value} />
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Contact