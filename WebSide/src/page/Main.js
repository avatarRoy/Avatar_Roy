import React from 'react';
import KeyP  from '../image/keyboard.jpg';
import Ugly from '../image/ugly.jpg';
import $ from 'jquery';

function Main(){
    function Pic(){
        $(".MyPicture img").toggleClass("but");
    }
    return(

        <div class="MainPage">
            <div class="MyPicture" onMouseEnter={Pic} onMouseLeave={Pic}>
                 <img src={KeyP}></img>
                 <img class="but" src={Ugly}></img>
            </div>

            <div class="MinDes">
                <p>
                Hi~~<br /><br />
                這是一個半成品的靜態網站<br />
                在找到相關工作前<br />
                我會持續更新<br />
                盡量完善這個履歷站<br />
                請不要用太低解析度看這個網站..<br />
                因為RWD方面還再想要怎麼做...<br />
                最近覺得前後端蠻有趣的<br />
                想試著換個職業跑道<br />
                希望能夠從事前端後端的相關工作<br />       
                這邊<br />
                可以看到我在104上可以看到的東西<br />
                如果貴公司願意給我個面試的機會<br />
                可以再104找到我的連絡方式<br />

                </p>
            </div>

        </div>

    );
}

export default Main
