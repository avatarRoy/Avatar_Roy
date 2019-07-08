import React from 'react';


function Hobby() {

    function CloseCenter(e){
        e.currentTarget.parentElement.classList.remove('center_page');
        e.currentTarget.parentElement.classList.add('center_page');
        document.querySelector('.Hobby > .Page_format > h1').classList.remove('small');
        document.querySelector('.Hobby > .Page_format > h1').classList.add('small');
        document.querySelector('.Hobby > .right_close').classList.remove('small');
        document.querySelector('.Hobby > .right_close').classList.add('small');
        document.querySelector('.Hobby > .Page_format > .componet_content').classList.remove('small');
        document.querySelector('.Hobby > .Page_format > .componet_content').classList.add('small');
    }
    
    return(

        <div class="Hobby mutipage center_page">
            <div class="Page_format">
            <h1 class="small">興趣</h1>
            <div class="componet_content small">
                <div class="bk_image">
                    <p>
                    騎腳踏車，益智玩具<br />
                    假日沒事的時候，會騎著ubike <br />
                    在台北沒有目標得隨便逛逛，<br />
                    又或者腦袋放空拿著魔術方塊轉轉，<br />
                    至於最近對寫HTML、javascript、css覺得蠻有趣的<br />
                    就開始閒暇時加減研究<br />
                    這個網站就是用下班閒暇之餘，試著用react.js做出來。<br />
                    之後計劃研究後端相關的語言與實做 <br />
                    雖然看起來還有有點兩光，但希望能夠慢慢得把他改好囉。<br />
                    </p>
                </div>
            </div>
            </div>
            <div class="right_close small" onClick={CloseCenter}><i class="fas fa-redo-alt"></i></div>
        </div>

    );
}

export default Hobby;
