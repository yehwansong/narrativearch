$(document).ready(function(){
	var isMobile = false;
	if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
	    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
	    isMobile = true;
	}
if(isMobile){
	removeHash ()
	function removeHash () { 
	    history.pushState("", document.title, window.location.pathname
	                                                       + window.location.search);
	}

	var ua = navigator.userAgent.toLowerCase();
	var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
	var counter = 0
	var percentage_counter = 100
	var square_click_counter = 1
	var sizetimeout
	var w =  window.innerWidth
	var h =  window.innerHeight
	var w_2 =window.innerWidth/2
	var h_2 =window.innerHeight/2
	var downcounter = 0

	var shrink_counter = 0
	var shrink_array = []
	var isarranged = false
	var ratio = [1,1]
	var image_w = ratio[0]*h/ratio[1]
	var lang = 'en' 
	if(isAndroid){$('body').addClass('an')}
// // // // // // // // // // // // // // // // // create form // // // // // // // // // // // // // // // // // // 
$('.wrap_2_1').css({'background-size': $('.main').outerHeight()/$('.main').outerWidth() * 100 +'% 100%',
                    'background-position': (-1*($('.main').outerHeight()-$('.main').outerWidth())/2) +'px 0px'})
$('.wrap_2_3').css({'background-size': $('.main').outerHeight()/$('.main').outerWidth() * 100 +'% 100%',
                    'background-position': (-1*($('.main').outerHeight()-$('.main').outerWidth())/2) +'px 0px'})
$('.wrap_2_2').css({'background-size': $('.main').outerHeight()/$('.main').outerWidth() * 100 +'% 100%',
                    'background-position': '0% 0%'})
$('.wrap_2_4').css({'background-size': $('.main').outerHeight()/$('.main').outerWidth() * 100 +'% 100%',
                    'background-position': '0% 0%'})
			    $('.wrap_2_top').css({'height':($('.wrap_1').outerHeight() - h/2)+'px'})
			    $('.wrap_2_bottom').css({'height':(h/2)+'px'})
	

	$('.enterbutton').click(function(){
		$('body').removeClass('start')
		$('body').removeClass('start_after')
		$('.intro').remove()
	})
	if(window.location.hash) {
	    hash_data()
	}
	$( window ).on( 'hashchange', function( e ) {
	    hash_data()
	} );

	random_generator()
	var arranged_text_counter = 0
	setInterval(textanimation, 100)
	function textanimation(){
		if(isarranged){
			arranged_text_counter ++
			$('.textbox_1').css("cssText", 'background-position:' +arranged_text_counter+'% center !important');
			$('.bigtextbox_9').css("cssText", 'background-position:' +arranged_text_counter+'% center !important');
		}else{
			$('.textbox_1').css("cssText", 'background-position:7.5px center !important');
			$('.bigtextbox_9').css("cssText", 'background-position:7.5px center !important');
		}
	}
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
								<div class="last div_2 last_3 last_3_2 rowcol_0"></div>')
			}
			if(counter == 3){
				if(Math.floor(Math.random()*2) > 0){
								$(this).append('<div class="last div_3 last_4 last_4_1 rowcol_0"></div>')}
								else{
								$(this).append('<div class="last div_3 last_4 last_4_1 rowcol_0"></div>')
								}
			}
		})
		$('.titlebox .last_'+counter).each(function(){
			if(counter == 3){
				$(this).append('\
					<div class="last last_'+(counter+1)+' last_'+(counter+1)+'_1 rowcol_1">\
					</div>\
					<div class="last last_'+(counter+1)+' last_'+(counter+1)+'_3 rowcol_'+Math.round(Math.random())+'">\
					</div>\
					')
			}else if(counter == 2){
				$(this).append('\
					<div class="last last_'+(counter+1)+' last_'+(counter+1)+'_1 rowcol_1">\
						<div class="last_4_m last last_'+(counter+1)+' last_'+(counter+1)+'_2 rowcol_'+Math.round(Math.random())+'"></div>\
					</div>\
					<div class="last last_'+(counter+1)+' last_'+(counter+1)+'_2 rowcol_1">\
						<div class="last_4_m last last_'+(counter+1)+' last_'+(counter+1)+'_1 rowcol_'+Math.round(Math.random())+'"></div>\
					</div>\
					')
			}else{
				$(this).append('\
					<div class="last last_'+(counter+1)+' last_'+(counter+1)+'_1 rowcol_'+Math.round(Math.random())+'"></div>\
					')
			}
		})
		if((counter<3&&!isMobile)||(counter<3&&isMobile)){
			random_generator()
		}else{
			if(isMobile){
				$('.titlebox').find('.rowcol_0').removeClass('rowcol_0').addClass('rowcol_1')	
			}
			merge($('.titlebox .wrap_2_1 .last_1 .last_2_1 .last_3_1'))
			$('.titlebox .wrap_2_1 .last_1 .last_2_1 .last_3_1').addClass('blank').append('<div class="blank_inner"></div>')
			
			$('.last_4').addClass('unset')
			$('.last').css({'height': '100%'})
			$('.last').css({'width': '100%'})
			$('.wrap_2_2 .last_1_1 .last_2_3 .last_3_1').addClass('pre_textbox_parent')
			$('.wrap_2_2 .last_1_1 .last_2_3 .last_3_1').addClass('pre_textbox_parent')
			$('.wrap_2_2 .last_1_2 .last_2_1 .last_3_1').addClass('pre_textbox_parent')
			$('.wrap_2_2 .last_1_2 .last_2_2 .last_3_1').addClass('pre_textbox_parent')
			$('.wrap_2_2 .last_1_2 .last_2_3 .last_3_1').addClass('pre_textbox_parent')
			$('.wrap_2_2 .last_1_2 .last_2_3 .last_3_1').addClass('pre_textbox_parent')
			$('.wrap_2_2 .last_1_1 .last_2_3 .last_3_2').addClass('pre_textbox_parent')
			$('.wrap_2_2 .last_1_2 .last_2_1 .last_3_2').addClass('pre_textbox_parent')
			$('.wrap_2_2 .last_1_2 .last_2_2 .last_3_2').addClass('pre_textbox_parent')
			$('.wrap_2_2 .last_1_2 .last_2_3 .last_3_2').addClass('pre_textbox_parent')
				$('.wrap_2_2 .last_1_1 .last_2_3 .last_3_1 .last_4_1').addClass('pre_textbox')
				$('.wrap_2_2 .last_1_1 .last_2_3 .last_3_1 .last_4_2').addClass('pre_textbox')
				$('.wrap_2_2 .last_1_1 .last_2_3 .last_3_1 .last_4_3').addClass('pre_textbox')
				$('.wrap_2_2 .last_1_2 .last_2_1 .last_3_1 .last_4_1').addClass('pre_textbox')
				$('.wrap_2_2 .last_1_2 .last_2_1 .last_3_1 .last_4_2').addClass('pre_textbox')
				$('.wrap_2_2 .last_1_2 .last_2_1 .last_3_1 .last_4_3').addClass('pre_textbox')
				$('.wrap_2_2 .last_1_2 .last_2_2 .last_3_1 .last_4_1').addClass('pre_textbox')
				$('.wrap_2_2 .last_1_2 .last_2_2 .last_3_1 .last_4_2').addClass('pre_textbox')
				$('.wrap_2_2 .last_1_2 .last_2_2 .last_3_1 .last_4_3').addClass('pre_textbox')
				$('.wrap_2_2 .last_1_2 .last_2_3 .last_3_1 .last_4_1').addClass('pre_textbox')
				$('.wrap_2_2 .last_1_2 .last_2_3 .last_3_1 .last_4_2').addClass('pre_textbox')
				$('.wrap_2_2 .last_1_1 .last_2_3 .last_3_2 .last_4_1').addClass('pre_textbox')
				$('.wrap_2_2 .last_1_1 .last_2_3 .last_3_2 .last_4_2').addClass('pre_textbox')
				$('.wrap_2_2 .last_1_1 .last_2_3 .last_3_2 .last_4_3').addClass('pre_textbox')
				$('.wrap_2_2 .last_1_2 .last_2_1 .last_3_2 .last_4_1').addClass('pre_textbox')
				$('.wrap_2_2 .last_1_2 .last_2_1 .last_3_2 .last_4_2').addClass('pre_textbox')
				$('.wrap_2_2 .last_1_2 .last_2_1 .last_3_2 .last_4_3').addClass('pre_textbox')
				$('.wrap_2_2 .last_1_2 .last_2_2 .last_3_2 .last_4_1').addClass('pre_textbox')
				$('.wrap_2_2 .last_1_2 .last_2_2 .last_3_2 .last_4_2').addClass('pre_textbox')
				$('.wrap_2_2 .last_1_2 .last_2_2 .last_3_2 .last_4_3').addClass('pre_textbox')
				$('.wrap_2_2 .last_1_2 .last_2_3 .last_3_2 .last_4_1').addClass('pre_textbox')
				$('.wrap_2_2 .last_1_2 .last_2_3 .last_3_2 .last_4_2').addClass('pre_textbox')

				if(isMobile){
					$('.main .wrap_2_top').removeClass('pre_f_rowcol_1').addClass('pre_f_rowcol_0')
					$('.main .wrap_2_bottom').removeClass('pre_f_rowcol_1').addClass('pre_f_rowcol_0')
					$('.main .last_2').addClass('pre_f_rowcol_0')
					$('.main .last_3').addClass('pre_f_rowcol_0')
					$('.main .last_4').addClass('pre_f_rowcol_0')
					$('.main .last_1').addClass('pre_f_rowcol_0')
				}
			select_textbox()
			select_box()
		}
	}

