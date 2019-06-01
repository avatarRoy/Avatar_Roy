import React from 'react';
import './App.css';
import $ from 'jquery';
function Buger(){
    
    function ButtomArrow(e){
        e.preventDefault();
        $('.line2').hide();
        alert("AAA");
    }
    return(
        <div class="buger" onMouseOver={ButtomArrow} >
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
        </div>
    );
}

export default Buger;