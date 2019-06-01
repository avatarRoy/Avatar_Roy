import '../../App.css';
import React from 'react';


function Hobby() {

    function CloseCenter(e){
        e.currentTarget.parentElement.classList.remove('center_page');
        e.currentTarget.parentElement.classList.add('center_page');
    }
    
    return(
        <div class="Hobby mutipage center_page">
            <h1>Hobby Page</h1>
            <div class="right_close" onClick={CloseCenter}><i class="fas fa-redo-alt"></i></div>
        </div>
    );
}

export default Hobby;