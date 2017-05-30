import  React, { Component } from 'react';

class TitleHeading extends Component {
    render() {
        return (
            <div className="heading-title-cm-bottom-text">
                <h1 className={this.props.className}> {this.props.Title} </h1>
                <h4> {this.props.Value} </h4>
            </div>
        );
    }
}

export default TitleHeading;