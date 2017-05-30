import  React, { Component } from 'react';

import FieldsGroup from "../field-time-group";
import Skills from "../skills.js";

class EduAndSkills extends Component {
    constructor(props){
        super(props);

        this.EducationData = [
            {
                Time: "2008-2012", 
                Name: "Tran Van On primary school",
                Des:"Đây là trường tiểu học tôi từng học. Lúc trước trước rất nhỏ và cũ những bây giờ ngôi trường này là trường tiểu học công lập nổi tiếng nhất Đà Nẵng. Tại đây tôi có rất nhiều người bạn tốt, trong đó Triều là người bạn tốt nhất của tôi."
            },
            {
                Time: "2012-2017", 
                Name: "Kim Dong second hight school",
                Des:"Tôi học tại trường trung học cơ sở Kim Dong, đây là một ngôi trường trung học nổi tiếng của thành phố tôi. Nhưng nói thật là 4 năm học tại đó tôi chẳng có kỉ niệm đánh nhớ nào hết, khác hẳn với trường tiểu học."
            },
            {
                Time: "2016", 
                Name: "Ws3.school",
                Des:"Đây là nơi tôi tự bắt đầu sự nghiệm lập trình viên của cả đời (nghe cũng ngầu phết ha !)."
            }
        ]

        this.SkillsData = [
            {Name: "Java", Level: "89", Color: "#44c7f4"},
            {Name: "Android", Level: "97", Color: "#44c7f4"},
            {Name: "Javascrip", Level: "90", Color: "#44c7f4"},
            {Name: "HTML", Level: "95", Color: "#44c7f4"},
            {Name: "CSS", Level: "80", "Color": "#44c7f4"}
        ]
    }

    render() {
        return (
            <div className="content-edu-skills row" id="content-edu-skills">
                <FieldsGroup
                    TitleFieldGroup="My Education"
                    FieldsData = {this.EducationData}
                />

                <Skills
                     SkillsData={this.SkillsData} 
                     TitleGroup="My Skills"/>
            </div>
        );
    }
}

export default EduAndSkills;