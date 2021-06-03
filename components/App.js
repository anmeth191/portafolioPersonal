import React from 'react';
import {BrowserRouter as Router , Route , Switch } from 'react-router-dom';  
import  SkillComponent  from './SkillComponent';
import HomeComponent from './HomeComponent';
import EducationComponent from './EducationComponent';
import ExperienceComponent from './ExperienceComponent';


class App extends React.Component{

render(){
return(
    <Router>
        <Switch>
        <Route exact path="/" component={HomeComponent} />
        <Route  path="/skills" component={SkillComponent} />
        <Route path="/education" component={EducationComponent} />
        <Route path="/experience" component={ExperienceComponent} /> 
        </Switch>
        </Router>
)//end of the return
}//end of the render
}//end of the class

export default App;