// // // // // // // // // // // // // // // // // create form // // // // // // // // // // // // // // // // // //

	function select_textbox(){
		$('.main .wrap_2_4 .last_2').eq(Math.floor(Math.random()*$('.main .wrap_2_1 .last_2').length)).addClass('dropdown_wrapper')
		$('.dropdown_wrapper').parent().addClass('dropdown_wrapper_wrapper')
		$('.main .wrap_2_2 .last_2')
			.not($('.wrap_2_3 .last_1_1 .last_2_1'))
			.not($('.wrap_2_2 .last_1_1 .last_2_2'))
			.eq(Math.floor(Math.random()*$('.main .wrap_2_2 .last_2')
									.not($('.wrap_2_3 .last_1_1 .last_2_1'))
									.not($('.wrap_2_2 .last_1_1 .last_2_2')).length)).addClass('menu_wrapper')
		merge($('.dropdown_wrapper'))
		merge($('.menu_wrapper'))
		$('.dropdown_contents_wrapper').css({'width':$('.dropdown').outerWidth(),'left':$('.dropdown').offset().left,'top':$('.dropdown').offset().top+$('.dropdown').outerHeight()})
		$('.dropdown_contents_wrapper>.dropdown_contents').css({'font-size':$('.dropdown').outerWidth()/42*9 + 'px'})
		$('.dropdown_text').css({'font-size':$('.dropdown').outerWidth()/3 + 'px'})
		$('.menu_wrapper').append('<div class="coloreffect coloreffect_w"></div>')
		$('.dropdown_wrapper').append('<div class="coloreffect coloreffect_w"></div>')


		for (var i = 22; i >= 1; i--) {
			var val = Math.floor(Math.random()*$('.main .last_4.unset').not(".textbox_parent").length)
			$('.main .last_4.unset')
				.not(".textbox_parent")
				.eq(val)
				.addClass("blank textbox_parent textbox_"+i+"_parent").removeClass('unset').append('<div class="blank_inner"></div><div class="textbox textbox_'+i+'"></div>')
				if(i == 1){
					$(".textbox_parent").parent().addClass("textbox_parent_parent")
				}

		}
		for (var i = 9; i >= 1; i--) {
			if(i < 4 || i>6){
						$('.main .last_3')
								.not(".merged")
								.not(".textbox_parent")
								.not(".textbox_parent_parent")
								.not(".bigtextbox_parent")
								.eq(Math.floor(Math.random()*$('.main .last_3').not(".textbox_parent").not(".textbox_parent_parent").not(".bigtextbox_parent").length))
								.addClass("blank bigtextbox_parent bigtextbox_"+i+"_parent").append('<div class="blank_inner"></div><div class="bigtextbox bigtextbox_'+i+'"></div>')
							}
		}
		$('.dropdown_wrapper').parent().parent().addClass('f_rowcol_0')
		$('.dropdown_wrapper').parent().addClass('f_rowcol_0')
		// // // // // // // // // // // // // // // // // textbox // // // // // // // // // // // // // // // // // //
	}
	function merge(thisObj){
		console.log($('.dropdown_wrapper').length)
		console.log($('.dropdown').length)
		thisObj.empty()
		thisObj.addClass('merged')
		$('.dropdown_wrapper').removeClass('unset').addClass('blank').append('<div class="blank_inner"></div>')
		$('.menu_wrapper').removeClass('unset').addClass('blank').append('<div class="blank_inner"></div>')
		$('.dropdown_wrapper').remove('.dropdown').append('<div class="dropdown"><div class="dropdown_text">EN</div></div>')
		$('.dropdown').css({'width':$('.dropdown').outerHeight()*2.5})
		
			// console.log($('.dropdown').offset().top+$('.dropdown').outerHeight())
		$('.menu_wrapper').append('<img src="img/menu.png" class="menu">')
	}
		// // // // // // // // // // // // // // // // // blankbox // // // // // // // // // // // // // // // // // //

	function select_box(){
		$('.last_4').each(function(index){
				if(Math.round(Math.random()) == 0){
					$(this).append('<div class="coloreffect coloreffect_w"></div>') 
				}else{
					$(this).append('<div class="coloreffect coloreffect_h"></div>') 
				}
		})
		for (var i = 0; i < 300; i++) {
			$('.main .unset').eq(Math.floor(Math.random()*$('.main .unset').length)).removeClass('unset').addClass('blank').append('<div class="blank_inner"></div>')
			$('.main .unset').eq(Math.floor(Math.random()*$('.main .unset').length)).removeClass('unset').addClass('blank').append('<div class="blank_inner"></div>')
			if(i%20 == 0) { $('.main .last_4').eq(Math.floor(Math.random()*$('.main .last_4').length)).addClass('b_size') }
			if(i%10 == 0) { $('.main .last_4').eq(Math.floor(Math.random()*$('.main .last_4').length)).addClass('white') }
			// if(i%50 == 0){ $('.titlebox .unset').eq(Math.floor(Math.random()*$('.titlebox .unset').length)).removeClass('unset').addClass('blank blank_2').append('<div class="blank_inner blank_inner_2"></div>') }
			
			if(i%1 == 0){
				var random = Math.floor(Math.random()*$('.titlebox .unset').length)
				$('.titlebox .unset').eq(random).addClass('blank').append('<div class="blank_inner"></div>')
				$('.titlebox .unset').eq(random).removeClass('unset').find('.title_bg').addClass('s_size')
				console.log('------')
			}
			if(i%40 == 0){
				var random = Math.floor(Math.random()*$('.main .unset').length)
				$('.main .unset').eq(random).parent().addClass('blank s_size_blank').append('<div class="blank_inner blank_inner"></div>')
				$('.main .unset').eq(random).removeClass('unset').addClass('s_size')
			}
			if(i%10 == 0){
				var random = Math.floor(Math.random()*$('.main .unset').length)
				$('.main .unset').eq(random).parent().addClass('blank s_size_blank').append('<div class="blank_inner"></div>')
				$('.main .unset').eq(random).removeClass('unset').addClass('s_size')
			}
			if(i ==199){
				set_size()	
				set_blank_inner()
				titlebox_bg()
				$('.titlebox').clone().removeClass('titlebox_back').addClass('titlebox_front').insertAfter( ".titleimg" );
			}
		}
	}
	// // // // // // // // // // // // // // // // // setproperty // // // // // // // // // // // // // // // // // //

	function set_size(){
		$('.b_size').css({'z-index':10})
		$('.b_size').parent().css({'z-index':10})
		$('.b_size').parent().parent().css({'z-index':10})
		$('.b_size').parent().parent().parent().css({'z-index':10})
		$('.b_size').parent().parent().parent().parent().css({'z-index':10})
		$('.textbox').css({'z-index':12})
		$('.textbox').parent().css({'z-index':12})
		$('.textbox').parent().parent().css({'z-index':12})
		$('.textbox').parent().parent().parent().css({'z-index':12})
		$('.textbox').parent().parent().parent().parent().css({'z-index':12})
		$('.wrap_2_1 .b_size').each(function(){
			var b_w = Math.abs((w_2 - $(this).offset().left))
			var b_h = Math.abs((h_2 - $(this).offset().top))
			$(this).css({'transform-origin': (b_w/$(this).outerWidth()*100) + '% '+ (b_h/$(this).outerHeight()*100) + '%'})
			$(this).css({'box-shadow':b_w/300 + 'vh '+ b_h/300 +'vh 0.5vh #3c3c3c'})
		})
		$('.wrap_2_2 .b_size').each(function(){
			var b_w = Math.abs((w_2 - $(this).offset().left))
			var b_h = Math.abs((h_2 - $(this).offset().top))
			$(this).css({'transform-origin': (-1*b_w/$(this).outerWidth()*100) + '% '+ (b_h/$(this).outerHeight()*100) + '%'})
			$(this).css({'box-shadow':-1*b_w/300 + 'vh '+ b_h/300 +'vh 0.5vh #3c3c3c'})
		})
		$('.wrap_2_3 .b_size').each(function(){
			var b_w = Math.abs((w_2 - $(this).offset().left))
			var b_h = Math.abs((h_2 - $(this).offset().top))
			$(this).css({'transform-origin': (b_w/$(this).outerWidth()*100) + '% '+ (-1*b_h/$(this).outerHeight()*100) + '%'})
			$(this).css({'box-shadow':b_w/300 + 'vh '+ -1*b_h/300 +'vh 0.5vh #3c3c3c'})
		})
		$('.wrap_2_4 .b_size').each(function(){
			var b_w = Math.abs((w_2 - $(this).offset().left))
			var b_h = Math.abs((h_2 - $(this).offset().top))
			$(this).css({'transform-origin': (-1*b_w/$(this).outerWidth()*100) + '% '+ (-1*b_h/$(this).outerHeight()*100) + '%'})
			$(this).css({'box-shadow':-1*b_w/300 + 'vh '+ -1*b_h/300 +'vh 0.5vh #3c3c3c'})
		})
		$('.wrap_2_1 .s_size').each(function(){
			var b_w = Math.abs((w_2 - $(this).offset().left))
			var b_h = Math.abs((h_2 - $(this).offset().top))
			$(this).parent().addClass('blank')
			$(this).css({'transform-origin': (b_w/$(this).outerWidth()*100) + '% '+ (b_h/$(this).outerHeight()*100) + '%'})
		})
		$('.wrap_2_2 .s_size').each(function(){
			var b_w = Math.abs((w_2 - $(this).offset().left))
			var b_h = Math.abs((h_2 - $(this).offset().top))
			$(this).parent().addClass('blank')
			$(this).css({'transform-origin': (-1*b_w/$(this).outerWidth()*100) + '% '+ (b_h/$(this).outerHeight()*100) + '%'})
		})
		$('.wrap_2_3 .s_size').each(function(){
			var b_w = Math.abs((w_2 - $(this).offset().left))
			var b_h = Math.abs((h_2 - $(this).offset().top))
			$(this).parent().addClass('blank')
			$(this).css({'transform-origin': (b_w/$(this).outerWidth()*100) + '% '+ (-1*b_h/$(this).outerHeight()*100) + '%'})
		})
		$('.wrap_2_4 .s_size').each(function(){
			var b_w = Math.abs((w_2 - $(this).offset().left))
			var b_h = Math.abs((h_2 - $(this).offset().top))
			$(this).parent().addClass('blank')
			$(this).css({'transform-origin': (-1*b_w/$(this).outerWidth()*100) + '% '+ (-1*b_h/$(this).outerHeight()*100) + '%'})
		})
	}

	// // // // // // // // // // // // // // // // // setproperty // // // // // // // // // // // // // // // // // //
	function set_blank_inner(){
		console.log('2----')
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
	// // // // // // // // // // // // // // // // // blankbox // // // // // // // // // // // // // // // // // //

	function titlebox_bg(){
		var title_w = $('.titlebox').outerWidth()
		var title_h = $('.titlebox').outerHeight()
		$('.last_4').each(function(){
			$(this).find('.title_bg').css({'background-size':((title_w/$(this).outerWidth()) *100) + '% ' + ((title_h/$(this).outerHeight()) *100) + '%' })
			$(this).find('.title_bg').css({'background-position-x':(-1 * $(this).offset().left) + 'px'})
			$(this).find('.title_bg').css({'background-position-y':(-1 * $(this).offset().top) + 'px'})
		})
		$('.merged.last_3').each(function(){
			$(this).find('.title_bg').css({'background-size':((title_w/$(this).outerWidth()) *100) + '% ' + ((title_h/$(this).outerHeight()) *100) + '%' })
			$(this).find('.title_bg').css({'background-position-x':(-1 * $(this).offset().left) + 'px'})
			$(this).find('.title_bg').css({'background-position-y':(-1 * $(this).offset().top) + 'px'})
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

		// // // // // // // // // // // // // // // // // animation // // // // // // // // // // // // // // // // // //
	var img_array = [
		['bg_thumb_1.png' ],
		['bg_thumb_2.png' ],
		['bg_thumb_3.png' ],
		['bg_thumb_4.png' ],
		['bg_thumb_5.png' ],
		['bg_thumb_6.png' ],
		['bg_thumb_7.png' ],
		['bg_thumb_8.png' ],
		['bg_thumb_9.png' ],
		['bg_thumb_10.png'],
		['bg_thumb_11_2.png','bg_thumb_11_1.png']
	]
	$('.wrap_1').css({'pointer-events':'none'})
	var def_height_top = ($('.wrap_1').outerHeight() - h/2)
	var def_height_bot = (h/2)
	var def_width = $('.wrap_2_1').outerWidth()
	// $('.bigtextbox').on('touchstart', function(e) {
	// 	$('.dropdown_contents_wrapper').hide()
	// 	arranged_text_counter = 0
	// 	$('.detail').hide()
	// 	if(!isarranged){
	// 		isarranged = true
	// 		$('.menu').css({'pointer-events':'none'})
	// 		$('.textbox').css({'pointer-events':'none'})
	// 			pre_animate(null,1)
	// 		return false
	// 	}else{
	// 	}})

	$('.menu').on('touchstart', function(e) {
		$('.dropdown_contents_wrapper').hide()
		arranged_text_counter = 0
		$('.detail').hide()
		if(!isarranged){
			isarranged = true
			$('.menu').css({'pointer-events':'none'})
			$('.textbox').css({'pointer-events':'none'})
				pre_animate(null,1)
		}else{
			isarranged = false
			$('.menu').css({'pointer-events':'none'})
			$('.textbox').css({'pointer-events':'none'})
				pre_animate(null,0)
		}
		return false})
	var dropdown_on = false
	$('.dropdown').on('touchstart', function(e) {
		console.log('=dropdown1!!!!')
		if(!dropdown_on){
			$('.dropdown_contents_wrapper').css({'width':$('.dropdown').outerWidth(),'left':$('.dropdown').offset().left,'top':$('.dropdown').offset().top+$('.dropdown').outerHeight()})
			dropdown_on = true
			$('.dropdown_contents_wrapper').show()
			if($('.dropdown').offset().top+$('.dropdown').outerHeight()> (0.9*window.innerHeight) ){
				$('.dropdown_contents_wrapper').css({'top':$('.dropdown').offset().top - $('.dropdown_contents_wrapper').outerHeight()})
			}
		}else{
			dropdown_on = false
			$('.dropdown_contents_wrapper').hide()
		}
		return false
	})
	$('.dropdown_contents').on('touchstart', function(e) {
			dropdown_on = false
			$('.dropdown_contents_wrapper').hide()
			if($(this).attr('class').split('dropdown_contents_')[1].split(' ')[0] === 'cn'){
				$('.dropdown_text').html('中文')
			}else{
				$('.dropdown_text').html('EN')
			}
			lang = $(this).attr('class').split('dropdown_contents_')[1].split(' ')[0]
			$('body').removeClass('cn')
			$('body').removeClass('en')
			$('body').addClass(lang)
		return false
	})

	$('body').on('touchstart', function(e) {
		$('.dropdown_contents_wrapper').hide()
		if($('body').hasClass('arranged')){
			return false}else{
		    		var rand = Math.floor(Math.random()*11)+1
					$('.main .wrap_2_1').css({'background-image':'url(img/thumb'+rand+'_m/layer1-min.png)'})
					$('.main .wrap_2_2').css({'background-image':'url(img/thumb'+rand+'_m/layer2-min.png)'})
					$('.main .wrap_2_3').css({'background-image':'url(img/thumb'+rand+'_m/layer3-min.png)'})
					$('.main .wrap_2_4').css({'background-image':'url(img/thumb'+rand+'_m/layer4-min.png)'})
					$('.shrink').css({'background':'transparent'})
					$('.shrink').removeClass('shrink')
					$('.bg_block').removeClass('bg_block')
					$('.blank').length/2
	        var $all = $(".blank").removeClass("shrink");
		        $('.wrap_2_top').removeClass('m_bounding')
				$('.wrap_2_bottom').removeClass('m_bounding')
				$('.wrap_2_1').removeClass('m_bounding')
				$('.wrap_2_3').removeClass('m_bounding')
				$('.wrap_2_2').removeClass('m_bounding')
				$('.wrap_2_4').removeClass('m_bounding')
		        $('.wrap_2_top').removeClass('animate')
				$('.wrap_2_bottom').removeClass('animate')
				$('.wrap_2_1').removeClass('animate')
				$('.wrap_2_3').removeClass('animate')
				$('.wrap_2_2').removeClass('animate')
				$('.wrap_2_4').removeClass('animate')
		    var stY = e.touches[0].clientY;
		    var stX = e.touches[0].clientX;
		    var touchDistance = 0;
		    function touchMove(e) {
		    	if(!$('body').hasClass('after')){
		    		$('body').addClass('after')
		    	}
		        disY = e.touches[0].clientY - stY;
		        disX = e.touches[0].clientX - stX;
			    $('.wrap_2_top').css({'height':(def_height_top+disY)+'px'})
			    $('.wrap_2_bottom').css({'height':(def_height_bot-disY)+'px'})
			    $('.wrap_2_1').css({'width':(def_width+disX)+'px'})
			    $('.wrap_2_3').css({'width':(def_width+disX)+'px'})
			    $('.wrap_2_2').css({'width':(def_width-disX)+'px'})
			    $('.wrap_2_4').css({'width':(def_width-disX)+'px'})
		    }
		    $(this).on('touchmove', touchMove).one('touchend', function() {

		        $(this).off('touchmove', touchMove);
		        $('.wrap_2_top').addClass('m_bounding')
				$('.wrap_2_bottom').addClass('m_bounding')
				$('.wrap_2_1').addClass('m_bounding')
				$('.wrap_2_3').addClass('m_bounding')
				$('.wrap_2_2').addClass('m_bounding')
				$('.wrap_2_4').addClass('m_bounding')
			    $('.wrap_2_top').css({'height':(def_height_top)+'px'})
			    $('.wrap_2_bottom').css({'height':(def_height_bot)+'px'})
			    $('.wrap_2_1').css({'width':(def_width)+'px'})
			    $('.wrap_2_3').css({'width':(def_width)+'px'})
			    $('.wrap_2_2').css({'width':(def_width)+'px'})
			    $('.wrap_2_4').css({'width':(def_width)+'px'})
	        	$(shuffle($all).slice(0, 30)).addClass('bg_block')
				if(!isAndroid) {
		    		pre_animate(null,2)
				}

		    });
		    if(e.touches.length>1){

		        $(this).off('touchmove', touchMove);
		        $('.wrap_2_top').addClass('m_bounding')
				$('.wrap_2_bottom').addClass('m_bounding')
				$('.wrap_2_1').addClass('m_bounding')
				$('.wrap_2_3').addClass('m_bounding')
				$('.wrap_2_2').addClass('m_bounding')
				$('.wrap_2_4').addClass('m_bounding')
			    $('.wrap_2_top').css({'height':(def_height_top)+'px'})
			    $('.wrap_2_bottom').css({'height':(def_height_bot)+'px'})
			    $('.wrap_2_1').css({'width':(def_width)+'px'})
			    $('.wrap_2_3').css({'width':(def_width)+'px'})
			    $('.wrap_2_2').css({'width':(def_width)+'px'})
			    $('.wrap_2_4').css({'width':(def_width)+'px'})
				$('.shrink').css({'background':'red'})
		    	pre_animate(null,2)
			    }
			}
	});
	$('.menu').click(function(){
		if(!isarranged){
			isarranged = true
			$('.menu').css({'pointer-events':'none'})
			$('.textbox').css({'pointer-events':'none'})
				pre_animate(null,1)
		}else{
			isarranged = false
			$('.menu').css({'pointer-events':'none'})
			$('.textbox').css({'pointer-events':'none'})
				pre_animate(null,0)
		}
	})

	var arranged_counter = 0
	function pre_animate(img,arranged){
		console.log(arranged)
		if(arranged == 0){
			console.log('l;kadsjflkadjsf')
			$('.big_shuffle').eq(Math.floor(Math.random()*$('.big_shuffle').length)).addClass('shrink_big')
			if(isMobile){
				$('.big_shuffle').eq(Math.floor(Math.random()*$('.big_shuffle').length)).addClass('shrink_big')
				$('.big_shuffle').eq(Math.floor(Math.random()*$('.big_shuffle').length)).addClass('shrink_big')
				$('.big_shuffle').eq(Math.floor(Math.random()*$('.big_shuffle').length)).addClass('shrink_big')
				$('.big_shuffle').eq(Math.floor(Math.random()*$('.big_shuffle').length)).addClass('shrink_big')
			}
		}
		if(arranged == 1){
			arranged_counter++
			if(arranged_counter == 2){
						$('.big_shuffle').eq(Math.floor(Math.random()*$('.big_shuffle').length)).addClass('shrink_big')
						$('.big_shuffle').eq(Math.floor(Math.random()*$('.big_shuffle').length)).addClass('shrink_big')
			}else{
					$('.big_shuffle').eq(Math.floor(Math.random()*$('.big_shuffle').length)).addClass('shrink_big')
					$('.big_shuffle').eq(Math.floor(Math.random()*$('.big_shuffle').length)).addClass('shrink_big')
					$('.big_shuffle').eq(Math.floor(Math.random()*$('.big_shuffle').length)).addClass('shrink_big')
					$('.big_shuffle').eq(Math.floor(Math.random()*$('.big_shuffle').length)).addClass('shrink_big')
					$('.shrink_big').removeClass('shrink_big')
			}
		}
		for (var i = 0; i < 100; i++) {
			var random_val = Math.floor(Math.random()*$('.main .last_2').length)
			$('.main .last_2').eq(random_val).find('.last_3_1').addClass('shrink')
			if(i%30 == 0){
				var t_ran = Math.floor(Math.random()*$('.titlebox .last_4').not('.shrink').length)
				$('.titlebox_back .last_4').not('.shrink').eq(t_ran).addClass('shrink')
				$('.titlebox_front .last_4').not('.shrink').eq(t_ran).addClass('shrink')
			}
			if(i == 59){
				percentage_counter = 100
				animate(img,arranged)
			}
		}
	}
	var colorlist_counter = 0
	function animate(img,arranged){
		if(arranged == 1 && !isAndroid){
			percentage_counter = percentage_counter - 3
		}else if(arranged == 1){
			percentage_counter = percentage_counter - 102
		}else{
			percentage_counter = percentage_counter - 8
		}
		$('.shrink').each(function(){
			$(this).removeClass('animate')
			if($(this).parent().hasClass('rowcol_1')){
				$(this).css({'height':percentage_counter + '%'})
			}else{
				$(this).css({'width':percentage_counter + '%'})
			}
		})
		$('.shrink_big').each(function(){
			$(this).removeClass('animate')
			if(!isMobile){
				if($(this).parent().hasClass('rowcol_1')){
					$(this).css({'height':'80%'})
					$(this).css({'width':percentage_counter + '%'})
				}else{
					$(this).css({'height':percentage_counter + '%'})
					$(this).css({'width':'80%'})
				}
			}else{
				if($(this).parent().hasClass('rowcol_1')){
					$(this).css({'height':'100%'})
					$(this).css({'width':percentage_counter + '%'})
				}else{
					$(this).css({'height':percentage_counter + '%'})
					$(this).css({'width':'100%'})
				}
			}
		})
		if(percentage_counter > -2){
			setTimeout(function(){
				animate(img,arranged)
			},1)
		}else{
			step_1()
			function step_1(){
		console.log('dsalfkjasdlkfjkkkk')
				$('.shrink').addClass('animate')
				$('.shrink').addClass('bgon')
				$('.shrink_big').addClass('animate')
				$('.shrink').each(function(index){
					if($(this).parent().hasClass('rowcol_0')){
						$(this).parent().removeClass('rowcol_0').addClass('rowcol_1')
						$(this).css({'width':'0%'})
						$(this).css({'height':'0%'})
					}else if($(this).parent().hasClass('rowcol_1')){
						$(this).parent().removeClass('rowcol_1').addClass('rowcol_0')
						$(this).css({'width':'0%'})
						$(this).css({'height':'0%'})
					}else{
						$(this).css({'width':'0%'})
						$(this).css({'height':'0%'})
						if(Math.round(Math.random()) == 0){
							$(this).parent().addClass('rowcol_1')
						}else{
							$(this).parent().addClass('rowcol_0')
						}
					}
					if(index == $('.shrink').length-1){
						step_2()
					}
				})
				$('.wrap_2_4').removeClass('rowcol_0').addClass('rowcol_1')
				$('.wrap_2_3').removeClass('rowcol_0').addClass('rowcol_1')
				$('.menu_wrapper').parent().removeClass('rowcol_1').addClass('rowcol_0')
				$('.dropdown_wrapper').parent().removeClass('rowcol_1').addClass('rowcol_0')
			}
			function step_2(){
				if(arranged == 1){
					if(isMobile && !isAndroid){
						if(arranged_counter == 1){
							$('.bigtextbox_1').appendTo($('.main .last_3').eq(0) )
							$('.bigtextbox_3').appendTo($('.main .last_3').eq(15))
							$('.textbox_1   ').appendTo($('.main .last_3').eq(16))
							$('.textbox_2   ').appendTo($('.main .last_3').eq(17))
							$('.textbox_3   ').appendTo($('.main .last_3').eq(18))
							$('.textbox_4   ').appendTo($('.main .last_3').eq(19))
							$('.textbox_5   ').appendTo($('.main .last_3').eq(20))
							$('.textbox_6   ').appendTo($('.main .last_3').eq(21))
							$('.textbox_7   ').appendTo($('.main .last_3').eq(22))  
							$('.textbox_8   ').appendTo($('.main .last_3').eq(23)) 
							$('.textbox_9   ').appendTo($('.main .last_3').eq(24)) 
							$('.textbox_10  ').appendTo($('.main .last_3').eq(25)) 
							$('.textbox_11  ').appendTo($('.main .last_3').eq(26)) 

							$('.shrink').parent().find('.coloreffect').addClass('coloreffect_a')
							$('.shrink').parent().find('.pre_f_rowcol_1').addClass('f_rowcol_1')
							$('.shrink').parent().find('.pre_f_rowcol_0').addClass('f_rowcol_0')
							$('.pre_f_rowcol_1').addClass('f_rowcol_1')
						}
						if(arranged_counter == 2){
							$('.bigtextbox_2').appendTo($('.main .last_3').eq(2 ))
							$('.textbox_12  ').appendTo($('.main .last_3').eq(3 ))
							$('.textbox_13  ').appendTo($('.main .last_3').eq(4 )) 
							$('.textbox_14  ').appendTo($('.main .last_3').eq(5 ))
							$('.textbox_15  ').appendTo($('.main .last_3').eq(6 ))
							$('.textbox_16  ').appendTo($('.main .last_3').eq(7 ))
							$('.textbox_17  ').appendTo($('.main .last_3').eq(8 ))
							$('.textbox_18  ').appendTo($('.main .last_3').eq(9 ))
							$('.textbox_19  ').appendTo($('.main .last_3').eq(10))
							$('.textbox_20  ').appendTo($('.main .last_3').eq(11))
							$('.textbox_21  ').appendTo($('.main .last_3').eq(12))
							$('.textbox_22  ').appendTo($('.main .last_3').eq(13))
							$('.bigtextbox_4').appendTo($('.main .last_3').eq(32))
							$('.bigtextbox_5').appendTo($('.main .last_3').eq(32))
							$('.bigtextbox_6').appendTo($('.main .last_3').eq(32))
							$('.bigtextbox_7').appendTo($('.main .last_3').eq(28))
							$('.bigtextbox_8').appendTo($('.main .last_3').eq(30))
							$('.bigtextbox_9').appendTo($('.main .last_3').eq(32))
							$('.main .last_3').eq(35).addClass('logo_footer')
							$('.main .last_3').eq(36).addClass('logo_footer').append('<img src="img/logos-01.png">')
							$('.main .last_3').eq(0 ).addClass('arranged_titles')
							$('.main .last_3').eq(1 ).addClass('arranged_titles')
							$('.main .last_3').eq(2 ).addClass('arranged_titles')
							$('.main .last_3').eq(14).addClass('arranged_titles')
							$('.main .last_3').eq(15).addClass('arranged_titles')
							$('.main .last_3').eq(27).addClass('arranged_titles')
							$('.main .last_3').eq(28).addClass('arranged_titles')
							$('.main .last_3').eq(29).addClass('arranged_titles')
							$('.main .last_3').eq(30).addClass('arranged_titles')
							$('.main .last_3').eq(32).addClass('arranged_titles')
							$('.textbox').parent().addClass('bottomline')
							for (var i = $('.main .last_3').length - 1; i >= 37; i--) {
								$('.main .last_3').eq(i).addClass('arranged_hides')
							}
		
							$('.menu').appendTo('.titlebox')
							$('.dropdown').appendTo('.titlebox')
							$('body').addClass('arranged')
							$('.coloreffect').addClass('coloreffect_a')

							$('.arranged .bigtextbox_1').click(function(){
									$(this).addClass('hovered')
								if($('body').hasClass('arranged')){
									window.location.hash = 'about'
									hash_data()
								}
							})
							$('.arranged .bigtextbox_7').click(function(){
									$(this).addClass('hovered')
										if($('body').hasClass('arranged')){
											window.location.hash = 'events'
											hash_data()
										}
							})
							$('.arranged .bigtextbox_8').click(function(){
									$(this).addClass('hovered')
										console.log(isarranged)
										if($('body').hasClass('arranged')){
											window.location.hash = 'partners'
											hash_data()
										}
							})
							$('.arranged .bigtextbox_9').click(function(){
									$(this).addClass('hovered')
										if($('body').hasClass('arranged')){
											window.location.hash = 'gallery'
											hash_data()
										}
							})


							$('.arranged .textbox').click(function(){
								if($('body').hasClass('arranged')){}else{return false}
									$(this).addClass('hovered')
										var selected = parseInt($(this).attr('class').split('textbox_')[1].split(' ')[0])%11 - 1
										if(selected < 0 ){selected = 10}
										window.location.hash = selected
										hash_data()
										
							})
							$('.detail .close').click(function(){
								$('.hovered').removeClass('hovered')
								$('.detail').fadeOut(100)
								$('body').removeClass('detailed_view')
							})
							$('.pre_f_rowcol_0').addClass('f_rowcol_0')
							$('.menu').attr({'src':'img/mix-01.png'})
						}
						step_3()
					}
					if(isMobile && isAndroid){
						if(arranged_counter == 1){
							$('.bigtextbox_1').appendTo($('.main .last_3').eq(0) )
							$('.bigtextbox_3').appendTo($('.main .last_3').eq(15))
							$('.textbox_1   ').appendTo($('.main .last_3').eq(16))
							$('.textbox_2   ').appendTo($('.main .last_3').eq(17))
							$('.textbox_3   ').appendTo($('.main .last_3').eq(18))
							$('.textbox_4   ').appendTo($('.main .last_3').eq(19))
							$('.textbox_5   ').appendTo($('.main .last_3').eq(20))
							$('.textbox_6   ').appendTo($('.main .last_3').eq(21))
							$('.textbox_7   ').appendTo($('.main .last_3').eq(22))  
							$('.textbox_8   ').appendTo($('.main .last_3').eq(23)) 
							$('.textbox_9   ').appendTo($('.main .last_3').eq(24)) 
							$('.textbox_10  ').appendTo($('.main .last_3').eq(25)) 
							$('.textbox_11  ').appendTo($('.main .last_3').eq(26)) 

							$('.shrink').parent().find('.coloreffect').addClass('coloreffect_a')
							$('.shrink').parent().find('.pre_f_rowcol_1').addClass('f_rowcol_1')
							$('.shrink').parent().find('.pre_f_rowcol_0').addClass('f_rowcol_0')
							$('.pre_f_rowcol_1').addClass('f_rowcol_1')
							$('.bigtextbox_2').appendTo($('.main .last_3').eq(2 ))
							$('.textbox_12  ').appendTo($('.main .last_3').eq(3 ))
							$('.textbox_13  ').appendTo($('.main .last_3').eq(4 )) 
							$('.textbox_14  ').appendTo($('.main .last_3').eq(5 ))
							$('.textbox_15  ').appendTo($('.main .last_3').eq(6 ))
							$('.textbox_16  ').appendTo($('.main .last_3').eq(7 ))
							$('.textbox_17  ').appendTo($('.main .last_3').eq(8 ))
							$('.textbox_18  ').appendTo($('.main .last_3').eq(9 ))
							$('.textbox_19  ').appendTo($('.main .last_3').eq(10))
							$('.textbox_20  ').appendTo($('.main .last_3').eq(11))
							$('.textbox_21  ').appendTo($('.main .last_3').eq(12))
							$('.textbox_22  ').appendTo($('.main .last_3').eq(13))
							$('.bigtextbox_4').appendTo($('.main .last_3').eq(32))
							$('.bigtextbox_5').appendTo($('.main .last_3').eq(32))
							$('.bigtextbox_6').appendTo($('.main .last_3').eq(32))
							$('.bigtextbox_7').appendTo($('.main .last_3').eq(28))
							$('.bigtextbox_8').appendTo($('.main .last_3').eq(30))
							$('.bigtextbox_9').appendTo($('.main .last_3').eq(32))
							$('.main .last_3').eq(35).addClass('logo_footer')
							$('.main .last_3').eq(36).addClass('logo_footer').append('<img src="img/logos-01.png">')
							$('.main .last_3').eq(0 ).addClass('arranged_titles')
							$('.main .last_3').eq(1 ).addClass('arranged_titles')
							$('.main .last_3').eq(2 ).addClass('arranged_titles')
							$('.main .last_3').eq(14).addClass('arranged_titles')
							$('.main .last_3').eq(15).addClass('arranged_titles')
							$('.main .last_3').eq(27).addClass('arranged_titles')
							$('.main .last_3').eq(28).addClass('arranged_titles')
							$('.main .last_3').eq(29).addClass('arranged_titles')
							$('.main .last_3').eq(30).addClass('arranged_titles')
							$('.main .last_3').eq(32).addClass('arranged_titles')
							$('.textbox').parent().addClass('bottomline')
							for (var i = $('.main .last_3').length - 1; i >= 37; i--) {
								$('.main .last_3').eq(i).addClass('arranged_hides')
							}
		
							$('.menu').appendTo('.titlebox')
							$('.dropdown').appendTo('.titlebox')
							$('body').addClass('arranged')
							$('.coloreffect').addClass('coloreffect_a')

							$('.arranged .bigtextbox_1').click(function(){
									$(this).addClass('hovered')
								if($('body').hasClass('arranged')){
									window.location.hash = 'about'
									hash_data()
								}
							})
							$('.arranged .bigtextbox_7').click(function(){
									$(this).addClass('hovered')
										if($('body').hasClass('arranged')){
											window.location.hash = 'events'
											hash_data()
										}
							})
							$('.arranged .bigtextbox_8').click(function(){
									$(this).addClass('hovered')
										console.log(isarranged)
										if($('body').hasClass('arranged')){
											window.location.hash = 'partners'
											hash_data()
										}
							})
							$('.arranged .bigtextbox_9').click(function(){
									$(this).addClass('hovered')
										if($('body').hasClass('arranged')){
											window.location.hash = 'gallery'
											hash_data()
										}
							})


							$('.arranged .textbox').click(function(){
									$(this).addClass('hovered')
								if($('body').hasClass('arranged')){}else{return false}
										var selected = parseInt($(this).attr('class').split('textbox_')[1].split(' ')[0])%11 - 1
										if(selected < 0 ){selected = 10}
										window.location.hash = selected
										hash_data()
										
							})
							$('.detail .close').click(function(){
								$('.hovered').removeClass('hovered')
								$('.detail').fadeOut(100)
								$('body').removeClass('detailed_view')
							})
							$('.pre_f_rowcol_0').addClass('f_rowcol_0')
							$('.menu').attr({'src':'img/mix-01.png'})
						}
						step_3()
					}
				}else if(arranged == 0){
					$('.textbox_1'  ).appendTo('.textbox_1_parent')
					$('.textbox_2'  ).appendTo('.textbox_2_parent')
					$('.textbox_3'  ).appendTo('.textbox_3_parent')
					$('.textbox_4'  ).appendTo('.textbox_4_parent')
					$('.textbox_5'  ).appendTo('.textbox_5_parent')
					$('.textbox_6'  ).appendTo('.textbox_6_parent')
					$('.textbox_7'  ).appendTo('.textbox_7_parent')
					$('.textbox_8'  ).appendTo('.textbox_8_parent')
					$('.textbox_9'  ).appendTo('.textbox_9_parent')
					$('.textbox_10' ).appendTo('.textbox_10_parent')
					$('.textbox_11' ).appendTo('.textbox_11_parent')
					$('.textbox_12' ).appendTo('.textbox_12_parent')
					$('.textbox_13' ).appendTo('.textbox_13_parent')
					$('.textbox_14' ).appendTo('.textbox_14_parent')
					$('.textbox_15' ).appendTo('.textbox_15_parent')
					$('.textbox_16' ).appendTo('.textbox_16_parent')
					$('.textbox_17' ).appendTo('.textbox_17_parent')
					$('.textbox_18' ).appendTo('.textbox_18_parent')
					$('.textbox_19' ).appendTo('.textbox_19_parent')
					$('.textbox_20' ).appendTo('.textbox_20_parent')
					$('.textbox_21' ).appendTo('.textbox_21_parent')
					$('.textbox_22' ).appendTo('.textbox_22_parent')
					$('.bigtextbox_1').appendTo('.bigtextbox_1_parent')
					$('.bigtextbox_2').appendTo('.bigtextbox_2_parent')
					$('.bigtextbox_3').appendTo('.bigtextbox_3_parent')
					$('.bigtextbox_7').appendTo('.bigtextbox_7_parent')
					$('.bigtextbox_8').appendTo('.bigtextbox_8_parent')
					$('.bigtextbox_9').appendTo('.bigtextbox_9_parent')
					$('.menu').appendTo('.menu_wrapper')
					$('.dropdown').appendTo('.dropdown_wrapper')
					$('.menu').attr({'src':'img/menu.png'})

					$('body').removeClass('arranged')
					$('.logo_footer').find('img').remove()
					$('.coloreffect').removeClass('coloreffect_a')
					$('.pre_f_rowcol_1').removeClass('f_rowcol_1')
					$('.pre_f_rowcol_0').removeClass('f_rowcol_0')
					$('.dropdown_wrapper').parent().parent().addClass('f_rowcol_0')
					$('.dropdown_wrapper').parent().addClass('f_rowcol_0')
					step_3()
				}else{
					setTimeout(function(){
						step_3()
					},100)
				}
			}
			function step_3(){
				$('.shrink').css({'width':'100%'})
				$('.shrink').css({'height':'100%'})
				$('.shrink_big').css({'width':'100%'})
				$('.shrink_big').css({'height':'100%'})
					if(arranged == 1&&arranged_counter < 2&&!isAndroid){
						setTimeout(function(){
						$('.shrink').css({'width':'100%'})
						$('.shrink').css({'height':'100%'})
						$('.shrink_big').css({'width':'100%'})
						$('.shrink_big').css({'height':'100%'})
							pre_animate(img,arranged)
						},150)
					}else{
						step_4()
					}
			}
			function step_4(){
				arranged_counter = 0
				setTimeout(function(){
					$('.shrink').each(function(){
						$(this).css({'background-position':(-1*$(this).offset().left) +'px ' + (-1*$(this).offset().top) +'px'})
						$(this).css({'background-size':(w/$(this).outerWidth())*100 +'% ' + (h/$(this).outerHeight())*100 +'%'})
						$('.shrink').removeClass('shrink')
						$('.shrink_big').removeClass('shrink_big')
					})
				},500)
				setTimeout(function(){
					$('.textbox').css({'pointer-events':'auto'})
					$('.menu').css({'pointer-events':'auto'})
					set_blank_inner()
				},1000)
			}
		}
	}
	function hash_data(){
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
			$('.detail').fadeIn(100)
			$('body').addClass('detailed_view')
		}else if(selected === 'events'||selected === 'gallery'||selected === 'about'||selected === 'partners'){
			$('.visitwork').parent().remove()
			$('.detail').find('.title').css({'margin-top':'5vh'})
			$('.thumb_wrap').hide()
			$('.detail>.text>.title').empty().append(eval(selected+'_text_'+lang)[0])
			$('.detail>.text>.info').empty()
			$('.detail>.text>.artist').empty()
			$('.detail>.text>.des').empty().append(eval(selected+'_text_'+lang)[1])
			$('.detail>.text>.bio').empty()
			$('.detail').fadeIn(100)
			$('body').addClass('detailed_view')
		}else if(selected === 'list'){
				console.log('-----1')
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
		$('.detail .close').click(function(){
			$('.detail').fadeOut(100)
			$('body').removeClass('detailed_view')
			window.location.hash = 'list'
		})
	}
		// // // // // // // // // // // // // // // // // animation // // // // // // // // // // // // // // // // // //

}
})