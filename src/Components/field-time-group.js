import React, { Component } from 'react';

import TitleHeading from "./title-heading-comprise-bottom-text.js";

var FieldDesItem = React.createClass({
    render: function(){
        return(
            <div className="col-md-7 col-sm-7 field-item-description">
                <div className="show-field-name">
                    {this.props.Name} 
                </div>

                <div className="show-field-description">
                    <p> {this.props.Des} </p>
                </div>
            </div>
        )
    }
})

var FieldTimeItem = React.createClass({
    render: function(){
        return(
            <div className="col-md-5 col-sm-5 field-item-time">
                <strong> {this.props.Time} </strong>
            </div>
        )
    }
})

var FieldItem = React.createClass({
    render: function(){ 
        return(
            <div className="time-field-item">
                <div className="row container-fluid">
                    <FieldTimeItem Time={this.props.Data.Time} />
                    <FieldDesItem  Name={this.props.Data.Name} 
                                    Des={this.props.Data.Des} />
                </div>
            </div>
        )
    }
})

class FieldsGroup extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="col-md-6 content-show-fields-group">
                <TitleHeading className="blue-color" 
                    Title={this.props.TitleFieldGroup}
                    Value=""/>
                
                <div className="show-fields-group">
                    {
                        this.props.FieldsData.map(function(value, index){
                            return(
                                <FieldItem key={index} Data={value} />
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default FieldsGroup;