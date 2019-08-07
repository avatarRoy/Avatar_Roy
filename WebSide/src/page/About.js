import React , { useEffect ,useState} from 'react';
import Hobby from './About/Hobby';
import Plan from './About/Plan';
import WorkExperience from './About/WorkExperience';
import Experience from './About/Experience';
import MovePage from './About/MovePage';
import $ from 'jquery';

function About(){
    const InitPageClass = [
        ".Hobby",
        ".Plan",
        ".Experience",
        ".WorkExperience",
    ];
    var NowPage  = 0;
	const InitPage = [{Id:0,Title:"",ClassName:"",Content:""}];
	const[JsonData,setJsonData] = useState(InitPage);
	const[PageArray,setPageArray] = useState(InitPageClass);

    useEffect(() =>{
        var ArrowButton = document.querySelectorAll('.arrow_button');
        $('.mutipage.center_page').on('click',function(e){
            var center_page_title = PageArray[NowPage] +" > .Page_format > h1";
            var center_back = PageArray[NowPage] +" > .right_close";
            var center_content = PageArray[NowPage] + " > .Page_format > .componet_content";
            $('.mutipage.center_page').removeClass('center_page');
            $(center_page_title).removeClass('small');
            $(center_back).removeClass('small');
            $(center_content).removeClass('small');
        });
        for(var i=0;i<ArrowButton.length;i++){
            ArrowButton[i].addEventListener('animationend',(e)=>{
                e.currentTarget.style.animation = "";
            });
        }
    });

	useEffect(() =>{
        var Burl =  "/api/TEST";
        var TempArray = [];
        fetch(Burl).then((res) => {
            return res.json();
        }).then((data) =>{ 
            setJsonData(data);
            for(var i=0;i<data.length;i++){
                TempArray[i] = "." + data[i].ClassName;
            }
            setPageArray(TempArray);
        });
	},([]));

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
            var center_page_title = PageArray[NowPage] +" > .Page_format > h1";
            var center_back = PageArray[NowPage] +" > .right_close";
            var center_content = PageArray[NowPage] + " > .Page_format > .componet_content";
            $('.mutipage.center_page').removeClass('center_page');
            $(center_page_title).removeClass('small');
            $(center_back).removeClass('small');
            $(center_content).removeClass('small');
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
            <div class="Left_next arrow_button"  onClick={ShiftRight}> &lt;&lt; </div>
            <div class="Right_next arrow_button"   onClick={ShiftLeft}>  &gt;&gt; </div>
            <div class="About_header">
            <h1 >About</h1>
            <small>Hi 這邊你可以看到一些關於我的資訊<br /></small>
			<small>Mail : mynameisroy89@gmail.com <br /></small>
			<small>Phone: 0919214765</small>
            </div>
            {
                JsonData.map((data,index) =>{
                    return	<MovePage key={data.ClassName} Title={data.Title} Content={data.Content} ClassName={data.ClassName} Local={index} />
                })
            }
        </div>
    );

}

export default About
