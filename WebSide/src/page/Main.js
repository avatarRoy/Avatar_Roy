import React from 'react';
import KeyP  from '../image/keyboard.jpg';

function Main(){
    return(

        <div class="MainPage">
            <div class="MyPicture">
                 <img src={KeyP}></img>
            </div>
            <div class="MinDes">
                <p>
                    Hi~<br />
                    這個靜態網站<br />
                    可以看到我在104上可以看到的東西<br />
                    如果貴公司願意給我個面試的機會<br />
                    可以再104找到我的連絡方式<br />
                </p>
            </div>

        </div>

    );
}

export default Main