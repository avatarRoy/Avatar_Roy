import React,{useEffect , useState} from 'react';


function MovePage({Title,Content,ClassName,Local}) {

	const [CLASS,setCLASS] = useState('class');

	useEffect(() => {
		var CLASS_NAME = ClassName + " mutipage " + Local;
		setCLASS(CLASS_NAME);
	},([]));

    function CloseCenter(e){
		var Small_Title = "." + ClassName + " > .Page_format > h1";
		var Small_Close = "." + ClassName + " > .right_close";
		var Small_Content = "." + ClassName + " > .Page_format > .componet_content";
        e.currentTarget.parentElement.classList.remove('center_page');
        e.currentTarget.parentElement.classList.add('center_page');
        document.querySelector(Small_Title).classList.remove('small');
        document.querySelector(Small_Title).classList.add('small');
        document.querySelector(Small_Close).classList.remove('small');
        document.querySelector(Small_Close).classList.add('small');
        document.querySelector(Small_Content).classList.remove('small');
        document.querySelector(Small_Content).classList.add('small');
    }
    
    return(

        <div class={CLASS}>
            <div class="Page_format">
            <h1 class="small">{Title}</h1>
            <div class="componet_content small">
                <div class="bk_image">
                    <p>
						{Content}
                    </p>
                </div>
            </div>
            </div>
            <div class="right_close small" onClick={CloseCenter}><i class="fas fa-redo-alt"></i></div>
        </div>

    );
}

export default MovePage;
