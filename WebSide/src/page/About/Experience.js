import React from 'react';

function Plan() {

    function CloseCenter(e){
        e.currentTarget.parentElement.classList.remove('center_page');
        e.currentTarget.parentElement.classList.add('center_page');
        document.querySelector('.Experience > .Page_format > h1').classList.remove('small');
        document.querySelector('.Experience > .Page_format > h1').classList.add('small');
        document.querySelector('.Experience > .right_close').classList.remove('small');
        document.querySelector('.Experience > .right_close').classList.add('small');
        document.querySelector('.Experience > .Page_format > .componet_content').classList.remove('small');
        document.querySelector('.Experience > .Page_format > .componet_content').classList.add('small');
    }
    
    return(
        <div class="Experience mutipage right_1th_page">
        <div class="Page_format">
        <h1 class="small">學經歷</h1>
            <div class="componet_content small">
                <div class="bk_image">
                    <p>
					2013 &#9; &#9;畢業於中華科技大學電子工程系<br />
					2014 &#9; &#9;海軍役畢<br />
					2015 &#9; &#9;資策會嵌入式系統結訓<br />
					2015-2018 &#9;AMI 美商安邁助理工程師 負責Server BMC 相關Ipmi OEM , bug處理<br />
					2018-2019 &#9;Lanner 立端科技工程師  負責Server BMC 相關Ipmi OEM , bug處理<br />
                    </p>
                </div>
            </div>
        </div>
        <div class="right_close small" onClick={CloseCenter}><i class="fas fa-redo-alt"></i></div>
        </div>
    );
}

export default Plan;
