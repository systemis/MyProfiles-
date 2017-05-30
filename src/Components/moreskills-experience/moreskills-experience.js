import React, {Component} from 'react'

import FieldsGroup from "../field-time-group.js";
import Skills from "../skills.js";

class MSkillsAExperience extends Component {
    constructor(props){
        super(props);

        this.ExperienceData = [
            {
                Time: "2016-2017", 
                Name: "Android Developer",
                Des:"Đây là khoảng thời gian tôi miệt mài với Android, trong vòng 1 năm đó tôi đã tạo ra được hơn 70 project. Trong đó có 8 project lớn tôi đã public trên github của tôi: https://github.com/systemis/My-Apps-"
            },
            {
                Time: "Last 2016-2017", 
                Name: "Web developer",
                Des:"Tới thời điểm bây giờ tôi đã tự làm được 20 project font-end bằng HTML/SCSS/JS/React.js. Tôi đang làm một project e-comic lớn bằng reactjs. Dự định khi xong dự án này tôi sẽ học back-end."
            }
        ]

        this.MoreSkillsData = [
            {Name: "English", Level: "70", "Color": "#44c7f4"},
            {Name: "React.js", Level: "80", "Color": "#44c7f4"},
            {Name: "Node.js", Level: "52", "Color": "#44c7f4"},
            {Name: "SQL", Level: "100", "Color": "#44c7f4"}
        ]
    }
    render () {
        return (
            <div className="content-more-skills-experience row">
                <Skills
                    TitleGroup="More Skills"
                     SkillsData = {this.MoreSkillsData} />
                <FieldsGroup 
                    TitleFieldGroup="My Experience"
                    FieldsData={this.ExperienceData} />
            </div>
        )
    }
}

export default MSkillsAExperience