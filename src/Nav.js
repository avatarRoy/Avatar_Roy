import React from 'react';
import {Link} from 'react-router-dom';
//import Buger from './Buger';

function Nav(){
   
    function listDisplay(e){
        document.querySelector(".list-item").classList.toggle("open");
    }
/* remove listbox
    <div class="Nav-list"> 
    <div class="Nav-item" onClick={listDisplay}>About me</div>
    <ul class="list-item">
        <li><Link to="/About/WorkExperience">Work experiences</Link></li>
        <li><Link to="/About/Hobby">Hobby</Link></li>
        <li><Link to="/About/Plan">Plan</Link></li>
    </ul>
    </div>
*/
    return(
        <nav class="Nav">
            <div><h3>Logo</h3></div>
            <div class="Detail-item">
                <div class="Nav-item"> 
                    <Link to="/About"><i class="fas fa-address-card"></i> &nbsp; About</Link>
                </div>
                <div class="Nav-item"> 
                    <Link to="#Blog"><i class="fa fa-home"></i>Blog</Link>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
