import React from 'react';
import Navbar from './Navbar';
import SideNavBar from './sideNavbar';

import { connect } from 'react-redux';

class HomeComponent extends React.Component{

render(){
    const { name , lastName } = this.props.information;
    return(
   
    <div className="homeComponent">
        <Navbar />
    
        <div className="homeComponent-container">
            <div className="homeComponent-container-content">
            <h1 className="homeComponent-container-content-title" >Welcome</h1>
            <h3 className="homeComponent-container-content-secondary">{`Hi my name is ${name} ${lastName} ,  i live in USA`}</h3>
            <h3 className="homeComponent-container-content-secondary">This website is made using React and Redux <br /> with Sass  for the Style</h3>
            </div>
            </div>
            </div>
         
)//end of the return
}//end of the render
} //end of the class Component

const personalInfoState = (state)=>{
return{information:state.personalInfo}
}

export default connect(personalInfoState)(HomeComponent);
