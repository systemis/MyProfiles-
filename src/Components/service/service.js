import  React, { Component } from 'react';

import TitleHeading from "../title-heading-comprise-bottom-text.js";

var ServiceItem = React.createClass({
    render: function(){
        return(
            <div className="col-md-4 col-sm-4 service-item">
                <div className="show-icon">
                    <i className={this.props.icon} />
                </div>

                <div className="show-title">
                    <h4> {this.props.title} </h4>
                </div>

                <div className="show-des">
                    <p> {this.props.des} </p>
                </div>
            </div>
        )
    }
})

class Service extends Component {
    constructor(props){
        super(props);

        this.state = {
            ServicesData: [
                {icon: "fa fa-cog", title: "Tại sao chọn tôi ?", des: "Tôi là Thịnh và tôi có thể viết một pet app android có thời gian nhanh nhất là 2 tiếng."},
                {icon: "fa fa-laptop", title: "Quản lý database", des: "Dữ liệu của bạn sẽ rõ ràng, nhanh hơn vì đã có siêu nhân SQL đây rồi, hâhhah!"},
                {icon: "fa fa-thumbs-o-up", title: "Fix bug", des: "Nhờ kinh nghiệm đọc code người khác tôi có thể thoải mái fix bug của một project không phải do tôi làm."}
            ]
        }
    }

    render() {
        return (
            <div className="content-service" id="content-service">
                <TitleHeading 
                    className="white-color"
                     Title="What i do for you"
                     Value="See my service" />  
                <div className="show-services row">
                    {
                        this.state.ServicesData.map((value, index) => {
                            return(
                                <ServiceItem
                                    key={index}
                                    icon={value.icon}
                                    title={value.title}
                                    des={value.des} />
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Service;