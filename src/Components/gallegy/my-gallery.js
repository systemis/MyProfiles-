import React, {Component} from 'react'

import TitleHeading from "../title-heading-comprise-bottom-text.js";

import H1 from "../Accest/gallery/1.jpg";
import H2 from "../Accest/gallery/2.jpg";
import H3 from "../Accest/gallery/3.jpg";
import H4 from "../Accest/gallery/4.jpg";
import H5 from "../Accest/gallery/5.jpg";
import H6 from "../Accest/gallery/6.jpg";


var ImageItem = React.createClass({
    render: function(){
        return(
            <div className="image-item col-md-3 col-sm-3">
                <div className="child">
                    <div className="show-image">
                        <img src={this.props.Data.Image} />
                    </div>

                    <div className="show-text">
                        <div className="child">
                            <h4> {this.props.Data.Text} </h4>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
})

class Gallery extends Component {
    constructor(props){
        super(props);

        this.GalleryData = [
            {Image: H1, Text: "glassy resume"},
            {Image: H2, Text: "glassy resume"},
            {Image: H3, Text: "glassy resume"},
            {Image: H4, Text: "glassy resume"},
            {Image: H5, Text: "glassy resume"},
            {Image: H6, Text: "glassy resume"},
        ]
    }
    render () {
        return (
            <div className="content-my-gallery container" id="content-my-gallery">
                <TitleHeading 
                    Title="My Gallery"
                    Value="SEE my world"
                />

                <div className="show-my-gallery row">
                    {
                        this.GalleryData.map((value, index) => {
                            return(
                                <ImageItem Data={value} key={index} />
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Gallery;