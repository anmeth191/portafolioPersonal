import React from 'react';
import Navbar from './Navbar';
import { connect } from 'react-redux';
import educationReducer from '../reducers/education';

class EducationComponent extends React.Component{

render(){    
    const { education } = this.props;
return(
    <div className="education">
        <Navbar />
         <div className="education-container">
             <div className="education-container-centered">
                 <div className="education-container-centered-content">
             <div className="education-container-centered-content-title"> <h1 className="education-container-centered-content-title-tag"> {education.title} </h1></div>
             <div className="education-container-centered-content-concentration"> <h2 className="education-container-centered-content-concentration-tag">{education.concentration}</h2></div>
             <div className="education-container-centered-content-university"> <h2 className="education-container-centered-content-university-tag">{education.university}</h2></div>
             <div className="education-container-centered-content-description"><h2 className="education-container-centered-content-description-tag"> {education.description}</h2></div>
             </div>
             <div className="education-container-centered-image">
                 </div>
             </div>
             </div>
        </div>
)

}//end of the render 
}//end of the educationComponent


const eduactionSetProps = (state)=>{
    return{
        education:state.educationReducer
    }
}
export default connect(eduactionSetProps)(EducationComponent);