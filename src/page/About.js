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
        var ArrowButton = document.querySelectorAll('.arrow_button');
        $('.mutipage.center_page').on('click',function(e){
            e.target.classList.remove('center_page');
        });
        for(var i=0;i<ArrowButton.length;i++){
            ArrowButton[i].addEventListener('animationend',(e)=>{
                e.currentTarget.style.animation = "";
            });
        }
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

    function ShiftBlock(arrow,e){
        switch(arrow){
            case 'Right':
                if(NowPage > 0){
                    NowPage --;
                    ArrowShiftAnimation(e);
                }else{
                    ArrowStopAnimation(e);
                }
            break;
            case "Left":
                if(NowPage < PageArray.length -1){
                    NowPage ++;
                    ArrowShiftAnimation(e);
                }else{
                    ArrowStopAnimation(e);
                }
            break;
            default:
            //do nothing
            break;
        }
        SortPage();
    }

    function ArrowShiftAnimation(e){
        var NowElement = e.currentTarget;
        NowElement.style.animation = "Shake 0.5s ease";
    }


    function ArrowStopAnimation(e){
        var NowElement = e.currentTarget;
        NowElement.style.animation = "EndShake 0.5s ease";
    }


    function ShiftRight(e){
        ShiftBlock('Right',e);
    }

    function ShiftLeft(e){
        ShiftBlock('Left',e);
    }

    return(
        <div>
            <div class="Right_next arrow_button"  onClick={ShiftRight}> &gt;&gt; </div>
            <div class="Left_next arrow_button"   onClick={ShiftLeft}>  &lt;&lt; </div>
            <h1 class="About_header">Hi Here will show my introduction</h1>
            <Hobby />
            <Plan />
            <WorkExperience />
        </div>
    );

}

export default About