import React from 'react';
import Navbar from './Navbar';
import { connect } from 'react-redux';
class  SkillComponent  extends React.Component{

    state={
        widthBar: 0
    }

render(){
    const { skill } = this.props.skills;
return(
    <div className="skill">
        <Navbar />
        <div className="skillMain">
           <div className="skillMain-container">
            {  
                skill.map(skill =>{
                  let barWidth = 0;
                   if(skill === 'JavaScript'){ barWidth = 82}
                   if(skill === 'HTML'){barWidth = 70 }
                   if(skill === 'CSS'){barWidth = 60}
                   if(skill === 'React'){barWidth = 50}
                   if(skill === 'NodeJS'){barWidth = 48}
                   if(skill === 'MongoDB'){barWidth = 47}
                   if(skill === 'Angular'){barWidth = 50}
                   if(skill === 'MYSQL'){barWidth = 55}
                   if(skill === 'Team Work'){barWidth = 95}
                   if(skill === 'Communication Skills'){barWidth = 90}
                   if(skill === 'Problem Solving'){barWidth = 92}
                   if(skill === 'Customer Service'){barWidth = 91}
                   if(skill === 'Glovia'){barWidth = 82}
                   if(skill === 'Mainframe'){barWidth = 80}
                return(
                      <div key={skill} className="skillMain-container-skill">
                          <h3 className="skillMain-container-skill-title">{skill}</h3>
                          <div className="skillMain-container-skill-progressBar">
                          <div className="skillMain-container-skill-progressBar-width" style={{ width:`${barWidth}%`}}>
                          <span className="skillMain-container-skill-progressBar-width-span">{`${barWidth}%`}</span>
                            </div>
                          </div>
                    </div>
                  )
              })
            }
           </div>
            </div>

        </div>
)//end of the return
}//end of the render
}//end of the class Component

const setSkillsProps = (state)=>{

    return{
        skills:state.personalInfo 
    }
}
export default connect(setSkillsProps)(SkillComponent);