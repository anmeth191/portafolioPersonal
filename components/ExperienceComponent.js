import React from 'react';
import Navbar from './Navbar';
import { connect } from 'react-redux';

class ExperienceComponent extends React.Component{


    render(){

    const { jobs } = this.props.experience;
        return(
          <div>
              <Navbar />
              <div className="experience">
                  <div className="experience-container">
              {jobs.map(element =>{
                  return(
                      <div className={`experience-container-element${element.id}`} key={element.id} >
                          <h1 className="experience-container-title">{element.title}</h1>
                          <h3 className="experience-container-description">{element.description}</h3>
                          <h5 className="experience-container-date">{element.date}</h5>
                          <h5 className="experience-container-location">{element.location}</h5>
                          </div>
                        )//end of the return
              })//end of the map
            } </div>
              </div>
          </div>
      )
    }
}


const setExperienceProps = (state)=>{

    return{
        experience:state.experienceReducer
    }

}

export default connect(setExperienceProps)(ExperienceComponent);