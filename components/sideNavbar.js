import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const SideNavBar = (props)=>{

    let { display } = props;

    let show = display === true ? 'block' : 'none';
  

const [list, setList] = useState(['Experience' , 'Education' , 'Skills']);

//Create a React portal in order to display the sideBar
return ReactDOM.createPortal( 
<div className="sideNavbar" style={{ display:`${ show }`}}>
<div className="sideNavbar-container">
<div className="sideNavbar-container-elements">
    <ul className="sideNavbar-container-elements-ul">
        { 
            list.map((element)=>{
                return(
                    <li key={element} className="sideNavbar-container-elements-ul-li">
                        <Link to={`/${element}`}>{element}</Link>
                    </li>
                )//end of the return
            }) //end of the map function
        } 
        </ul>
    </div>
</div>
</div>
 , document.querySelector("#sideNavbar-modal"))

}//end of the sideNavbar

export default SideNavBar;


