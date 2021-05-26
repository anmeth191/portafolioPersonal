import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ()=>{

    return(
     <nav className="navbar">
         
         <div className="navbar-container">
         <div className="navbar-container-containerLogo">
            <Link to="/"> <h2 className="navbar-container-containerLogo-title">Home</h2></Link>
             </div>
             <div className="navbar-container-containerLinks">
             <ul className="navbar-container-containerLinks-ul">
             <li className="navbar-container-containerLinks-ul-li">
                 <Link to="/skills" className="navbar-container-containerLinks-ul-li-links">Skills</Link>
                 <Link to="/education" className="navbar-container-containerLinks-ul-li-links"> Education </Link>
                 <Link to="/experience" className="navbar-container-containerLinks-ul-li-links">Experience</Link>
            </li>    
             </ul>
             </div>
            </div>
         
         </nav>
    )
}


export default Navbar;