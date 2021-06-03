import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const SideNavBar = ()=>{

    
    const [list, setList] = useState(['Experience' , 'Education' , 'Skills']);

   

return(
<div className="sideBar">
<div className="sideBar-container">
   {   
       list.map((element)=>{
           return(
              
                   <div key={element} className="sideBar-container-content">
                   <ul className="sideBar-container-content-ul">
                       <li className="sideBar-container-content-ul-li">
                           <Link  to={`/${element}`}>{element}</Link>
                       </li>
                   </ul>
                   </div>
           )
       })
   }

</div>
    </div>
)//end of the return
}//end of the sideBar function

export default SideNavBar;


