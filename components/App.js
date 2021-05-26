import React from 'react';
import {BrowserRouter as Router , Route , Switch } from 'react-router-dom';  
import  SkillComponent  from './SkillComponent';
import HomeComponent from './HomeComponent';

class App extends React.Component{

render(){
return(
    <Router>
        <Switch>
            <Route exact path="/" component={HomeComponent} />
        <Route  path="/skills" component={SkillComponent} />
        </Switch>
        </Router>
)//end of the return
}//end of the render
}//end of the class

export default App;
