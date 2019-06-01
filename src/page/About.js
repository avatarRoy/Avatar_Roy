import React , { useEffect } from 'react';
import Hobby from './About/Hobby';
import Plan from './About/Plan';
import WorkExperience from './About/WorkExperience';
import '../App.css';
import $ from 'jquery';

function About(){
    const PageArray = [
        ".Hobby",
        ".Plan",
        ".WorkExperience"
    ];
    var NowPage  = 0;

    useEffect(() =>{
        $('.mutipage.center_page').on('click',function(e){
            e.target.classList.remove('center_page');
        });
    });

    function SortPage(){
        $('.mutipage.center_page').unbind('click');
        for(var i =0;i<PageArray.length;i++){
            if(i > NowPage){
                $(PageArray[i]).removeClass('left_1th_page right_1th_page center_page');
                $(PageArray[i]).addClass('right_1th_page');
            }else if(i < NowPage){
                $(PageArray[i]).removeClass('right_1th_page left_1th_page center_page');
                $(PageArray[i]).addClass('left_1th_page');
            }else if(i == NowPage){
                $(PageArray[i]).removeClass('right_1th_page left_1th_page');
                $(PageArray[i]).addClass('center_page');
            }
        }
        $('.mutipage.center_page').on('click',function(e){
            e.target.classList.remove('center_page');
        });
    }

    function ShiftBlock(arrow){
        switch(arrow){
            case 'Right':
                if(NowPage > 0)
                    NowPage --;
            break;
            case "Left":
                if(NowPage < PageArray.length -1)
                    NowPage ++;
            break;
            default:
            //do nothing
            break;
        }
        SortPage();
    }

    function ShiftRight(e){
        var NowElement = e.currentTarget;
        NowElement.style.animation = "Shake 0.5s ease";
        NowElement.addEventListener('animationend',()=>{
          NowElement.style.animation = "";
        });
        ShiftBlock('Right');
    }

    function ShiftLeft(e){

        var NowElement = e.currentTarget;
        NowElement.style.animation = "Shake 0.5s ease";
        NowElement.addEventListener('animationend',()=>{
          NowElement.style.animation = "";
        });
        ShiftBlock('Left');

    }

    return(
        <div>
            <div class="Right_next"  onClick={ShiftRight}> &gt;&gt; </div>
            <div class="Left_next"   onClick={ShiftLeft}>  &lt;&lt; </div>

            <Hobby />
            <Plan />
            <WorkExperience />
        </div>
    );

}

export default About