import React from 'react';

function Plan() {

    function CloseCenter(e){
        e.currentTarget.parentElement.classList.remove('center_page');
        e.currentTarget.parentElement.classList.add('center_page');
        document.querySelector('.Plan > .Page_format > h1').classList.remove('small');
        document.querySelector('.Plan > .Page_format > h1').classList.add('small');
        document.querySelector('.Plan > .right_close').classList.remove('small');
        document.querySelector('.Plan > .right_close').classList.add('small');
        document.querySelector('.Plan > .Page_format > .componet_content').classList.remove('small');
        document.querySelector('.Plan > .Page_format > .componet_content').classList.add('small');
    }
    
    return(
        <div class="Plan mutipage right_1th_page">
        <div class="Page_format">
        <h1 class="small">專業技能</h1>
            <div class="componet_content small">
                <div class="bk_image">
                    <p>
                    
                        相關知識 :<br />
                        C、Linux、jQuery、HTML、JavaScript、AJAX、嵌入式系統設計，嵌入式Linux，backbone.js，Restful api，以及最近再研究的react.js 	<br />
                        以及之後計畫的PHP之類的後端語言<br />
                        語言能力 :<br />
                        英文差不多多益400分<br/>
                        能夠勉強和外國人溝通的程度<br/>
                        然後閱讀能夠看懂文件相關Spec<br/>
                    </p>
                </div>
            </div>
        </div>
        <div class="right_close small" onClick={CloseCenter}><i class="fas fa-redo-alt"></i></div>
        </div>
    );
}

export default Plan;
