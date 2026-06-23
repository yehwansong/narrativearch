
var isMobile = false;
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
    isMobile = true;
}
var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
var isFirefox = typeof InstallTrigger !== 'undefined';
var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
var isIE = /*@cc_on!@*/false || !!document.documentMode;
var isEdge = !isIE && !!window.StyleMedia;
var isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
var isEdgeChromium = isChrome && (navigator.userAgent.indexOf("Edg") != -1);
var isBlink = (isChrome || isOpera) && !!window.CSS;
		var lang = 'en'
if(isSafari){
	$('.wrap_2').removeClass('big_shuffle')
}
if(isEdge){
	$('*').css({'transition':'none'})
}

$(document).ready(function(){
if(!isMobile){
            $('head').append('<link rel="stylesheet" href="css/style.css" type="text/css" />');
            $('.title_wrap_2_1 .last_1').append('\
                            <div class="last last_2 last_2_1 rowcol_unset" style="height: 100%; width: 100%;"> \
                                <div class="last last_3 last_3_2 rowcol_unset merged blank" style="height: 100%; width: 100%;">\
                                    <div class="blank_inner" style="width: calc(448px + 100%); height: calc(329.812px + 100%);"></div>\
                                </div>\
                                <div class="last last_3 last_3_1 rowcol_unset" style="height: 100%; width: 100%;">\
                                    <div class="last_4_m last last_3 last_3_1 rowcol_unset" style="height: 100%; width: 100%;"> \
                                        <div class="last last_4 last_4_1 rowcol_unset unset red animate" style="height: 100%; width: 100%;">  \
                                            <div class="blank_inner" style="width: calc(840px + 100%); height: calc(449.266px + 100%);"></div>\
                                        <div class="coloreffect coloreffect_h"></div></div> \
                                        <div class="last last_4 last_4_2 rowcol_unset unset red" style="height: 100%; width: 100%;">  \
                                            <div class="blank_inner" style="width: calc(840px + 100%); height: calc(389.531px + 100%);"></div>\
                                        <div class="coloreffect coloreffect_w"></div></div> \
                                        <div class="last last_4 last_4_3 rowcol_unset unset red animate" style="height: 100%; width: 100%;">  \
                                            <div class="blank_inner" style="width: calc(840px + 100%); height: calc(329.797px + 100%);"></div>\
                                        <div class="coloreffect coloreffect_h"></div></div> \
                                    </div>\
                                    <div class="last last_4 last_4_1 rowcol_unset unset red" style="height: 100%; width: 100%;">  \
                                        <div class="blank_inner" style="width: calc(784px + 100%); height: calc(329.812px + 100%);"></div>\
                                    <div class="coloreffect coloreffect_h"></div></div> \
                                    <div class="last last_4 last_4_2 rowcol_unset unset red animate" style="height: 100%; width: 100%;">  \
                                        <div class="blank_inner" style="width: calc(728px + 100%); height: calc(329.812px + 100%);"></div>\
                                    <div class="coloreffect coloreffect_h"></div></div> \
                                    <div class="last last_4 last_4_3 rowcol_unset unset red animate" style="height: 100%; width: 100%;">  \
                                        <div class="blank_inner" style="width: calc(672px + 100%); height: calc(329.812px + 100%);"></div>\
                                    <div class="coloreffect coloreffect_h"></div></div> \
                                </div>\
                            </div>\
                            <div class="last last_2 last_2_2 rowcol_1" style="height: 100%; width: 100%;">\
                                <div class="last last_3 last_3_1 rowcol_unset" style="height: 100%; width: 100%;">\
                                        <div class="last_4_m last last_3 last_3_1 rowcol_unset" style="height: 100%; width: 100%;"> \
                                            <div class="last last_4 last_4_1 rowcol_unset unset red animate" style="height: 100%; width: 100%;">  \
                                                <div class="blank_inner" style="width: calc(429.328px + 100%); height: calc(329.812px + 100%);"></div>\
                                            <div class="coloreffect coloreffect_h"></div></div> \
                                            <div class="last last_4 last_4_2 rowcol_unset unset red animate" style="height: 100%; width: 100%;">  \
                                                <div class="blank_inner" style="width: calc(410.656px + 100%); height: calc(329.812px + 100%);"></div>\
                                            <div class="coloreffect coloreffect_h"></div></div> \
                                            <div class="last last_4 last_4_3 rowcol_unset unset" style="height: 100%; width: 100%;">  \
                                                <div class="blank_inner" style="width: calc(391.984px + 100%); height: calc(329.812px + 100%);"></div>\
                                            <div class="coloreffect coloreffect_w"></div></div> \
                                        </div>\
                                                                \
                                        <div class="last last_4 last_4_1 rowcol_unset unset red" style="height: 100%; width: 100%;">  \
                                            <div class="blank_inner" style="width: calc(336px + 100%); height: calc(329.812px + 100%);"></div>\
                                        <div class="coloreffect coloreffect_w"></div></div> \
                                        <div class="last last_4 last_4_2 rowcol_unset unset red animate" style="height: 100%; width: 100%;">  \
                                            <div class="blank_inner" style="width: calc(280px + 100%); height: calc(329.812px + 100%);"></div>\
                                        <div class="coloreffect coloreffect_h"></div></div> \
                                        <div class="last last_4 last_4_3 rowcol_unset unset red animate" style="height: 100%; width: 100%;">  \
                                            <div class="blank_inner" style="width: calc(224px + 100%); height: calc(329.812px + 100%);"></div>\
                                        <div class="coloreffect coloreffect_w"></div></div> \
                                </div>\
                                <div class="last last_3 last_3_2 rowcol_unset" style="height: 100%; width: 100%;">\
                                        <div class="last_4_m last last_3 last_3_1 rowcol_unset" style="height: 100%; width: 100%;"> \
                                            <div class="last last_4 last_4_1 rowcol_unset unset red animate" style="height: 100%; width: 100%;">  \
                                                <div class="blank_inner" style="width: calc(0px + 100%); height: calc(329.812px + 100%);"></div>  \
                                            <div class="coloreffect coloreffect_w"></div></div> \
                                            <div class="last last_4 last_4_2 rowcol_unset unset red animate" style="height: 100%; width: 100%;">  \
                                                <div class="blank_inner" style="width: calc(18.6719px + 100%); height: calc(329.812px + 100%);"></div>\
                                            <div class="coloreffect coloreffect_w"></div></div> \
                                            <div class="last last_4 last_4_3 rowcol_unset unset red animate" style="height: 100%; width: 100%;">  \
                                                <div class="blank_inner" style="width: calc(37.3438px + 100%); height: calc(329.812px + 100%);"></div>\
                                            <div class="coloreffect coloreffect_h"></div></div> \
                                        </div>\
                                                            \
                                        <div class="last last_4 last_4_1 rowcol_unset unset red animate" style="height: 100%; width: 100%;">  \
                                            <div class="blank_inner" style="width: calc(56px + 100%); height: calc(329.812px + 100%);"></div> \
                                        <div class="coloreffect coloreffect_h"></div></div> \
                                        <div class="last last_4 last_4_2 rowcol_unset unset red animate" style="height: 100%; width: 100%;">  \
                                            <div class="blank_inner" style="width: calc(112px + 100%); height: calc(329.812px + 100%);"></div>\
                                        <div class="coloreffect coloreffect_w"></div></div> \
                                        <div class="last last_4 last_4_3 rowcol_unset unset red" style="height: 100%; width: 100%;">  \
                                            <div class="blank_inner" style="width: calc(168px + 100%); height: calc(329.812px + 100%);"></div>\
                                        <div class="coloreffect coloreffect_w"></div></div>           \
                                </div>\
                            </div>\
            ')  
            $('.title_wrap_2_2 .last_1').append('\
                            <div class="last last_2 last_2_1 rowcol_1" style="height: 100%; width: 100%;">\
                                <div class="last last_3 last_3_1 rowcol_unset" style="height: 100%; width: 100%;">  \
                                    <div class="last_4_m last last_3 last_3_1 rowcol_unset" style="height: 100%; width: 100%;"> \
                                        <div class="last last_4 last_4_1 rowcol_unset unset red" style="height: 100%; width: 100%;">  \
                                            <div class="blank_inner" style="width: calc(0px + 100%); height: calc(499.047px + 100%);"></div>  \
                                        <div class="coloreffect coloreffect_w"></div></div> \
                                        <div class="last last_4 last_4_2 rowcol_unset unset red animate" style="height: 100%; width: 100%;">  \
                                            <div class="blank_inner" style="width: calc(0px + 100%); height: calc(489.094px + 100%);"></div>  \
                                        <div class="coloreffect coloreffect_w"></div></div> \
                                        <div class="last last_4 last_4_3 rowcol_unset unset red animate" style="height: 100%; width: 100%;">  \
                                            <div class="blank_inner" style="width: calc(0px + 100%); height: calc(479.141px + 100%);"></div>  \
                                        <div class="coloreffect coloreffect_h"></div></div> \
                                    </div>\
                                    <div class="last_4_m last last_3 last_3_2 rowcol_unset" style="height: 100%; width: 100%;"> \
                                        <div class="last last_4 last_4_1 rowcol_unset unset red animate" style="height: 100%; width: 100%;">  \
                                            <div class="blank_inner" style="width: calc(0px + 100%); height: calc(469.188px + 100%);"></div>  \
                                        <div class="coloreffect coloreffect_w"></div></div> \
                                        <div class="last last_4 last_4_2 rowcol_unset unset red animate bgon" style="height: 100%; width: 100%;"> \
                                            <div class="blank_inner" style="width: calc(0px + 100%); height: calc(459.234px + 100%);"></div>  \
                                        <div class="coloreffect coloreffect_h"></div></div> \
                                        <div class="last last_4 last_4_3 rowcol_unset unset red" style="height: 100%; width: 100%;">  \
                                            <div class="blank_inner" style="width: calc(0px + 100%); height: calc(449.281px + 100%);"></div>  \
                                        <div class="coloreffect coloreffect_w"></div></div> \
                                    </div>\
                                    <div class="last_4_m last last_3 last_3_3 rowcol_unset" style="height: 100%; width: 100%;"> \
                                        <div class="last last_4 last_4_1 rowcol_unset unset red animate bgon" style="height: 100%; width: 100%;"> \
                                            <div class="blank_inner" style="width: calc(0px + 100%); height: calc(439.328px + 100%);"></div>  \
                                        <div class="coloreffect coloreffect_h"></div></div> \
                                        <div class="last last_4 last_4_2 rowcol_unset unset red animate" style="height: 100%; width: 100%;">  \
                                            <div class="blank_inner" style="width: calc(0px + 100%); height: calc(429.375px + 100%);"></div>  \
                                        <div class="coloreffect coloreffect_w"></div></div> \
                                        <div class="last last_4 last_4_3 rowcol_unset unset red animate bgon" style="height: 100%; width: 100%;"> \
                                            <div class="blank_inner" style="width: calc(0px + 100%); height: calc(419.422px + 100%);"></div>  \
                                        <div class="coloreffect coloreffect_w"></div></div> \
                                    </div>\
                                                            \
                                    <div class="last last_4 last_4_1 rowcol_unset unset red animate" style="height: 100%; width: 100%;">  \
                                        <div class="blank_inner" style="width: calc(0px + 100%); height: calc(389.562px + 100%);"></div>  \
                                    <div class="coloreffect coloreffect_w"></div></div> \
                                    <div class="last last_4 last_4_2 rowcol_unset unset red animate" style="height: 100%; width: 100%;">  \
                                        <div class="blank_inner" style="width: calc(0px + 100%); height: calc(359.703px + 100%);"></div>  \
                                    <div class="coloreffect coloreffect_h"></div></div> \
                                    <div class="last last_4 last_4_3 rowcol_unset unset red animate" style="height: 100%; width: 100%;">  \
                                        <div class="blank_inner" style="width: calc(0px + 100%); height: calc(329.844px + 100%);"></div>  \
                                    <div class="coloreffect coloreffect_h"></div></div>         \
                                </div>\
                                <div class="last last_3 last_3_2 rowcol_unset merged blank" style="height: 100%; width: 100%;"><div class="blank_inner" style="width: \calc(224px + 100%); height: calc(329.812px + 100%);"></div>\
                                </div> \
                            </div>\
                            <div class="last last_2 last_2_2 rowcol_0" style="height: 100%; width: 100%;">\
                                <div class="last last_3 last_3_1 rowcol_1" style="height: 100%; width: 100%;">\
                                        <div class="last_4_m last last_3 last_3_1 rowcol_unset" style="height: 100%; width: 100%;"> \
                                            <div class="last last_4 last_4_1 rowcol_unset unset red animate" style="height: 100%; width: 100%;">  \
                                                <div class="blank_inner" style="width: calc(448px + 100%); height: calc(419.406px + 100%);"></div>\
                                            <div class="coloreffect coloreffect_h"></div></div> \
                                            <div class="last last_4 last_4_2 rowcol_unset unset red animate" style="height: 100%; width: 100%;">  \
                                                <div class="blank_inner" style="width: calc(485.328px + 100%); height: calc(419.406px + 100%);"></div>\
                                            <div class="coloreffect coloreffect_h"></div></div> \
                                            <div class="last last_4 last_4_3 rowcol_unset unset red animate" style="height: 100%; width: 100%;">  \
                                                <div class="blank_inner" style="width: calc(522.656px + 100%); height: calc(419.406px + 100%);"></div>\
                                            <div class="coloreffect coloreffect_w"></div></div> \
                                        </div>\
                                                            \
                                        <div class="last last_4 last_4_1 rowcol_unset unset red" style="height: 100%; width: 100%;">  \
                                            <div class="blank_inner" style="width: calc(560px + 100%); height: calc(419.406px + 100%);"></div>\
                                        <div class="coloreffect coloreffect_w"></div></div> \
                                        <div class="last last_4 last_4_2 rowcol_unset unset red animate" style="height: 100%; width: 100%;">  \
                                            <div class="blank_inner" style="width: calc(672px + 100%); height: calc(419.406px + 100%);"></div>\
                                        <div class="coloreffect coloreffect_h"></div></div> \
                                        <div class="last last_4 last_4_3 rowcol_unset unset red animate" style="height: 100%; width: 100%;">  \
                                            <div class="blank_inner" style="width: calc(784px + 100%); height: calc(419.406px + 100%);"></div>\
                                        <div class="coloreffect coloreffect_h"></div></div> \
                                </div>\
                                <div class="last last_3 last_3_2 rowcol_1" style="height: 100%; width: 100%;">\
                                    <div class="last_4_m last last_3 last_3_1 rowcol_unset" style="height: 100%; width: 100%;"> \
                                        <div class="last last_4 last_4_1 rowcol_unset unset red animate" style="height: 100%; width: 100%;">  \
                                            <div class="blank_inner" style="width: calc(448px + 100%); height: calc(389.547px + 100%);"></div>\
                                        <div class="coloreffect coloreffect_w"></div></div> \
                                        <div class="last last_4 last_4_2 rowcol_unset unset red animate" style="height: 100%; width: 100%;">  \
                                            <div class="blank_inner" style="width: calc(448px + 100%); height: calc(359.687px + 100%);"></div>\
                                        <div class="coloreffect coloreffect_w"></div></div> \
                                        <div class="last last_4 last_4_3 rowcol_unset unset red animate" style="height: 100%; width: 100%;">  \
                                            <div class="blank_inner" style="width: calc(448px + 100%); height: calc(329.828px + 100%);"></div>\
                                        <div class="coloreffect coloreffect_w"></div></div> \
                                    </div>\
                                    <div class="last_4_m last last_3 last_3_2 rowcol_unset" style="height: 100%; width: 100%;"> \
                                        <div class="last last_4 last_4_1 rowcol_unset unset red animate bgon" style="height: 100%; width: 100%;"> \
                                            <div class="blank_inner" style="width: calc(522.672px + 100%); height: calc(389.547px + 100%);"></div>\
                                        <div class="coloreffect coloreffect_w"></div></div> \
                                        <div class="last last_4 last_4_2 rowcol_unset unset red animate" style="height: 100%; width: 100%;">  \
                                            <div class="blank_inner" style="width: calc(522.672px + 100%); height: calc(359.687px + 100%);"></div>\
                                        <div class="coloreffect coloreffect_h"></div></div> \
                                        <div class="last last_4 last_4_3 rowcol_unset unset animate" style="height: 100%; width: 100%;">  \
                                            <div class="blank_inner" style="width: calc(522.672px + 100%); height: calc(329.828px + 100%);"></div>\
                                        <div class="coloreffect coloreffect_w"></div></div> \
                                    </div>\
                                    <div class="last_4_m last last_3 last_3_3 rowcol_unset" style="height: 100%; width: 100%;"> \
                                        <div class="last last_4 last_4_1 rowcol_unset unset red animate" style="height: 100%; width: 100%;">  \
                                            <div class="blank_inner" style="width: calc(597.344px + 100%); height: calc(329.812px + 100%);"></div>\
                                        <div class="coloreffect coloreffect_h"></div></div> \
                                        <div class="last last_4 last_4_2 rowcol_unset unset red animate bgon" style="height: 100%; width: 100%;"> \
                                            <div class="blank_inner" style="width: calc(622.234px + 100%); height: calc(329.812px + 100%);"></div>\
                                        <div class="coloreffect coloreffect_w"></div></div> \
                                        <div class="last last_4 last_4_3 rowcol_unset unset red animate" style="height: 100%; width: 100%;">  \
                                            <div class="blank_inner" style="width: calc(647.125px + 100%); height: calc(329.812px + 100%);"></div>\
                                        <div class="coloreffect coloreffect_w"></div></div> \
                                    </div>\
                                                            \
                                    <div class="last last_4 last_4_1 rowcol_unset unset red animate" style="height: 100%; width: 100%;">  \
                                        <div class="blank_inner" style="width: calc(672.016px + 100%); height: calc(329.812px + 100%);"></div>\
                                    <div class="coloreffect coloreffect_w"></div></div> \
                                    <div class="last last_4 last_4_2 rowcol_unset unset red animate" style="height: 100%; width: 100%;">  \
                                        <div class="blank_inner" style="width: calc(746.688px + 100%); height: calc(329.812px + 100%);"></div>\
                                    <div class="coloreffect coloreffect_h"></div></div> \
                                    <div class="last last_4 last_4_3 rowcol_unset unset red animate" style="height: 100%; width: 100%;">  \
                                        <div class="blank_inner" style="width: calc(821.359px + 100%); height: calc(329.812px + 100%);"></div>\
                                    <div class="coloreffect coloreffect_w"></div></div> \
                                </div>\
                            </div>\
            ')  
            $('body').append('\
                <div class="mixed_close"><img src="img/close_w.png"></div>\
                <div class="arranged_shadow"></div>\
            ') 
	$('.enterbutton').click(function(){
		$('.intro').hide()
		setTimeout(function(){
			pre_animate('',3)
		},300)	
		$('body').removeClass('start')
			$('.menu').css({'pointer-events':'none'})
			$('.textbox').css({'pointer-events':'none'})
			$('.bigtextbox').css({'pointer-events':'none'})
	})
	var img_array = [
		['thumb_1.png' ],
		['thumb_2.png' ],
		['thumb_3.png' ],
		['thumb_4.png' ],
		['thumb_5.png' ],
		['thumb_6.png' ],
		['thumb_7.png' ],
		['thumb_8.png' ],
		['thumb_9.png' ],
		['thumb_10.png'],
		['thumb_11_2.png','thumb_11_1.png']
	]
	if(window.location.hash) {
	    hash_data()
	}
	$( window ).on( 'hashchange', function( e ) {
	    hash_data()
	} );
	// removeHash ()
	function removeHash () { 
	    history.pushState("", document.title, window.location.pathname
	                                                       + window.location.search);
	}
	var ua = navigator.userAgent.toLowerCase();
	var isAndroid = ua.indexOf("android") > -1;
		var counter = 0
		var percentage_counter = 100
		var square_click_counter = 1
		var sizetimeout
		var w =  window.innerWidth
		var h =  window.innerHeight
		var w_2 =window.innerWidth/2
		var h_2 =window.innerHeight/2
		var downcounter = 0
		var arranged_seq
		var shrink_counter = 0
		var shrink_array = []
		var isarranged = false
		var ratio = [2708,1520]
		var image_w = ratio[0]*h/ratio[1]
// // // // // // // // // // // // // // // // // create form // // // // // // // // // // // // // // // // // // 
	random_generator()
	function random_generator(){
		counter++
		$('.main .last_'+counter).each(function(){
			if(counter == 1){
				$(this).append('<div class="last div_3 last_2 last_2_1 rowcol_1"></div>\
								<div class="last div_3 last_2 last_2_2 rowcol_'+Math.round(Math.random())+'"></div>\
								<div class="last div_3 last_2 last_2_3 rowcol_'+Math.round(Math.random())+'"></div>')
			}
			if(counter == 2){
				$(this).append('<div class="last div_2 last_3 last_3_1 rowcol_'+Math.round(Math.random())+'"></div>\
								<div class="last div_2 last_3 last_3_2 rowcol_1"></div>')
			}
			if(counter == 3){
				$(this).append('<div class="last div_3 last_4 last_4_1 rowcol_'+Math.round(Math.random())+'"></div>\
								<div class="last div_3 last_4 last_4_2 rowcol_'+Math.round(Math.random())+'"></div>\
								<div class="last div_3 last_4 last_4_3 rowcol_'+Math.round(Math.random())+'"></div>')
				$('.rowcol_unset').removeClass('rowcol_unset').addClass('rowcol_'+Math.round(Math.random()))
			}
		})
		if(counter<3){
			random_generator()
		}else{
				if(Math.round(Math.random()) == 1){
					merge($('.titlebox .wrap_2_2 .last_1 .last_2_2 .last_3_1'))
					$('.titlebox .wrap_2_2 .last_1 .last_2_2 .last_3_1').addClass('blank').append('<div class="blank_inner"></div>')
					
					merge($('.titlebox .wrap_2_1 .last_1 .last_2_1 .last_3_2'))
					$('.titlebox .wrap_2_1 .last_1 .last_2_1 .last_3_2').addClass('blank').append('<div class="blank_inner"></div>')

					merge($('.titlebox .wrap_2_2 .last_1 .last_2_1 .last_3_2'))
					$('.titlebox .wrap_2_2 .last_1 .last_2_1 .last_3_2').addClass('blank').append('<div class="blank_inner"></div>')

				}else{
					merge($('.titlebox .wrap_2_1 .last_1 .last_2_1 .last_3_2'))
					$('.titlebox .wrap_2_1 .last_1 .last_2_1 .last_3_2').addClass('blank').append('<div class="blank_inner"></div>')

					merge($('.titlebox .wrap_2_2 .last_1 .last_2_1 .last_3_2'))
					$('.titlebox .wrap_2_2 .last_1 .last_2_1 .last_3_2').addClass('blank').append('<div class="blank_inner"></div>')
				}
				$('.last_4').addClass('unset')
				$('.last').css({'height': '100%'})
				$('.last').css({'width': '100%'})

				$('.wrap_2_2>.last_1_1>.last_2_3>.last_3_1').addClass('pre_textbox_parent')
				$('.wrap_2_2>.last_1_1>.last_2_3>.last_3_1').addClass('pre_textbox_parent')
				$('.wrap_2_2>.last_1_2>.last_2_1>.last_3_1').addClass('pre_textbox_parent')
				$('.wrap_2_2>.last_1_2>.last_2_2>.last_3_1').addClass('pre_textbox_parent')
				$('.wrap_2_2>.last_1_2>.last_2_3>.last_3_1').addClass('pre_textbox_parent')
				$('.wrap_2_2>.last_1_2>.last_2_3>.last_3_1').addClass('pre_textbox_parent')
				$('.wrap_2_2>.last_1_1>.last_2_3>.last_3_2').addClass('pre_textbox_parent')
				$('.wrap_2_2>.last_1_2>.last_2_1>.last_3_2').addClass('pre_textbox_parent')
				$('.wrap_2_2>.last_1_2>.last_2_2>.last_3_2').addClass('pre_textbox_parent')
				$('.wrap_2_2>.last_1_2>.last_2_3>.last_3_2').addClass('pre_textbox_parent')
				$('.wrap_2_2>.last_1_1>.last_2_3>.last_3_1>.last_4_1').addClass('pre_textbox')
				$('.wrap_2_2>.last_1_1>.last_2_3>.last_3_1>.last_4_2').addClass('pre_textbox')
				$('.wrap_2_2>.last_1_1>.last_2_3>.last_3_1>.last_4_3').addClass('pre_textbox')
				$('.wrap_2_2>.last_1_2>.last_2_1>.last_3_1>.last_4_1').addClass('pre_textbox')
				$('.wrap_2_2>.last_1_2>.last_2_1>.last_3_1>.last_4_2').addClass('pre_textbox')
				$('.wrap_2_2>.last_1_2>.last_2_1>.last_3_1>.last_4_3').addClass('pre_textbox')
				$('.wrap_2_2>.last_1_2>.last_2_2>.last_3_1>.last_4_1').addClass('pre_textbox')
				$('.wrap_2_2>.last_1_2>.last_2_2>.last_3_1>.last_4_2').addClass('pre_textbox')
				$('.wrap_2_2>.last_1_2>.last_2_2>.last_3_1>.last_4_3').addClass('pre_textbox')
				$('.wrap_2_2>.last_1_2>.last_2_3>.last_3_1>.last_4_1').addClass('pre_textbox')
				$('.wrap_2_2>.last_1_2>.last_2_3>.last_3_1>.last_4_2').addClass('pre_textbox')
				$('.wrap_2_2>.last_1_1>.last_2_3>.last_3_2>.last_4_1').addClass('pre_textbox')
				$('.wrap_2_2>.last_1_1>.last_2_3>.last_3_2>.last_4_2').addClass('pre_textbox')
				$('.wrap_2_2>.last_1_1>.last_2_3>.last_3_2>.last_4_3').addClass('pre_textbox')
				$('.wrap_2_2>.last_1_2>.last_2_1>.last_3_2>.last_4_1').addClass('pre_textbox')
				$('.wrap_2_2>.last_1_2>.last_2_1>.last_3_2>.last_4_2').addClass('pre_textbox')
				$('.wrap_2_2>.last_1_2>.last_2_1>.last_3_2>.last_4_3').addClass('pre_textbox')
				$('.wrap_2_2>.last_1_2>.last_2_2>.last_3_2>.last_4_1').addClass('pre_textbox')
				$('.wrap_2_2>.last_1_2>.last_2_2>.last_3_2>.last_4_2').addClass('pre_textbox')
				$('.wrap_2_2>.last_1_2>.last_2_2>.last_3_2>.last_4_3').addClass('pre_textbox')
				$('.wrap_2_2>.last_1_2>.last_2_3>.last_3_2>.last_4_1').addClass('pre_textbox')
				$('.wrap_2_2>.last_1_2>.last_2_3>.last_3_2>.last_4_2').addClass('pre_textbox')

					$('.main>.wrap_2_bottom>.wrap_2_3>.last_1>.last_2').addClass('pre_f_rowcol_0')
					$('.main>.wrap_2_bottom>.wrap_2_3>.last_1>.last_2>.last_3').addClass('pre_f_rowcol_0')
					$('.main>.wrap_2_bottom>.wrap_2_3>.last_1>.last_2>.last_3>.last_4').addClass('pre_f_rowcol_1')

					$('.main>.wrap_2_top>.wrap_2_1>.last_1_1>.last_2_1').addClass('pre_f_rowcol_0')
					$('.main>.wrap_2_top>.wrap_2_1>.last_1_1>.last_2_1>.last_3_1').addClass('pre_f_rowcol_1')
					$('.main>.wrap_2_top>.wrap_2_1>.last_1_1>.last_2_1>.last_3_2').addClass('pre_f_rowcol_1')
					$('.main>.wrap_2_top>.wrap_2_1>.last_1_1>.last_2_2').addClass('pre_f_rowcol_1')
					$('.main>.wrap_2_top>.wrap_2_1>.last_1_1>.last_2_2>.last_3_1').addClass('pre_f_rowcol_1')
					$('.main>.wrap_2_top>.wrap_2_1>.last_1_1>.last_2_3').addClass('pre_f_rowcol_0')
					$('.main>.wrap_2_top>.wrap_2_1>.last_1_1>.last_2_3>.last_3_1').addClass('pre_f_rowcol_1')
					$('.main>.wrap_2_top>.wrap_2_1>.last_1_1>.last_2_3>.last_3_2').addClass('pre_f_rowcol_1')
					$('.main>.wrap_2_top>.wrap_2_1>.last_1_2>.last_2_3').addClass('pre_f_rowcol_0')
					$('.main>.wrap_2_top>.wrap_2_1>.last_1_2>.last_2_3>.last_3_1').addClass('pre_f_rowcol_1')
					$('.main>.wrap_2_top>.wrap_2_1>.last_1_2>.last_2_3>.last_3_2').addClass('pre_f_rowcol_1')

					$('.main>.wrap_2_bottom>.wrap_2_4>.last_1>.last_2').addClass('pre_f_rowcol_0')
					$('.main>.wrap_2_bottom>.wrap_2_4>.last_1>.last_2>.last_3_2').addClass('pre_f_rowcol_0')

					$('.main>.wrap_2_top>.wrap_2_1>.last_1_1>.last_2_3>.last_3_1').addClass('pre_f_rowcol_1')
					$('.main>.wrap_2_top>.wrap_2_1>.last_1_1>.last_2_3>.last_3_2').addClass('pre_f_rowcol_1')

			select_textbox()
			select_box()
		}
	}

// // // // // // // // // // // // // // // // // create form // // // // // // // // // // // // // // // // // //

	function select_textbox(){
		var value = Math.floor(Math.random()*$('.main .wrap_2_4 .last_2').not($('.main .wrap_2_4 .last_2_3')).length)
		$('.main .wrap_2_4 .last_2').not($('.main .wrap_2_4 .last_2_3')).eq(value).addClass('dropdown_wrapper')
			console.log(value)
			console.log($('dropdown_wrapper').length)
		$('.dropdown_wrapper').parent().addClass('dropdown_wrapper_wrapper')
		$('.main .wrap_2_2 .last_2')
			.not($('.wrap_2_3 .last_1_1 .last_2_1 .last_3_1'))
			.not($('.wrap_2_2 .last_1_1 .last_2_2 .last_3_2'))
			.eq(Math.floor(Math.random()*$('.main .wrap_2_2 .last_2')
									.not($('.wrap_2_3 .last_1_1 .last_2_1 .last_3_1'))
									.not($('.wrap_2_2 .last_1_1 .last_2_2 .last_3_2')).length)).addClass('menu_wrapper')
		merge($('.dropdown_wrapper'))
		merge($('.menu_wrapper'))
		$('.menu_wrapper').append('<div class="coloreffect coloreffect_w"></div>')
		$('.dropdown_wrapper').append('<div class="coloreffect coloreffect_w"></div>')
		$('.menu_wrapper').parent().addClass('menu_wrapper_wrapper')


		for (var i = 22; i >= 1; i--) {
			var val = Math.floor(Math.random()*$('.main .last_4.unset').not(".textbox_parent").length)
			$('.main .last_4.unset')
				.not(".textbox_parent")
				.eq(val)
				.addClass("blank textbox_parent textbox_"+i+"_parent").removeClass('unset').append('<div class="coloreffect coloreffect_w"></div><div class="blank_inner"></div><div class="textbox textbox_'+i+'"></div>')
			$('.main .last_4.unset')
				.not(".textbox_parent")
				.eq(val).parent().addClass("textbox_parent_parent")
		}
		for (var i = 5; i >= 1; i--) {
			if(i<4){var k = i}
			else{var k = i+3}
			$('.main .last_3')
					.not(".merged")
					.not(".textbox_parent_parent")
					.not(".bigtextbox_parent")
					.eq(Math.floor(Math.random()*$('.main .last_3').not(".textbox_parent_parent").not(".bigtextbox_parent").length))
					.addClass("blank bigtextbox_parent bigtextbox_"+k+"_parent").append('<div class="coloreffect coloreffect_w"></div><div class="blank_inner"></div><div class="bigtextbox bigtextbox_'+k+'"></div>')
		}
		// // // // // // // // // // // // // // // // // textbox // // // // // // // // // // // // // // // // // //
	}

	function merge(thisObj){
		thisObj.empty()
		thisObj.addClass('merged')
		if(thisObj.hasClass('menu_wrapper')){
			console.log('menu!!!!!!!!!')
			$('.menu_wrapper').removeClass('unset').addClass('blank').append('<div class="blank_inner"></div>')
			$('.menu_wrapper').append('<img src="img/menu.png" class="menu animating">')
		}
		if(thisObj.hasClass('dropdown_wrapper')){
			console.log('dropdown!!!!!!!!!')
			$('.dropdown_wrapper').removeClass('unset').addClass('blank').append('<div class="blank_inner"></div>')
			$('.dropdown_wrapper').remove('.dropdown').append('<div class="dropdown"><div class="dropdown_text">EN</div></div>')

			$('.dropdown').css({'width':$('.dropdown').outerHeight()*2.5})
			$('.dropdown_contents_wrapper>.dropdown_contents').css({'font-size':$('.dropdown').outerWidth()/42*3 + 'px'})
			$('.dropdown_text').css({'font-size':$('.dropdown').outerWidth()/3 + 'px'})
		}
		
	}

	function select_box(){
		$('.last_4').each(function(index){
				if(Math.round(Math.random()) == 0){
					$(this).append('<div class="coloreffect coloreffect_w"></div>') 
				}else{
					$(this).append('<div class="coloreffect coloreffect_h"></div>') 
				}
		})
		for (var i = 0; i < 100; i++) {
			$('.main .unset').eq(Math.floor(Math.random()*$('.main .unset').length)).removeClass('unset').addClass('blank').append('<div class="blank_inner"></div>')
			if(i%10 == 0){ $('.main .last_4.blank').eq(Math.floor(Math.random()*$('.main .last_4.blank').length)).removeClass('unset').addClass('b_size')}
			if(i%4 == 0) { $('.main .last_4').eq(Math.floor(Math.random()*$('.main .last_4').length)).removeClass('unset').addClass('white')}
			if(i%2 == 0) { $('.main .unset').eq(Math.floor(Math.random()*$('.main .unset').length)).removeClass('unset').addClass('division').append('<div class="division_child blank"><div class="blank_inner"></div></div><div class="division_child blank"><div class="blank_inner"></div></div>') }
			if(i%10 == 0){ $('.main .last_2').not(".menu_wrapper").not(".dropdown_wrapper").eq(Math.floor(Math.random()*$('.main .last_2').not(".menu_wrapper").not(".dropdown_wrapper").length)).addClass('mixed_detail_parent').append('<div class="mixed_detail"><div class="text"><div class="des"></div><div class="bio"></div></div></div>') }
			if(i%4 == 0){ $('.main .last_4').not('.mixed_detail_parent').eq(Math.floor(Math.random()*$('.main .last_4').not('.mixed_detail_parent').length)).addClass('mixed_detail_parent').append('<div class="mixed_detail mixed_detail_noani"><div class="text"><div class="des"></div><div class="bio"></div></div></div>') }
			if(i%4 == 1){ $('.main .last_4').not('.mixed_detail_parent').eq(Math.floor(Math.random()*$('.main .last_4').not('.mixed_detail_parent').length)).addClass('mixed_detail_parent').append('<div class="mixed_detail mixed_detail_ani"><div class="text"><div class="des"></div><div class="bio"></div></div></div>') }
			
			if(i%1 == 0){
				$('.titlebox_back .unset').eq(Math.floor(Math.random()*$('.titlebox_back .unset').length)).addClass('red')
				$('.titlebox_back .unset').eq(Math.floor(Math.random()*$('.titlebox_back .unset').length)).addClass('red')
			}
			if(i%40 == 0){
				var random = Math.floor(Math.random()*$('.main .unset').length)
				$('.main .unset').eq(random).parent().addClass('blank s_size_blank').append('<div class="blank_inner blank_inner_white"></div>')
				$('.main .unset').eq(random).removeClass('unset').addClass('s_size')
			}
			if(i%10 == 0){
				var random = Math.floor(Math.random()*$('.main .unset').length)
				$('.main .unset').eq(random).parent().addClass('blank s_size_blank').append('<div class="blank_inner"></div>')
				$('.main .unset').eq(random).removeClass('unset').addClass('s_size')
			}
			if(i == 99){
				console.log($('.main .last_4.blank').length)
				$('.main .last_4.blank').append('\
					<div class="bg_thumb bg_thumb_1 "></div>\
					<div class="bg_thumb bg_thumb_2 "></div>\
					<div class="bg_thumb bg_thumb_3 "></div>\
					<div class="bg_thumb bg_thumb_4 "></div>\
					<div class="bg_thumb bg_thumb_5 "></div>\
					<div class="bg_thumb bg_thumb_6 "></div>\
					<div class="bg_thumb bg_thumb_7 "></div>\
					<div class="bg_thumb bg_thumb_8 "></div>\
					<div class="bg_thumb bg_thumb_9 "></div>\
					<div class="bg_thumb bg_thumb_10"></div>\
					<div class="bg_thumb bg_thumb_11"></div>\
					<div class="bg_thumb bg_thumb_12"></div>\
					<div class="bg_thumb bg_thumb_13"></div>\
				')
				set_size()	
				setTimeout(function(){set_blank_inner()},500)
			}
		}
	}

	function set_size(){
		$('.titlebox').clone().removeClass('titlebox_back').addClass('titlebox_front').insertAfter( ".titleimg" );
		$('.textbox').css({'z-index':12})
		$('.textbox').parent().css({'z-index':12})
		$('.textbox').parent().parent().css({'z-index':12})
		$('.textbox').parent().parent().parent().css({'z-index':12})
		$('.textbox').parent().parent().parent().parent().css({'z-index':12})
		$('.bigtextbox').css({'z-index':12})
		$('.bigtextbox').parent().css({'z-index':12})
		$('.bigtextbox').parent().parent().css({'z-index':12})
		$('.bigtextbox').parent().parent().parent().css({'z-index':12})
		$('.bigtextbox').parent().parent().parent().parent().css({'z-index':12})
		$('.titlebox>.wrap_2_1 .s_size').each(function(){
			var b_w = Math.abs((w_2*0.75 - $(this).offset().left))
			var b_h = Math.abs((h_2*0.75 - $(this).offset().top))
			$(this).parent().addClass('blank')
			$(this).css({'transform-origin': (b_w/$(this).outerWidth()*100) + '% '+ (b_h/$(this).outerHeight()*100) + '%'})
		})
		$('.titlebox>.wrap_2_2 .s_size').each(function(){
			var b_w = Math.abs((w_2*0.75 - $(this).offset().left))
			var b_h = Math.abs((h_2*0.75 - $(this).offset().top))
			$(this).parent().addClass('blank')
			$(this).css({'transform-origin': (-1*b_w/$(this).outerWidth()*100) + '% '+ (b_h/$(this).outerHeight()*100) + '%'})
		})
	}
	function set_blank_inner(){
			$('.wrap_2_1 .blank_inner').each(function(){
				$(this).css({'width': 'calc('+ (Math.abs((w_2 - $(this).parent().offset().left)) - $(this).parent().outerWidth()) +'px + 100%)'})
				$(this).css({'height':'calc('+ (Math.abs((h_2 - $(this).parent().offset().top)) - $(this).parent().outerHeight()) +'px + 100%)'})
			})
			$('.wrap_2_2 .blank_inner').each(function(){
				$(this).css({'width': 'calc('+ (Math.abs(w_2 - $(this).parent().offset().left))+'px + 100%)'})
				$(this).css({'height':'calc('+ (Math.abs((h_2 - $(this).parent().offset().top)) - $(this).parent().outerHeight()) +'px + 100%)'})
			})
			$('.wrap_2_3 .blank_inner').each(function(){
				$(this).css({'width': 'calc('+ (Math.abs((w_2 - $(this).parent().offset().left)) - $(this).parent().outerWidth()) +'px + 100%)'})
				$(this).css({'height':'calc('+ (Math.abs((h_2 - $(this).parent().offset().top)))+'px + 100%)'})
			})
			$('.wrap_2_4 .blank_inner').each(function(){
				$(this).css({'width': 'calc('+ (Math.abs(w_2 - $(this).parent().offset().left))+'px + 100%)'})
				$(this).css({'height':'calc('+ (Math.abs((h_2 - $(this).parent().offset().top)))+'px + 100%)'})
			})
	}
	function coloreffect_animation(){
		$('.coloreffect').addClass('coloreffect_a')
		setTimeout(function(){
			$('.coloreffect_a').each(function(){
				if(Math.round(Math.random()) == 0){
					$(this).removeClass('coloreffect_a')
					$(this).removeClass('coloreffect_h')
					$(this).addClass('coloreffect_w')
				}else{
					$(this).removeClass('coloreffect_a')
					$(this).removeClass('coloreffect_w')
					$(this).addClass('coloreffect_h')
				}
			})
		},500)
	}
	function shuffle(array) {
		var m = array.length, t, i;
		while (m) {
			i = Math.floor(Math.random() * m--);
			t = array[m];
			array[m] = array[i];
			array[i] = t;
		}
		return array;
	}

		// // // // // // // // // // // // // // // // // buttons // // // // // // // // // // // // // // // // // //

	$('.bigtextbox').on('click', function () {
		$('.hovered').removeClass('hovered')
		if(!isarranged){
			isarranged = true
			$('.menu').css({'pointer-events':'none'})
			$('.textbox').css({'pointer-events':'none'})
				pre_animate(null,1,true)
		}
	})

	$('.menu').click(function(){
		$('.hovered').removeClass('hovered')
		if(!isarranged){
			window.location.hash = 'list'
		$('body').removeClass('mixed_detailed_view')

			isarranged = true
			$('.menu').css({'pointer-events':'none'})
			$('.textbox').css({'pointer-events':'none'})
			pre_animate(null,1,true)
		}else{
			window.location.hash = ''
			isarranged = false
			$('.menu').css({'pointer-events':'none'})
			$('.textbox').css({'pointer-events':'none'})
			$('body').removeClass('detailed_view')
			pre_animate(null,0,true)
		}
	})
	var dropdown_on = false
	$('.dropdown').click(function(){
		if(!dropdown_on){
			$('.dropdown_contents_wrapper').css({'width':$('.dropdown').outerWidth(),'left':$('.dropdown').offset().left,'top':$('.dropdown').offset().top+$('.dropdown').outerWidth()*0.38})
			console.log($('.dropdown').outerWidth()*0.4)
			console.log($('.dropdown').offset().top)
			dropdown_on = true
			$('.dropdown_contents_wrapper').show()
			if($('.dropdown').offset().top+$('.dropdown').outerHeight()> (0.9*window.innerHeight) ){
				$('.dropdown_contents_wrapper').css({'top':$('.dropdown').offset().top - $('.dropdown_contents_wrapper').outerHeight()})
			}
		}else{
			dropdown_on = false
			$('.dropdown_contents_wrapper').hide()
		}
	})
	$('.dropdown_contents').click(function(){
			dropdown_on = false
			$('.dropdown_contents_wrapper').hide()
			if($(this).attr('class').split('dropdown_contents_')[1].split(' ')[0] === 'cn'){
				$('.dropdown_text').html('中文')
			}else if($(this).attr('class').split('dropdown_contents_')[1].split(' ')[0] === 'en'){
				$('.dropdown_text').html('EN')
			}
			lang = $(this).attr('class').split('dropdown_contents_')[1].split(' ')[0]
			$('.about_text').empty().append(eval('about_text_pre_'+lang)+'<div class="readmore"></div></div>')
			$('body').removeClass('cn')
			$('body').removeClass('en')
			$('body').addClass(lang)
	})
		// // // // // // // // // // // // // // // // // animation // // // // // // // // // // // // // // // // // //

	$('.textbox').on('mouseenter', function () {
		if(!isEdge){
			if(!isarranged){
				var val = parseInt($(this).attr('class').split('textbox_')[1].split(' ')[0])
				$('.hovered').removeClass('hovered')
				$('.hovered_parent').removeClass('hovered_parent')
				$('.textbox').css({'pointer-events':'none'})
				$(this).addClass('hovered')
				$(this).parent().addClass('hovered_parent')
				if(val == 1){ pre_animate('thumb_1',2 )}
				if(val == 2){ pre_animate('thumb_2',2 )}
				if(val == 3){ pre_animate('thumb_3',2 )}
				if(val == 4){ pre_animate('thumb_4',2 )}
				if(val == 5){ pre_animate('thumb_5',2 )}
				if(val == 6){ pre_animate('thumb_6',2 )}
				if(val == 7){ pre_animate('thumb_7',2 )}
				if(val == 8){ pre_animate('thumb_8',2 )}
				if(val == 9){ pre_animate('thumb_9',2 )}
				if(val == 10){pre_animate('thumb_10',2)}
				if(val == 11){pre_animate('thumb_11',2)}
				if(val == 12){pre_animate('thumb_1',2 )}
				if(val == 13){pre_animate('thumb_2',2 )}
				if(val == 14){pre_animate('thumb_3',2 )}
				if(val == 15){pre_animate('thumb_4',2 )}
				if(val == 16){pre_animate('thumb_5',2 )}
				if(val == 17){pre_animate('thumb_6',2 )}
				if(val == 18){pre_animate('thumb_7',2 )}
				if(val == 19){pre_animate('thumb_8',2 )}
				if(val == 20){pre_animate('thumb_9',2 )}
				if(val == 21){pre_animate('thumb_10',2)}
				if(val == 22){pre_animate('thumb_11',2)}
				$('.textbox_parent.hovered_parent').on('click', function () {
					var selected = parseInt($(this).attr('class').split('textbox_')[2].split('_parent')[0])%11 - 1 
					window.location.hash = selected
					if(selected < 0 ){selected = 10}
					show_mixed(selected)
				})
			}
		}
	})

		// // // // // // // // // // // // // // // // // mixed // // // // // // // // // // // // // // // // // //
	function show_mixed(selected){
		$('.textbox').css({'pointer-events':'none'})
		if($('body').hasClass('arranged')){
			return false
		}else{
			if($.isNumeric(selected)){
					$('.mixed_detail>.text>.des').empty().append(eval('db_'+lang)[selected][2])
					$('.mixed_detail>.text>.bio').empty().append(eval('db_'+lang)[selected][3])
			}else{
					$('.mixed_detail>.text>.des').empty().append(selected)
					$('.mixed_detail>.text>.bio').empty()
			}
					$('body').addClass('mixed_detailed_view')
					$('.wrap_2_1 .mixed_detail').each(function(){
						$(this).find('.text').css({'transform':'translate('+(Math.floor(Math.random()*12.5))+'vw, '+ (-1*$(this).offset().top + 0.1*w) +'px)'})
					})
					$('.wrap_2_3 .mixed_detail').each(function(){
						$(this).find('.text').css({'transform':'translate('+(Math.floor(Math.random()*12.5))+'vw, '+ (-1*$(this).offset().top + 0.1*w) +'px)'})
					})
					$('.wrap_2_2 .mixed_detail').each(function(){
						$(this).find('.text').css({'transform':'translate('+-1*(Math.floor(Math.random()*12.5))+'vw, '+ (-1*$(this).offset().top + 0.1*w) +'px)'})
					})
					$('.wrap_2_4 .mixed_detail').each(function(){
						$(this).find('.text').css({'transform':'translate('+-1*(Math.floor(Math.random()*12.5))+'vw, '+ (-1*$(this).offset().top + 0.1*w) +'px)'})
					})
			return false
		}
	}
	$('.mixed_close').on('click', function () {
		$('body').removeClass('mixed_detailed_view')
		removeHash ()
	})
		// // // // // // // // // // // // // // // // // animation // // // // // // // // // // // // // // // // // //
	function pre_animate(img,arranged){
		if($('body').hasClass('mixed_detailed_view')){return false} 
		$('body').removeClass('mixed_detailed_view')
		dropdown_on = false
		$('.dropdown_contents_wrapper').hide()
			if(arranged == 0||arranged == 2){
					$('.arranged_shadow').hide()
					var ran = Math.floor(Math.random()*$('.last_1.big_shuffle').not('.shrink_big').length)
					$('.last_1.big_shuffle').not('.shrink_big').eq(ran).addClass('shrink_big')
				if(Math.floor(Math.random()*3)==0) {
					var ran = Math.floor(Math.random()*$('.wrap_2.big_shuffle').not('.shrink_big').length)
					$('.wrap_2.big_shuffle').not('.shrink_big').eq(ran).addClass('shrink_big')
				}
			}else if(arranged == 1){
				$('.bg_thumb').hide()
				$('.big_shuffle').eq(Math.floor(Math.random()*$('.big_shuffle').length)).addClass('shrink_big')
			}else{
					$('.arranged_shadow').hide()
				console.log('----+_+')
			}
		for (var i = 0; i < 150; i++) {
			if(arranged == 2 || arranged == 0){
				var random_val = Math.floor(Math.random()*$('.main .blank').not('.shrink').length)
				$('.main .blank').eq(random_val).not('.shrink').addClass('shrink')
			}else if(arranged == 1){
				if(i%8 == 0){
				var random_val_1 = Math.floor(Math.random()*$('.main_wrap_2_1_last_1_1 .blank').not('.shrink').length)
				$('.main_wrap_2_1_last_1_1 .blank').eq(random_val_1).not('.shrink').addClass('main_wrap_2_1_last_1_1_shrink shrink main_shrink')
				}else if(i%8 == 1){
				var random_val_2 = Math.floor(Math.random()*$('.main_wrap_2_1_last_1_2 .blank').not('.shrink').length)
				$('.main_wrap_2_1_last_1_2 .blank').eq(random_val_2).not('.shrink').addClass('main_wrap_2_1_last_1_2_shrink shrink main_shrink')
				}else if(i%8 == 2){
				var random_val_3 = Math.floor(Math.random()*$('.main_wrap_2_2_last_1_1 .blank').not('.shrink').length)
				$('.main_wrap_2_2_last_1_1 .blank').eq(random_val_3).not('.shrink').addClass('main_wrap_2_2_last_1_1_shrink shrink main_shrink')
				}else if(i%8 == 3){
				var random_val_4 = Math.floor(Math.random()*$('.main_wrap_2_2_last_1_2 .blank').not('.shrink').length)
				$('.main_wrap_2_2_last_1_2 .blank').eq(random_val_4).not('.shrink').addClass('main_wrap_2_2_last_1_2_shrink shrink main_shrink')
				}else if(i%8 == 4){
				var random_val_1 = Math.floor(Math.random()*$('.main_wrap_2_3_last_1_1 .blank').not('.shrink').length)
				$('.main_wrap_2_3_last_1_1 .blank').eq(random_val_1).not('.shrink').addClass('main_wrap_2_3_last_1_1_shrink shrink main_shrink')
				}else if(i%8 == 5){
				var random_val_2 = Math.floor(Math.random()*$('.main_wrap_2_3_last_1_2 .blank').not('.shrink').length)
				$('.main_wrap_2_3_last_1_2 .blank').eq(random_val_2).not('.shrink').addClass('main_wrap_2_3_last_1_2_shrink shrink main_shrink')
				}else if(i%8 == 6){
				var random_val_3 = Math.floor(Math.random()*$('.main_wrap_2_4_last_1_1 .blank').not('.shrink').length)
				$('.main_wrap_2_4_last_1_1 .blank').eq(random_val_3).not('.shrink').addClass('main_wrap_2_4_last_1_1_shrink shrink main_shrink')
				}else if(i%8 == 7){
				var random_val_4 = Math.floor(Math.random()*$('.main_wrap_2_4_last_1_2 .blank').not('.shrink').length)
				$('.main_wrap_2_4_last_1_2 .blank').eq(random_val_4).not('.shrink').addClass('main_wrap_2_4_last_1_2_shrink shrink main_shrink')
				}
			}else{
				if(i%8 == 0){
				var random_val = Math.floor(Math.random()*$('.main .blank').not('.shrink').length)
				$('.main .blank').eq(random_val).not('.shrink').addClass('shrink')
				}
			}
			if(i%8 == 0){
				var t_ran = Math.floor(Math.random()*$('.titlebox_back .last_4').not('.shrink').length)
				$('.titlebox_back .last_4').not('.shrink').eq(t_ran).addClass('shrink')
				$('.titlebox_front .last_4').not('.shrink').eq(t_ran).addClass('shrink')
			}
			if(i == 149){
				if(arranged == 1){
					if(isEdge){
						animate(img,arranged,'.main',100,true)
					}else{
						setTimeout(function(){animate(img,arranged,'.main_wrap_2_1_last_1_1',100,false)},  0)
						setTimeout(function(){animate(img,arranged,'.main_wrap_2_3_last_1_2',100,false)}, 80)
						setTimeout(function(){animate(img,arranged,'.main_wrap_2_2_last_1_1',100,false)},160)
						setTimeout(function(){animate(img,arranged,'.main_wrap_2_4_last_1_2',100,false)},240)
						setTimeout(function(){animate(img,arranged,'.main_wrap_2_3_last_1_1',100,false)},320)
						setTimeout(function(){animate(img,arranged,'.main_wrap_2_1_last_1_2',100,false)},400)
						setTimeout(function(){animate(img,arranged,'.main_wrap_2_4_last_1_1',100,false)},480)
						setTimeout(function(){animate(img,arranged,'.main_wrap_2_2_last_1_2',100,true )},560)
					}
				}else{
					animate(img,arranged,'',100)
				}
			}
		}
	}
	var colorlist_counter = 0
	function animate(img,arranged,arranged_seq,percentage_counter,last){
		if($('body').hasClass('mixed_detailed_view')){return false} 
		$('.bgon').removeClass('bgon')
		colorlist_counter++
		if(arranged == 2 || arranged == 0 || arranged == 3){
			isarranged = false
			$('.shrink').addClass('shrinkdown')
			$('.shrink').addClass('bgon')
			$('.shrink_big').addClass('shrinkdown')
			setTimeout(function(){
				step_1(img,arranged_seq,last)
			},200)
		}else{
			$(arranged_seq+'_shrink').addClass('shrinkdown')
			$(arranged_seq+' .coloreffect').addClass('coloreffect_a')
			if(last){ $('.shrink_big').addClass('shrinkdown') }
			setTimeout(function(){
				step_1(img,arranged_seq,last)
			},300)
		}

		function step_1(img,arranged_seq,last){
			if(arranged == 2 || arranged == 0 || arranged == 3){
				$('.shrink').addClass('animate')
				$('.shrink_big').addClass('animate')
				$('.title_bg').addClass('animate')
				$('.start_after').removeClass('start_after')
				$('.last_1.shrink_big').each(function(index){
					if($(this).parent().hasClass('rowcol_0')){
						$(this).parent().removeClass('rowcol_0').addClass('rowcol_1')
					}else if($(this).parent().hasClass('rowcol_1')){
						$(this).parent().removeClass('rowcol_1').addClass('rowcol_0')
					}else{
						if(Math.round(Math.random()) == 0){
							$(this).parent().addClass('rowcol_1')
						}else{
							$(this).parent().addClass('rowcol_0')
						}
					}
				})
				$('.shrink').each(function(index){
					if($(this).parent().hasClass('rowcol_0')){
						$(this).parent().removeClass('rowcol_0').addClass('rowcol_1')
					}else if($(this).parent().hasClass('rowcol_1')){
						$(this).parent().removeClass('rowcol_1').addClass('rowcol_0')
					}else{
						if(Math.round(Math.random()) == 0){
							$(this).parent().addClass('rowcol_1')
						}else{
							$(this).parent().addClass('rowcol_0')
						}
					}
					if(index == $('.shrink').length-1){
						step_2(img,arranged_seq,last)
					}
				})
			}else{
				$(arranged_seq+'_shrink').addClass('animate')
				$('.shrink_big').addClass('animate')
				step_2(img,arranged_seq,last)
			}
		}


		function step_2(img,arranged_seq,last){
				$('.shrink>.bg_thumb').hide()
				$('.shrink>.bg_'+img).show().css({'background-size':'100% 100%'})
				if(arranged == 1){
						window.location.hash = 'list'
								$('.menu').hide()
						if(isEdge){
							$('body').addClass('arranged_main_wrap_2_1_last_1_1')
							$('body').addClass('arranged_main_wrap_2_3_last_1_2')
							$('body').addClass('arranged_main_wrap_2_2_last_1_1')
							$('body').addClass('arranged_main_wrap_2_4_last_1_2')
							$('body').addClass('arranged_main_wrap_2_3_last_1_1')
							$('body').addClass('arranged_main_wrap_2_1_last_1_2')
							$('body').addClass('arranged_main_wrap_2_4_last_1_1')
							$('body').addClass('arranged_main_wrap_2_2_last_1_2')
						}else{
							$('body').addClass('arranged_'+arranged_seq.split('.')[1])
						}
							$(arranged_seq+' .textbox_1 ').appendTo('.wrap_2_3>.last_1_2>.last_2_1>.last_3_1>.last_4_1')
							$(arranged_seq+' .textbox_2 ').appendTo('.wrap_2_3>.last_1_2>.last_2_1>.last_3_1>.last_4_2')
							$(arranged_seq+' .textbox_3 ').appendTo('.wrap_2_3>.last_1_2>.last_2_1>.last_3_1>.last_4_3')

							$(arranged_seq+' .textbox_4 ').appendTo('.wrap_2_3>.last_1_2>.last_2_1>.last_3_2>.last_4_1')
							$(arranged_seq+' .textbox_5 ').appendTo('.wrap_2_3>.last_1_2>.last_2_1>.last_3_2>.last_4_2')
							$(arranged_seq+' .textbox_6 ').appendTo('.wrap_2_3>.last_1_2>.last_2_1>.last_3_2>.last_4_3')

							$(arranged_seq+' .textbox_7 ').appendTo('.wrap_2_3>.last_1_2>.last_2_2>.last_3_1>.last_4_1')
							$(arranged_seq+' .textbox_8 ').appendTo('.wrap_2_3>.last_1_2>.last_2_2>.last_3_1>.last_4_2')
							$(arranged_seq+' .textbox_9 ').appendTo('.wrap_2_3>.last_1_2>.last_2_2>.last_3_1>.last_4_3')

							$(arranged_seq+' .textbox_10').appendTo('.wrap_2_3>.last_1_2>.last_2_2>.last_3_2>.last_4_1')
							$(arranged_seq+' .textbox_11').appendTo('.wrap_2_3>.last_1_2>.last_2_2>.last_3_2>.last_4_2')

							$(arranged_seq+' .textbox_12').appendTo('.wrap_2_3>.last_1_2>.last_2_1>.last_3_1>.last_4_1')
							$(arranged_seq+' .textbox_13').appendTo('.wrap_2_3>.last_1_2>.last_2_1>.last_3_1>.last_4_2')
							$(arranged_seq+' .textbox_14').appendTo('.wrap_2_3>.last_1_2>.last_2_1>.last_3_1>.last_4_3')

							$(arranged_seq+' .textbox_15').appendTo('.wrap_2_3>.last_1_2>.last_2_1>.last_3_2>.last_4_1')
							$(arranged_seq+' .textbox_16').appendTo('.wrap_2_3>.last_1_2>.last_2_1>.last_3_2>.last_4_2')
							$(arranged_seq+' .textbox_17').appendTo('.wrap_2_3>.last_1_2>.last_2_1>.last_3_2>.last_4_3')

							$(arranged_seq+' .textbox_18').appendTo('.wrap_2_3>.last_1_2>.last_2_2>.last_3_1>.last_4_1')
							$(arranged_seq+' .textbox_19').appendTo('.wrap_2_3>.last_1_2>.last_2_2>.last_3_1>.last_4_2')
							$(arranged_seq+' .textbox_20').appendTo('.wrap_2_3>.last_1_2>.last_2_2>.last_3_1>.last_4_3')

							$(arranged_seq+' .textbox_21').appendTo('.wrap_2_3>.last_1_2>.last_2_2>.last_3_2>.last_4_1')
							$(arranged_seq+' .textbox_22').appendTo('.wrap_2_3>.last_1_2>.last_2_2>.last_3_2>.last_4_2')
							console.log($(arranged_seq+' .bigtextbox_1'))

							$(arranged_seq+' .bigtextbox_1').appendTo('.wrap_2_top')
							$(arranged_seq+' .bigtextbox_2').appendTo('.wrap_2_top')
							$(arranged_seq+' .bigtextbox_3').appendTo('.wrap_2_top')
							$(arranged_seq+' .bigtextbox_7').appendTo('.wrap_2_4')
							$(arranged_seq+' .bigtextbox_8').appendTo('.wrap_2_4')
							$(arranged_seq+' .pre_f_rowcol_1').addClass('f_rowcol_1')
							$(arranged_seq+' .pre_f_rowcol_0').addClass('f_rowcol_0')
							$(arranged_seq+'.pre_f_rowcol_1').addClass('f_rowcol_1')
							$(arranged_seq+'.pre_f_rowcol_0').addClass('f_rowcol_0')
							if(last){
								$('.wrap_2.pre_f_rowcol_1').addClass('f_rowcol_1')
								$('.wrap_2.pre_f_rowcol_0').addClass('f_rowcol_0')
								$('<div class="bigtextbox bigtextbox_9""></div>').appendTo('.wrap_2_4')
								$('<img src="img/logos-01.png" class="logo_img">').appendTo('.wrap_2_4')
								$('.main .wrap_2_top').append('<div class="about_text">'+eval('about_text_pre_'+lang)+'<div class="readmore"></div></div>')
								$('.wrap_2_4').append('<div class="event_text">'+eval('events_text_'+lang)[1]+'</div>')
								setTimeout(function(){
									$('body').addClass('arranged')
									$('.menu').show()
									$('.arranged .textbox').parent().click(function(){
											console.log('alsdkfj1111')
										if($('body').hasClass('mixed_detailed_view')){
											console.log('alsdkfj')
											return false

										}
										var selected = parseInt($(this).find('.textbox').eq(1).attr('class').split('textbox_')[1].split(' ')[0])%11 - 1
										if(selected < 0 ){selected = 10}
										window.location.hash = selected
										hash_data()
									})
									$('.arranged .event_text').hover(function(e){
		              					if (e.target === $('.rsvp')){
		              						return false
		              					}
										$(this).addClass('arranged_hovered')
										$('.bigtextbox_7').addClass('arranged_hovered')
									},function(){
										$(this).removeClass('arranged_hovered')
										$('.bigtextbox_7').removeClass('arranged_hovered')
									})
									$('.arranged .bigtextbox_7').hover(function(){
										// $(this).addClass('arranged_hovered')
										$('.event_text').addClass('arranged_hovered')
									},function(){
										// $(this).removeClass('arranged_hovered')
										$('.event_text').removeClass('arranged_hovered')
									})
									$('.arranged .about_text').hover(function(){
										$(this).addClass('arranged_hovered')
										// $('.bigtextbox_1').addClass('arranged_hovered')
									},function(){
										$(this).removeClass('arranged_hovered')
										// $('.bigtextbox_1').removeClass('arranged_hovered')
									})
									$('.arranged .bigtextbox_1').hover(function(){
										// $(this).addClass('arranged_hovered')
										$('.about_text').addClass('arranged_hovered')
									},function(){
										// $(this).removeClass('arranged_hovered')
										$('.about_text').removeClass('arranged_hovered')
									})
									$('.arranged .event_text').click(function(){
										if($('body').hasClass('arranged')){
											window.location.hash = 'events'
											hash_data()
										}
									})
									$('.arranged .bigtextbox_7').click(function(){
										console.log(isarranged)
										if($('body').hasClass('arranged')){
											window.location.hash = 'events'
											hash_data()
										}
									})
									$('.arranged .bigtextbox_8').click(function(){
										console.log(isarranged)
										if($('body').hasClass('arranged')){
											window.location.hash = 'partners'
											hash_data()
										}
									})
									$('.arranged .bigtextbox_9').click(function(){
										if($('body').hasClass('arranged')){
											window.location.hash = 'gallery'
											hash_data()
										}
									})
									$('.arranged .about_text').click(function(){
										if($('body').hasClass('arranged')){
											window.location.hash = 'about'
											hash_data()
										}
									})
									$('.arranged .bigtextbox_1').click(function(){
										if($('body').hasClass('arranged')){
											window.location.hash = 'about'
											hash_data()
										}
									})
								},80)
								// $('.pre_f_rowcol_1').addClass('f_rowcol_1')
								// $('.pre_f_rowcol_0').addClass('f_rowcol_0')
								$('.dropdown').appendTo('.wrap_2_top')
								$('.menu').appendTo('.wrap_2_top')
								$('.menu').attr({'src':'img/mix-01.png'})
							}
							$('.detail .close').click(function(){
								$('.detail').scrollTop(0);
								$('.detail').fadeOut(100)
								$('body').removeClass('detailed_view')
								window.location.hash = 'list'
							})
							$('.textbox').hover(function(){
								$(this).parent().addClass('arranged_hovered')
								}, function(){
								$(this).parent().removeClass('arranged_hovered')
							})
							step_3(arranged_seq)
					
				}else if(arranged == 0){
					$('.wrap_2_top>.about_text').remove()
					$('.event_text').remove()

					$('.textbox_1'   ).appendTo('.textbox_1_parent')
					$('.textbox_2'   ).appendTo('.textbox_2_parent')
					$('.textbox_3'   ).appendTo('.textbox_3_parent')
					$('.textbox_4'   ).appendTo('.textbox_4_parent')
					$('.textbox_5'   ).appendTo('.textbox_5_parent')
					$('.textbox_6'   ).appendTo('.textbox_6_parent')
					$('.textbox_7'   ).appendTo('.textbox_7_parent')
					$('.textbox_8'   ).appendTo('.textbox_8_parent')
					$('.textbox_9'   ).appendTo('.textbox_9_parent')
					$('.textbox_10'  ).appendTo('.textbox_10_parent')
					$('.textbox_11'  ).appendTo('.textbox_11_parent')
					$('.textbox_12'  ).appendTo('.textbox_12_parent')
					$('.textbox_13'  ).appendTo('.textbox_13_parent')
					$('.textbox_14'  ).appendTo('.textbox_14_parent')
					$('.textbox_15'  ).appendTo('.textbox_15_parent')
					$('.textbox_16'  ).appendTo('.textbox_16_parent')
					$('.textbox_17'  ).appendTo('.textbox_17_parent')
					$('.textbox_18'  ).appendTo('.textbox_18_parent')
					$('.textbox_19'  ).appendTo('.textbox_19_parent')
					$('.textbox_20'  ).appendTo('.textbox_20_parent')
					$('.textbox_21'  ).appendTo('.textbox_21_parent')
					$('.textbox_22'  ).appendTo('.textbox_22_parent')
					$('.bigtextbox_1').appendTo('.bigtextbox_1_parent')
					$('.bigtextbox_2').appendTo('.bigtextbox_2_parent')
					$('.bigtextbox_3').appendTo('.bigtextbox_3_parent')
					$('.bigtextbox_9').remove()
					$('.logo_img').remove()
					$('.bigtextbox_7').appendTo('.bigtextbox_7_parent')
					$('.bigtextbox_8').appendTo('.bigtextbox_8_parent')
					$('.menu').appendTo('.menu_wrapper')
								$('.dropdown').appendTo('.dropdown_wrapper')
					$('.menu').attr({'src':'img/menu.png'})

					$('body').removeClass('arranged')
					$('body').removeClass('arranged_')
					$('body').removeClass('arranged_main_wrap_2_3_last_1_1')
					$('body').removeClass('arranged_main_wrap_2_4_last_1_1')
					$('body').removeClass('arranged_main_wrap_2_1_last_1_1')
					$('body').removeClass('arranged_main_wrap_2_2_last_1_1')
					$('body').removeClass('arranged_main_wrap_2_3_last_1_2')
					$('body').removeClass('arranged_main_wrap_2_4_last_1_2')
					$('body').removeClass('arranged_main_wrap_2_1_last_1_2')
					$('body').removeClass('arranged_main_wrap_2_2_last_1_2')
					$('.coloreffect').removeClass('coloreffect_a')
					$('.pre_f_rowcol_1').removeClass('f_rowcol_1')
					$('.pre_f_rowcol_0').removeClass('f_rowcol_0')
					step_3(arranged_seq)
				}else{
						step_3(arranged_seq)
				}
		}


		function step_3(arranged_seq){
			if(arranged == 2 || arranged == 0 || arranged == 3){
				$('.shrinkdown').removeClass('shrinkdown')
			}else{
				$(arranged_seq+'_shrink').removeClass('shrinkdown')
			}
			$('.main>.wrap_2_top>.wrap_2').css({'width':'auto'})
			$('.main>.wrap_2_top>.wrap_2').css({'height':'auto'})
			$('.main>.wrap_2_bottom>.wrap_2').css({'width':'auto'})
			$('.main>.wrap_2_bottom>.wrap_2').css({'height':'auto'})

			step_4(arranged_seq)
		}


		function step_4(arranged_seq){
			$('.shrink_big').removeClass('shrink_big')
				if(arranged == 2 || arranged == 0 || arranged == 3){
					isarranged = false
				}else{
					isarranged = true
				}
			if(arranged == 0){
				$('.dropdown').css({'width':$('.dropdown').outerHeight()*2.5})
				$('.dropdown_contents_wrapper>.dropdown_contents').css({'font-size':$('.dropdown').outerWidth()/42*3 + 'px'})
				$('.dropdown_text').css({'font-size':$('.dropdown').outerWidth()/3 + 'px'})
			}
			setTimeout(function(){
				$('.titlebox>.wrap_2_1 .s_size').each(function(){
					var b_w = Math.abs((w_2*0.75 - $(this).offset().left))
					var b_h = Math.abs((h_2*0.75 - $(this).offset().top))
					$(this).parent().addClass('blank')
					$(this).css({'transform-origin': (b_w/$(this).outerWidth()*100) + '% '+ (b_h/$(this).outerHeight()*100) + '%'})
				})
				$('.titlebox>.wrap_2_2 .s_size').each(function(){
					var b_w = Math.abs((w_2*0.75 - $(this).offset().left))
					var b_h = Math.abs((h_2*0.75 - $(this).offset().top))
					$(this).parent().addClass('blank')
					$(this).css({'transform-origin': (-1*b_w/$(this).outerWidth()*100) + '% '+ (b_h/$(this).outerHeight()*100) + '%'})
				})
				if(arranged == 2 || arranged == 0){
					$('.shrink').each(function(){
						$(this).find('.bg_thumb').css({'background-position':(-1*$(this).offset().left) +'px ' + (-1*$(this).offset().top) +'px'})
						$(this).find('.bg_thumb').css({'background-size':(w/$(this).outerWidth())*100 +'% ' + (h/$(this).outerHeight())*100 +'%'})
					})
				}else{
					if(window.location.hash) {
						setTimeout(function(){
							hash_data()
						},500)
					}
					$(arranged_seq+'_shrink').each(function(){
						$(this).removeClass('shrink')
						$(this).removeClass(arranged_seq+'_shrink')
					})
				}
			},500)
			setTimeout(function(){
				$('.shrink').removeClass('shrink')
				$('.textbox').css({'pointer-events':'auto'})
				$('.bigtextbox').css({'pointer-events':'auto'})
				$('.menu').css({'pointer-events':'auto'})
				set_blank_inner()
			},700)
			setTimeout(function(){
				if(arranged == 2 || arranged == 0 || arranged == 3){
					$('body').removeClass('arranged_last')
				}else{
					$('body').addClass('arranged_last')
					$('.arranged_shadow').fadeIn(1000)
				}
			},1000)
		}
	}
		// // // // // // // // // // // // // // // // // animation // // // // // // // // // // // // // // // // // //
	function hash_data(){
										if($('body').hasClass('mixed_detailed_view')){
											return false
										}
		$('.detail>.text').scrollTop(0);
		console.log('-----')
		$('.intro').hide()
		$('.start_after').removeClass('start_after')
		$('body').removeClass('start')
		var selected = window.location.hash.substring(1); 
		if($.isNumeric(selected)){
			if(selected>10){return false}
			$('.detail').find('.title').css({'margin-top':'1vh'})
			var selected = parseInt(window.location.hash.substring(1));
			$('.visitwork').parent().remove()
			$('.thumb_inner_wrap').css({'transform':'none'})
			$('.thumb_wrap').show()
			$('.detail .thumb_inner_wrap').empty().css({'width': img_array[selected].length*100 + '%'})
			for (var i = img_array[selected].length - 1; i >= 0; i--) {
				$('<div class="thumb"></div>').appendTo('.detail .thumb_inner_wrap').css({'background-image': 'url(img/'+img_array[selected][i]+')',
																						'width': 100/img_array[selected].length + '%'})
			}
			if(img_array[selected].length>1){
				var slidecounter = 0
				$('.detail .thumb_wrap').append('<div class="arrow arrow_l"></div><div class="arrow arrow_r"></div>')
				$('.arrow_r').click(function(){
					slidecounter++
					slidecounter = slidecounter%img_array[selected].length
					console.log(slidecounter)
					$('.detail .thumb_inner_wrap').css({'transform':'translateX('+ -1*(slidecounter * 100/img_array[selected].length) +'%)'})
				})
				$('.arrow_l').click(function(){
					slidecounter --
					slidecounter = slidecounter%img_array[selected].length
					console.log(slidecounter)
					$('.detail .thumb_inner_wrap').css({'transform':'translateX('+ (slidecounter * 100/img_array[selected].length) +'%)'})
				})
			}
			$('.detail>.text>.title').empty().append(eval('db_'+lang)[selected][1])
			$('.detail>.text>.artist').empty().append(eval('db_'+lang)[selected][0])
			$('.detail>.text>.info').empty().append(eval('db_'+lang)[selected][2])
			$('.detail>.text>.des').empty().append(eval('db_'+lang)[selected][3])
			$('.detail>.text>.bio').empty().append(eval('db_'+lang)[selected][4])
			if(eval('db_'+lang)[selected].length == 6){
				$(eval('db_'+lang)[selected][5]).insertAfter($('.detail>.text>.artist'));
			}
			$('.detail>.text').perfectScrollbar({
		        useBothWheelAxes: false,
		        suppressScrollX: true
		    });
			$('.detail').fadeIn(100)
			$('body').addClass('detailed_view')
		}else if(selected === 'events'||selected === 'gallery'||selected === 'about'||selected === 'partners'){
			$('.visitwork').parent().remove()
			$('.detail').find('.title').css({'margin-top':'1vh'})
			$('.thumb_wrap').hide()
			$('.detail>.text>.title').empty().append(eval(selected+'_text_'+lang)[0])
			$('.detail>.text>.info').empty()
			$('.detail>.text>.artist').empty()
			$('.detail>.text>.des').empty().append(eval(selected+'_text_'+lang)[1])
			$('.detail>.text>.bio').empty()
			$('.detail>.text').perfectScrollbar({
		        useBothWheelAxes: false,
		        suppressScrollX: true
		    });
			$('.detail').fadeIn(100)
			$('body').addClass('detailed_view')
		}else if(selected === 'list'){
				$('.detail').fadeOut(100)
				$('body').removeClass('detailed_view')
				window.location.hash = 'list'
			if($('body').hasClass('arranged')){
				return false
			}else{
				isarranged = true
				$('.menu').css({'pointer-events':'none'})
				$('.textbox').css({'pointer-events':'none'})
				pre_animate(null,1,true)
			}
		}else{
			window.location.hash = ''
		}
		if(!window.location.hash){
			window.location.hash = ''
			isarranged = false
			$('.menu').css({'pointer-events':'none'})
			$('.textbox').css({'pointer-events':'none'})
			$('body').removeClass('detailed_view')
			pre_animate(null,0,true)
		}
		$('.detail .close').click(function(){
			$('.detail').fadeOut(100)
			$('body').removeClass('detailed_view')
			window.location.hash = 'list'
		})
	}
}
})