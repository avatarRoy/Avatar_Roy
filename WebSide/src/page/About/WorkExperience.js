import React from 'react';
import $ from 'jquery';

function WorkExperience() {

    function NextPage(){
        $('.WorkExperience > .Page_format > .componet_content > .bk_image').toggleClass('under');
    }

    function CloseCenter(e){
        e.currentTarget.parentElement.classList.remove('center_page');
        e.currentTarget.parentElement.classList.add('center_page');
        document.querySelector('.WorkExperience > .Page_format > h1').classList.remove('small');
        document.querySelector('.WorkExperience > .Page_format > h1').classList.add('small');
        document.querySelector('.WorkExperience > .right_close').classList.remove('small');
        document.querySelector('.WorkExperience > .right_close').classList.add('small');
        document.querySelector('.WorkExperience > .Page_format > .componet_content').classList.remove('small');
        document.querySelector('.WorkExperience > .Page_format > .componet_content').classList.add('small');
    }

    return(
        <div class="WorkExperience mutipage right_1th_page">
        <div class="Page_format">
            <h1 class="small">生平</h1>
            <div class="componet_content small">
                <div class="bk_image">
                    <p>
                    生於雙薪家庭，下有一個弟弟，因父母平日皆需上班，所以從小變養成了獨立自主的能力，父母雖工作繁忙，但仍然沒忘了我與弟弟的品德教育，與家人想處融洽。

平時的興趣，為看看課外讀物，希望能夠增廣見聞，偶爾玩玩電玩遊戲，或者會從事慢跑之類的運動保持身體的健康。

於高中階段，因當時沒十分確定的目標，所以選擇了高職的綜合高中，希望能夠體驗兩者間的差別，期間對於高職課程的專業訓練，感到十分的興趣，便於高二選擇了電子相關的班別，成績雖說沒名列前茅，但也保持於前段。
大學時，考慮了通勤以及住宿想關的生活開銷，所以選擇了離加較近的私立科技大學，大學期間接觸到了程式語言，便對此產生了濃厚興趣，也開始對此進展，大三時的專題課程，讓我接觸了軟體控制硬體，也就是韌體這個嶄新的領域，讓我大開了眼界，看到了韌體方面的博大精深，便希望能夠在該領域學習研究，並且從事相關的產業。
大學畢業並退伍後，花了點時間在找工作，了解到自己在專業方面知識與能力的不足，在網路上找到了政府的相關職業訓練，便進入了資策會這個訓練機構，希望能夠藉由這個地方，補足自己不足的知識與能力，於資策會結訓後，因緣際會下進入了AMI  這間公司，負責IPMI相關的前端後部分後端，這期間接觸過的程式語言C和一些java，並熟悉linux  環境，以及jquery、backbone.js、restful  api  等等 
                    </p>
                </div>
            </div>

        </div>
        <div class="right_close small" onClick={CloseCenter}><i class="fas fa-redo-alt"></i></div>
        </div>
    );
}

export default WorkExperience;
