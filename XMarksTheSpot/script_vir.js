var isMobile = false;
// device detection
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
    isMobile = true;
}
$(document).ready(function(){
	$('.cat_exhibition_gathering').click(function(){
		$('.exhibitions_cube').addClass('hide')
	})
	$('.cat_exhibition_incubator').click(function(){
		$('.exhibitions_cube').removeClass('hide')
	})
	// $('.lang_zh').click(function(){
	// 	$('body').removeClass('en').addClass('zh')
	// })
	// $('.lang_en').click(function(){
	// 	$('body').removeClass('zh').addClass('en')
	// })
	if(isMobile){
	    $('body').addClass('mobile')
		var div2 = $('.content_wrap_2');
		var div3 = $('.content_wrap_3');

		div2.append(div3.children());
		div3.remove();
	}

	var counter = 0
	var max = 6
	var h = window.innerHeight
	var w = window.innerWidth
	var animation_counter_1 = [4,1]
	var animation_counter_2 = 4
	var finished = false
	var image_counter = 0
	var left_array = []
	var width_array = []
	var aboutsupport_array = Array($('.aboutsupport_wrap').children().length)
	var clicked=false
	var hovered = false
	var popup_click_counter = 0
	var cube_unit = window.innerHeight*0.325

	if($('body').hasClass('zh')){
		var lang = 'zh'
	}else{
		var lang = 'en'
	}


	btn_click()


		var exhibitions = 4
		var events = 8
		var research = 0
		var special = 0
		var exhibitions_array = 
		[
			['xxxxxxxxx',
			'img/Exhibition/Incubator/ayrtbh/img1.jpg',
			'',

			'xxxxxxxxxx xxxx xxxxxxx',
			'xxxxxx',
			'xxxxxxxxxx xxxx xxxxxxx xx x xxx xxxxx-xxxxxx xxxxxxx xxxxx xxxxxxxxxxxx xx x xxxxxxx xxxxxxxxx. xxxxxx-xxxxx xxxxxxxxxx xxx xxxxxxxxxxx xxxxx xxxxx xxx xxxxxxxxx xxxxx xxxx xxxxx xx x xxxxxxxxxx xxxxxxx xxxxx xxxxxxxx xx xxxxx xxxxxx xxx xxxx xxx. xxxxxxx xx xxxxx xxxxxxxxx, xxxxxxxxxxx xx xxx xxxxx xxx xxxxxxxxx xx xxx xxxxx xxx xx xxxxxxxxx xxxx xxxxxx xxxxxx xxx xxxxx. xxxx xxxxxxx xxxxxx xxxxxxxxxxxxxxx, xxxxxxxxxxxx’ xxxxxxxx xxxxxxx xxxxxx xxx xxxxxxxxx xxxxxxxxx xxx x xxxxxx xxxxxxx xxxxxxxxxx xxxx xx xxxxx xxx xxxxxxxxxxx xx xxxxxxxxxx.',
			`xxxx xxxxxxxx (xxxxxx, x. 1981) xx xxxxxxxxx xxxxx xxx xxx xxxxxxxx xxxxxxxx xx xxxxx xx xxxxxxxxx xxxx xx xxx xxxxxxxx xxx xxxxxxxxxx. xx xxxxxxxxx xxxxxxx xx xxxxxxxx xxx xxxxxxxx. xxxx xxx xxxx xxx xxxxxxx, xxxx'x xxxxxx xxx xxxxxxx xxxxxxxx xxxx xxxxx xxxxxxx xxxxxxx xxxxxxxxxx xx xxxx xxx xxxxx, xxxxxxxx xxxxxxxxxx xxx xxxxxxxx xx xxxxxx'x xxxxxxxx xx xxxxxxxx xxxxxx.`,

			'《文文文文文文文文》',
			'文文文',
			'《文文文文文文文文》文x文文文文文文文文文文文文文文文文文文文文。文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文。文文文文文文文，文文文文文文文文文文文文，文文文文文文文文文文文文文文文文。文文文文文文文文文，文文文文文文文文文文文文文文文文文文文文文文文文文文，文文文文文文文文文文文文文文文文文文文。',
			'文文文(xxxxxx，文文 1981 文)文文文文，文文文文文文文文文文文文文文文 文文。文文文文文文文文文文文。文文文文文，文文文文文文文文文文文文文文 文文文文文文文文文文文文文文文文文，文文文文文文文文文文文文文文文文文。',

			'https://xvirtual.world/AQcaq2S/hyperbolic-time-chamber-i',
				['ayrtbh/wangchangcun_ayrtbh_xvirtual_hyperbolic_time_chamber.png','ayrtbh/681678260617_.pic_hd.jpg','ayrtbh/img1.jpg','ayrtbh/671678260617_.pic.jpg','ayrtbh/661678260454_.pic_hd.png']
			],

			['xxxxxxxxx',
			'img/Exhibition/Incubator/CheeseTalk/img1.jpg',
			'',

			'xxxxxx xxxxxx xxxxxx',
			'xxxxxxxxxx',
			'"xxxxxx xxxxxx xxxxxx" xxxxxxxxx x xxxxxxx xxxxx xx xxx xxxx 2600, xxxxxxx xxxx xxx xxxxx xx xxxx xxxxxxx xxxxx xx xxxxxxxxxxxxx. xxxx xxxx xxx xxxxxxxxxxxx xx x xxxxxxx xxxxxxxxx. xxx "xxxxxx xxxxxx xxxxxx" xx x xxxxxxxxxx xxxx xx xxx xxxxxx, xxxxxxxxxxx xxx xxxxxxxxxx xxxx-xxxx xxxxxxxxx. xxx xxxx "xxxxxx" xx x xxxxxxx xxxxxx xx "xxxxxx" xxx "xxxxxx". xxxxx xxxx-xxxx xxxxxxx xxxx x xxxxxxxx xxxxxx, xxxx xxxxxxx xxxxx xxxxxxxx xxxxxx xxxx. xxx xxxxxx xxxxxxxx xx xxxxxxx xxxxxxxx xxxxxxx xxxxxxxxxxxx xxx xxx xxxxxx xxxxxxx xxxxxxx xxxxx xxxxxxxxxxxxxx xxxxxxxxxx xxxx, xxxxxxx xxxxxxxxxxx xxx xxxxxxxxx xxxxxxxxx xxxxxxx xxxxx xx xxx xxxxx xxxxxxxxxxx xx xxxxxxxxxx.',
			'xxx xxxxxx (xxxxx xx xxxxxxxxxx, xxxx xx 1997) xx x xxxxxxx xxxxxx xxx xxxxxxxxxx xxxxxxxxx xxxxxxxx xx xxxxxx. xxx xxxxxxxx xxxxxxxx xxxxx xxxxxxxxxx xxxxxxx xxxxxxxx xxx xxxxxxxxxx, xxxxxxxx x xxxxxxxx xxxxxxxxxxx xxxxxxx xx xxx xxxxxxx xxxxxxx xxxxxxx xxxxxxxxxx xxxxxxxxxxxx xxxxxxxxxx xx xxxxxxx xxxxxxxxxxxx. xxxxxxxx xx xxx xxxxxxxxx xxxxxxx xxxxxxx xxxxxxxxxx xx xxxxx xxxxx, xxx xxxxxxxx xx xxx xxxxx xxx xxxxx xxxxxxx xxxx xxxxxxxxxxxx xxxxxx, xxxxxxx xxxxxxxxx xxx xxxxxxxxx, xxx xxxxxxxxx x xxxxx xx xxxxxxxx xx xxxxxxxxxxxx xxxxxxx xxxxxx xxx xxxxxxxxxx xxxxxxxxxxxx.',

			'《文文文文文文》',
			'文文文',
			'《文文文文文文》文文文文文文2600文文文文文文，文文文文文文文文文文文文文文文文文文文。文文文文x文文文文文文文文文。“文文文文文文”文文文文文文文文文文文文，文文文文文文文文文文文文，“文文文文（xxxxxx）”文文文文“文文（xxxxxx）”文“文文文（xxxxxx）”文文文文文文文文文文文文文。文文文文文文文文文文文文文文文文文文文文文文文文文，文文文文文文文文文文文。文文文文文文文文文文文文文文，文文文文文文文文文文文文文文文文文，文文文文文文文文文文文文文文文文文文文文文。',
			'文文文（xxxxxxxxxx，文文1997 文）文文文文文文文文文文文文，文文文文文文文。文文文文文文文文文文文文文文文文文文文文文，文文文文文文文文文文文文文文，文文文文文文文文文文文文文。文文文文文文文文文文文文文文文文文，文文文文文文文文文文文文文文文文文文文文文文文，文文文文文文文文，文文文文文文文文文文文文文文文文。',

			'https://xvirtual.world/YYggjhk/hyborg-agency',
				['CheeseTalk/Screenshot_2023-01-11_at_13.46.38.png','CheeseTalk/Screenshot_2022-12-03_at_14.14.55.png','CheeseTalk/img1.jpg','CheeseTalk/cheesetalk_xvirtual_eversleeping.jpg','CheeseTalk/cheesetalk_xvirtual_wander3.jpg','CheeseTalk/cheesetalk_xvirtual_wander2.png','CheeseTalk/cheesetalk_xvirtual_wander.png',]
			],

			['xxxxxxxxx',
			'img/Exhibition/Incubator/GabrielMassan/img1.jpg',
			'',


			'xxxx xx xxxxxx',
			'xxxxxxx xxxxxx',
			'xxxxxxx xxxxxx (x. 1996) xx x xxxxxxxxx xxxxxxx xxxxxx xxxxxxxxx xxxxx xx xxxxxx. xxxxxx xxxxx xxxxxx x xxxx xxxxxxx xx xxx xxxxxxxxxxxx xx xxxxxx xxxxxxx xxxxxx xxxx xxxxxxxxx 3x xxxxxxxxx, xxxxx, xxx xxxxx. xxxxxxxxxxxxx xx xxxxxxxxxx, xxxxxxxx xxxxxx xxxxxxxxxxxxxxx, xxxxxx’x xxxxx xxx xxxxxxx xxxxxxxxxxxxx xx xxxxxxx xxxxxxxx xxxxxx xxxx xx xxxxxxxxx xxx xxx.<br>\
			xxxx xx xxxxxx xx x xxx xxxxxx xx xxxx xxxxxxxxxx xxxx xxxxx-xxxxxxx xxxxxxx xxxxxx xxxxxxxxxxxx xx x xxxxxxx xxxxxxxxx. xxxxxxxxxxxx xxxxxxxx xx xxxxxxxx xxx xxxxxxx, xxx xxxx xxxxx xxxx xxx xxxxxx’x xxx xxxxxxxx xxxxxxxx xx xxx xxxxxxxx xxxxxxxxxx xx ‘xxxxx xxxx’. xxxx xxxx-xxxxxxxxx xxxxx xx xxxxxxx xxxxxxxxxxxx xxx xx xxx xxxxxxx xxxxx xxxx xx xxx xxxxxxx xx xxx xx xxxxxxx. xxxxxxxxx xxx xxxxxxxxxx xxxxx xxxx xxxxxx xxxxxx xxxx xx xxxxx, xxxx, xxx xxxxxxxxxx, xxxx xx xxxxxx xxxxxxx x xxxxxxxxx xxxxxxxxxxx xxxxxxx xxxxxxxx xxx xxxxxxxxxx, xxxxxxxxxx xxx xxxxxxxxxxx.',
			'xxxxxxx xxxxxx (x.1996 xxx xx xxxxxxx, xxxxxx) xx x xxxxxx-xxxxx xxxxxxxxxxxxxxxxx xxxxxxx xxxxxx. xxxxxxxxx xxxxxxxxxxxx xxx xxxxx-xxxxxxxx xxxxxxxxxx, xxxxxx xxxxxxx xxxxxx xxx xxxxxxx xxxxxxxxxx xxxx xxxxxxxxxxxxx xxxxxxxx xxx xxxxxxx xxxxxxxxxx xx xxxxxxxxxx xxxxxx xxx xxxxx-xxxxxxxxxx xxxxx xxxxxxxx xxxxxxxxxx. xxxxxx 3x xxxxxxxxx, xxxxxxx xxxxxxxxx xxx xxxxxxxx, xxxxxx-xxxxxx xxxxx, xxx’x, xxxxxxx xxx xxxxxxxxx xxxxxxx xxxxxxxxxxx, xxx xxxxxx xxxxx xxxxxx xxxxxxxxxxxx xxxxxxx xx xxxxxxxxxxx xxx xxxxxxxxx xxxxxxxxx xxx xxxxxxxxx xx xxx ‘xxxxx xxxxx’. xxxxxxx xxx x 2019 xxxxxxxx xx xxx xxxxxx - xxxxxx xxx xxx & xxxxxxxxxx, xxxxxxx xxxxxx xx xxx 2020 "xxx xxxxxxx" xx xxx xxxxxxxxx xxxxxxx xxxxxx (xxx), xxxxx x xxxxx ‘xxxxx xx 2021’ xxxxxxxx xxxxxx, xxxxxxxxxxx xx xxx "xxxxxx xx" xxxxxx xxxxxxxx xxxxxxxx xxxxxxxxx xx “xxx xxxxxxx xxxxxxx xxxxxxx xxxxxxxxxxxxx xxxx”, xxx xx xxx 2022-23 xxxxxxxxxx xxxx xxxxxxxxxxxx xxxxxxx xxxxxxxxxx xxxxxx.',

			'《文文文文》',
			'文文文文文·文文',
			'文文文文文·文文（文文1996文）文文文文文文文文文文，文文文文文文文。文文文文文文文文文文文文文文文文文，文文3x文文、文文文文文。文文文文文文文文文、文文文文文文文文文文，文文文文文文文文文文文文文文文文文文文文文。<br>\
			《文文文文》文文文文文文文文文，文文文文文文文文文文文文文，文文文文x文文文文文文文文文。文文文文文文文文文文文文文，文文文 “文文文文（xxxxx xxxx）”文文文文文，文文文文文文文文文文文文文文，文文文文文文文文。文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文，文文文文文文文文文文。《文文文文》文文文文文文文文文文文文、文文文文文文文文文文文文文文，文文文文文文文文文文文文文、文文文文文文文文文文文文。',
			'文文文文文·文文(文文 1996 文)文文文文文文文文文文，文文文文文文文。 文文文文文文文文文文文文文文文文文，文文 3x 文文、文文文文文。xx 文文文 文文文文文、文文文文文文文文文文，文文文文文文文文文文文文文文文文文文 文文文。文文文文文·文文文 2019 文 xxxxxx-文文文文文文文文文文文文文， 2020 文文文文·文文文文文(xxx)文文文文文文，2021 文 xxxxx x xxxxx 文 文文文文文，2022 文文文文文文“文文文文”文文文文文文，文文 2022 文 x 文 文文文 “x 文文文文文”文文文文文文。xx 文文文文文文文文文:“文文文文: 文文文文文文文文文文”(xxxxx xxxxxxxx 文文，文文文文文，2022);“xxxxx! “(文文文 9 文，文文，2022)文 “文文文文文”(xxxxxx xxxx xx 文文，文文文文，2022)。',

			'https://xvirtual.world/naFJLsM/loyal-memorable-outing',
				['GabrielMassan/Screenshot_2023-05-14_at_17.04.40.png','GabrielMassan/Screenshot_2023-05-14_at_17.04.23.png','GabrielMassan/workshop.mp4','GabrielMassan/gabriel_massan_xvirtual_ball_of_terror_scene4.jpg','GabrielMassan/gabriel_massan_xvirtual_ball_of_terror_scene1.jpg','GabrielMassan/img1.jpg','GabrielMassan/SCENE_2_(7).jpg','GabrielMassan/SCENE_2_(9).jpg','GabrielMassan/SCENE_4_(2).jpg'],
			],

			['xxxxxxxxx',
			'img/Exhibition/Incubator/KimLaughton/img1.jpg',
			'',

			'xxxx xxxxxxxx',
			'xxx xxxxxxxx',
			`xxx xxxxxxxx (x. 1984) xx x xxxxxxx xxxxxxx xxxxxx xxxxxxxxx xxxxx xx xxxxxxxx. xxxxxxxx xxxxxxxx xxx xxxxxxx xx xxxx-xxxxxxxx xxxxxxxxxx, xxxxxxxxxxxx xxxxx xxxxxxxxxx xxx xxxxxxx xxxx xxxxx-xxxx xxxxxxxx-xxxxxxxxx 3x xxxxxxxx. xxxxxxxx'x xxxx xxxxx xxx xxxxxxxxxx xxxxxxx xxxx xxxx, xxxxx xxxxx, xxxxxxxxxxxx xxxx, xxx xxxxx xxxxxxx - xxxxx xxxxxxxxxx xxxxxxx-xxxx xxxxxxx xxxxxxxxxx xx xxxxxxx xxxxxxxx xx xxxxxxxxxx xxxxxxxx.<br>\
			xxxx xxxxxxxx xx x xxx xxxx xx xxxx xxxxxxxxxx xxx xxxxxxxxxxxxxx xxxxxxx xxxxxx xxx x xxxxxxxx xxxxxxxxxxxx xx x xxxxxx. xxxxxxx xx xxx xxxxxxxxx xx x xxxxxx xx xxxxxxx xxxx xxxxxxxx xx xx xxxxxxxxx xxxxxx. xxxxxxx xx xxxxxxxxxx xxxx xxxxxx xxx xxxxxxxxxx xxxxxxx xxxxxx xxxxxxxx xx x xxxxxxx xxxxxxxxxxx, xxx xxxxxx xxxxxx xxxxxxxxx xxxxxxxxxxxx xxx xxxxxxxxx xxxxxxxxx xxxx xx xxxxxxxxxxxxxx xxxxxxxxxxxxxx. xxxx xxxxxxxx xx xxxxxxxxxx xxxx xx xxxxxxx xx xxxxxxxxx x ‘xxxxxxxxxxxx xx x xxxx xxxxxxxx xxxx’ xxxx xxx xxxx xx xxxxxxx xx xxxx xxxxxxxxxxx’x xxxxxxxxxxx. xxx xxxx xx xxxxxxxxxxxx xx x xxxxxxx xxxxxxxxx.`,
			`xxx xxxxxxxx (x. 1984) xx x xxxxxxx xxxxxxx xxxxxx xxxxx xx xxxxxxxx. xxxxxxxx xxxxxxxx xxx xxxxxxx xx xxxx-xxxxxxxx xxxxxxxxxx, xxxxxxxxxxxx xxxxx xxxxxxxxxx xxx xxxxxxx xxxx xxxxx-xxxx xxxxxxxx-xxxxxxxxx 3x xxxxxxxx. xxxxxxxx‘x xxxx xxxxx xxx xxxxxxxxxx xxxxxxx xxxx xxxx, xxxxx xxxxx, xxxxxxxxxxxx xxxx, xxx xxxxx xxxxxxx - xxxxx xxxxxxxxxx xxxxxxx-xxxx xxxxxxx xxxxxxxxxx xx xxxxxxx xxxxxxxx xx xxxxxxxxxx xxxxxxxx.`,

			'《文文文文》',
			'文·文文',
			'文·文文（文文1984文）文文文文文文文文文文，文文文文文文文。文文文文文文文文文文文文文，文文文文文文文、文文文文3x文文文文文文文文文文文文文文。文文文文文文文文文文文文、文文文文、文文文文文文文文文文文文文文文——文文文文文文文文文文文文文文文文文文文文文文文文文文文文。<br>\
			《文文文文》文文文文文文文，文文文文文文文文文文文文文文文文文文x文文文文文文文文。文文文文文文文文文文文文文文文文文文文文文文，文文文文文文文文文文文文。文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文，文文文文文文文文文文文文文文文文文文文文文文文文文文文。文文文文文文《文文文文》文文文文文“文文文文文文文文文文”，文文文文文文文文文文文文文文文文。文文文文x文文文文文文文文文。',
			'文·文文（文文1984文）文文文文文文文文文文文文文文文。xxxxxxxx文文文文文文文文文文文，文文文文文文文文文文文3x文文文文文文文文文文文文文文。文文文文文文文文文文文文、文文文文、文文文文文文文文文文文文文文—文文文文文文文文文文文文文文文文文文文文文文文文文文。',

			'https://xvirtual.world/Nwcfdnz/temple',
				['KimLaughton/Symbols_low.png','KimLaughton/Seal_mold_render.jpg','KimLaughton/img1.jpg','KimLaughton/Temple_top_landscape.jpg','KimLaughton/Temple_front_landscape.jpg','KimLaughton/Aerial_render.jpg','KimLaughton/Face.png','KimLaughton/Symbols.png','KimLaughton/Ceremony_3.png','KimLaughton/Ceremony_2.png','KimLaughton/Ceremony_1.png','KimLaughton/Priest_illustration.png','KimLaughton/mask_front.png','KimLaughton/Priest_render.jpg']
			]
		]
		var events_array = 
		[
			[
			'xxxxxxxx',
			'img/Events/1Workshop/img1.jpg',
			'2022.9.7 / 20:00-21:15',

			'xxxxxxxxx xxxxx-xxxxxxxxxxx xxxxxxxxxxx xxxxxxxxxx xx xxxxxxx xxxxx',
			'xxxxxx',
			"xxxxxxxxxx xxxx xxxxxxx xx x xxx xxxxx-xxxxxx xxxxxxx xxxxx xxxxxxxxxxxx xx x xxxxxxx xxxxxxxxx. xxxxxx-xxxxx xxxxxxxxxx xxx xxxxxxxxxxx xxxxx xxxxxxxxx xxx xxxxxxxxx xxxxx xxxxx xxxxxxxx xxxxxxx xx x xxxxxxxxxx xxxxxxx xxxxx xxxxxxxx xx x xxxxx xxxxxx xxx xxxx xxx. xx xxxxxxxxxxxx xxxx xxxxxx xxx xxxxx, xxxx xxx xxxxxxxx xxxxxxx xx xxxxx xxxxxxxxx - xxx xxxxxxxxxxxxx xx xxx xxxxx xxx xxx xxxxxxxxxx xx xxxxxxx. xxxxxxxxxx xxx xxxxxxxxxx xxxxxx xxxxxxxxxxxxxx, xxx xxxxxxxxxxx'x xxxxxxxx xxxxxx xxxxxxx x xxxxxxxxxxx xxxxxx xxxxxx x xxxxxx xxxxxxx xxxxxxxxxx xxxx xxxx xxxxxxxxxx xxx xxx xxxxxx.<br>\
			<br>\
			xx xxxx xxxxxxxx, xxxxxxxxxxxx xxxx xxxxxx xx xxxxxxxxxxx xxxxxxxxxxx xx xxx xxxxxxxxxx xxxx xxxxxxx xxxxx xxx xxxxxx'x xxxxxxxx. xxxx xxxx xxxxxxxxxx xxx xxxxxxxx xxx xxxxxxxx xx xxxxxxxxxxx xxxxx xxxxxxxxx xxxxxxxxx xx xxx xxxxxxxxxx xxxxx, xxx xxxxxxx xxx xxxxx-xxxxxx xxx xxxxxxxxxxxxx xxxxxxxxxxx xxxx xxxxxxx. xxxxxxxxxxx, xxx xxxxxx xxxx xxxxxxxxx xxx xxxxxxxxxx xxxxx xxx xxxx xxxxxxxx xxxxxx xxx xxxxxxxx xx xxxx xxxx, xx xxxx xx xxxxx xxxxxxx xxx xxxxxxxxxxx xx xxxxxxxx xxxxx xxxx xxxxxxxxxx.",
			"xxxx xxxxxxxx (xxxxxx, x. 1981) xx xxxxxxxxx xxxxx xxx xxx xxxxxxxx xxxxxxxx xx xxxxx xx xxxxxxxxx xxxx xx xxx xxxxxxxx xxx xxxxxxxxxx. xx xxxxxxxxx xxxxxxx xx xxxxxxxx xxx xxxxxxxx. xxxx xxx xxxx xxx xxxxxxx, xxxx'x xxxxxx xxx xxxxxxx xxxxxxxx xxxx xxxxx xxxxxxx xxxxxxx xxxxxxxxxx xx xxxx xxx xxxxx, xxxxxxxx xxxxxxxxxx xxx xxxxxxxx xx xxxxxx'x xxxxxxxx xx xxxxxxxx xxxxxx.",

			'文文文文文文文文文文文文文',
			'文文文',
			'“文文文文文文文文” 文 x 文文文文文文文文文文文文文文文文文文文文。文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文。文文文文文文文,文文文文文文文文文文文文文文文,文文文文文文文文文文文文文文文文。文文文文文文文文文,文文文文文文文文文文文文文文文文文文文文文文文文文文,文文文文文文文文文文文文文文文文文文文。<br>\
			<br>\
			文文文文文文,文文文文文文文文文文文文文“文文文文文文文文”文文文文文文文,文文文文文文文文文文文文文文文文文文文文文文,文文文文文文文文文文文文文文。文文,文文文文文文文文文文文文文文文文文文文文文文,文文文文文文文文文文文文文文文文文文文。',
			'文文文(xxxxxx，文文 1981 文)文文文文，文文文文文文文文文文文文文文文 文文。文文文文文文文文文文文。文文文文文，文文文文文文文文文文文文文文 文文文文文文文文文文文文文文文文文，文文文文文文文文文文文文文文文文文。',

			'https://xvirtual.world/AQcaq2S/hyperbolic-time-chamber-i',
				['1Workshop/wangchangcun_ayrtbh_xvirtual_hyperbolic time chamber.png','1Workshop/681678260617_.pic_hd.jpg','1Workshop/img1.jpg','1Workshop/671678260617_.pic.jpg','1Workshop/661678260454_.pic_hd.png']
			],
			[
			'xxxxxxxx',
			'img/Events/2Workshop/img1.png',
			'2022.10.8 / 20:00-21:15',

			'xxxxxxx xxxxxx xxx xxxxxxxxxx xxxxxxxxxxxx xx xxxxxx xxxxxx',
			'xxxxxxxxxx',
			`xx xxxxxxx 8, 2022, xx xxxxxx xxxxxx xxxxxxxxxx xx xxxx xxx xxxxxx x xxxxxxx xxxxxxxx. xxxxx xxx xxxxxx'x xxxxxxxx, xxxxxxxxxxxx xxxx xxxxx xxxx x xxxxxx xx xxxxxxxxxxxx xxx xxxxxxxxxxx xxxxxxxxxx xxx xxxxxx xxx xxxxxxx, "xxxxxx xxxxxx", xxxxxxxx xxxx x xxxxxx xxxxxxxxxxx xx xxxx xxxxxxxx xx xxxxxxxxxx xxxxxxxxxxxx.<br>\
			<br>\
			'xxxxxx xxxxxx' xxxxxxxxx x xxxxxxx xxxxx xx xxx xxxx 2600, xxxxxx xxxx xxx xxxxx xx xxxx xxxxxxx xxxxx xx xxxxxxxxxxxxx. xxx xxxxxx xxxxxx xx x xxxxxx xxxxxxxxxx xxxx xxxxxxxxxx xxxx-xxxx xxxxxxxxx; xxx xxxx "xxxxxx" xxxxxx xx x xxxxxxx xxxxxx xx "xxxxxx" xxx "xxxxxx". xxxxx xxxx-xxxx xxxxxxx xxxxxx xx x xxxxxxxx xxxxxx, xxxx xxxxxxx xxxxx xxxxxxxx xxxxxx xxxx. xxx xxxxxx xxxxxxxx xx xxxxxxxxx xxxxxxxx xxxxxxx xxxxxxxxxxxx xxx xxxxxxx xxxxxxx xxxxx xxxxxxxxxx xxxx, xxxxxxx xxxxxx xxxxxxxxx xxxxx xxxxxxxxx xxxxxxxxxx xxxxxxx xxxxx xx xxx xxxxxxxxxxx xxxxxxxxxxx xx xxxxxxxxxx.<br>\
			<br>\
			xx xxxx xxxxxxxx, xxxxxxxxxxxx xxxx xx xxxxxxx xx xxxxx xxx xxxxxxx xxxxxxx, xxxxxx xxxxxx, xxxxx xxxxxxx xxxxxxxxxxx xxxx xxxxx, xxxxxx xx xxx xxxxxx xxxxxxx xxx xxxxxxx, xxx xxxxxx xxxxxxxx xxxx xxxx-xxxx xxxxxxx. xx xxx xxxx xxxx, xxxxxxxxxxxx xxxx xxxxxxxxxx xxxxxxxxxxx xx xxxxxx xxxxxxxx xx xxx xxxxx xxxxxxx xxxxxxxxxx xxxxx, xxx xxxx xxxx, xxxxxxxxxx xxx xxxxxxx xx xxxxx xxxxx xxxxxxxxxxx xxxx xxxxxxxx xx x xxxxxxx. xxx xxxxxxxxxxxxxx xx xxx xxxxxx xxxxxx xxxx xxx x xxxxxx xx xx-xxxxxxxxx xxxxxxxxxx xx xxx xxx xxxxx xxxxxxxxxxx xxxxxxxxxxx xx xxx xxxxxxxxxxxx, xxxxxx 3x xxxxxxxx, xxx xxxx xxxx xxxx xxx xxxxxx xxx xxx xxxxxxx xx xxxxxxx.`,
			'xxx xxxxxx (xxxxx xx xxxxxxxxxx, xxxx xx 1997) xx x xxxxxxx xxxxxx xxx xxxxxxxxxx xxxxxxxxx xxxxxxxx xx xxxxxx. xxx xxxxxxxx xxxxxxxx xxxxx xxxxxxxxxx xxxxxxx xxxxxxxx xxx xxxxxxxxxx, xxxxxxxx x xxxxxxxx xxxxxxxxxxx xxxxxxx xx xxx xxxxxxx xxxxxxx xxxxxxx xxxxxxxxxx xxxxxxxxxxxx xxxxxxxxxx xx xxxxxxx xxxxxxxxxxxx. xxxxxxxx xx xxx xxxxxxxxx xxxxxxx xxxxxxx xxxxxxxxxx xx xxxxx xxxxx, xxx xxxxxxxx xx xxx xxxxx xxx xxxxx xxxxxxx xxxx xxxxxxxxxxxx xxxxxx, xxxxxxx xxxxxxxxx xxx xxxxxxxxx, xxx xxxxxxxxx x xxxxx xx xxxxxxxx xx xxxxxxxxxxxx xxxxxxx xxxxxx xxx xxxxxxxxxx xxxxxxxxxxxx.',

			'文 xxxxxx xxxxxx 文文文文文文文文文!',
			'文文文',
			'2022文10文8文，文x文文文文文文文文文，x 文文文文文文文文文 xxxxxxxxxx文文文文文x文文文文文。文文文文文文文文文文文文，文文文文《xxxxxx xxxxxx》文文文文文文文文文文文文文文文，文文文文文文文文文文文文文文文文。<br>\
			<br>\
			《xxxxxx xxxxxx》文文文文文文2600文文文文文文，文文文文文文文文文文文文文文文文文文文。xxxxxx xxxxxx文文文文文文文文文文文文，文文文文文文文文文文文文；“文文文(xxxxxx)”文文文文“文文(xxxxxx)”文“文文文(xxxxxx)”文文文文文文文文文文文文文。文文文文文文文文文xxxxxx文文文文文文文文文文文文，文文文文文文文文文文文。文文文文文文文文文文文文文文，文文文文文文文xxxxxx文文文文文，文文文文文文文文文文文文文文文文文文文文文。<br>\
			<br>\
			文文文文文文文，文文文文文文文文文文文文文文xxxxxx文文文文文xxxxxx xxxxxx，文文文文文文文文文文文文文，文文文文xxxxxx文文文文文文文。文文，文文文文文文文文文（文文文文文文文文文文文文文）文文文文文文文，文文文文文文文文文文文文文文文文文。xxxxxx xxxxxx文文文文文文文文文文文xx文文文文，文文文文文文文文文文文文文，文文文 3x 文文，文文文文文文文文xxxxxx文文文。',
			'文文文（xxxxxxxxxx，文文1997 文）文文文文文文文文文文文文，文文文文文文文。文文文文文文文文文文文文文文文文文文文文文，文文文文文文文文文文文文文文，文文文文文文文文文文文文文。文文文文文文文文文文文文文文文文文，文文文文文文文文文文文文文文文文文文文文文文文，文文文文文文文文，文文文文文文文文文文文文文文文文。',

			'https://xvirtual.world/YYggjhk/hyborg-agency',
			['2Workshop/Screenshot_2023-01-11_at_13.46.38.png','2Workshop/Screenshot_2022-12-03_at_14.14.55.png','2Workshop/img1.png']
			],


			[
			'xxxxxxxx',
			'img/Events/3Workshop/img1.png',
			'2022.12.15 20:00-21:15',

			'xxx xxxxx xx x xxxxx – xxxxxxxxxx xx xxxxxxxxxxxxx xxxxxxxxx xxxxxxxx',
			'xxx xxxxx, xxx xxxxx',
			'xx xxxxxxxx 15, 2022 (xxxxxxxx), x xxxxxx xx xxxxxxxx xxxxxxx xxx xxxxx xxx xxx xxxxx xx xxxxxxx x xxxxxxx xxxxxxxx xxxxxxxx ‘xxxxx xx xxxxxxx: x xxxxxxx xxxx xxxxxxxxxxxxx xxxxxxxxx xxxxxxxx’.<br>\
			<br>\
			xx xxx xxx xx xxxxxxx xxxxxxxx, xxx xxx xxxxxxx xxxxxxx xxxxxxxxxxxx xx xxxxxxx xx xx-xxxxxxxx? xxxxxxx xxxx xxxxx xxxxxxxx xxxxxxxx xxxxxxxxx, xxx xxxxxxx xxxx xxxxxx xx xxxxxxxxx xxxxxxxxxxx xxx xxxxxx xxxxxxxxxxxxx xxxxxxxxxx. xxxxxxxx xxxx xxx xxxxxxxxxxxx, xxxx xxxx xxxx xxxxxxx xxx xxxxxxxxx xxxxxxx xx xx-xxxxxxx x xxxxx xxxxxxxx. xxxxx xxx xxxxxxxx xx xxx xxx xxx, xxxxxxxxxxxx xxxx xxxxxxxxxx xxx xx-xxxxxxxx xxxxxxx xx xxx xxxxxxx xxxxx, xxxxxxxxxxxxxxx xxxxxxxxxxx xxxxxxxxx xxxxxxxxxxx, xxxxxxxx xxxx xxxxxxxxxxxx, xxx xxxxxxxxx xxxxxxx xxxxxx xxxxxx, xxxxxxxxxx xxxxxxxxxxx xx x xxxxx-xxxxxxxx xxxxxxxxx. xxxxxxxxxxxx, xxx xxxxxxx xxxx xxxxxx xxxx xxxxxxxxxxxx xx x xxxxxxxxxx xxxxx xxx xxxxx xx xxxxxxxxx xxxxxxxx xxxxxx xxxxxxx xxxxxxx, xx xxxx xx xxx xxxxxxxx xxxxxxxxxxxx xx xxxxxxxx xxxx.',
			`xxx xxxxx: xxx xxxxx xxxxx x xxxxxx'x xxxxxx xx xxxxxxx xxxxx, xxxxxxx, xxx xxxxxxxxx xxxx xxxxxxxxxx xxxxxxx xxxxxx. xxxx x xxxxxxx xxxxx xxx, xx xx xx xxxxxxxxxxxx, xxxxxx, xxx xxxxx xxxxxxxxxxxx. xxx xxxxxxxxxxxxxxx xxx xxxxxxxx xxxxxxxx xxxx xxxxxxx xxxxxxx, xxxxxxxxx xxxxx, xxxxxxx, xxxxxx, xxx xxxxxxxxxxx. xx xxx xxxxxxxx xxxxxxxxxxx xx xxx xxxxxxx xxxx xxxxxxxxx'x (xxx) xxx xxxxxxxxx xxxx xxxxxxxx xxxxxxx xxx xxxxxx x xxxxxxx xxxx xx xxx xxxxx xxxxxxxxxxxxx xxxxxxx xxxxxx xxx xxxxxxxxx xxxxxx xx xxxxx xxxxx, x xxxxxxxxx xxxxxxx xxxxxxx xxxxx. xxxx xxx xxxxx, xxx xxxxx xxx xxxxxxxx xxxxx-xxxxxxxx xxxxxxxxxxxxx xxxxxxx xx xxxxxxxxx, xxxxxxxxxxx xxxxxxxx, xxxxxx, xxx xxxxxx xxxxxxxxxx xxxxxxxxxxxx.<br>\
			<br>\
			xxx xxxxx: xxx xxxxx xxxxxxxxx xxx xxxxxx'x xxxxxx xx xxxx xxxx xxx xxxxxxxxxx xx xxxxxxx. xx xx x xxxxxxxxxxxx, xxxxxxxxxx xxxxxx, xxx xxxxxxxx. xxx xxxxxxxx xxxx, "xxxxxxxxxxxxx," xxxxxxxx xxx xxxx xxxxxxxxx xxxxx xx xxx xxxxxxxxxx xxxxxxxxxxxxx xxxx xxxxxxxx, xxxx xxxxxxx xxxxxxxxx xx xxx xxx xxxx xxxxxxxx, xxx xxxx xxxxxxxx xxxxx xx xxx xxxxxx xxxxxxx xxxxxxx, xxxxxxx, xxx xxxxxx xxxx xxxxxxxx. xxx xxxxx xxx xxxx xx xxxxx xxxxxxx xx xxxxxxx xxxxxxx (xx) xxxxxxxxxx xxxxxxxxxx xxxxx 2017.`,

			'文文文文文: 文文文文文文文文',
			'文文文',
			'2022文12文15文（文文），x 文文文文文文文文文文文文文文文文文文文文文、文文文文文文文文文文文“ 文文文文文：文文文文文文文文” 。<br>\
			<br>\
			文文文文文文文文文，文文文文文文文文文文文文文文文文文文文文？ 文文文文文文文文文文文，文文文文文文文文文文文文文文文文， 文文文文文文文文文文文文文文文文文文文文文文文。文文文文文文文文文文文，文文文文文文文文文文文文文文文文文，文文文文文文文文文文文文文，文文文文文文文文，文文文文文文文文文文文。文文文文文文文文文文文文文文文文文文，文文文文文文文文文。',
			'文文文：文文文文文文文文文文，文文文文文文文。文文文，文文文，文文文文文。文文 文文文文文文文文文、文文、文文、文文文文文。文文文文文文文文文(xxx) 文文文文文文文文文文，文文文文文文文文文文文文文文文文文文 xxxxx xxxxx 文文文文文，文文文文文文文文、文文文文文、文文、文文文文文文文文文文文 文文文文文文文。<br>\
			<br>\
			文文文：文文文文文文文文文。文文，文文文，文文。文文文文文文文文《文文》文文文 文文文文文文文文文文文文文，xxx 文文文文文文文文文，xxxxxx 文文，文文文 文文文文文文文文文文文文文文。文文 2017 文文文文文文文 xx 文文文文文文文 文，文文文 2021 文文文文文文文文文文文文 xx 文文文文文文。文文文文文文《文 文文》《文文文文》《文文文文》文 xx 文文文文。',

			'https://xvirtual.world/7jgMUp7/rare-normal-safari',
				['3Workshop/Screenshot_2022-12-15_at_12.35.39.png' , '3Workshop/Screenshot_2022-12-15_at_12.37.13.png' , '3Workshop/Screenshot_2022-12-15_at_12.37.57.png' , '3Workshop/Screenshot_2022-12-15_at_12.33.48.png' , '3Workshop/img1.png']
			],


			[
			'xxxxxxxx',
			'img/Events/4Workshop/img1.png',
			'2023.1.18(xxx) xxx 12:00-13:30',

			'xxxx xx xxxxxx: xxxxx xxxxx’x xxxxx, xxxxx’x xxxx',
			'xxxxxxx xxxxxx',
			"x xxxxxxx xxxx xxxxxx xxxxxx xxxxxxx xxxxxx xx xxxxxxx x xxxxxxx xxxxxxxx xx: xxxx xx xxxxxx: xxxxx xxxxx'x xxxxx, xxxxx'x xxxx. xxx xxxxx xxxx xx xxxx xx 18xx xxxxxxx, 19:00-20:30 xxxxxxx xxxx.<br>\
			<br>\
			xxxx xx xxxxxx xx x xxx xxxxxx xx xxxx xxxxxxxxxx xxxx xxxxx-xxxxxxx xxxxxxx xxxxxx xxxxxxxxxxxx xx x xxxxxxx xxxxxxxxx. xxxxxxxxxxxx xxxxxxxx xx xxxxxxxx xxx xxxxxxx, xxx xxxx xxxxx xxxx xxx xxxxxx'x xxx xxxxxxxx xxxxxxxx xx xxx xxxxxxxx xxxxxxxxxx xx “xxxxx xxxx”. xxxx xxxx-xxxxxxxxx xxxxx xx xxxxxxx xxxxxxxxxxxx xxx xx xxx xxxxxxx-xxxxx xxxx xx xxx xxxxxxx xx xxx xx xxxxxxx. xxxxxxxxx xxx xxxxxxxxxx xxxxx xxxx xxxxxx xxxxxx xxxx xx xxxxx, xxxx, xxx xxxxxxxxxx, xxxx xx xxxxxx xxxxxxx x xxxxxxxxx xxxxxxxxxxx xxxxxxx xxxxxxxx xxx xxxxxxxxxx, xxxxxxxxxx xxx xxxxxxxxxxxx. xx xxxx xxxxxxxx, xxx xxxxxx xxxxxxx xxxxxxxxxxxx xx xxxxx x xxxxxxx xxxxx xxxx xx 3x xxxxxxxxx, xxxxxxx xxxxxxxxx, xxx xxxxx, xxxxxxx xxxx xx xxxx xx xxx xxxxx xxx xxxxxx xx xxx, xxx xxxxxxx xxx xxxxxxxxxx xxxxxxx xxx xxxx xxxxxxx xxxxxx xx xxx xxxxx. xxx xxxxxx xxxx xxxx xxxxxxx xxxx xxxxxxxx xxx xxxxxxxxxxxxx xxxxxxxxxxxx xxxx xx xxxxxxxxx xxxxxxxxxxx xxx xxxxxxxxxxx xxx xxxxxxxxx xxx xxxxxxxxxxx xx xxx “xxxxx xxxxx” xxxxxxx xxxxxxx xxxxxxx xxxxxxxxxxxx.",
			'xxxxxxx xxxxxx (x.1996 xxx xx xxxxxxx, xxxxxx) xx x xxxxxx-xxxxx xxxxxxxxxxxxxxxxx xxxxxxx xxxxxx. xxxxxxxxx xxxxxxxxxxxx xxx xxxxx-xxxxxxxx xxxxxxxxxx, xxxxxx xxxxxxx xxxxxx xxx xxxxxxx xxxxxxxxxx xxxx xxxxxxxxxxxxx xxxxxxxx xxx xxxxxxx xxxxxxxxxx xx xxxxxxxxxx xxxxxx xxx<br>\
			xxxxx-xxxxxxxxxx xxxxx xxxxxxxx xxxxxxxxxx. xxxxxx 3x xxxxxxxxx, xxxxxxx xxxxxxxxx xxx<br>\
			xxxxxxxx, xxxxxx-xxxxxx xxxxx, xxx’x, xxxxxxx xxx xxxxxxxxx xxxxxxx xxxxxxxxxxx, xxx xxxxxx<br>\
			xxxxx xxxxxx xxxxxxxxxxxx xxxxxxx xx xxxxxxxxxxx xxx xxxxxxxxx xxxxxxxxx xxx xxxxxxxxx xx xxx ‘xxxxx xxxxx’. xxxxxxx xxx x 2019 xxxxxxxx xx xxx xxxxxx - xxxxxx xxx xxx & xxxxxxxxxx, xxxxxxx xxxxxx xx xxx 2020 "xxx xxxxxxx" xx xxx xxxxxxxxx xxxxxxx xxxxxx (xxx), xxxxx x xxxxx ‘xxxxx xx 2021’ xxxxxxxx xxxxxx, xxxxxxxxxxx xx xxx "xxxxxx xx" xxxxxx xxxxxxxx xxxxxxxx xxxxxxxxx xx “xxx xxxxxxx xxxxxxx xxxxxxx xxxxxxxxxxxxx xxxx”, xxx xx xxx 2022-23 xxxxxxxxxx xxxx xxxxxxxxxxxx xxxxxxx xxxxxxxxxx xxxxxx.<br>',


			'文文文文:文文文文文',
			'文文文文文·文文',
			'2023文1文18文（文文），x 文文文文文文文文文文文文文文·文文文文文文文文文文“x文文文文文”：文文文文：文文文文文。<br>\
			<br>\
			x 文文文文文《文文文文》，2022 ，（文文文：文文文文文· 文文）《文文文文》文文文文文文文文文· 文文文文文文文文文文文，文文文文文文文文文文文文文，文x 文文文文文文文文文。文文文文文文文文文文文文文， 文文文“ 文文文文（ x x x x x x x x x ） ”文文文文文，文文文文文文文文文文文文文文，文文文文文文文文。文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文， 文文文文文文文文文文。《文文文文》文文文文文文文文文文文文、文文文文文文文文文文文文文文，文文文文文文文文文文文文文、文文文文文文文文文文文文文文文文文文文，文文文文文文文文文文文文文文3 x 文文、文文文文、文文文文文文文，文文文文文文文文文文文文文，文文文文文文文文文文文文文文文文文。文文，文文文文文文《文文文文》，文文文文文文文文文文文文文文文文文文文文文文文文文文文文，文文文文文文文文文文文文文，文文文文文文“ 文文文文” 文文文文文文。',
			'文文文文文·文文(文文 1996 文)文文文文文文文文文文，文文文文文文文。 文文文文文文文文文文文文文文文文文，文文 3x 文文、文文文文文。xx 文文文 文文文文文、文文文文文文文文文文，文文文文文文文文文文文文文文文文文文 文文文。文文文文文·文文文 2019 文 xxxxxx-文文文文文文文文文文文文文， 2020 文文文文·文文文文文(xxx)文文文文文文，2021 文 xxxxx x xxxxx 文 文文文文文，2022 文文文文文文“文文文文”文文文文文文，文文 2022 文 x 文 文文文 “x 文文文文文”文文文文文文。xx 文文文文文文文文文:“文文文文: 文文文文文文文文文文”(xxxxx xxxxxxxx 文文，文文文文文，2022);“xxxxx! “(文文文 9 文，文文，2022)文 “文文文文文”(xxxxxx xxxx xx 文文，文文文文，2022)。',

			'https://xvirtual.world/naFJLsM/loyal-memorable-outing',
				['4Workshop/img1.png','4Workshop/Screenshot_2023-05-14_at_17.04.23','4Workshop/gabriel_massan_xvirtual_ball_of_terror_scene4.jpg','4Workshop/gabriel_massan_xvirtual_ball_of_terror_scene1.jpg','4Workshop/SCENE_2_(6).jpg','4Workshop/SCENE_2_(7).jpg','4Workshop/SCENE_2_(9).jpg','4Workshop/SCENE_4_(2).jpg'],
			],

			[
			'xxxxxxxx',
			'img/Events/5Workshop/img1.jpeg',
			'2023.02.25 / 14:00-15:30',

			'xxxxxxx xxxxxxx',
			'xxxxxx xxxx',
			"xxxx xxxxxx xxxxxx xxxx xxx x xxxxxxx xxxxxxxx x: xxxxxxx xxxxxxx xx xxxxxxxx 25xx, 2:00-3:30 xx xxxxxxx xxxx.<br>\
			<br>\
			xxxx xxx xxxx xxxxxxxx xxxx xxxxx xx xxx xx xxx? xx xxxxxxxxxxx, xxxxxxxxxxxxxxxx xxxxxx xxxxx x xxxxxxx xxxx xx xxx xxxxxxxxxxxx xx xxx xxxxxxxx xxx xxx xxxxxxxxx xx xxxx-xxxxxxxxx. xxxx x xxxxx xxxxxxxxxxx, xxxxxxxxxx xxxxxx xxxxxxxx xx xxx xxxxxx xxxxxxxxxxxxx xx xxx xxxx xxxx xxxxx xxx xxxxxxx xxx xxxxxx xxxxxxxx xxxxxxxxxx. xx xxxx xxxxxxxx, xxx xxxxxx xxxx xxxxx xxxxxxxxxxxx xx xxxxxxxxx xxx xxxxxxxxx xx xxxxxxx xxx xxxxxx xx xxxxxxx xxxxxxxx xxx xxxxxxxx. xxxx xxxx xxxxx xxx xxxxxx xxxxx, xxxxxxxxx 'xxxxxxxx xxxxxxxx' xxx 'xxx xxxxxxxx', xxx xxxx xxxxxxxxxxxx xx x xxxxxxx xxxxxxxxxxx xx x xxxxxxx 'xxxxxxx xxxxxxx'.<br>\
			<br>\
			xxxxxxx x xxxxxx xxxxx-xxxxxxxx xxxxx xx xxxxx, 3x xxxxxxxxx, xxx xxxxx, xxxx xxxx xxxxxxx xxx xxx xx xxxxxxx xxxxxxx xxx xxx xxx xxxx xxxxxxx xxxxxxxxxx xx xxxxxxxxxxx xxx xxxxx xxx xxxxxxx-xxxxxxxx xxxxxxxx, xxxxxxxx xxxxx xxx xxxxxxxx xx xxxxxxx xx xx xxxxxxxxx xxxxxxxxx. xxxxxxx xxxxxxxx xxx xxxxxxx xxxxxxxxxxx, xxx xxxxxxxx xxxx xx xxxxxx xxxxxxxxxxxx xx xxxxxxx xx xxxxx xxx xxxxxxxxxxxx xx xxxxxxxx, xxxxxxxxxxx, xxxx xxx xxxxxx.",
			"xxxxxx xxxx xx xx xxxxxx xxx xxxxxxxx xxxxx xx xxx xxxxxxx. xxxxxxx xxxx xxx xxxxxxxxx, xxxxxxxxxx xxx xxxxxxxxxx xxxxxxxxxxxx, xxx xxxxxxxx xxx xxxxxxx xxxxxxxxxx xxx xx x xxxxxx xxx xxxxxxxxxxxxxxxx xxxxx xx xxxxxxx xxxxx xxxxx xxxxxxxx, xxxxxxxx, xxx xxxxxx. xxxxxxxx xx xxx xxxxxxx xx xxxxxxxxxxx, xxxxx xx xxxxxxxxxxxxx xxxx xx, xxx xxxxxxx xxxxxxx xxxxxxx xxxxxxxx xxxx xxx xxxxxxxxx xx xx xxxxxxxxxx xxx xxxxxxxxxxxxx xxx xxxxxxxxxxxxxxx.<br>\
			<br>\
			xxxxxx xxxxxxx xxx xx xxx xxxxx, xxxx’x xxxxxxxx xxxxxxxx xxxxxxxxx xxx-xxxxxxx xxxxxxxxxx xxx xxxxxxxxxx, xxxxx xxxxxxxxxxxxxx xxx xxxxxxxxxxxxx xxx xxxxxxxxxxxx xx xxx xxxxxxx xxxxxxxx xxxxxxxx xxx xxxxxxxx. xxxxxx x xxxxxxxxxxxxxxxx xxx xxxxxxxxxxxxxxxxx xxxxxxxx, xxx xxxxxxxxx xxx xxxxxxxxxx xx xxxxxxxxxx xxx xxxxxxxxxx xxxxxxxxxxxxxx. xxx xx xxxxxxxxxx xx xxxxxxxxx xxx xxxxxxxxx xxxxxxxxxxxxx xxxxxxx xxxxxxxx xxx xxxxxxx xxxxxxxxxx xx xxxx xxxxxxxxx xxxxxxx, xxxxxxxxxx, xxxxxxxxxxxxxx xxx xxx xxxxxx xxxxxxxxx.<br>\
			<br>\
			xxxx xxxxxxxxx xxxxxxx xxxxxx xxxxxxxxxxxxx xxx xxxxxx xxxxxx xx xx xxxxxxx xxxxxxxxx xxxxxxxxx xx xxx’x xxxxx xxxx + xxxxxxxx xxxxxxx, xxx xxxxxxxx xx xxxxxxx xxxxxx xx xxxxxx. xxx xxx xxxxxxxxx xxxxxxxxxxxxxxx xx xxxx xxxxxxxx, xxxxxx xx, xxxx xxxx xxx xxxxx xxxxxxx. xxx xxxxx xx xxx xx xxxxxx xxxxx xxxx xxxx xxxx, xxx x xxxxxxxx xx xxxxxxx xxxxxx xxxxxxxx xx xxxxxxx xxxxxxxxxx xxx xxx xxxxxxx xxxx xxx xxxx xxxxxxxxxx.",

			'文文文',
			'文文文',
			'2023 文 2 文 25 文(文文)，x文文文文文文 x 文文文文文文文文文文文文文文文文(xxxxxx xxxx)文文文文文文文文“文文文 xxxxxxx xxxxxxx”。<br>\
			<br>\
			文文文文文文，文文文文文文文文文文文？文文文文，文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文。文文文文文文文，文文文文文文文文文文文文文文文文，文文文文文文文文文文文文文文文。 文文文文文文文，文文文文文文(xxxxxx xxxx)文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文。文文文文文文文文文文文文，文文 “文文文文 xxxxxxxx xxxxxxxx”文“文文文文 xxx xxxxxxxx”，文文文文文文文x文文文“文文文 xxxxxxx xxxxxxx”文文文文文文文。文文文文文文文文文文文文文文、3x文文文文文文文文文文文文文文文，文文文文文文，文文文文文文文文文文文文文文文，文文文文文文文文文 文文文文文文文文文文文文文文文文文、文文文文文文文文文文文文文文文文文文。文文文文文文文文文，文文文文文文文文文文文文文文文文文文文、文文文、文文文文文文文文。',
			'文文文 xxxxxx xxxx，文文文文文文文文文文文文，文文文文文文文文文文。文文xxx 文文、文文文文文文文文文，文文文文文文文文文文文文文文文文文文、文文文文文文文文文文文文、文文文文文文文文。文文文文文文文文，文文文文文文文文文，文文文文文文文、文文文文文文文文文文文文文文。文文文文、文文文，文文文文文文文文文文文文文文文，文文文文文文文文文文文文文文文文文文文文文文文文。文文文文文文文文文文文文文文，文文文文文文文文文文文文文文文文文文文文。文文文文文文文文文文文文文文文文文文文，文文文文文文文、文文、文文文文文文文文文文文文。文文文文文文文文文文文“文文文文+文文”文文文文文文文文，文文文文文文文文文文文文文。文文文xxxx xxxxxxxx、xxxxxx xx、xxxx xxxx 文xxxxx xxxxxxx文文文文文文。文文文文文文文文文文文文文文文文文文文文文文文，文文文文文文文文文文文文文文文文文文文文文文文文文文。',

			'https://xvirtual.link/MLyaWMa',
				['5Workshop/WechatIMG953.png','5Workshop/WechatIMG952.jpeg','5Workshop/WechatIMG958.png','5Workshop/WechatIMG955.jpeg','5Workshop/img1.jpeg','5Workshop/WechatIMG954.jpeg','5Workshop/WechatIMG956.jpeg']
			],
			[
			'xxxxxxxx',
			'img/Events/6Workshop/img1.png',
			"2023.03.15 / 20:00-21:30",

			' xxxxxxxxx xxxxx-xxxxxxxxxxx xxxxxxxxxxx xxxxxxxxxx xx xxxxxxx xxxxx',
			'xxx xxx xxxx',
			"xx xxxxx 15xx, xxx xxxxxx xxxxx xxx xxx xxxx xxxx xxxxxxx x xxxxxxx xxxxxxxx xx: ‘xxxxxxxx xxxxxxxxx xxxx xxxx.’ xxxx xxxx xxxx xxx xxxxxxxxxxxx xx x xxxxxxx xx xxxx xxxx xxxx xxx xxxxx xxxxx xx xxxxxxxx, xxx xxxx-xxxxxxx xxxxx.<br>\
			<br>\
			xxx xxxxxxxx xxxxxxxxxx xxx xxx xxxx xxxxx xxxx xxxxxxxxxxx xxxx xxxxxxx xxxxxxx xxx xxxxxxxx xxxx. xxxxx xxxxx xxxxxxx xxx xxxxxx xxx xxxxxxxx xxxxxxxxx, xxxxxxxxxxx, xxx xxxxxxxx xxxxxxx xxxx xxxxx xx xxxxxx. xx xxxxxxxxx xxxxxxxxxx, xxxxxx, xxxxxx, xxx xxxx-xxxxxxxxx xxxxxxx xxxx xxx xxxxxxxx, xxx xxx xxxx xxxxxx x xxxxxxxx xxx xxxxxx xxxxxxxx xx xxxxxxxxxxxx. xxxx xxxxxx xxx xxxxxxxx xx xxxx xxxxx xxx xxxxxxxxxx xxxxxxx xxx xxxxxxx xx xxxxxxxxxxx xxxxxxxxx xx xxxxxxx xxxxxxxx xx xxxx.<br>\
			<br>\
			‘xxxxxxxx xxxxxxxxx xxxx xxxx’ xx xxxxx xx xxx xxxxxx xxxxx’x xxxxxx xx xxxx xxxxxx ‘xxxxxxxx’x xxxx xxxxx’. xxx xxxxxxx xxxxx x xxxx xxxxx xxxxxxx xxx xxxx xxxxxxxxx xxxxxxxx xxx xxx xxxxxxxxx xxxx. xx xxx xxxxx xxxxxxx, ‘xx xxxxxxxxx xxxxxxxxxxxx,’ xxxxxxxx xxx xxxx xxxxxxxx xx x xxxxxxxxx xxxxxxx. xxxxxx xxx xxxxx xxxxxx xx xxxxx xxxxxxxxxxxx, xxxx xxxxx xx xxxxxxxx xxx xxxxxxxx xxxxx xxxxxxxx xxxxxxx xxxxxxxx xx xxxx. xxxxxxxxxxxxx, xxxxx xxxx-xxxxx xxxx xxxxx xxxxxxxxxx xxxxxx.<br>\
			<br>\
			xx xxx xxxxxx xxxxx xx xxxxxxxx, xxxxxxxx xxxx xx xxx xxxxxxx xx xxxxxx xxx xxxxxxx xxxx xx xxxxxx xxxx xx xxx xxxxxxxxx. xxxxxxx, xxxxxx xxxxxxx xxxxxx xxxx xxxx. xxx xxxxxxx, xxxxxxxx xxxxxxxx x xxxxxxxxx xxxxxx xxx xxxx xxx xxxxxxx xxxxxxx xxx xxxxxx. xxx xxxx xxxx xxxxxxx xxxxxxx xxxx, xxxxxxxx xxx xxxxxxxx xx xxxxx xxxx xx xxx xxxx xxx xxxx xxxxxxxx xxxxxxx xxxx xxx xxxxxxxxx xxx......<br>\
			<br>\
			‘xxxxxxxx xxxxxxxxx xxxx xxxx’ xx xxxxxxxx'x xxxxxxxxx xxxxx xxxxx, xxxxxxxx xx xxxx xxxxx xxxxx, xxxx xxxxxx xxxx xxxxxxxx xx xxx xxx xxxx. xxxxxxx xxxx xxxx, xxx xxxxxxxx xxx xxxxxxxxxx xxx xxxxxxxx xxxxxxxx xxx xxxxxxxxx x xxxxxxxxxx xxxx xxx xxxxxxx. xx xxx ‘xxxx xxxxxxx xxxxx’ xxxx, xxxxxxxxxxxx xxx xxxxx xxxxx xxx xxxx xxxxx xx xxxxx xxxxx xxxxxxxxx xxxxxxxx xxxx xxxxxxxx, xxxxxxxx x xxxx xx ‘xxxxxxxx xxxxxxxxx xxxx xxxx.’",
			`xxx xxx xxxx xx xx xxx xxxxxxxxxx xxxxxxx xx 2017, xxxxxxxxx xxxxx xx xxxxxx. xxxx xxxxxxxxx xxxx xxxx xxxxx xxxxxxxxxxxxx xxx xxxxxxxxxxx xxxxxx xxxxxxxxx xxxxxx xx xxxxxx xxxxxxxx xxxxxx xxxxxxxxxxxxx. xxxx xxxxx xx xxxxxxxxx x xxxxxx xxxxx xx xxxxxx xx xxxxxxx xxx "xxxxx xxxxxxxxxxx xxxxx xxxxxxxxxxxx." xxxxxxx xxx xxx xx xxxxx xxxxxxxxxx, xxxxxxx xxxxxxxxxx, xxxxxxx, xxxxx-xxxxx, xxx xxxxxxx xxxxxxxxxxxx, xxxx xxxxxxx xxxxxxx xxxxxxxxxxx xx xxxxxxxx xxxx. xxxxx xxxxx xxxxx xx xxxxxxxxxxxx xxxxxx xxxxxxxxx xxx xxxxxx xx x xxxxxxxx xx xxxxxxxx xxx xxxxxxx xxxxxxxx xxxxxx xx xxx xxxxxxx. xxxx xxxxxxx x xxxxxxxxx xxxx xx xxxx xx xxxxxxx, xxxxx xxxxxx xxx xxxxxxxx xxxxxxx xx xxxxxxxx xxx xxxxxxxxx, xxxxx, xxx xxxxxxxxxx xxxxxxxx xx xxxx xxx.`,

			'文文文文文文文',
			'xxx xxx xxxx',
			'2023文3文15文（文文），x 文文文文文文文文文文文文文文文文x x x x x x x x x x 文文文文文文文文“文文文文文文文”。文文文文文，xxx xxx xxxx文文文文文文文“文文文文文文文”文文文文文，文文文文文x文文文文文文文文“文文文文”文，文文文文文文“文文文文”文文文文文。<br>\
			<br>\
			文文文文文xxx xxx xxxx文文文文文文文文文文文文文文文文文，文文文文文文文文文文文文文文文文文、文文文文文文文文。文文文文文文文文文文文文、文文、文文文文文文文文，xxx xxx xxxx文文文文文文文文文文文文文文文文，文文文文文文文文文文文文文文文文文、文文文文文文文文文文。文文文“文文文文文文文”文文文文文文文xxx xxx xxxx文文文文文文文“文文文文文文文”，文文文文文文文文文文文文文文文xxxx文文文文文文文。文文文文“文文文文文文文”文，文文文文xxxx文文文文文文文文文文文文文文文文：文文文文，xxxx文文文文文文文文文文文文文文文文文文。文文，文文文文文文文文文。文文文文文文文文文，文文文文文文文文文文文文文文文文文，文文文文文文文文文文文文文文，文文文文文文文文文文。文文文文，文文文文文文文文文文文xxxx文文，文xxxx文文文文文文。文xxxx文文文文文文，文文文文文文文文文文文文文文xxx文文文… …？“ 文文文文文文文”文文文文文文文文文，文文文文文文文文，文文文文文文文文文文xxxx文文文文文。文文文文文文文文，文文文文文文文文文文文文文，文文文文文文文文文文文文。文文文文文文文文文“文文文文文”文文，文文文文文文文文文文文文文文文文文文文文文文文文文文文文，文文文文文文文文文文文文文文文文。',
			'xxx xxx xxxx 文2017 文文文文文文文文，文文文文文文文文文。xxx xxx xxxx文文文文文文文文文文文文，文文文文文文文文文文文文文文文，文文文文文文文文文文文。文文文文文文文文文文文文文文“文文文文文文文文文文”，文文文文文文、文文、文文文文、文文、文文文文文文文文文文文文文文，文文文文文文文文文文文。文文文文文文文文文文文文文文，文文文文文文文文文文文文文文文文文文文，文文⼀文文文文文文文文，文文文文文文文文文，文文文文文文文文文、文文、文文文文文文文。',

			'https://xvirtual.world/cHrqXek/georgina-butterfly-love-park',
				['6Workshop/Screenshot_2023-03-08_at_13.26.37.png','6Workshop/Screenshot_2023-03-08_at_13.26.19.png','6Workshop/img1.png','6Workshop/Screenshot_2023-03-08_at_13.41.13.png','6Workshop/102368734733013217be897956c18de.png','6Workshop/210315_sid_and_geri_11.png']
				



			],
			['xxxxxxxx',
			'img/Events/7Workshop/img1.jpg',
			'2023.04.08 / 10:30-12:00',

			'xxx xx-xxxxxxxx xxxx xxxxx, xxxxxxx, xxx xxxxxxxx xxxxxx xx xxxxxxxxxx xxxxxxxxxx',
			'xx xxxxxx',
			'xx xxx xxxxxxxx xxxxxx xxxxxx xx @xxx.xxx.xx xx xxxxxxx x xxxxxxx xxxxxxxx: xxx xx-xxxxxxxx xxxx xxxxx, xxxxxxx, xxx xxxxxxxx xxxxxx xx xxxxxxxxxx xxxxxxxxxx. xxxx xx xx 8xx xxxxx, 10:30-12:00 xxxxxxx xxxx.<br>\
			<br>\
			xxxxx-xxxxxxx xxxxxxxx xx xxxxxxx xx xx xxxxxx xxx xxxxxx xxx xxxxx xxxxx xx xxxx xx xxxx xxxx xxx’x xx xxxxxxxx. xx xxx xxxxxxxxxxxx xxxxxxxx, xxx xxxxxxxxx xxx xxx xxxx xxxxxx xxxx xx xx xxxxxxxxx xxx xx xxxx xxxxxxx xxx xxxx xx xxx xxxxxxxxxxx; xx xxxxx xxx xxxxxxxxxxxx xxxx xxxxx-xxxxxxxx, xxx-xxxxxxx, xxxxxx-xxxxxx xxxx-xxxxxxxxxxxxx xxxxxxxx xx x xxxxx-xxxxxxx, xxx-xxxxxxx xxxxxxxxx. xxxx xxxxxxxx x xxxxxxxxxxx xxxxxxxxxx xxxxxx, xxxxxxxx xxx xxxxx xx xxxxxx xxx xxxxxxxxxxx xx xxxxxxxxxxxx.<br>\
			<br>\
			xxxxx xxx xxxxxxxx xxxxx xx xxxxxxxxxxxx xxxxxx xxxxx xxxxxxxxxxxx, xxxx xx xxxxxxxxxxx xxxxxxxxxxxx xx xxxxxxxxx, xxxxx xxxxxxxxxxxx xx xxxx, xxxx, xxx xxxxx, xxxxxxxxxx xxxxxxxxxxxx xx xxxxxxxx, xxx xxxxxxxxx xxxxxxxxxxxx. xx-xxxxxxxx xxxx xxx-xxxxx xxxxxxx xxxxx xx xxxxx xxxx xxxxxxxxx xxxxxxxxxxxxx, xxxxx xxxxxxxxxxxx, xxx xxxxxxxxxxx xxxxxxxxx. xx xxxxxxxxxxx, xx xxxx xx xx xxxxxx xxxxxxx xxxxxxx xxx xxxxxx xxxxxxxxxx xxx-xxxxx xxxxxxxxxxxx, xxxxxxxxx, xxx xxxxxx. xx xxxx xx xxxxxxx, xxxxx, xxxxxxx, xxxxx xxx xxxxxx, xxx xxxxxx xxxx xxxxx. xxxxxxx xxxxxxxxxxx xxxxxxx xxx xx xxx xxxx xx xxxx xxxxxxxxxx xx xxxxxxxxxxxx.<br>\
			<br>\
			xxxx xxxxxxxxx xxx xxxxxxx xx xxxxxxxx xx xxxxxxx xxxx xx xxxxx xxxxxxxx xxx xxxxxxxxxxx x xxxxx xxxxxxxxx xx xxxxxxxxx, xx xxxx xxxxxxxx, xxxxxx xx xxxxxx xxxx xxxxx xxx xxxxxxxxxxxxxxxxx xxxxxxxx xxxxxxxxx xxxxxx xxxxxxx xxx xxxxxxx. xxx xxxx xxxx xxxxxxxxxxxx xx xxxxxxx xxxxxxxxxx xx x xxxxxxx xxxxx xxx xxxxxxxxxx x xxxxxxxxx xxxx xxxxxxx xxxxxx xxx xxxxxxxxxxxx xxxxxxx xxxxxx xxx xxxxxx. xxxxxxxxx x xxxxxxxxxxx xxxx xx-xxxxxxx xxxxxx, xxx xxxxxxxx xxxx xx xxxxx xxx xxxxxxxx xx xxxxxxxxxx xxx xxxxxxxxxxx xxxxxxx xxxxx xxxxxxxx, xxxxxxx, xxxxxxx, xxx xxx xxxxx xx xxxxx xxxxxx. xxxxxxx xxxxxxxxx xxx xxxxxxxxx xx xxxxxxxx, xxxxxxxxxxx, xxxxxxxxxxxxx, xxx xxxxxxxxxxx xxxxxxx xxxxxx xxx xxxxx xxxxxxxxxxxxx, xx xxxxx xx xxxxxxx xxx xxxxxxxxx xxx xxxxxxxxx xxx xxxxxxxxxxxxx xxxxxxx xxxxxx xxx xxx xxxxxx xxxxxx.',
			"xx xxxxxx xxxxxxx xx xxx xxxxxxxxxxxx xx xxxxxxxxxx, xxx, xxx xxxxxx, xxxxxxx xxx xxxxxxxx xxx xxxxx xxxxxxxxxx xx xxx xxxxx. xxx xxxxx xxxxxxx xxxxxxx xxxxxx, xxxxxxxxxxxxx xxxxxxxxx xxxxxxx xxxxxxx, xxxxxxxxx xxxxxxxxxx, xxx xxxxxxxxxxx xxxxxxx. xxx xxxxxxxx xxxxx xxxxxxxxx xxxxxxxxx, xxxxxx, xxxxxxx xxxxxxx, xxxxxxxxx xxxxxxxxxxx, xxxxxxxxxx, xxxxxxxxxxx, xxx xxxxxxxxxxxxx. xxx xxxxxxxx xxxxxxxx xxxxxxxxxxx xxxxxxxxx xxx xxxxxx xx xxx, xxxxxx, xxxxxxxxxx, xxx xxxxxxx, xxxxxxx xxxx xxxxxxxxxxxx xx-xxxxxxxx xx xxxxxxxxx xxxxx xxxx xxxxxxxxxxxxx, xxx xxxx xxx-xxxxxxx xx xxxxxxxxx xxxxxxx xxxxxxxxxxxx. xx x xxxxxx-xxxxx xxxxxxxxx xxxxxxxxx, xx xxxxxx xxxxxxxxx xxxxxxx xx xxx xxxxxx xx xxxxxx xxx xxxxxxxx xxxxxxxxxxxx xx xxx xxxxxxxxxx xx xxxxx xx xxxxxx. xxx xx xxxx x xxxxxx xx xxx xxx, xxx xxx xxxxxx'x xxxxxxxxx xxxxxxx xxx xxxxxxxx xxxxxxxxxx xx xxx xxxx. xxxxxxxxxxxx, xxx xxxxxx xx x xxxx xxxxxx xxx xxxxxxxxxxx xxxxxx xxxxxx xxxx xx xxxx, x&xx, xxx xxx xxxxxxxxx xxxxxxxxx.",

			'文文、文文、文文 - 文文文文文文文文文文文文文',
			'文文文',
			'2023文4文8文（文文），x文文文文文文文文文文文文文文文文文文文文“文文、文文、文文：文文文文文文文文文文文文文”，文文文文文文x文文文文文文文文文文文文文，文文文文文文文文文“文文文文文文”文文文文文文文文文。<br>\
			<br>\
			文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文。文文文文文文文文文文文文文文，文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文，文文文文文文文文文文文、文文文文文、文文文文文文文文文文文文文文文文文文文文、文文文文文文文文文。文文文文文文文文文文文文文文文文文文文文文文。文文文文文文文，文文文文文文文文文文文文文文文文文：文文文文文文文文文，文文、文文文文文文文文文文，文文文文文文文，文文文文文文文。文文文文文文文文文文文文文文文文文文文文文文文文文文，文文文文文文文文，文文文文文。文文文文文文文文，文文文文文文文，文文文文文文文文文文文文文文文文文文文文文文文文，文文文文文文文文文、文文、文文，文文文文文文文文文文文文。文文文文文文文文文文文文文文文，文文文文文文文文文文文文文文文文。文文文文文文文文，文文文文文文文文，文文文文文文文文文文文，文文文文文文文，文文文文文文文文文文文文文文文文文文文文文文、文文文文文文文文文，文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文。文文文文文文文文文文文文，文文文文文文文文文文文文文文文文文文、文文、文文文文文文文文文文文文文文，文文文文文文文文文文文文文文文文文文文文文文、文文、文文、文文文文文， 文文文文文文文文文文文文文文文文文文。',
			'文文文文文文文文，文文文文文文文文文，文文文文文文文文文文文文。文文文文文文文文文文、文文文文文文文文文、文文文文文文文文文文文文文。文文文文文文文文文文文文、文文文、文文文文、文文文文文、文文文、文文文文文。文文文文文文文文文文文文文、文文、文文文文文文文文：文文文文文文文文文文文文文文文文，文文文文文文文文文文文文文。文文文文文文文文文，文文文文文文文文文文文文文文文文文文文文文文文文文文文文；文文文文文文文文文文文xxx xxx 文文文文文文文文文，文文文xxxx、x&xx、文文文文文文文文文文文文文文文文文。<br>\
			<br>\
			文文文文文xxx 文文文，文文文文文文文文文文文文文文文文文文文文文文文文文文文。文文文文文文文文文文文文文文文文文文，文文文文文文文文文30 xxxxx 30、文文文文30 文文文文文、文文文文文文文文文xx 文文文、xx 文文文文、文文文文文文文文、xxxxxx 文、xxxx xxxxxxx 文文文文文文文文、xxxx77文文文、xxxx、xxxxxxx xxxxx 文、xxxxx 文、x’文文文文文文、xxxxxxxx xxxxxxxxxx 文文、xxxx 文文文。文文文文文文文文文文文文文文、文文文文文文文文文文、文文文文文文、文文文文文、文文文文文、文文文文文、文文文文文文文文、文文xxxx、文文文文文文文、文文文文文文文、xxxx 文文文文文文文文文。文文文文文文文文文文文xxxxxxxx、xxx、xxxx xxx、xxxxxx 文文文文文文文文文文。文文文文文文文文文文、文文、文文文文、xxxxxxxxxx、xxxxx、xxxxx xxxxxx、xxxx xxxxxxx、文文文文文文、xxx xxxxxxxx、文文文文文、文文文文、文文、xxxxxxxx、xx 文文文文文文、xxxxxxxxxxx xxxxx、文文文文文文文文文文文文文文文文文。',

			'https://xvirtual.world/UetVZBg/crazy-playful-area',
				['7Workshop/img1.jpg','7Workshop/WechatIMG23.png','7Workshop/WechatIMG24.png','7Workshop/ScreenS_015.jpg','7Workshop/ScreenS_006.jpg']
			],
			['xxxxxxxx',
			'img/Events/8Workshop/img1.png',
			'2023.04.27 / 20:00-21:30',

			'xxxxxxxxxxxxxxxx xxxxxxx: xx xxx xxxxxxxx xx xxxxxxxx, xxxxxxxx xxx xxxxxxx',
			'xxxx xxxxxxx',
			`On April 27th, 8:00-9:30 PM Beijing Time, artist Zhou Yinglin will be hosting the 'X Virtual Workshop: Verbuchstabieren Trilogy: On the Dilemmas of Language, Identity and Culture' on the X Virtual platform.<br>/
			<br>/
			In the computer-generated world of "Mondo," renowned cultural landmarks such as the Eiffel Tower, the Taj Mahal, and other iconic sites from around the world form the original natural landscape of this virtual world. The "Citivanos" (world citizens) work together and communicate in a global language to rebuild the Tower of Babel. The main character, "Yinglin," reluctantly signs a social contract in order to have the opportunity to live in "Mondo," agreeing to abide by five terms outlined in the contract. However, as "Yinglin" enters "Mondo," she begins to confront unknown divisions and struggles...<br>/
			<br>/
			‘Verbuchstabieren’ is a three-part video work created by artist Zhou Yinglin based on her research into the cultural and identity dilemmas of cross-cultural immigrants in recent years. The trilogy consists of ‘One World, One Dream’ (2018), ‘Verbuchstabieren’ (2019) and ‘Unknown Connection Line’ (2020). 'Verbuchstabieren' is a word created by the artist based on German word formation. It implies the influence of alphabetic language on the structure of Asian languages, and thus suggesting the cultural colonialism behind the language. In the trilogy, the artist creates a fictional world ‘Mondo’ to explore issues ranging from language, to identity and cultural identity, to cross-cultural immigrant integration through the main character ‘Yinglin’.<br>/
			<br>/
			This workshop will present the core concept of the trilogy, the basic setting and the details of the works. The artist will share her long-term research and practice on cultural identity. Participants will also be invited to interact with the space and engage in thematic discussions with the artist while traveling through the fictional world of "Mondo."`,
			`Zhou Yinglin is a new media artist working with temporal-based media and digital virtual technologies. She is currently based in Berlin/Linz. She holds an outstanding master's degree from Berlin University of the Arts and is pursuing a doctoral degree at the University of Art and Design Linz. Zhou Yinglin's recent artistic practice revolves around issues of identity, digital virtual space, and cultural equity. Her work addresses topics such as identity formation, cultural displacement, and the fissures of post-cultural colonial identities. She explores the construction and virtuality of digital realms, image expression in virtual spaces, and the dynamics of power within those spaces. Additionally, she proposes a futurist perspective on cultural equity. Zhou Yinglin's works possess a research-oriented nature, characterized by ironic humour and sharp political attributes. Her projects demonstrate extensive reflection and analysis.<br>\
			<br>\
			Zhou Yinglin has received recognition for her work, including being shortlisted for "The Lumen Prize" and winning the Today Art Museum X InArt "Future Art" Artist Award (First Prize). She has also been shortlisted for the "Lentos Freunde Art Award" and received the third prize in the "Dystopia" iART Youth Art Program, as well as being named a rising artist in the "SAP Art Award." Zhou Yinglin's works have been exhibited at prominent domestic and international art institutions and exhibitions, including the Ars Electronica Center, Hong Kong Basel Art Fair Projection Space, Ullens Center for Contemporary Art, A4 Art Museum, Today Art Museum, the 13th National Art Exhibition, and OSTRALE Biennale O21.`,

			'xxxxxxxxxxxxxxxx 文文文: 文文文文、文文、 文文文文文',
			'文文文',
			'2023 文 4 文 27 文(文文)，x 文文文文文文文文文文文文文文 文文文文文文“xxxxxxxxxxxxxxxx文文：文文文文、文文、 文文文文文”。<br>\
			<br>\
			文“xxxxx”—— 文文文文文文文文文文文，文文文文文、文文 文文文文文文文文文文文文文文文文文文文文文文文文文文文 文文文文文。“xxxxxxxxx”(文文文文)文文文文，文文文文 文文文文文，文文文文文文文文。文文文“xxxxxxx”文文文文文“xxxxx”文文文文文文，文文文文文文文文文文文文文，文文文文文文文文文文文文文。文文“xxxxxxx”文文文文“xxxxx”文文，文文文文文文文文文文文文文......“xxxxxxxxxxxxxxxx”文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文。文文文文文文文文文文，文文文“xxx xxxxx, xxx xxxxx”(2018) 、“xxxxxxxxxxxxxxxx”(2019)文“xxxxxxx xxxxxxxxxx xxxx”(2020)。xxxxxxxxxxxxxxxx 文文文文文文文文文文文文文文文文文文文，文文文文文文文文文文文文文文文文文文文文文文文文文文文，文文文文文文文文文文文文文文文文文。文文文文文，文文文文文文文文文文“xxxxx”，文文文文文“xxxxxxx”文文文，文文文文文文文文文文文文文文文文文，文文文文文文文文文文文文文文。<br>\
			<br>\
			文文文文文文文文文文文文文 x xxxxxxx 文文文文文文文文文文文文文文。文文文文文文文文，文文文文文文文文、文文文文、文文文文文文文文文文文文文文文文文文。文文文文文文文文文 文文文文文文文文，文文文文文文文文文文文文文文文文文文文 文。文文文文文文文文文文文文“xxxxx”文文文，文文文文文文文文文文文文文文文文，文文文文文文文文文文文文文文文文，文文文文文文文。',
			'文文文文文文文文文文文文文文文文文文文文文文文文文文，文文文文文文文文文文/文文。文文文文文文文文文文文文文文文文文文文文文，文文文文文文文文文文文文文文。文文文文文文文文文文文文、文文文文文文文文文文文文文文文，文文文文文文、文文文文文文、文文文文文文文文文文文文;文文文文文文文文文文文文文文文文文、文文文文文文文文文文文文文文文，文文文文文文文文文文文文文文文文文文文文文。文文文文文文文文文文文文文文文文文文文文文文文文文文文文文，文文文文文文文文文文文文文。文文文文文“xxx xxxxx xxxxx 文文文文文文文文文”xxxxxxxxx文文文文文; 文文文文文 x xxxxx“文文文文”文文文文文(文文文);“xxxxxx xxxxxxx文文文”xxxxxxxxx 文文文文文;“文文文”xxxx文文文文文文文文文;“xxx 文文文文”文文文文文;“文文文文文文文文文文文文文”文文文文文文。文文文文文文文文文文文文文文文文文文文文文文文文文，文文文文文文文文文文文、文文文文文文文文文文文文文文、文文文文文文文文文、x4 文文文、文文文文文文文、文文文文文文文文、xxxxxxx文文文x21文。',

			'https://xvirtual.world/sKb3LcC/pleasant-cultured-volume?fov=50']
		]
		var research_array = 
		[
			['xxxxxxxxx',
			'img/Exhibition/Incubator/ayrtbh/img1.jpg',
			'',

			'xxxxxxxxxx xxxx xxxxxxx',
			'xxxxxx',
			'xxxxxxxxxx xxxx xxxxxxx xx x xxx xxxxx-xxxxxx xxxxxxx xxxxx xxxxxxxxxxxx xx x xxxxxxx xxxxxxxxx. xxxxxx-xxxxx xxxxxxxxxx xxx xxxxxxxxxxx xxxxx xxxxx xxx xxxxxxxxx xxxxx xxxx xxxxx xx x xxxxxxxxxx xxxxxxx xxxxx xxxxxxxx xx xxxxx xxxxxx xxx xxxx xxx. xxxxxxx xx xxxxx xxxxxxxxx, xxxxxxxxxxx xx xxx xxxxx xxx xxxxxxxxx xx xxx xxxxx xxx xx xxxxxxxxx xxxx xxxxxx xxxxxx xxx xxxxx. xxxx xxxxxxx xxxxxx xxxxxxxxxxxxxxx, xxxxxxxxxxxx’ xxxxxxxx xxxxxxx xxxxxx xxx xxxxxxxxx xxxxxxxxx xxx x xxxxxx xxxxxxx xxxxxxxxxx xxxx xx xxxxx xxx xxxxxxxxxxx xx xxxxxxxxxx.',
			`xxxx xxxxxxxx (xxxxxx, x. 1981) xx xxxxxxxxx xxxxx xxx xxx xxxxxxxx xxxxxxxx xx xxxxx xx xxxxxxxxx xxxx xx xxx xxxxxxxx xxx xxxxxxxxxx. xx xxxxxxxxx xxxxxxx xx xxxxxxxx xxx xxxxxxxx. xxxx xxx xxxx xxx xxxxxxx, xxxx'x xxxxxx xxx xxxxxxx xxxxxxxx xxxx xxxxx xxxxxxx xxxxxxx xxxxxxxxxx xx xxxx xxx xxxxx, xxxxxxxx xxxxxxxxxx xxx xxxxxxxx xx xxxxxx'x xxxxxxxx xx xxxxxxxx xxxxxx.`,

			'《文文文文文文文文》',
			'文文文',
			'《文文文文文文文文》文x文文文文文文文文文文文文文文文文文文文文。文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文。文文文文文文文，文文文文文文文文文文文文，文文文文文文文文文文文文文文文文。文文文文文文文文文，文文文文文文文文文文文文文文文文文文文文文文文文文文，文文文文文文文文文文文文文文文文文文文。',
			'文文文(xxxxxx，文文 1981 文)文文文文，文文文文文文文文文文文文文文文 文文。文文文文文文文文文文文。文文文文文，文文文文文文文文文文文文文文 文文文文文文文文文文文文文文文文文，文文文文文文文文文文文文文文文文文。',

			'https://xvirtual.world/AQcaq2S/hyperbolic-time-chamber-i',
				['ayrtbh/wangchangcun_ayrtbh_xvirtual_hyperbolic_time_chamber.png','ayrtbh/681678260617_.pic_hd.jpg','ayrtbh/img1.jpg','ayrtbh/671678260617_.pic.jpg','ayrtbh/661678260454_.pic_hd.png']
			],

			['xxxxxxxxx',
			'img/Exhibition/Incubator/CheeseTalk/img1.jpg',
			'',

			'xxxxxx xxxxxx xxxxxx',
			'xxxxxxxxxx',
			'"xxxxxx xxxxxx xxxxxx" xxxxxxxxx x xxxxxxx xxxxx xx xxx xxxx 2600, xxxxxxx xxxx xxx xxxxx xx xxxx xxxxxxx xxxxx xx xxxxxxxxxxxxx. xxxx xxxx xxx xxxxxxxxxxxx xx x xxxxxxx xxxxxxxxx. xxx "xxxxxx xxxxxx xxxxxx" xx x xxxxxxxxxx xxxx xx xxx xxxxxx, xxxxxxxxxxx xxx xxxxxxxxxx xxxx-xxxx xxxxxxxxx. xxx xxxx "xxxxxx" xx x xxxxxxx xxxxxx xx "xxxxxx" xxx "xxxxxx". xxxxx xxxx-xxxx xxxxxxx xxxx x xxxxxxxx xxxxxx, xxxx xxxxxxx xxxxx xxxxxxxx xxxxxx xxxx. xxx xxxxxx xxxxxxxx xx xxxxxxx xxxxxxxx xxxxxxx xxxxxxxxxxxx xxx xxx xxxxxx xxxxxxx xxxxxxx xxxxx xxxxxxxxxxxxxx xxxxxxxxxx xxxx, xxxxxxx xxxxxxxxxxx xxx xxxxxxxxx xxxxxxxxx xxxxxxx xxxxx xx xxx xxxxx xxxxxxxxxxx xx xxxxxxxxxx.',
			'xxx xxxxxx (xxxxx xx xxxxxxxxxx, xxxx xx 1997) xx x xxxxxxx xxxxxx xxx xxxxxxxxxx xxxxxxxxx xxxxxxxx xx xxxxxx. xxx xxxxxxxx xxxxxxxx xxxxx xxxxxxxxxx xxxxxxx xxxxxxxx xxx xxxxxxxxxx, xxxxxxxx x xxxxxxxx xxxxxxxxxxx xxxxxxx xx xxx xxxxxxx xxxxxxx xxxxxxx xxxxxxxxxx xxxxxxxxxxxx xxxxxxxxxx xx xxxxxxx xxxxxxxxxxxx. xxxxxxxx xx xxx xxxxxxxxx xxxxxxx xxxxxxx xxxxxxxxxx xx xxxxx xxxxx, xxx xxxxxxxx xx xxx xxxxx xxx xxxxx xxxxxxx xxxx xxxxxxxxxxxx xxxxxx, xxxxxxx xxxxxxxxx xxx xxxxxxxxx, xxx xxxxxxxxx x xxxxx xx xxxxxxxx xx xxxxxxxxxxxx xxxxxxx xxxxxx xxx xxxxxxxxxx xxxxxxxxxxxx.',

			'《文文文文文文》',
			'文文文',
			'《文文文文文文》文文文文文文2600文文文文文文，文文文文文文文文文文文文文文文文文文文。文文文文x文文文文文文文文文。“文文文文文文”文文文文文文文文文文文文，文文文文文文文文文文文文，“文文文文（xxxxxx）”文文文文“文文（xxxxxx）”文“文文文（xxxxxx）”文文文文文文文文文文文文文。文文文文文文文文文文文文文文文文文文文文文文文文文，文文文文文文文文文文文。文文文文文文文文文文文文文文，文文文文文文文文文文文文文文文文文，文文文文文文文文文文文文文文文文文文文文文。',
			'文文文（xxxxxxxxxx，文文1997 文）文文文文文文文文文文文文，文文文文文文文。文文文文文文文文文文文文文文文文文文文文文，文文文文文文文文文文文文文文，文文文文文文文文文文文文文。文文文文文文文文文文文文文文文文文，文文文文文文文文文文文文文文文文文文文文文文文，文文文文文文文文，文文文文文文文文文文文文文文文文。',

			'https://xvirtual.world/YYggjhk/hyborg-agency',
				['CheeseTalk/Screenshot_2023-01-11_at_13.46.38.png','CheeseTalk/Screenshot_2022-12-03_at_14.14.55.png','CheeseTalk/img1.jpg','CheeseTalk/cheesetalk_xvirtual_eversleeping.jpg','CheeseTalk/cheesetalk_xvirtual_wander3.jpg','CheeseTalk/cheesetalk_xvirtual_wander2.png','CheeseTalk/cheesetalk_xvirtual_wander.png',]
			],

			['xxxxxxxxx',
			'img/Exhibition/Incubator/GabrielMassan/img1.jpg',
			'',


			'xxxx xx xxxxxx',
			'xxxxxxx xxxxxx',
			'xxxxxxx xxxxxx (x. 1996) xx x xxxxxxxxx xxxxxxx xxxxxx xxxxxxxxx xxxxx xx xxxxxx. xxxxxx xxxxx xxxxxx x xxxx xxxxxxx xx xxx xxxxxxxxxxxx xx xxxxxx xxxxxxx xxxxxx xxxx xxxxxxxxx 3x xxxxxxxxx, xxxxx, xxx xxxxx. xxxxxxxxxxxxx xx xxxxxxxxxx, xxxxxxxx xxxxxx xxxxxxxxxxxxxxx, xxxxxx’x xxxxx xxx xxxxxxx xxxxxxxxxxxxx xx xxxxxxx xxxxxxxx xxxxxx xxxx xx xxxxxxxxx xxx xxx.<br>\
			xxxx xx xxxxxx xx x xxx xxxxxx xx xxxx xxxxxxxxxx xxxx xxxxx-xxxxxxx xxxxxxx xxxxxx xxxxxxxxxxxx xx x xxxxxxx xxxxxxxxx. xxxxxxxxxxxx xxxxxxxx xx xxxxxxxx xxx xxxxxxx, xxx xxxx xxxxx xxxx xxx xxxxxx’x xxx xxxxxxxx xxxxxxxx xx xxx xxxxxxxx xxxxxxxxxx xx ‘xxxxx xxxx’. xxxx xxxx-xxxxxxxxx xxxxx xx xxxxxxx xxxxxxxxxxxx xxx xx xxx xxxxxxx xxxxx xxxx xx xxx xxxxxxx xx xxx xx xxxxxxx. xxxxxxxxx xxx xxxxxxxxxx xxxxx xxxx xxxxxx xxxxxx xxxx xx xxxxx, xxxx, xxx xxxxxxxxxx, xxxx xx xxxxxx xxxxxxx x xxxxxxxxx xxxxxxxxxxx xxxxxxx xxxxxxxx xxx xxxxxxxxxx, xxxxxxxxxx xxx xxxxxxxxxxx.',
			'xxxxxxx xxxxxx (x.1996 xxx xx xxxxxxx, xxxxxx) xx x xxxxxx-xxxxx xxxxxxxxxxxxxxxxx xxxxxxx xxxxxx. xxxxxxxxx xxxxxxxxxxxx xxx xxxxx-xxxxxxxx xxxxxxxxxx, xxxxxx xxxxxxx xxxxxx xxx xxxxxxx xxxxxxxxxx xxxx xxxxxxxxxxxxx xxxxxxxx xxx xxxxxxx xxxxxxxxxx xx xxxxxxxxxx xxxxxx xxx xxxxx-xxxxxxxxxx xxxxx xxxxxxxx xxxxxxxxxx. xxxxxx 3x xxxxxxxxx, xxxxxxx xxxxxxxxx xxx xxxxxxxx, xxxxxx-xxxxxx xxxxx, xxx’x, xxxxxxx xxx xxxxxxxxx xxxxxxx xxxxxxxxxxx, xxx xxxxxx xxxxx xxxxxx xxxxxxxxxxxx xxxxxxx xx xxxxxxxxxxx xxx xxxxxxxxx xxxxxxxxx xxx xxxxxxxxx xx xxx ‘xxxxx xxxxx’. xxxxxxx xxx x 2019 xxxxxxxx xx xxx xxxxxx - xxxxxx xxx xxx & xxxxxxxxxx, xxxxxxx xxxxxx xx xxx 2020 "xxx xxxxxxx" xx xxx xxxxxxxxx xxxxxxx xxxxxx (xxx), xxxxx x xxxxx ‘xxxxx xx 2021’ xxxxxxxx xxxxxx, xxxxxxxxxxx xx xxx "xxxxxx xx" xxxxxx xxxxxxxx xxxxxxxx xxxxxxxxx xx “xxx xxxxxxx xxxxxxx xxxxxxx xxxxxxxxxxxxx xxxx”, xxx xx xxx 2022-23 xxxxxxxxxx xxxx xxxxxxxxxxxx xxxxxxx xxxxxxxxxx xxxxxx.',

			'《文文文文》',
			'文文文文文·文文',
			'文文文文文·文文（文文1996文）文文文文文文文文文文，文文文文文文文。文文文文文文文文文文文文文文文文文，文文3x文文、文文文文文。文文文文文文文文文、文文文文文文文文文文，文文文文文文文文文文文文文文文文文文文文文。<br>\
			《文文文文》文文文文文文文文文，文文文文文文文文文文文文文，文文文文x文文文文文文文文文。文文文文文文文文文文文文文，文文文 “文文文文（xxxxx xxxx）”文文文文文，文文文文文文文文文文文文文文，文文文文文文文文。文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文，文文文文文文文文文文。《文文文文》文文文文文文文文文文文文、文文文文文文文文文文文文文文，文文文文文文文文文文文文文、文文文文文文文文文文文文。',
			'文文文文文·文文(文文 1996 文)文文文文文文文文文文，文文文文文文文。 文文文文文文文文文文文文文文文文文，文文 3x 文文、文文文文文。xx 文文文 文文文文文、文文文文文文文文文文，文文文文文文文文文文文文文文文文文文 文文文。文文文文文·文文文 2019 文 xxxxxx-文文文文文文文文文文文文文， 2020 文文文文·文文文文文(xxx)文文文文文文，2021 文 xxxxx x xxxxx 文 文文文文文，2022 文文文文文文“文文文文”文文文文文文，文文 2022 文 x 文 文文文 “x 文文文文文”文文文文文文。xx 文文文文文文文文文:“文文文文: 文文文文文文文文文文”(xxxxx xxxxxxxx 文文，文文文文文，2022);“xxxxx! “(文文文 9 文，文文，2022)文 “文文文文文”(xxxxxx xxxx xx 文文，文文文文，2022)。',

			'https://xvirtual.world/naFJLsM/loyal-memorable-outing',
				['GabrielMassan/Screenshot_2023-05-14_at_17.04.40.png','GabrielMassan/Screenshot_2023-05-14_at_17.04.23.png','GabrielMassan/workshop.mp4','GabrielMassan/gabriel_massan_xvirtual_ball_of_terror_scene4.jpg','GabrielMassan/gabriel_massan_xvirtual_ball_of_terror_scene1.jpg','GabrielMassan/img1.jpg','GabrielMassan/SCENE_2_(7).jpg','GabrielMassan/SCENE_2_(9).jpg','GabrielMassan/SCENE_4_(2).jpg'],
			],

			['xxxxxxxxx',
			'img/Exhibition/Incubator/KimLaughton/img1.jpg',
			'',

			'xxxx xxxxxxxx',
			'xxx xxxxxxxx',
			`xxx xxxxxxxx (x. 1984) xx x xxxxxxx xxxxxxx xxxxxx xxxxxxxxx xxxxx xx xxxxxxxx. xxxxxxxx xxxxxxxx xxx xxxxxxx xx xxxx-xxxxxxxx xxxxxxxxxx, xxxxxxxxxxxx xxxxx xxxxxxxxxx xxx xxxxxxx xxxx xxxxx-xxxx xxxxxxxx-xxxxxxxxx 3x xxxxxxxx. xxxxxxxx'x xxxx xxxxx xxx xxxxxxxxxx xxxxxxx xxxx xxxx, xxxxx xxxxx, xxxxxxxxxxxx xxxx, xxx xxxxx xxxxxxx - xxxxx xxxxxxxxxx xxxxxxx-xxxx xxxxxxx xxxxxxxxxx xx xxxxxxx xxxxxxxx xx xxxxxxxxxx xxxxxxxx.<br>\
			xxxx xxxxxxxx xx x xxx xxxx xx xxxx xxxxxxxxxx xxx xxxxxxxxxxxxxx xxxxxxx xxxxxx xxx x xxxxxxxx xxxxxxxxxxxx xx x xxxxxx. xxxxxxx xx xxx xxxxxxxxx xx x xxxxxx xx xxxxxxx xxxx xxxxxxxx xx xx xxxxxxxxx xxxxxx. xxxxxxx xx xxxxxxxxxx xxxx xxxxxx xxx xxxxxxxxxx xxxxxxx xxxxxx xxxxxxxx xx x xxxxxxx xxxxxxxxxxx, xxx xxxxxx xxxxxx xxxxxxxxx xxxxxxxxxxxx xxx xxxxxxxxx xxxxxxxxx xxxx xx xxxxxxxxxxxxxx xxxxxxxxxxxxxx. xxxx xxxxxxxx xx xxxxxxxxxx xxxx xx xxxxxxx xx xxxxxxxxx x ‘xxxxxxxxxxxx xx x xxxx xxxxxxxx xxxx’ xxxx xxx xxxx xx xxxxxxx xx xxxx xxxxxxxxxxx’x xxxxxxxxxxx. xxx xxxx xx xxxxxxxxxxxx xx x xxxxxxx xxxxxxxxx.`,
			`xxx xxxxxxxx (x. 1984) xx x xxxxxxx xxxxxxx xxxxxx xxxxx xx xxxxxxxx. xxxxxxxx xxxxxxxx xxx xxxxxxx xx xxxx-xxxxxxxx xxxxxxxxxx, xxxxxxxxxxxx xxxxx xxxxxxxxxx xxx xxxxxxx xxxx xxxxx-xxxx xxxxxxxx-xxxxxxxxx 3x xxxxxxxx. xxxxxxxx‘x xxxx xxxxx xxx xxxxxxxxxx xxxxxxx xxxx xxxx, xxxxx xxxxx, xxxxxxxxxxxx xxxx, xxx xxxxx xxxxxxx - xxxxx xxxxxxxxxx xxxxxxx-xxxx xxxxxxx xxxxxxxxxx xx xxxxxxx xxxxxxxx xx xxxxxxxxxx xxxxxxxx.`,

			'《文文文文》',
			'文·文文',
			'文·文文（文文1984文）文文文文文文文文文文，文文文文文文文。文文文文文文文文文文文文文，文文文文文文文、文文文文3x文文文文文文文文文文文文文文。文文文文文文文文文文文文、文文文文、文文文文文文文文文文文文文文文——文文文文文文文文文文文文文文文文文文文文文文文文文文文文。<br>\
			《文文文文》文文文文文文文，文文文文文文文文文文文文文文文文文文x文文文文文文文文。文文文文文文文文文文文文文文文文文文文文文文，文文文文文文文文文文文文。文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文，文文文文文文文文文文文文文文文文文文文文文文文文文文文。文文文文文文《文文文文》文文文文文“文文文文文文文文文文”，文文文文文文文文文文文文文文文文。文文文文x文文文文文文文文文。',
			'文·文文（文文1984文）文文文文文文文文文文文文文文文。xxxxxxxx文文文文文文文文文文文，文文文文文文文文文文文3x文文文文文文文文文文文文文文。文文文文文文文文文文文文、文文文文、文文文文文文文文文文文文文文—文文文文文文文文文文文文文文文文文文文文文文文文文文。',

			'https://xvirtual.world/Nwcfdnz/temple',
				['KimLaughton/Symbols_low.png','KimLaughton/Seal_mold_render.jpg','KimLaughton/img1.jpg','KimLaughton/Temple_top_landscape.jpg','KimLaughton/Temple_front_landscape.jpg','KimLaughton/Aerial_render.jpg','KimLaughton/Face.png','KimLaughton/Symbols.png','KimLaughton/Ceremony_3.png','KimLaughton/Ceremony_2.png','KimLaughton/Ceremony_1.png','KimLaughton/Priest_illustration.png','KimLaughton/mask_front.png','KimLaughton/Priest_render.jpg']
			]
		]
		var special_array = 
		[
			[
			'xxxxxxxx',
			'img/Events/1Workshop/img1.jpg',
			'2022.9.7 / 20:00-21:15',

			'xxxxxxxxx xxxxx-xxxxxxxxxxx xxxxxxxxxxx xxxxxxxxxx xx xxxxxxx xxxxx',
			'xxxxxx',
			"xxxxxxxxxx xxxx xxxxxxx xx x xxx xxxxx-xxxxxx xxxxxxx xxxxx xxxxxxxxxxxx xx x xxxxxxx xxxxxxxxx. xxxxxx-xxxxx xxxxxxxxxx xxx xxxxxxxxxxx xxxxx xxxxxxxxx xxx xxxxxxxxx xxxxx xxxxx xxxxxxxx xxxxxxx xx x xxxxxxxxxx xxxxxxx xxxxx xxxxxxxx xx x xxxxx xxxxxx xxx xxxx xxx. xx xxxxxxxxxxxx xxxx xxxxxx xxx xxxxx, xxxx xxx xxxxxxxx xxxxxxx xx xxxxx xxxxxxxxx - xxx xxxxxxxxxxxxx xx xxx xxxxx xxx xxx xxxxxxxxxx xx xxxxxxx. xxxxxxxxxx xxx xxxxxxxxxx xxxxxx xxxxxxxxxxxxxx, xxx xxxxxxxxxxx'x xxxxxxxx xxxxxx xxxxxxx x xxxxxxxxxxx xxxxxx xxxxxx x xxxxxx xxxxxxx xxxxxxxxxx xxxx xxxx xxxxxxxxxx xxx xxx xxxxxx.<br>\
			<br>\
			xx xxxx xxxxxxxx, xxxxxxxxxxxx xxxx xxxxxx xx xxxxxxxxxxx xxxxxxxxxxx xx xxx xxxxxxxxxx xxxx xxxxxxx xxxxx xxx xxxxxx'x xxxxxxxx. xxxx xxxx xxxxxxxxxx xxx xxxxxxxx xxx xxxxxxxx xx xxxxxxxxxxx xxxxx xxxxxxxxx xxxxxxxxx xx xxx xxxxxxxxxx xxxxx, xxx xxxxxxx xxx xxxxx-xxxxxx xxx xxxxxxxxxxxxx xxxxxxxxxxx xxxx xxxxxxx. xxxxxxxxxxx, xxx xxxxxx xxxx xxxxxxxxx xxx xxxxxxxxxx xxxxx xxx xxxx xxxxxxxx xxxxxx xxx xxxxxxxx xx xxxx xxxx, xx xxxx xx xxxxx xxxxxxx xxx xxxxxxxxxxx xx xxxxxxxx xxxxx xxxx xxxxxxxxxx.",
			"xxxx xxxxxxxx (xxxxxx, x. 1981) xx xxxxxxxxx xxxxx xxx xxx xxxxxxxx xxxxxxxx xx xxxxx xx xxxxxxxxx xxxx xx xxx xxxxxxxx xxx xxxxxxxxxx. xx xxxxxxxxx xxxxxxx xx xxxxxxxx xxx xxxxxxxx. xxxx xxx xxxx xxx xxxxxxx, xxxx'x xxxxxx xxx xxxxxxx xxxxxxxx xxxx xxxxx xxxxxxx xxxxxxx xxxxxxxxxx xx xxxx xxx xxxxx, xxxxxxxx xxxxxxxxxx xxx xxxxxxxx xx xxxxxx'x xxxxxxxx xx xxxxxxxx xxxxxx.",

			'文文文文文文文文文文文文文',
			'文文文',
			'“文文文文文文文文” 文 x 文文文文文文文文文文文文文文文文文文文文。文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文。文文文文文文文,文文文文文文文文文文文文文文文,文文文文文文文文文文文文文文文文。文文文文文文文文文,文文文文文文文文文文文文文文文文文文文文文文文文文文,文文文文文文文文文文文文文文文文文文文。<br>\
			<br>\
			文文文文文文,文文文文文文文文文文文文文“文文文文文文文文”文文文文文文文,文文文文文文文文文文文文文文文文文文文文文文,文文文文文文文文文文文文文文。文文,文文文文文文文文文文文文文文文文文文文文文文,文文文文文文文文文文文文文文文文文文文。',
			'文文文(xxxxxx，文文 1981 文)文文文文，文文文文文文文文文文文文文文文 文文。文文文文文文文文文文文。文文文文文，文文文文文文文文文文文文文文 文文文文文文文文文文文文文文文文文，文文文文文文文文文文文文文文文文文。',

			'https://xvirtual.world/AQcaq2S/hyperbolic-time-chamber-i',
				['1Workshop/wangchangcun_ayrtbh_xvirtual_hyperbolic time chamber.png','1Workshop/681678260617_.pic_hd.jpg','1Workshop/img1.jpg','1Workshop/671678260617_.pic.jpg','1Workshop/661678260454_.pic_hd.png']
			],
			[
			'xxxxxxxx',
			'img/Events/2Workshop/img1.png',
			'2022.10.8 / 20:00-21:15',

			'xxxxxxx xxxxxx xxx xxxxxxxxxx xxxxxxxxxxxx xx xxxxxx xxxxxx',
			'xxxxxxxxxx',
			`xx xxxxxxx 8, 2022, xx xxxxxx xxxxxx xxxxxxxxxx xx xxxx xxx xxxxxx x xxxxxxx xxxxxxxx. xxxxx xxx xxxxxx'x xxxxxxxx, xxxxxxxxxxxx xxxx xxxxx xxxx x xxxxxx xx xxxxxxxxxxxx xxx xxxxxxxxxxx xxxxxxxxxx xxx xxxxxx xxx xxxxxxx, "xxxxxx xxxxxx", xxxxxxxx xxxx x xxxxxx xxxxxxxxxxx xx xxxx xxxxxxxx xx xxxxxxxxxx xxxxxxxxxxxx.<br>\
			<br>\
			'xxxxxx xxxxxx' xxxxxxxxx x xxxxxxx xxxxx xx xxx xxxx 2600, xxxxxx xxxx xxx xxxxx xx xxxx xxxxxxx xxxxx xx xxxxxxxxxxxxx. xxx xxxxxx xxxxxx xx x xxxxxx xxxxxxxxxx xxxx xxxxxxxxxx xxxx-xxxx xxxxxxxxx; xxx xxxx "xxxxxx" xxxxxx xx x xxxxxxx xxxxxx xx "xxxxxx" xxx "xxxxxx". xxxxx xxxx-xxxx xxxxxxx xxxxxx xx x xxxxxxxx xxxxxx, xxxx xxxxxxx xxxxx xxxxxxxx xxxxxx xxxx. xxx xxxxxx xxxxxxxx xx xxxxxxxxx xxxxxxxx xxxxxxx xxxxxxxxxxxx xxx xxxxxxx xxxxxxx xxxxx xxxxxxxxxx xxxx, xxxxxxx xxxxxx xxxxxxxxx xxxxx xxxxxxxxx xxxxxxxxxx xxxxxxx xxxxx xx xxx xxxxxxxxxxx xxxxxxxxxxx xx xxxxxxxxxx.<br>\
			<br>\
			xx xxxx xxxxxxxx, xxxxxxxxxxxx xxxx xx xxxxxxx xx xxxxx xxx xxxxxxx xxxxxxx, xxxxxx xxxxxx, xxxxx xxxxxxx xxxxxxxxxxx xxxx xxxxx, xxxxxx xx xxx xxxxxx xxxxxxx xxx xxxxxxx, xxx xxxxxx xxxxxxxx xxxx xxxx-xxxx xxxxxxx. xx xxx xxxx xxxx, xxxxxxxxxxxx xxxx xxxxxxxxxx xxxxxxxxxxx xx xxxxxx xxxxxxxx xx xxx xxxxx xxxxxxx xxxxxxxxxx xxxxx, xxx xxxx xxxx, xxxxxxxxxx xxx xxxxxxx xx xxxxx xxxxx xxxxxxxxxxx xxxx xxxxxxxx xx x xxxxxxx. xxx xxxxxxxxxxxxxx xx xxx xxxxxx xxxxxx xxxx xxx x xxxxxx xx xx-xxxxxxxxx xxxxxxxxxx xx xxx xxx xxxxx xxxxxxxxxxx xxxxxxxxxxx xx xxx xxxxxxxxxxxx, xxxxxx 3x xxxxxxxx, xxx xxxx xxxx xxxx xxx xxxxxx xxx xxx xxxxxxx xx xxxxxxx.`,
			'xxx xxxxxx (xxxxx xx xxxxxxxxxx, xxxx xx 1997) xx x xxxxxxx xxxxxx xxx xxxxxxxxxx xxxxxxxxx xxxxxxxx xx xxxxxx. xxx xxxxxxxx xxxxxxxx xxxxx xxxxxxxxxx xxxxxxx xxxxxxxx xxx xxxxxxxxxx, xxxxxxxx x xxxxxxxx xxxxxxxxxxx xxxxxxx xx xxx xxxxxxx xxxxxxx xxxxxxx xxxxxxxxxx xxxxxxxxxxxx xxxxxxxxxx xx xxxxxxx xxxxxxxxxxxx. xxxxxxxx xx xxx xxxxxxxxx xxxxxxx xxxxxxx xxxxxxxxxx xx xxxxx xxxxx, xxx xxxxxxxx xx xxx xxxxx xxx xxxxx xxxxxxx xxxx xxxxxxxxxxxx xxxxxx, xxxxxxx xxxxxxxxx xxx xxxxxxxxx, xxx xxxxxxxxx x xxxxx xx xxxxxxxx xx xxxxxxxxxxxx xxxxxxx xxxxxx xxx xxxxxxxxxx xxxxxxxxxxxx.',

			'文 xxxxxx xxxxxx 文文文文文文文文文!',
			'文文文',
			'2022文10文8文，文x文文文文文文文文文，x 文文文文文文文文文 xxxxxxxxxx文文文文文x文文文文文。文文文文文文文文文文文文，文文文文《xxxxxx xxxxxx》文文文文文文文文文文文文文文文，文文文文文文文文文文文文文文文文。<br>\
			<br>\
			《xxxxxx xxxxxx》文文文文文文2600文文文文文文，文文文文文文文文文文文文文文文文文文文。xxxxxx xxxxxx文文文文文文文文文文文文，文文文文文文文文文文文文；“文文文(xxxxxx)”文文文文“文文(xxxxxx)”文“文文文(xxxxxx)”文文文文文文文文文文文文文。文文文文文文文文文xxxxxx文文文文文文文文文文文文，文文文文文文文文文文文。文文文文文文文文文文文文文文，文文文文文文文xxxxxx文文文文文，文文文文文文文文文文文文文文文文文文文文文。<br>\
			<br>\
			文文文文文文文，文文文文文文文文文文文文文文xxxxxx文文文文文xxxxxx xxxxxx，文文文文文文文文文文文文文，文文文文xxxxxx文文文文文文文。文文，文文文文文文文文文（文文文文文文文文文文文文文）文文文文文文文，文文文文文文文文文文文文文文文文文。xxxxxx xxxxxx文文文文文文文文文文文xx文文文文，文文文文文文文文文文文文文，文文文 3x 文文，文文文文文文文文xxxxxx文文文。',
			'文文文（xxxxxxxxxx，文文1997 文）文文文文文文文文文文文文，文文文文文文文。文文文文文文文文文文文文文文文文文文文文文，文文文文文文文文文文文文文文，文文文文文文文文文文文文文。文文文文文文文文文文文文文文文文文，文文文文文文文文文文文文文文文文文文文文文文文，文文文文文文文文，文文文文文文文文文文文文文文文文。',

			'https://xvirtual.world/YYggjhk/hyborg-agency',
			['2Workshop/Screenshot_2023-01-11_at_13.46.38.png','2Workshop/Screenshot_2022-12-03_at_14.14.55.png','2Workshop/img1.png']
			],


			[
			'xxxxxxxx',
			'img/Events/3Workshop/img1.png',
			'2022.12.15 20:00-21:15',

			'xxx xxxxx xx x xxxxx – xxxxxxxxxx xx xxxxxxxxxxxxx xxxxxxxxx xxxxxxxx',
			'xxx xxxxx, xxx xxxxx',
			'xx xxxxxxxx 15, 2022 (xxxxxxxx), x xxxxxx xx xxxxxxxx xxxxxxx xxx xxxxx xxx xxx xxxxx xx xxxxxxx x xxxxxxx xxxxxxxx xxxxxxxx ‘xxxxx xx xxxxxxx: x xxxxxxx xxxx xxxxxxxxxxxxx xxxxxxxxx xxxxxxxx’.<br>\
			<br>\
			xx xxx xxx xx xxxxxxx xxxxxxxx, xxx xxx xxxxxxx xxxxxxx xxxxxxxxxxxx xx xxxxxxx xx xx-xxxxxxxx? xxxxxxx xxxx xxxxx xxxxxxxx xxxxxxxx xxxxxxxxx, xxx xxxxxxx xxxx xxxxxx xx xxxxxxxxx xxxxxxxxxxx xxx xxxxxx xxxxxxxxxxxxx xxxxxxxxxx. xxxxxxxx xxxx xxx xxxxxxxxxxxx, xxxx xxxx xxxx xxxxxxx xxx xxxxxxxxx xxxxxxx xx xx-xxxxxxx x xxxxx xxxxxxxx. xxxxx xxx xxxxxxxx xx xxx xxx xxx, xxxxxxxxxxxx xxxx xxxxxxxxxx xxx xx-xxxxxxxx xxxxxxx xx xxx xxxxxxx xxxxx, xxxxxxxxxxxxxxx xxxxxxxxxxx xxxxxxxxx xxxxxxxxxxx, xxxxxxxx xxxx xxxxxxxxxxxx, xxx xxxxxxxxx xxxxxxx xxxxxx xxxxxx, xxxxxxxxxx xxxxxxxxxxx xx x xxxxx-xxxxxxxx xxxxxxxxx. xxxxxxxxxxxx, xxx xxxxxxx xxxx xxxxxx xxxx xxxxxxxxxxxx xx x xxxxxxxxxx xxxxx xxx xxxxx xx xxxxxxxxx xxxxxxxx xxxxxx xxxxxxx xxxxxxx, xx xxxx xx xxx xxxxxxxx xxxxxxxxxxxx xx xxxxxxxx xxxx.',
			`xxx xxxxx: xxx xxxxx xxxxx x xxxxxx'x xxxxxx xx xxxxxxx xxxxx, xxxxxxx, xxx xxxxxxxxx xxxx xxxxxxxxxx xxxxxxx xxxxxx. xxxx x xxxxxxx xxxxx xxx, xx xx xx xxxxxxxxxxxx, xxxxxx, xxx xxxxx xxxxxxxxxxxx. xxx xxxxxxxxxxxxxxx xxx xxxxxxxx xxxxxxxx xxxx xxxxxxx xxxxxxx, xxxxxxxxx xxxxx, xxxxxxx, xxxxxx, xxx xxxxxxxxxxx. xx xxx xxxxxxxx xxxxxxxxxxx xx xxx xxxxxxx xxxx xxxxxxxxx'x (xxx) xxx xxxxxxxxx xxxx xxxxxxxx xxxxxxx xxx xxxxxx x xxxxxxx xxxx xx xxx xxxxx xxxxxxxxxxxxx xxxxxxx xxxxxx xxx xxxxxxxxx xxxxxx xx xxxxx xxxxx, x xxxxxxxxx xxxxxxx xxxxxxx xxxxx. xxxx xxx xxxxx, xxx xxxxx xxx xxxxxxxx xxxxx-xxxxxxxx xxxxxxxxxxxxx xxxxxxx xx xxxxxxxxx, xxxxxxxxxxx xxxxxxxx, xxxxxx, xxx xxxxxx xxxxxxxxxx xxxxxxxxxxxx.<br>\
			<br>\
			xxx xxxxx: xxx xxxxx xxxxxxxxx xxx xxxxxx'x xxxxxx xx xxxx xxxx xxx xxxxxxxxxx xx xxxxxxx. xx xx x xxxxxxxxxxxx, xxxxxxxxxx xxxxxx, xxx xxxxxxxx. xxx xxxxxxxx xxxx, "xxxxxxxxxxxxx," xxxxxxxx xxx xxxx xxxxxxxxx xxxxx xx xxx xxxxxxxxxx xxxxxxxxxxxxx xxxx xxxxxxxx, xxxx xxxxxxx xxxxxxxxx xx xxx xxx xxxx xxxxxxxx, xxx xxxx xxxxxxxx xxxxx xx xxx xxxxxx xxxxxxx xxxxxxx, xxxxxxx, xxx xxxxxx xxxx xxxxxxxx. xxx xxxxx xxx xxxx xx xxxxx xxxxxxx xx xxxxxxx xxxxxxx (xx) xxxxxxxxxx xxxxxxxxxx xxxxx 2017.`,

			'文文文文文: 文文文文文文文文',
			'文文文',
			'2022文12文15文（文文），x 文文文文文文文文文文文文文文文文文文文文文、文文文文文文文文文文文“ 文文文文文：文文文文文文文文” 。<br>\
			<br>\
			文文文文文文文文文，文文文文文文文文文文文文文文文文文文文文？ 文文文文文文文文文文文，文文文文文文文文文文文文文文文文， 文文文文文文文文文文文文文文文文文文文文文文文。文文文文文文文文文文文，文文文文文文文文文文文文文文文文文，文文文文文文文文文文文文文，文文文文文文文文，文文文文文文文文文文文。文文文文文文文文文文文文文文文文文文，文文文文文文文文文。',
			'文文文：文文文文文文文文文文，文文文文文文文。文文文，文文文，文文文文文。文文 文文文文文文文文文、文文、文文、文文文文文。文文文文文文文文文(xxx) 文文文文文文文文文文，文文文文文文文文文文文文文文文文文文 xxxxx xxxxx 文文文文文，文文文文文文文文、文文文文文、文文、文文文文文文文文文文文 文文文文文文文。<br>\
			<br>\
			文文文：文文文文文文文文文。文文，文文文，文文。文文文文文文文文《文文》文文文 文文文文文文文文文文文文文，xxx 文文文文文文文文文，xxxxxx 文文，文文文 文文文文文文文文文文文文文文。文文 2017 文文文文文文文 xx 文文文文文文文 文，文文文 2021 文文文文文文文文文文文文 xx 文文文文文文。文文文文文文《文 文文》《文文文文》《文文文文》文 xx 文文文文。',

			'https://xvirtual.world/7jgMUp7/rare-normal-safari',
				['3Workshop/Screenshot_2022-12-15_at_12.35.39.png' , '3Workshop/Screenshot_2022-12-15_at_12.37.13.png' , '3Workshop/Screenshot_2022-12-15_at_12.37.57.png' , '3Workshop/Screenshot_2022-12-15_at_12.33.48.png' , '3Workshop/img1.png']
			],


			[
			'xxxxxxxx',
			'img/Events/4Workshop/img1.png',
			'2023.1.18(xxx) xxx 12:00-13:30',

			'xxxx xx xxxxxx: xxxxx xxxxx’x xxxxx, xxxxx’x xxxx',
			'xxxxxxx xxxxxx',
			"x xxxxxxx xxxx xxxxxx xxxxxx xxxxxxx xxxxxx xx xxxxxxx x xxxxxxx xxxxxxxx xx: xxxx xx xxxxxx: xxxxx xxxxx'x xxxxx, xxxxx'x xxxx. xxx xxxxx xxxx xx xxxx xx 18xx xxxxxxx, 19:00-20:30 xxxxxxx xxxx.<br>\
			<br>\
			xxxx xx xxxxxx xx x xxx xxxxxx xx xxxx xxxxxxxxxx xxxx xxxxx-xxxxxxx xxxxxxx xxxxxx xxxxxxxxxxxx xx x xxxxxxx xxxxxxxxx. xxxxxxxxxxxx xxxxxxxx xx xxxxxxxx xxx xxxxxxx, xxx xxxx xxxxx xxxx xxx xxxxxx'x xxx xxxxxxxx xxxxxxxx xx xxx xxxxxxxx xxxxxxxxxx xx “xxxxx xxxx”. xxxx xxxx-xxxxxxxxx xxxxx xx xxxxxxx xxxxxxxxxxxx xxx xx xxx xxxxxxx-xxxxx xxxx xx xxx xxxxxxx xx xxx xx xxxxxxx. xxxxxxxxx xxx xxxxxxxxxx xxxxx xxxx xxxxxx xxxxxx xxxx xx xxxxx, xxxx, xxx xxxxxxxxxx, xxxx xx xxxxxx xxxxxxx x xxxxxxxxx xxxxxxxxxxx xxxxxxx xxxxxxxx xxx xxxxxxxxxx, xxxxxxxxxx xxx xxxxxxxxxxxx. xx xxxx xxxxxxxx, xxx xxxxxx xxxxxxx xxxxxxxxxxxx xx xxxxx x xxxxxxx xxxxx xxxx xx 3x xxxxxxxxx, xxxxxxx xxxxxxxxx, xxx xxxxx, xxxxxxx xxxx xx xxxx xx xxx xxxxx xxx xxxxxx xx xxx, xxx xxxxxxx xxx xxxxxxxxxx xxxxxxx xxx xxxx xxxxxxx xxxxxx xx xxx xxxxx. xxx xxxxxx xxxx xxxx xxxxxxx xxxx xxxxxxxx xxx xxxxxxxxxxxxx xxxxxxxxxxxx xxxx xx xxxxxxxxx xxxxxxxxxxx xxx xxxxxxxxxxx xxx xxxxxxxxx xxx xxxxxxxxxxx xx xxx “xxxxx xxxxx” xxxxxxx xxxxxxx xxxxxxx xxxxxxxxxxxx.",
			'xxxxxxx xxxxxx (x.1996 xxx xx xxxxxxx, xxxxxx) xx x xxxxxx-xxxxx xxxxxxxxxxxxxxxxx xxxxxxx xxxxxx. xxxxxxxxx xxxxxxxxxxxx xxx xxxxx-xxxxxxxx xxxxxxxxxx, xxxxxx xxxxxxx xxxxxx xxx xxxxxxx xxxxxxxxxx xxxx xxxxxxxxxxxxx xxxxxxxx xxx xxxxxxx xxxxxxxxxx xx xxxxxxxxxx xxxxxx xxx<br>\
			xxxxx-xxxxxxxxxx xxxxx xxxxxxxx xxxxxxxxxx. xxxxxx 3x xxxxxxxxx, xxxxxxx xxxxxxxxx xxx<br>\
			xxxxxxxx, xxxxxx-xxxxxx xxxxx, xxx’x, xxxxxxx xxx xxxxxxxxx xxxxxxx xxxxxxxxxxx, xxx xxxxxx<br>\
			xxxxx xxxxxx xxxxxxxxxxxx xxxxxxx xx xxxxxxxxxxx xxx xxxxxxxxx xxxxxxxxx xxx xxxxxxxxx xx xxx ‘xxxxx xxxxx’. xxxxxxx xxx x 2019 xxxxxxxx xx xxx xxxxxx - xxxxxx xxx xxx & xxxxxxxxxx, xxxxxxx xxxxxx xx xxx 2020 "xxx xxxxxxx" xx xxx xxxxxxxxx xxxxxxx xxxxxx (xxx), xxxxx x xxxxx ‘xxxxx xx 2021’ xxxxxxxx xxxxxx, xxxxxxxxxxx xx xxx "xxxxxx xx" xxxxxx xxxxxxxx xxxxxxxx xxxxxxxxx xx “xxx xxxxxxx xxxxxxx xxxxxxx xxxxxxxxxxxxx xxxx”, xxx xx xxx 2022-23 xxxxxxxxxx xxxx xxxxxxxxxxxx xxxxxxx xxxxxxxxxx xxxxxx.<br>',


			'文文文文:文文文文文',
			'文文文文文·文文',
			'2023文1文18文（文文），x 文文文文文文文文文文文文文文·文文文文文文文文文文“x文文文文文”：文文文文：文文文文文。<br>\
			<br>\
			x 文文文文文《文文文文》，2022 ，（文文文：文文文文文· 文文）《文文文文》文文文文文文文文文· 文文文文文文文文文文文，文文文文文文文文文文文文文，文x 文文文文文文文文文。文文文文文文文文文文文文文， 文文文“ 文文文文（ x x x x x x x x x ） ”文文文文文，文文文文文文文文文文文文文文，文文文文文文文文。文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文， 文文文文文文文文文文。《文文文文》文文文文文文文文文文文文、文文文文文文文文文文文文文文，文文文文文文文文文文文文文、文文文文文文文文文文文文文文文文文文文，文文文文文文文文文文文文文文3 x 文文、文文文文、文文文文文文文，文文文文文文文文文文文文文，文文文文文文文文文文文文文文文文文。文文，文文文文文文《文文文文》，文文文文文文文文文文文文文文文文文文文文文文文文文文文文，文文文文文文文文文文文文文，文文文文文文“ 文文文文” 文文文文文文。',
			'文文文文文·文文(文文 1996 文)文文文文文文文文文文，文文文文文文文。 文文文文文文文文文文文文文文文文文，文文 3x 文文、文文文文文。xx 文文文 文文文文文、文文文文文文文文文文，文文文文文文文文文文文文文文文文文文 文文文。文文文文文·文文文 2019 文 xxxxxx-文文文文文文文文文文文文文， 2020 文文文文·文文文文文(xxx)文文文文文文，2021 文 xxxxx x xxxxx 文 文文文文文，2022 文文文文文文“文文文文”文文文文文文，文文 2022 文 x 文 文文文 “x 文文文文文”文文文文文文。xx 文文文文文文文文文:“文文文文: 文文文文文文文文文文”(xxxxx xxxxxxxx 文文，文文文文文，2022);“xxxxx! “(文文文 9 文，文文，2022)文 “文文文文文”(xxxxxx xxxx xx 文文，文文文文，2022)。',

			'https://xvirtual.world/naFJLsM/loyal-memorable-outing',
				['4Workshop/img1.png','4Workshop/Screenshot_2023-05-14_at_17.04.23','4Workshop/gabriel_massan_xvirtual_ball_of_terror_scene4.jpg','4Workshop/gabriel_massan_xvirtual_ball_of_terror_scene1.jpg','4Workshop/SCENE_2_(6).jpg','4Workshop/SCENE_2_(7).jpg','4Workshop/SCENE_2_(9).jpg','4Workshop/SCENE_4_(2).jpg'],
			],

			[
			'xxxxxxxx',
			'img/Events/5Workshop/img1.jpeg',
			'2023.02.25 / 14:00-15:30',

			'xxxxxxx xxxxxxx',
			'xxxxxx xxxx',
			"xxxx xxxxxx xxxxxx xxxx xxx x xxxxxxx xxxxxxxx x: xxxxxxx xxxxxxx xx xxxxxxxx 25xx, 2:00-3:30 xx xxxxxxx xxxx.<br>\
			<br>\
			xxxx xxx xxxx xxxxxxxx xxxx xxxxx xx xxx xx xxx? xx xxxxxxxxxxx, xxxxxxxxxxxxxxxx xxxxxx xxxxx x xxxxxxx xxxx xx xxx xxxxxxxxxxxx xx xxx xxxxxxxx xxx xxx xxxxxxxxx xx xxxx-xxxxxxxxx. xxxx x xxxxx xxxxxxxxxxx, xxxxxxxxxx xxxxxx xxxxxxxx xx xxx xxxxxx xxxxxxxxxxxxx xx xxx xxxx xxxx xxxxx xxx xxxxxxx xxx xxxxxx xxxxxxxx xxxxxxxxxx. xx xxxx xxxxxxxx, xxx xxxxxx xxxx xxxxx xxxxxxxxxxxx xx xxxxxxxxx xxx xxxxxxxxx xx xxxxxxx xxx xxxxxx xx xxxxxxx xxxxxxxx xxx xxxxxxxx. xxxx xxxx xxxxx xxx xxxxxx xxxxx, xxxxxxxxx 'xxxxxxxx xxxxxxxx' xxx 'xxx xxxxxxxx', xxx xxxx xxxxxxxxxxxx xx x xxxxxxx xxxxxxxxxxx xx x xxxxxxx 'xxxxxxx xxxxxxx'.<br>\
			<br>\
			xxxxxxx x xxxxxx xxxxx-xxxxxxxx xxxxx xx xxxxx, 3x xxxxxxxxx, xxx xxxxx, xxxx xxxx xxxxxxx xxx xxx xx xxxxxxx xxxxxxx xxx xxx xxx xxxx xxxxxxx xxxxxxxxxx xx xxxxxxxxxxx xxx xxxxx xxx xxxxxxx-xxxxxxxx xxxxxxxx, xxxxxxxx xxxxx xxx xxxxxxxx xx xxxxxxx xx xx xxxxxxxxx xxxxxxxxx. xxxxxxx xxxxxxxx xxx xxxxxxx xxxxxxxxxxx, xxx xxxxxxxx xxxx xx xxxxxx xxxxxxxxxxxx xx xxxxxxx xx xxxxx xxx xxxxxxxxxxxx xx xxxxxxxx, xxxxxxxxxxx, xxxx xxx xxxxxx.",
			"xxxxxx xxxx xx xx xxxxxx xxx xxxxxxxx xxxxx xx xxx xxxxxxx. xxxxxxx xxxx xxx xxxxxxxxx, xxxxxxxxxx xxx xxxxxxxxxx xxxxxxxxxxxx, xxx xxxxxxxx xxx xxxxxxx xxxxxxxxxx xxx xx x xxxxxx xxx xxxxxxxxxxxxxxxx xxxxx xx xxxxxxx xxxxx xxxxx xxxxxxxx, xxxxxxxx, xxx xxxxxx. xxxxxxxx xx xxx xxxxxxx xx xxxxxxxxxxx, xxxxx xx xxxxxxxxxxxxx xxxx xx, xxx xxxxxxx xxxxxxx xxxxxxx xxxxxxxx xxxx xxx xxxxxxxxx xx xx xxxxxxxxxx xxx xxxxxxxxxxxxx xxx xxxxxxxxxxxxxxx.<br>\
			<br>\
			xxxxxx xxxxxxx xxx xx xxx xxxxx, xxxx’x xxxxxxxx xxxxxxxx xxxxxxxxx xxx-xxxxxxx xxxxxxxxxx xxx xxxxxxxxxx, xxxxx xxxxxxxxxxxxxx xxx xxxxxxxxxxxxx xxx xxxxxxxxxxxx xx xxx xxxxxxx xxxxxxxx xxxxxxxx xxx xxxxxxxx. xxxxxx x xxxxxxxxxxxxxxxx xxx xxxxxxxxxxxxxxxxx xxxxxxxx, xxx xxxxxxxxx xxx xxxxxxxxxx xx xxxxxxxxxx xxx xxxxxxxxxx xxxxxxxxxxxxxx. xxx xx xxxxxxxxxx xx xxxxxxxxx xxx xxxxxxxxx xxxxxxxxxxxxx xxxxxxx xxxxxxxx xxx xxxxxxx xxxxxxxxxx xx xxxx xxxxxxxxx xxxxxxx, xxxxxxxxxx, xxxxxxxxxxxxxx xxx xxx xxxxxx xxxxxxxxx.<br>\
			<br>\
			xxxx xxxxxxxxx xxxxxxx xxxxxx xxxxxxxxxxxxx xxx xxxxxx xxxxxx xx xx xxxxxxx xxxxxxxxx xxxxxxxxx xx xxx’x xxxxx xxxx + xxxxxxxx xxxxxxx, xxx xxxxxxxx xx xxxxxxx xxxxxx xx xxxxxx. xxx xxx xxxxxxxxx xxxxxxxxxxxxxxx xx xxxx xxxxxxxx, xxxxxx xx, xxxx xxxx xxx xxxxx xxxxxxx. xxx xxxxx xx xxx xx xxxxxx xxxxx xxxx xxxx xxxx, xxx x xxxxxxxx xx xxxxxxx xxxxxx xxxxxxxx xx xxxxxxx xxxxxxxxxx xxx xxx xxxxxxx xxxx xxx xxxx xxxxxxxxxx.",

			'文文文',
			'文文文',
			'2023 文 2 文 25 文(文文)，x文文文文文文 x 文文文文文文文文文文文文文文文文(xxxxxx xxxx)文文文文文文文文“文文文 xxxxxxx xxxxxxx”。<br>\
			<br>\
			文文文文文文，文文文文文文文文文文文？文文文文，文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文。文文文文文文文，文文文文文文文文文文文文文文文文，文文文文文文文文文文文文文文文。 文文文文文文文，文文文文文文(xxxxxx xxxx)文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文。文文文文文文文文文文文文，文文 “文文文文 xxxxxxxx xxxxxxxx”文“文文文文 xxx xxxxxxxx”，文文文文文文文x文文文“文文文 xxxxxxx xxxxxxx”文文文文文文文。文文文文文文文文文文文文文文、3x文文文文文文文文文文文文文文文，文文文文文文，文文文文文文文文文文文文文文文，文文文文文文文文文 文文文文文文文文文文文文文文文文文、文文文文文文文文文文文文文文文文文文。文文文文文文文文文，文文文文文文文文文文文文文文文文文文文、文文文、文文文文文文文文。',
			'文文文 xxxxxx xxxx，文文文文文文文文文文文文，文文文文文文文文文文。文文xxx 文文、文文文文文文文文文，文文文文文文文文文文文文文文文文文文、文文文文文文文文文文文文、文文文文文文文文。文文文文文文文文，文文文文文文文文文，文文文文文文文、文文文文文文文文文文文文文文。文文文文、文文文，文文文文文文文文文文文文文文文，文文文文文文文文文文文文文文文文文文文文文文文文。文文文文文文文文文文文文文文，文文文文文文文文文文文文文文文文文文文文。文文文文文文文文文文文文文文文文文文文，文文文文文文文、文文、文文文文文文文文文文文文。文文文文文文文文文文文“文文文文+文文”文文文文文文文文，文文文文文文文文文文文文文。文文文xxxx xxxxxxxx、xxxxxx xx、xxxx xxxx 文xxxxx xxxxxxx文文文文文文。文文文文文文文文文文文文文文文文文文文文文文文，文文文文文文文文文文文文文文文文文文文文文文文文文文。',

			'https://xvirtual.link/MLyaWMa',
				['5Workshop/WechatIMG953.png','5Workshop/WechatIMG952.jpeg','5Workshop/WechatIMG958.png','5Workshop/WechatIMG955.jpeg','5Workshop/img1.jpeg','5Workshop/WechatIMG954.jpeg','5Workshop/WechatIMG956.jpeg']
			],
			[
			'xxxxxxxx',
			'img/Events/6Workshop/img1.png',
			"2023.03.15 / 20:00-21:30",

			'xxxxxxxxx xxxxx-xxxxxxxxxxx xxxxxxxxxxx xxxxxxxxxx xx xxxxxxx xxxxx',
			'xxx xxx xxxx',
			"xx xxxxx 15xx, xxx xxxxxx xxxxx xxx xxx xxxx xxxx xxxxxxx x xxxxxxx xxxxxxxx xx: ‘xxxxxxxx xxxxxxxxx xxxx xxxx.’ xxxx xxxx xxxx xxx xxxxxxxxxxxx xx x xxxxxxx xx xxxx xxxx xxxx xxx xxxxx xxxxx xx xxxxxxxx, xxx xxxx-xxxxxxx xxxxx.<br>\
			<br>\
			xxx xxxxxxxx xxxxxxxxxx xxx xxx xxxx xxxxx xxxx xxxxxxxxxxx xxxx xxxxxxx xxxxxxx xxx xxxxxxxx xxxx. xxxxx xxxxx xxxxxxx xxx xxxxxx xxx xxxxxxxx xxxxxxxxx, xxxxxxxxxxx, xxx xxxxxxxx xxxxxxx xxxx xxxxx xx xxxxxx. xx xxxxxxxxx xxxxxxxxxx, xxxxxx, xxxxxx, xxx xxxx-xxxxxxxxx xxxxxxx xxxx xxx xxxxxxxx, xxx xxx xxxx xxxxxx x xxxxxxxx xxx xxxxxx xxxxxxxx xx xxxxxxxxxxxx. xxxx xxxxxx xxx xxxxxxxx xx xxxx xxxxx xxx xxxxxxxxxx xxxxxxx xxx xxxxxxx xx xxxxxxxxxxx xxxxxxxxx xx xxxxxxx xxxxxxxx xx xxxx.<br>\
			<br>\
			‘xxxxxxxx xxxxxxxxx xxxx xxxx’ xx xxxxx xx xxx xxxxxx xxxxx’x xxxxxx xx xxxx xxxxxx ‘xxxxxxxx’x xxxx xxxxx’. xxx xxxxxxx xxxxx x xxxx xxxxx xxxxxxx xxx xxxx xxxxxxxxx xxxxxxxx xxx xxx xxxxxxxxx xxxx. xx xxx xxxxx xxxxxxx, ‘xx xxxxxxxxx xxxxxxxxxxxx,’ xxxxxxxx xxx xxxx xxxxxxxx xx x xxxxxxxxx xxxxxxx. xxxxxx xxx xxxxx xxxxxx xx xxxxx xxxxxxxxxxxx, xxxx xxxxx xx xxxxxxxx xxx xxxxxxxx xxxxx xxxxxxxx xxxxxxx xxxxxxxx xx xxxx. xxxxxxxxxxxxx, xxxxx xxxx-xxxxx xxxx xxxxx xxxxxxxxxx xxxxxx.<br>\
			<br>\
			xx xxx xxxxxx xxxxx xx xxxxxxxx, xxxxxxxx xxxx xx xxx xxxxxxx xx xxxxxx xxx xxxxxxx xxxx xx xxxxxx xxxx xx xxx xxxxxxxxx. xxxxxxx, xxxxxx xxxxxxx xxxxxx xxxx xxxx. xxx xxxxxxx, xxxxxxxx xxxxxxxx x xxxxxxxxx xxxxxx xxx xxxx xxx xxxxxxx xxxxxxx xxx xxxxxx. xxx xxxx xxxx xxxxxxx xxxxxxx xxxx, xxxxxxxx xxx xxxxxxxx xx xxxxx xxxx xx xxx xxxx xxx xxxx xxxxxxxx xxxxxxx xxxx xxx xxxxxxxxx xxx......<br>\
			<br>\
			‘xxxxxxxx xxxxxxxxx xxxx xxxx’ xx xxxxxxxx'x xxxxxxxxx xxxxx xxxxx, xxxxxxxx xx xxxx xxxxx xxxxx, xxxx xxxxxx xxxx xxxxxxxx xx xxx xxx xxxx. xxxxxxx xxxx xxxx, xxx xxxxxxxx xxx xxxxxxxxxx xxx xxxxxxxx xxxxxxxx xxx xxxxxxxxx x xxxxxxxxxx xxxx xxx xxxxxxx. xx xxx ‘xxxx xxxxxxx xxxxx’ xxxx, xxxxxxxxxxxx xxx xxxxx xxxxx xxx xxxx xxxxx xx xxxxx xxxxx xxxxxxxxx xxxxxxxx xxxx xxxxxxxx, xxxxxxxx x xxxx xx ‘xxxxxxxx xxxxxxxxx xxxx xxxx.’",
			`xxx xxx xxxx xx xx xxx xxxxxxxxxx xxxxxxx xx 2017, xxxxxxxxx xxxxx xx xxxxxx. xxxx xxxxxxxxx xxxx xxxx xxxxx xxxxxxxxxxxxx xxx xxxxxxxxxxx xxxxxx xxxxxxxxx xxxxxx xx xxxxxx xxxxxxxx xxxxxx xxxxxxxxxxxxx. xxxx xxxxx xx xxxxxxxxx x xxxxxx xxxxx xx xxxxxx xx xxxxxxx xxx "xxxxx xxxxxxxxxxx xxxxx xxxxxxxxxxxx." xxxxxxx xxx xxx xx xxxxx xxxxxxxxxx, xxxxxxx xxxxxxxxxx, xxxxxxx, xxxxx-xxxxx, xxx xxxxxxx xxxxxxxxxxxx, xxxx xxxxxxx xxxxxxx xxxxxxxxxxx xx xxxxxxxx xxxx. xxxxx xxxxx xxxxx xx xxxxxxxxxxxx xxxxxx xxxxxxxxx xxx xxxxxx xx x xxxxxxxx xx xxxxxxxx xxx xxxxxxx xxxxxxxx xxxxxx xx xxx xxxxxxx. xxxx xxxxxxx x xxxxxxxxx xxxx xx xxxx xx xxxxxxx, xxxxx xxxxxx xxx xxxxxxxx xxxxxxx xx xxxxxxxx xxx xxxxxxxxx, xxxxx, xxx xxxxxxxxxx xxxxxxxx xx xxxx xxx.`,

			'文文文文文文文',
			'xxx xxx xxxx',
			'2023文3文15文（文文），x 文文文文文文文文文文文文文文文文x x x x x x x x x x 文文文文文文文文“文文文文文文文”。文文文文文，xxx xxx xxxx文文文文文文文“文文文文文文文”文文文文文，文文文文文x文文文文文文文文“文文文文”文，文文文文文文“文文文文”文文文文文。<br>\
			<br>\
			文文文文文xxx xxx xxxx文文文文文文文文文文文文文文文文文，文文文文文文文文文文文文文文文文文、文文文文文文文文。文文文文文文文文文文文文、文文、文文文文文文文文，xxx xxx xxxx文文文文文文文文文文文文文文文文，文文文文文文文文文文文文文文文文文、文文文文文文文文文文。文文文“文文文文文文文”文文文文文文文xxx xxx xxxx文文文文文文文“文文文文文文文”，文文文文文文文文文文文文文文文xxxx文文文文文文文。文文文文“文文文文文文文”文，文文文文xxxx文文文文文文文文文文文文文文文文：文文文文，xxxx文文文文文文文文文文文文文文文文文文。文文，文文文文文文文文文。文文文文文文文文文，文文文文文文文文文文文文文文文文文，文文文文文文文文文文文文文文，文文文文文文文文文文。文文文文，文文文文文文文文文文文xxxx文文，文xxxx文文文文文文。文xxxx文文文文文文，文文文文文文文文文文文文文文xxx文文文… …？“ 文文文文文文文”文文文文文文文文文，文文文文文文文文，文文文文文文文文文文xxxx文文文文文。文文文文文文文文，文文文文文文文文文文文文文，文文文文文文文文文文文文。文文文文文文文文文“文文文文文”文文，文文文文文文文文文文文文文文文文文文文文文文文文文文文文，文文文文文文文文文文文文文文文文。',
			'xxx xxx xxxx 文2017 文文文文文文文文，文文文文文文文文文。xxx xxx xxxx文文文文文文文文文文文文，文文文文文文文文文文文文文文文，文文文文文文文文文文文。文文文文文文文文文文文文文文“文文文文文文文文文文”，文文文文文文、文文、文文文文、文文、文文文文文文文文文文文文文文，文文文文文文文文文文文。文文文文文文文文文文文文文文，文文文文文文文文文文文文文文文文文文文，文文⼀文文文文文文文文，文文文文文文文文文，文文文文文文文文文、文文、文文文文文文文。',

			'https://xvirtual.world/cHrqXek/georgina-butterfly-love-park',
				['6Workshop/Screenshot_2023-03-08_at_13.26.37.png','6Workshop/Screenshot_2023-03-08_at_13.26.19.png','6Workshop/img1.png','6Workshop/Screenshot_2023-03-08_at_13.41.13.png','6Workshop/102368734733013217be897956c18de.png','6Workshop/210315_sid_and_geri_11.png']
				



			],
			['xxxxxxxx',
			'img/Events/7Workshop/img1.jpg',
			'2023.04.08 / 10:30-12:00',

			'xxx xx-xxxxxxxx xxxx xxxxx, xxxxxxx, xxx xxxxxxxx xxxxxx xx xxxxxxxxxx xxxxxxxxxx',
			'xx xxxxxx',
			'xx xxx xxxxxxxx xxxxxx xxxxxx xx @xxx.xxx.xx xx xxxxxxx x xxxxxxx xxxxxxxx: xxx xx-xxxxxxxx xxxx xxxxx, xxxxxxx, xxx xxxxxxxx xxxxxx xx xxxxxxxxxx xxxxxxxxxx. xxxx xx xx 8xx xxxxx, 10:30-12:00 xxxxxxx xxxx.<br>\
			<br>\
			xxxxx-xxxxxxx xxxxxxxx xx xxxxxxx xx xx xxxxxx xxx xxxxxx xxx xxxxx xxxxx xx xxxx xx xxxx xxxx xxx’x xx xxxxxxxx. xx xxx xxxxxxxxxxxx xxxxxxxx, xxx xxxxxxxxx xxx xxx xxxx xxxxxx xxxx xx xx xxxxxxxxx xxx xx xxxx xxxxxxx xxx xxxx xx xxx xxxxxxxxxxx; xx xxxxx xxx xxxxxxxxxxxx xxxx xxxxx-xxxxxxxx, xxx-xxxxxxx, xxxxxx-xxxxxx xxxx-xxxxxxxxxxxxx xxxxxxxx xx x xxxxx-xxxxxxx, xxx-xxxxxxx xxxxxxxxx. xxxx xxxxxxxx x xxxxxxxxxxx xxxxxxxxxx xxxxxx, xxxxxxxx xxx xxxxx xx xxxxxx xxx xxxxxxxxxxx xx xxxxxxxxxxxx.<br>\
			<br>\
			xxxxx xxx xxxxxxxx xxxxx xx xxxxxxxxxxxx xxxxxx xxxxx xxxxxxxxxxxx, xxxx xx xxxxxxxxxxx xxxxxxxxxxxx xx xxxxxxxxx, xxxxx xxxxxxxxxxxx xx xxxx, xxxx, xxx xxxxx, xxxxxxxxxx xxxxxxxxxxxx xx xxxxxxxx, xxx xxxxxxxxx xxxxxxxxxxxx. xx-xxxxxxxx xxxx xxx-xxxxx xxxxxxx xxxxx xx xxxxx xxxx xxxxxxxxx xxxxxxxxxxxxx, xxxxx xxxxxxxxxxxx, xxx xxxxxxxxxxx xxxxxxxxx. xx xxxxxxxxxxx, xx xxxx xx xx xxxxxx xxxxxxx xxxxxxx xxx xxxxxx xxxxxxxxxx xxx-xxxxx xxxxxxxxxxxx, xxxxxxxxx, xxx xxxxxx. xx xxxx xx xxxxxxx, xxxxx, xxxxxxx, xxxxx xxx xxxxxx, xxx xxxxxx xxxx xxxxx. xxxxxxx xxxxxxxxxxx xxxxxxx xxx xx xxx xxxx xx xxxx xxxxxxxxxx xx xxxxxxxxxxxx.<br>\
			<br>\
			xxxx xxxxxxxxx xxx xxxxxxx xx xxxxxxxx xx xxxxxxx xxxx xx xxxxx xxxxxxxx xxx xxxxxxxxxxx x xxxxx xxxxxxxxx xx xxxxxxxxx, xx xxxx xxxxxxxx, xxxxxx xx xxxxxx xxxx xxxxx xxx xxxxxxxxxxxxxxxxx xxxxxxxx xxxxxxxxx xxxxxx xxxxxxx xxx xxxxxxx. xxx xxxx xxxx xxxxxxxxxxxx xx xxxxxxx xxxxxxxxxx xx x xxxxxxx xxxxx xxx xxxxxxxxxx x xxxxxxxxx xxxx xxxxxxx xxxxxx xxx xxxxxxxxxxxx xxxxxxx xxxxxx xxx xxxxxx. xxxxxxxxx x xxxxxxxxxxx xxxx xx-xxxxxxx xxxxxx, xxx xxxxxxxx xxxx xx xxxxx xxx xxxxxxxx xx xxxxxxxxxx xxx xxxxxxxxxxx xxxxxxx xxxxx xxxxxxxx, xxxxxxx, xxxxxxx, xxx xxx xxxxx xx xxxxx xxxxxx. xxxxxxx xxxxxxxxx xxx xxxxxxxxx xx xxxxxxxx, xxxxxxxxxxx, xxxxxxxxxxxxx, xxx xxxxxxxxxxx xxxxxxx xxxxxx xxx xxxxx xxxxxxxxxxxxx, xx xxxxx xx xxxxxxx xxx xxxxxxxxx xxx xxxxxxxxx xxx xxxxxxxxxxxxx xxxxxxx xxxxxx xxx xxx xxxxxx xxxxxx.',
			"xx xxxxxx xxxxxxx xx xxx xxxxxxxxxxxx xx xxxxxxxxxx, xxx, xxx xxxxxx, xxxxxxx xxx xxxxxxxx xxx xxxxx xxxxxxxxxx xx xxx xxxxx. xxx xxxxx xxxxxxx xxxxxxx xxxxxx, xxxxxxxxxxxxx xxxxxxxxx xxxxxxx xxxxxxx, xxxxxxxxx xxxxxxxxxx, xxx xxxxxxxxxxx xxxxxxx. xxx xxxxxxxx xxxxx xxxxxxxxx xxxxxxxxx, xxxxxx, xxxxxxx xxxxxxx, xxxxxxxxx xxxxxxxxxxx, xxxxxxxxxx, xxxxxxxxxxx, xxx xxxxxxxxxxxxx. xxx xxxxxxxx xxxxxxxx xxxxxxxxxxx xxxxxxxxx xxx xxxxxx xx xxx, xxxxxx, xxxxxxxxxx, xxx xxxxxxx, xxxxxxx xxxx xxxxxxxxxxxx xx-xxxxxxxx xx xxxxxxxxx xxxxx xxxx xxxxxxxxxxxxx, xxx xxxx xxx-xxxxxxx xx xxxxxxxxx xxxxxxx xxxxxxxxxxxx. xx x xxxxxx-xxxxx xxxxxxxxx xxxxxxxxx, xx xxxxxx xxxxxxxxx xxxxxxx xx xxx xxxxxx xx xxxxxx xxx xxxxxxxx xxxxxxxxxxxx xx xxx xxxxxxxxxx xx xxxxx xx xxxxxx. xxx xx xxxx x xxxxxx xx xxx xxx, xxx xxx xxxxxx'x xxxxxxxxx xxxxxxx xxx xxxxxxxx xxxxxxxxxx xx xxx xxxx. xxxxxxxxxxxx, xxx xxxxxx xx x xxxx xxxxxx xxx xxxxxxxxxxx xxxxxx xxxxxx xxxx xx xxxx, x&xx, xxx xxx xxxxxxxxx xxxxxxxxx.",

			'文文、文文、文文 - 文文文文文文文文文文文文文',
			'文文文',
			'2023文4文8文（文文），x文文文文文文文文文文文文文文文文文文文文“文文、文文、文文：文文文文文文文文文文文文文”，文文文文文文x文文文文文文文文文文文文文，文文文文文文文文文“文文文文文文”文文文文文文文文文。<br>\
			<br>\
			文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文。文文文文文文文文文文文文文文，文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文，文文文文文文文文文文文、文文文文文、文文文文文文文文文文文文文文文文文文文文、文文文文文文文文文。文文文文文文文文文文文文文文文文文文文文文文。文文文文文文文，文文文文文文文文文文文文文文文文文：文文文文文文文文文，文文、文文文文文文文文文文，文文文文文文文，文文文文文文文。文文文文文文文文文文文文文文文文文文文文文文文文文文，文文文文文文文文，文文文文文。文文文文文文文文，文文文文文文文，文文文文文文文文文文文文文文文文文文文文文文文文，文文文文文文文文文、文文、文文，文文文文文文文文文文文文。文文文文文文文文文文文文文文文，文文文文文文文文文文文文文文文文。文文文文文文文文，文文文文文文文文，文文文文文文文文文文文，文文文文文文文，文文文文文文文文文文文文文文文文文文文文文文、文文文文文文文文文，文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文。文文文文文文文文文文文文，文文文文文文文文文文文文文文文文文文、文文、文文文文文文文文文文文文文文，文文文文文文文文文文文文文文文文文文文文文文、文文、文文、文文文文文， 文文文文文文文文文文文文文文文文文文。',
			'文文文文文文文文，文文文文文文文文文，文文文文文文文文文文文文。文文文文文文文文文文、文文文文文文文文文、文文文文文文文文文文文文文。文文文文文文文文文文文文、文文文、文文文文、文文文文文、文文文、文文文文文。文文文文文文文文文文文文文、文文、文文文文文文文文：文文文文文文文文文文文文文文文文，文文文文文文文文文文文文文。文文文文文文文文文，文文文文文文文文文文文文文文文文文文文文文文文文文文文文；文文文文文文文文文文文xxx xxx 文文文文文文文文文，文文文xxxx、x&xx、文文文文文文文文文文文文文文文文文。<br>\
			<br>\
			文文文文文xxx 文文文，文文文文文文文文文文文文文文文文文文文文文文文文文文文。文文文文文文文文文文文文文文文文文文，文文文文文文文文文30 xxxxx 30、文文文文30 文文文文文、文文文文文文文文文xx 文文文、xx 文文文文、文文文文文文文文、xxxxxx 文、xxxx xxxxxxx 文文文文文文文文、xxxx77文文文、xxxx、xxxxxxx xxxxx 文、xxxxx 文、x’文文文文文文、xxxxxxxx xxxxxxxxxx 文文、xxxx 文文文。文文文文文文文文文文文文文文、文文文文文文文文文文、文文文文文文、文文文文文、文文文文文、文文文文文、文文文文文文文文、文文xxxx、文文文文文文文、文文文文文文文、xxxx 文文文文文文文文文。文文文文文文文文文文文xxxxxxxx、xxx、xxxx xxx、xxxxxx 文文文文文文文文文文。文文文文文文文文文文、文文、文文文文、xxxxxxxxxx、xxxxx、xxxxx xxxxxx、xxxx xxxxxxx、文文文文文文、xxx xxxxxxxx、文文文文文、文文文文、文文、xxxxxxxx、xx 文文文文文文、xxxxxxxxxxx xxxxx、文文文文文文文文文文文文文文文文文。',

			'https://xvirtual.world/UetVZBg/crazy-playful-area',
				['7Workshop/img1.jpg','7Workshop/WechatIMG23.png','7Workshop/WechatIMG24.png','7Workshop/ScreenS_015.jpg','7Workshop/ScreenS_006.jpg']
			],
			['xxxxxxxx',
			'img/Events/8Workshop/img1.png',
			'2023.04.27 / 20:00-21:30',

			'xxxxxxxxxxxxxxxx xxxxxxx: xx xxx xxxxxxxx xx xxxxxxxx, xxxxxxxx xxx xxxxxxx',
			'xxxx xxxxxxx',
			`On April 27th, 8:00-9:30 PM Beijing Time, artist Zhou Yinglin will be hosting the 'X Virtual Workshop: Verbuchstabieren Trilogy: On the Dilemmas of Language, Identity and Culture' on the X Virtual platform.<br>/
			<br>/
			In the computer-generated world of "Mondo," renowned cultural landmarks such as the Eiffel Tower, the Taj Mahal, and other iconic sites from around the world form the original natural landscape of this virtual world. The "Citivanos" (world citizens) work together and communicate in a global language to rebuild the Tower of Babel. The main character, "Yinglin," reluctantly signs a social contract in order to have the opportunity to live in "Mondo," agreeing to abide by five terms outlined in the contract. However, as "Yinglin" enters "Mondo," she begins to confront unknown divisions and struggles...<br>/
			<br>/
			‘Verbuchstabieren’ is a three-part video work created by artist Zhou Yinglin based on her research into the cultural and identity dilemmas of cross-cultural immigrants in recent years. The trilogy consists of ‘One World, One Dream’ (2018), ‘Verbuchstabieren’ (2019) and ‘Unknown Connection Line’ (2020). 'Verbuchstabieren' is a word created by the artist based on German word formation. It implies the influence of alphabetic language on the structure of Asian languages, and thus suggesting the cultural colonialism behind the language. In the trilogy, the artist creates a fictional world ‘Mondo’ to explore issues ranging from language, to identity and cultural identity, to cross-cultural immigrant integration through the main character ‘Yinglin’.<br>/
			<br>/
			This workshop will present the core concept of the trilogy, the basic setting and the details of the works. The artist will share her long-term research and practice on cultural identity. Participants will also be invited to interact with the space and engage in thematic discussions with the artist while traveling through the fictional world of "Mondo."`,
			`Zhou Yinglin is a new media artist working with temporal-based media and digital virtual technologies. She is currently based in Berlin/Linz. She holds an outstanding master's degree from Berlin University of the Arts and is pursuing a doctoral degree at the University of Art and Design Linz. Zhou Yinglin's recent artistic practice revolves around issues of identity, digital virtual space, and cultural equity. Her work addresses topics such as identity formation, cultural displacement, and the fissures of post-cultural colonial identities. She explores the construction and virtuality of digital realms, image expression in virtual spaces, and the dynamics of power within those spaces. Additionally, she proposes a futurist perspective on cultural equity. Zhou Yinglin's works possess a research-oriented nature, characterized by ironic humour and sharp political attributes. Her projects demonstrate extensive reflection and analysis.<br>\
			<br>\
			Zhou Yinglin has received recognition for her work, including being shortlisted for "The Lumen Prize" and winning the Today Art Museum X InArt "Future Art" Artist Award (First Prize). She has also been shortlisted for the "Lentos Freunde Art Award" and received the third prize in the "Dystopia" iART Youth Art Program, as well as being named a rising artist in the "SAP Art Award." Zhou Yinglin's works have been exhibited at prominent domestic and international art institutions and exhibitions, including the Ars Electronica Center, Hong Kong Basel Art Fair Projection Space, Ullens Center for Contemporary Art, A4 Art Museum, Today Art Museum, the 13th National Art Exhibition, and OSTRALE Biennale O21.`,

			'xxxxxxxxxxxxxxxx 文文文: 文文文文、文文、 文文文文文',
			'文文文',
			'2023 文 4 文 27 文(文文)，x 文文文文文文文文文文文文文文 文文文文文文“xxxxxxxxxxxxxxxx文文：文文文文、文文、 文文文文文”。<br>\
			<br>\
			文“xxxxx”—— 文文文文文文文文文文文，文文文文文、文文 文文文文文文文文文文文文文文文文文文文文文文文文文文文 文文文文文。“xxxxxxxxx”(文文文文)文文文文，文文文文 文文文文文，文文文文文文文文。文文文“xxxxxxx”文文文文文“xxxxx”文文文文文文，文文文文文文文文文文文文文，文文文文文文文文文文文文文。文文“xxxxxxx”文文文文“xxxxx”文文，文文文文文文文文文文文文文......“xxxxxxxxxxxxxxxx”文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文文。文文文文文文文文文文，文文文“xxx xxxxx, xxx xxxxx”(2018) 、“xxxxxxxxxxxxxxxx”(2019)文“xxxxxxx xxxxxxxxxx xxxx”(2020)。xxxxxxxxxxxxxxxx 文文文文文文文文文文文文文文文文文文文，文文文文文文文文文文文文文文文文文文文文文文文文文文文，文文文文文文文文文文文文文文文文文。文文文文文，文文文文文文文文文文“xxxxx”，文文文文文“xxxxxxx”文文文，文文文文文文文文文文文文文文文文文，文文文文文文文文文文文文文文。<br>\
			<br>\
			文文文文文文文文文文文文文 x xxxxxxx 文文文文文文文文文文文文文文。文文文文文文文文，文文文文文文文文、文文文文、文文文文文文文文文文文文文文文文文文。文文文文文文文文文 文文文文文文文文，文文文文文文文文文文文文文文文文文文文 文。文文文文文文文文文文文文“xxxxx”文文文，文文文文文文文文文文文文文文文文，文文文文文文文文文文文文文文文文，文文文文文文文。',
			'文文文文文文文文文文文文文文文文文文文文文文文文文文，文文文文文文文文文文/文文。文文文文文文文文文文文文文文文文文文文文文，文文文文文文文文文文文文文文。文文文文文文文文文文文文、文文文文文文文文文文文文文文文，文文文文文文、文文文文文文、文文文文文文文文文文文文;文文文文文文文文文文文文文文文文文、文文文文文文文文文文文文文文文，文文文文文文文文文文文文文文文文文文文文文。文文文文文文文文文文文文文文文文文文文文文文文文文文文文文，文文文文文文文文文文文文文。文文文文文“xxx xxxxx xxxxx 文文文文文文文文文”xxxxxxxxx文文文文文; 文文文文文 x xxxxx“文文文文”文文文文文(文文文);“xxxxxx xxxxxxx文文文”xxxxxxxxx 文文文文文;“文文文”xxxx文文文文文文文文文;“xxx 文文文文”文文文文文;“文文文文文文文文文文文文文”文文文文文文。文文文文文文文文文文文文文文文文文文文文文文文文文，文文文文文文文文文文文、文文文文文文文文文文文文文文、文文文文文文文文文、x4 文文文、文文文文文文文、文文文文文文文文、xxxxxxx文文文x21文。',

			'https://xvirtual.world/sKb3LcC/pleasant-cultured-volume?fov=50']
		]
		var cube_counter_exhibitions = Array(exhibitions )
		var cube_counter_events = Array(events)
		var cube_counter_research = Array(research)
		var cube_counter_special = Array(special)
		var about_db = ['\
			<div class="content">\
			<br>\
			<video controls autoplay muted>\
				<source src="img/about.mp4" type="video/mp4">\
			</video>\
			</div>\
			<div class="upper_info">\
			<br>\
				<div class="category_title bigboldfont">What do we do</div>\
			</div>\
			<div class="content">\
				<div class="content_innercontent">\
				Launched by X Museum in 2019, X Virtual is a digital art platform that fuels new artistic 3D spaces in the virtual worlds. X Virtual provides a digital infrastructure - an interoperable network of virtual worlds that stimulates new artistic productions and critical practices. We commission artists to create audio-visual space on X Virtual’s online platform and host online and offline exhibitions and virtual gatherings, including workshops, conferences, and talks.<br>\
				<br>\
				As a museum affiliate initiative dedicated to cultivating virtual worlds, X Virtual aims to foster new thoughts, discourses, and interdisciplinary practices in the light of emerging Web 3.0-centred technologies, including XR, AI, and game engines. Through working with artists, technologists, architects, game designers, filmmakers, and other digital creators from diverse backgrounds, we are devoted to building an accessible digital art platform to the fast-evolving Web 3.0 virtual worlds, for everyone.<br>\
				<br>\
				The Virtual World<br>\
				<br>\
				X Virtual has developed a user-friendly platform based on Mozilla Hubs, an open-source WebXR framework that is easy to navigate and does not require any special digital skills to access. The platform is interoperable and accessible to a wide range of devices, including desktops, laptops, smartphones, tablets, and VR headsets which helps engage audiences in any circumstances conveniently.\
				</div>\
			</div>'
			,


			'<div class="content">\
			<br>\
			<video controls autoplay muted>\
				<source src="img/about.mp4" type="video/mp4">\
			</video>\
			</div>\
			<div class="upper_info">\
			<br>\
				<div class="category_title bigboldfont">关于X 虚拟</div>\
			</div>\
			<div class="content">\
				<div class="content_innercontent">\
					<br>\
				什么是X虚拟<br>\
				X虚拟是一个于2019年由北京X美术馆发起的数字艺术平台。该项目旨在虚拟世界中催发新的3D艺术空间。X虚拟提供一个数字基础设施——一个支持协同工作、可互操作的虚拟世界网络，以此激发新的艺术生产和批判性实践。我们委任艺术家在X虚拟的线上平台中创建视听空间，并举办线上线下展览以及包括工作坊、会议和讲座在内的虚拟聚会。<br>\
				<br>\
				作为一个致力于孵化虚拟世界的美术馆分支机构，X虚拟置其身于以Web 3.0为中心的多种技术语境之中，包括XR、AI和游戏引擎，进而衍生新的思想、话语和跨学科实践。 我们意在迅速演变的Web 3.0虚拟世界中为每一个人建立一个兼容多种访问模式的数字艺术平台。<br>\
				沉浸式虚拟世界<br>\
				基于Mozilla Hubs的开源WebXR框架，虚拟开发了一个便于浏览的虚拟艺术平台，不需要任何特殊的数字技能即可访问。平台具有互操作性，让观众可以使用包括台式机、笔记本电脑、智能手机、平板电脑和VR头盔等各种设备在任何情况下访问。\
				</div>\
			</div>'
		]
		var support_db=['\
			<div class="content">\
				<br>\
				<img class="content_innerthumb" src="img/Human_Monster_1.jpg">\
				<br>\
				<br>\
			</div>\
			<div class="upper_info">\
				<div class="category_title bigboldfont">Individual Support</div>\
			</div>\
			<div class="content">\
				<div class="content_innercontent">\
					As X Virtual continues to grow, we are seeking passionate, dedicated individuals to join our Board of Trustees and Advisory Panel, and contribute their diverse experiences to our journey.<br>\
					<br>\
					<div class="smalltitlefont">Board of Trustees</div>\
					<br>\
					Our Board of Trustees plays an integral role in shaping the future of X Virtual, providing strategic guidance, financial accountability, and advocacy for our mission to shape a thriving ecosystem of artistic virtual spaces and foster innovation within the virtual worlds.<br>\
					<br>\
					<div class="smalltitlefont">Advisory Panel</div>\
					<br>\
					The Advisory Panel comprises experts from various fields, including art, technology, business, and academia, and is instrumental in ensuring that X Virtual remains agile and responsive to the rapidly evolving digital art landscape. By connecting us with influential networks, partners, and resources, the Advisory Board helps X Virtual identify and seize new opportunities for growth and collaboration.<br>\
					<br>\
				</div>\
			</div>\
			<div class="upper_info">\
				<div class="category_title bigboldfont">Corporate Partners</div>\
			</div>\
			<div class="content">\
				<div class="content_innercontent">\
					Our corporate partners play a crucial role in driving our vision forward by providing valuable resources, expertise, and support, which enables us to push the boundaries of artistic expression and technological innovation. Through our Corporate Partners Program, we offer a variety of opportunities for engagement, including exclusive events, collaborative projects, and tailored sponsorship packages. Our partners benefit from increased visibility within the digital art world, access to a global audience of art enthusiasts, and the opportunity to be part of groundbreaking initiatives that shape the future of virtual reality and artistic expression.\
				</div>\
			</div>',
			'<div class="content">\
				<br>\
				<img class="content_innerthumb" src="img/Human_Monster_1.jpg">\
				<br>\
				<br>\
			</div>\
			<div class="upper_info">\
				<div class="category_title bigboldfont">个人支持</div>\
			</div>\
			<div class="content">\
				<div class="content_innercontent">\
					<br>\
					随着X Virtual的不断发展，我们正在寻找充满激情和敬业的个人加入我们的董事会和咨询委员会，并为我们的发展贡献多样化的经验。<br>\
					<br>\
					<div class="smalltitlefont">董事会</div>\
					<br>\
					我们的董事会在塑造X Virtual的未来方面发挥着重要作用，提供战略指导、财务责任和对我们的使命的支持，帮助我们建立一个充满活力的艺术虚拟空间生态系统，并促进虚拟世界中的创新。<br>\
					<br>\
					<div class="smalltitlefont">咨询委员会</div>\
					<br>\
					咨询委员会由来自艺术、技术、商业和学术等各个领域的专家组成，在确保X Virtual敏锐地对快速发展的数字艺术图景作出回应方面起着重要作用。通过与具有影响力的网络、合作伙伴和资源的联系，咨询委员会帮助X Virtual发现并抓住发展和合作的新机遇。<br>\
					<br>\
				</div>\
			</div>\
			<div class="upper_info">\
				<div class="category_title bigboldfont">企业合作伙伴</div>\
			</div>\
			<div class="content">\
				<div class="content_innercontent">\
			我们的企业合作伙伴通过提供宝贵的资源、专业知识和支持，对推动我们的愿景向前发展起着至关重要的作用，这使我们能够突破艺术表达和技术创新的界限。通过我们的企业合作伙伴计划，我们为合作提供了各种机会，包括独家活动、合作项目和定制赞助方案。我们的合作伙伴将在数字艺术界增加曝光度，接触全球的艺术爱好者群体，并有机会参与到塑造虚拟现实和艺术表达未来的开创性举措中。\
				</div>\
			</div>'
		]
		var grid
	if(!isMobile){
	append_1(1,2,6)
	append_1(2,2,5)
	}else{
	append_1(1,2,4)
	append_1(2,2,2)
	}
	//.append_4()
	append_5()
	for (var i = aboutsupport_array.length - 1; i >= 0; i--) {
		aboutsupport_array[i] = Math.floor(Math.random()*w)
	}
	var indexcounter = 0
	function timer(){
		// if(counter<30){
		if(!hovered){
			counter = counter+1
			}else{
			counter = counter+0
			}
			// console.log(cou)
			setTimeout(function(){
				timer()
			},10)
		// }
				animate_1('exhibitions',-1,-1)
				animate_1('events',1,-1)
				animate_1('research',1,1)
				animate_1('special',-1,1)
		if(counter/100 == 0){
			counter/100%5
		}
		$('.block_0_clone').css({'top':-1*(Math.floor(h/3)/1520*counter)%Math.floor(h/3)+'px'})
		// $('.block_0_original').css({'top':((Math.floor(h/3)/1520*counter)%Math.floor(h/3)-Math.floor(h/3))/4+'px'})
		if(counter%1520 == 0){
			animation_counter_2++
						var random_color = Math.floor(Math.random()*10)
			$('.block_0').append('<div class="block_1 block mother_block_'+(animation_counter_2)+' route block_divide_'+(animation_counter_2)+' block_row">\
									<div class="side unactivated side_color_'+random_color+' side_type_1"></div>\
									<div class="side unactivated side_color_'+random_color+' side_type_2"></div>\
									<div class="side unactivated side_color_'+random_color+' side_type_3"></div>\
									</div>')

			$('.mother_block_'+(animation_counter_2-4)).remove()
			animation_counter_1 = [4,1]
			$('.mother_block_'+(animation_counter_2)).css({'z-index':animation_counter_2+100})
			// $('.block_0_clone').find('.mother_block_'+(animation_counter_2)).css({'z-index':1000-animation_counter_2})
		}
		if(counter%100 == 0){
			append_3()
		}
		if(counter%100 == 20){
			for (var i = animation_counter_2; i >= 0; i--) {

			}
			if(animation_counter_1[0]<=7){append_2(animation_counter_2-2,animation_counter_1[0],5)}
			if(animation_counter_1[1]<=4){append_2(animation_counter_2-1,animation_counter_1[1],4)}
		}
	}
	function animate_1(cat,a,b){
		if(!clicked){
			$('.support_block').each(function(index){
				$(this).find('.block_text').css({'transform':'translate('+((counter/2)%(w+0.2*h)-0.2*h+aboutsupport_array[index])+'px)'})
			})
			$('.about_block').each(function(index){
				$(this).find('.block_text').css({'transform':'translate('+((((counter/2)%(w+0.2*h)-0.2*h+aboutsupport_array[index+6])))+'px)'})
			})
			$('.contact_block').each(function(index){
				$(this).find('.block_text').css({'transform':'translate('+((counter/2)%(w+0.2*h)-0.2*h+aboutsupport_array[index])+'px)'})
			})
			$('.museum_block').each(function(index){
				$(this).find('.block_text').css({'transform':'translate('+((((counter/2)%(w+0.2*h)-0.2*h+aboutsupport_array[index+6])))+'px)'})
			})
			$(this).css({'margin-top':'0px'})
				$('.'+cat+'_cube').each(function(index){
					if(cat === 'exhibitions'){scale_val = 1.25}
					if(cat === 'events'){scale_val = 0.85}
					if(cat === 'research'){scale_val = 1.25}
					if(cat === 'special'){scale_val = 0.85}
						if(((eval('cube_counter_'+cat)[index]+counter)%1520)<(1520/2)){
							var value = 1520/2-(((eval('cube_counter_'+cat)[index]+counter)%1520))
							//if(index == 0){console.log(value)}
							$(this).css({'margin-top':'0px'})
							$(this).css({'transform':'translate('+(a*value)+'px, '+(b*value*0.49)+'px) scale('+scale_val+')'})
						}else{
							var value = -1*(((eval('cube_counter_'+cat)[index]+counter)%1520)-(1520/2))
							
							$(this).css({'margin-top':(value)+'px'})
							$(this).css({'transform':'translate(0px, 0px) scale('+scale_val+')'})
						}
				})
			}
	}
	setTimeout(function(){
		append_2(2,animation_counter_1[0],7)
		append_2(3,animation_counter_1[1],4)
		timer()
	},1000)
	function append_1(num,sub_counter,sub_max){
		if(sub_counter<=sub_max){
			$('.block_divide_'+num).each(function(){
				var random = Math.floor(Math.random()*3)
				if(random==0){
					$(this).removeClass('block_divide_'+num)
					$(this).append('<div class="block_'+sub_counter+' block block_divide block_divide_'+num+' block_col"></div>\
									<div class="block_'+sub_counter+' block block_divide block_divide_'+num+' block_row"></div>\
									<div class="block_'+sub_counter+' block block_row"></div>')
				}else if(random == 1){
					$(this).removeClass('block_divide_'+num)
					$(this).append('<div class="block_'+sub_counter+' block block_divide block_divide_'+num+' block_row"></div>\
									<div class="block_'+sub_counter+' block block_row"></div>\
									<div class="block_'+sub_counter+' block block_divide block_divide_'+num+' block_col"></div>')
				}else{
					$(this).removeClass('block_divide_'+num)
					$(this).append('<div class="block_'+sub_counter+' block block_row"></div>\
									<div class="block_'+sub_counter+' block block_divide block_divide_'+num+' block_row"></div>\
									<div class="block_'+sub_counter+' block block_divide block_divide_'+num+' block_col"></div>')
				}
			})
			sub_counter++
			append_1(num,sub_counter,sub_max)
		}else{
			if(!finished){
				finished = true
			}else{

				$('.block_0').clone().removeClass('block_0_original').addClass('block_0_clone').appendTo('.wrapper')

				$('.block_0_original').find('.block').each(function(index){
					var random = Math.round(Math.random()*2)
					if(Math.round(Math.random()) == 0){
						if($('.block_0_original').find('.block').eq(index).children().length == 0){
							$('.block_0_original').find('.block').eq(index).addClass('block_border')
							var random = Math.floor(Math.random()*2)
							var random_color = Math.floor(Math.random()*10)
							if(random>0){
								$('.block_0_original').find('.block').eq(index).addClass('route').append('\
									<div class="side side_color_'+random_color+' side_type_1"></div>\
									<div class="side side_color_'+random_color+' side_type_2"></div>\
									<div class="side side_color_'+random_color+' side_type_3"></div>')
							}else{
								$('.block_0_original').find('.block').eq(index).addClass('route').append('\
									<div class="side side_color_'+random_color+' side_type_2"></div>\
									<div class="side side_color_'+random_color+' side_type_1"></div>\
									<div class="side side_color_'+random_color+' side_type_3"></div>')
							}
							console.log('******')
										if($('.block_text').length<50){
							var random = Math.floor(Math.random()*6)+1
							if(random==1){ $('.block_0_original').find('.block').eq(index).children('div').eq(0).append('<div class="block_text block_text_research"><div class="circle circle_1"></div><div class="circle circle_2"></div><div class="circle circle_3"></div><div class="circle circle_4"></div><span class="en_lang">research</span><span class="zh_lang">研究</span></div>') }
							if(random==2){ $('.block_0_original').find('.block').eq(index).children('div').eq(0).append('<div class="block_text block_text_support"><div class="circle circle_1"></div><div class="circle circle_2"></div><div class="circle circle_3"></div><div class="circle circle_4"></div><span class="en_lang">Support</span><span class="zh_lang">支持我们</span></div>') }
							if(random==3){ $('.block_0_original').find('.block').eq(index).children('div').eq(0).append('<div class="block_text block_text_exhibitions"><div class="circle circle_1"></div><div class="circle circle_2"></div><div class="circle circle_3"></div><div class="circle circle_4"></div><span class="en_lang">exhibitions</span><span class="zh_lang">展览</span></div>') }
							if(random==4){ $('.block_0_original').find('.block').eq(index).children('div').eq(0).append('<div class="block_text block_text_about"><div class="circle circle_1"></div><div class="circle circle_2"></div><div class="circle circle_3"></div><div class="circle circle_4"></div><span class="en_lang">About</span><span class="zh_lang">关于</span></div>') }
							if(random==5){ $('.block_0_original').find('.block').eq(index).children('div').eq(0).append('<div class="block_text block_text_events"><div class="circle circle_1"></div><div class="circle circle_2"></div><div class="circle circle_3"></div><div class="circle circle_4"></div><span class="en_lang">events</span><span class="zh_lang">活动</span></div>') }
							if(random==6){ $('.block_0_original').find('.block').eq(index).children('div').eq(0).append('<div class="block_text block_text_special"><div class="circle circle_1"></div><div class="circle circle_2"></div><div class="circle circle_3"></div><div class="circle circle_4"></div><span class="en_lang">special projects</span><span class="zh_lang">特别项目</span></div>') }
								btn_click()
						}
						}
					}else{
						if($('.block_0_clone').find('.block').eq(index).children().length == 0){
							$('.block_0_clone').find('.block').eq(index).addClass('block_border')
							var random = Math.floor(Math.random()*2)
							var random_color = Math.floor(Math.random()*10)
							if(random>0){
								$('.block_0_clone').find('.block').eq(index).append('<div class="side side_color_'+random_color+' side_type_1"></div>\
									<div class="side side_color_'+random_color+' side_type_2"></div>\
									<div class="side side_color_'+random_color+' side_type_3"></div>')
							}else{
								$('.block_0_clone').find('.block').eq(index).append('<div class="side side_color_'+random_color+' side_type_2"></div>\
									<div class="side side_color_'+random_color+' side_type_1"></div>\
									<div class="side side_color_'+random_color+' side_type_3"></div>')
							}
							var random = Math.floor(Math.random()*6)+1
										if($('.block_text').length<50){
							if(random==1){ $('.block_0_clone').find('.block').eq(index).children('div').eq(0).append('<div class="block_text block_text_research"><div class="circle circle_1"></div><div class="circle circle_2"></div><div class="circle circle_3"></div><div class="circle circle_4"></div><span class="en_lang">research</span><span class="zh_lang">研究</span></div>') }
							if(random==2){ $('.block_0_clone').find('.block').eq(index).children('div').eq(0).append('<div class="block_text block_text_support"><div class="circle circle_1"></div><div class="circle circle_2"></div><div class="circle circle_3"></div><div class="circle circle_4"></div><span class="en_lang">Support</span><span class="zh_lang">支持我们</span></div>') }
							if(random==3){ $('.block_0_clone').find('.block').eq(index).children('div').eq(0).append('<div class="block_text block_text_exhibitions"><div class="circle circle_1"></div><div class="circle circle_2"></div><div class="circle circle_3"></div><div class="circle circle_4"></div><span class="en_lang">exhibitions</span><span class="zh_lang">展览</span></div>') }
							if(random==4){ $('.block_0_clone').find('.block').eq(index).children('div').eq(0).append('<div class="block_text block_text_about"><div class="circle circle_1"></div><div class="circle circle_2"></div><div class="circle circle_3"></div><div class="circle circle_4"></div><span class="en_lang">About</span><span class="zh_lang">关于</span></div>') }
							if(random==5){ $('.block_0_clone').find('.block').eq(index).children('div').eq(0).append('<div class="block_text block_text_events"><div class="circle circle_1"></div><div class="circle circle_2"></div><div class="circle circle_3"></div><div class="circle circle_4"></div><span class="en_lang">events</span><span class="zh_lang">活动</span></div>') }
							if(random==6){ $('.block_0_clone').find('.block').eq(index).children('div').eq(0).append('<div class="block_text block_text_special"><div class="circle circle_1"></div><div class="circle circle_2"></div><div class="circle circle_3"></div><div class="circle circle_4"></div><span class="en_lang">special projects</span><span class="zh_lang">特别项目</span></div>')}
								btn_click()
						}
						}
					}
						
				})

			}
		}
	}
	function append_4(){

		dia_unit= 40
		dia_gap = 2
		$('.dia_wrap_wrap').css({'height':dia_unit*$('.dia_wrap_wrap').find('.dia_wrap').length+'px'})
		$('.dia_wrap_wrap').css({'width':dia_unit*1+'px'})
		$('.dia_wrap').css({'width':dia_unit*1+'px'})
		$('.dia_wrap').css({'height':dia_unit+'px'})
		$('.dia').css({'width':dia_unit*1+'px'})
		$('.dia').css({'height':dia_unit+'px'})
		$('.dia_wrap_wrap').each(function(){
			$(this).find('.dia_wrap').each(function(index){
			$(this).css({'top':dia_unit*index+dia_gap*index+'px'})
			// $(this).css({'left':dia_unit*index+dia_gap*index+'px'})
		})
		})
	}
	function append_5(){

		var image_counter = 0
		for (var i = exhibitions_array.length-1; i >= 0; i--) {
			append_6('exhibitions',i,exhibitions_array)
		}
		for (var i = events_array.length - 1; i >= 0; i--) {
			append_6('events',i,events_array)
		}
		for (var i = research_array.length-1; i >= 0; i--) {
			append_6('research',i,research_array)
		}
		for (var i = special_array.length-1; i >= 0; i--) {
			append_6('special',i,special_array)
		}
	}  

   	window.addEventListener( 'resize', onWindowResize, false );
   
   function onWindowResize() {
   	style_cube()
   }
   
	function append_6(cat,i,cat_array){
			var random_color = Math.floor(Math.random()*10)
		image_counter++
		if(lang=='zh'){
			$('.cube_wrap').append('\
				<div class="cube '+cat+'_cube cube_'+i+'">\
				<div class="side side_color_'+random_color+' side_type_4"><div class="thumb" style="background-image:url('+(cat_array[i][1])+')"></div><div class="title">'+cat_array[i][7]+'\
				<div class="title_bot">'+cat_array[i][8]+'<br>'+cat_array[i][2]+'</div></div></div>\
				<div class="side side_color_'+random_color+' side_type_5"></div>\
				<div class="side side_color_'+random_color+' side_type_6"></div>\
				</div> ')
			if(cat === 'exhibitions'){
				$('.cube_'+i+' .title').append('<div class="subcat">'+(cat_array[i][0])+'</div>')
			}
		}else{
			$('.cube_wrap').append('\
				<div class="cube '+cat+'_cube cube_'+i+'">\
				<div class="side side_color_'+random_color+' side_type_4"><div class="thumb" style="background-image:url('+(cat_array[i][1])+')"></div><div class="title">'+cat_array[i][3]+'\
				<div class="title_bot">'+cat_array[i][4]+'<br>'+cat_array[i][2]+'</div></div></div>\
				<div class="side side_color_'+random_color+' side_type_5"></div>\
				<div class="side side_color_'+random_color+' side_type_6"></div>\
				</div> ')
			if(cat === 'exhibitions'){
				$('.cube_'+i+' .title').append('<div class="subcat">'+(cat_array[i][0])+'</div>')
			}
		}
				$('.cube').css({'width':cube_unit*1+'px'})
				$('.cube').css({'height':cube_unit*1+'px'})
				var array = eval('cube_counter_'+cat)
			array[i] = Math.floor(Math.random()*1520)
			if($('.cube').length == (exhibitions + events + research + special)){
				style_cube()
			}
			style_cube()
			btn_click()
	}
	function style_cube(){
		grid = [Math.floor(window.innerWidth/(window.innerHeight*0.325)),4]
		if(window.innerHeight<900){
		grid = [Math.floor(window.innerWidth/(window.innerHeight*0.325)),3]
		}
		if(window.innerHeight<700){
		grid = [Math.floor(window.innerWidth/(window.innerHeight*0.325)),2]
		}
		if(window.innerHeight<500){
		grid = [Math.floor(window.innerWidth/(window.innerHeight*0.325)),1]
		}
		$('.cube_wrap').css({'width':(grid[0]*cube_unit)+'px'})
		$('.cube_wrap').css({'left':(window.innerWidth - grid[0]*cube_unit)/2+'px'})
		$('.cube').each(function(){
			var cat = $(this).attr('class').split('_cube')[0].split('cube ')[1]
			var top_gap = 0
			if(eval(cat) < grid[0]*4){
				top_gap =  (window.innerHeight - (Math.floor(eval(cat)/grid[0])+1)*window.innerHeight*0.25+window.innerHeight*(0.325-0.25))/2-window.innerHeight*(0.325-0.25)
			}
			var i = $(this).attr('class').split('cube_')[1]
			var x = Math.floor((i%grid[0]))
			var y = Math.floor(i/grid[0])
			$(this).css({"left":cube_unit*x+'px'}) 
			$(this).css({"top":(cube_unit*y*0.49*1.33+0.1*window.innerHeight+top_gap)+"px"})
			overflow_resize()
		})
	}
	function overflow_resize(){
		$('.cube').each(function(){
			if($(this).find('.title').outerHeight()+(0.01*window.innerHeight)>$(this).find('.title').parent().outerHeight()){
				$(this).find('.title').addClass('title_size_1')
				if($(this).find('.title').outerHeight()+(0.01*window.innerHeight)>$(this).find('.title').parent().outerHeight()){
					$(this).find('.title').addClass('title_size_2')
					if($(this).find('.title').outerHeight()+(0.01*window.innerHeight)>$(this).find('.title').parent().outerHeight()){
						$(this).find('.title').addClass('title_size_3')
						if($(this).find('.title').outerHeight()+(0.01*window.innerHeight)>$(this).find('.title').parent().outerHeight()){
							$(this).find('.title').addClass('title_size_4')
							if($(this).find('.title').outerHeight()+(0.01*window.innerHeight)>$(this).find('.title').parent().outerHeight()){
								$(this).find('.title').addClass('title_size_5')
							}
						}
					}
				}
			}
		})
	}
	function append_3(){
			$('.unactivated').removeClass('unactivated')
	}
	function append_2(num,sub_counter,sub_max){
			$('.unactivated').removeClass('unactivated')
			if($('.block_0_clone').find('.block_divide_'+num+'.block_'+sub_counter).length==0){
				animation_counter_1[num-animation_counter_2+2]++
				sub_counter++
			}
				var random = Math.floor(Math.random()*3)
				if(random==0){
					$('.block_0_clone').find('.block_divide_'+num+'.block_'+sub_counter).eq(0).empty().removeClass('block_divide_'+num).append('\
									<div class="block_'+(sub_counter+1)+' block unactivated_wrap block_divide block_divide_'+num+' block_col"></div>\
									<div class="block_'+(sub_counter+1)+' block unactivated_wrap block_divide block_divide_'+num+' block_row"></div>\
									<div class="block_'+(sub_counter+1)+' block unactivated_wrap block_row"></div>')
					$('.block_0_original').find('.block_divide_'+num+'.block_'+sub_counter).eq(0).empty().removeClass('block_divide_'+num).append('\
									<div class="block_'+(sub_counter+1)+' block unactivated_wrap block_divide block_divide_'+num+' block_col"></div>\
									<div class="block_'+(sub_counter+1)+' block unactivated_wrap block_divide block_divide_'+num+' block_row"></div>\
									<div class="block_'+(sub_counter+1)+' block unactivated_wrap block_row"></div>')
				}else if(random == 1){
					$('.block_0_clone').find('.block_divide_'+num+'.block_'+sub_counter).eq(0).empty().removeClass('block_divide_'+num).append('\
									<div class="block_'+(sub_counter+1)+' block unactivated_wrap block_divide block_divide_'+num+' block_row"></div>\
									<div class="block_'+(sub_counter+1)+' block unactivated_wrap block_row"></div>\
									<div class="block_'+(sub_counter+1)+' block unactivated_wrap block_divide block_divide_'+num+' block_row"></div>')
					$('.block_0_original').find('.block_divide_'+num+'.block_'+sub_counter).eq(0).empty().removeClass('block_divide_'+num).append('\
									<div class="block_'+(sub_counter+1)+' block unactivated_wrap block_divide block_divide_'+num+' block_row"></div>\
									<div class="block_'+(sub_counter+1)+' block unactivated_wrap block_row"></div>\
									<div class="block_'+(sub_counter+1)+' block unactivated_wrap block_divide block_divide_'+num+' block_col"></div>')
				}else{
					$('.block_0_clone').find('.block_divide_'+num+'.block_'+sub_counter).eq(0).empty().removeClass('block_divide_'+num).append('\
									<div class="block_'+(sub_counter+1)+' block unactivated_wrap block_row"></div>\
									<div class="block_'+(sub_counter+1)+' block unactivated_wrap block_divide block_divide_'+num+' block_row"></div>\
									<div class="block_'+(sub_counter+1)+' block unactivated_wrap block_divide block_divide_'+num+' block_col"></div>')
					$('.block_0_original').find('.block_divide_'+num+'.block_'+sub_counter).eq(0).empty().removeClass('block_divide_'+num).append('\
									<div class="block_'+(sub_counter+1)+' block unactivated_wrap block_row"></div>\
									<div class="block_'+(sub_counter+1)+' block unactivated_wrap block_divide block_divide_'+num+' block_row"></div>\
									<div class="block_'+(sub_counter+1)+' block unactivated_wrap block_divide block_divide_'+num+' block_row"></div>')
				}
				$('.block_0_clone').find('.unactivated_wrap').each(function(index){
						var random = Math.floor(Math.random()*3)
						var random_sub = Math.floor(Math.random()*2)
						var random_color = Math.floor(Math.random()*10)
						var this_w = 0
						if(random >1 && !$(this).hasClass('block_2')){
							this_w = $('.block_0_clone').find('.unactivated_wrap').eq(index).outerWidth()
							$('.block_0_clone').find('.unactivated_wrap').eq(index).append('\
												<div class="side side_color_'+random_color+' unactivated text_'+(random_sub%2)+' side_type_1"></div>\
												<div class="side side_color_'+random_color+' unactivated text_'+((random_sub+1)%2)+' side_type_2"></div>\
												<div class="side side_color_'+random_color+' unactivated text_2 side_type_3"></div>')
							// $('.block_0_original').find('.unactivated_wrap').eq(index).removeClass('unactivated_wrap')
					
						}else{
							this_w = $('.block_0_original').find('.unactivated_wrap').eq(index).outerWidth()
							// console.log($('.block_0_original').find('.unactivated_wrap').eq(index))
							$('.block_0_original').find('.unactivated_wrap').eq(index).append('\
												<div class="side side_color_'+random_color+' unactivated text_'+(random_sub%2)+' side_type_1"></div>\
												<div class="side side_color_'+random_color+' unactivated text_'+((random_sub+1)%2)+' side_type_2"></div>\
												<div class="side side_color_'+random_color+' unactivated text_2 side_type_3"></div>')
							// $('.block_0_clone').find('.unactivated_wrap').eq(index).removeClass('unactivated_wrap')
					
						}
									if( this_w > w/9-50 && this_w <w/9+50 ){
										if($('.block_text').length<50){
																				var random = Math.floor(Math.random()*6)
																					if(random==0){ $('.text_1').append('<div class="block_text block_text_research"><span class="en_lang">research</span><span class="zh_lang">研究</span></div>') }
																					if(random==1){ $('.text_1').append('<div class="block_text block_text_support"><span class="en_lang">Support</span><span class="zh_lang">支持我们</span></div>') }
																					if(random==2){ $('.text_1').append('<div class="block_text block_text_exhibitions"><span class="en_lang">exhibitions</span><span class="zh_lang">展览</span></div>') }
																					if(random==3){ $('.text_1').append('<div class="block_text block_text_about"><span class="en_lang">About</span><span class="zh_lang">关于</span></div>') }
																					if(random==4){ $('.text_1').append('<div class="block_text block_text_events"><span class="en_lang">events</span><span class="zh_lang">活动</span></div>') }
																					if(random==5){ $('.text_1').append('<div class="block_text block_text_special"><span class="en_lang">special projects</span><span class="zh_lang">特别项目</span></div>')}
																						btn_click()
																				}
									}
									if( this_w > w/27-10 && this_w <w/27+10){
										var random = Math.floor(Math.random()*8)
											if(random==0){ 
												$('.text_2').append('<img src="img/logo_v.png">') 
												$('.text_2').addClass('side_logo')
											}
									}
									if( this_w > w/9-10 && this_w <w/3+10){
										var random = Math.floor(Math.random()*2)
											if(random==0){ 
												image_counter++
												//$('.text_0').append('<img class="thumbnail" src="img/thumb_'+(image_counter%10+1)+'.jpg">') 
											}
									}
									$('.text_0').removeClass('text_0')
									$('.text_1').removeClass('text_1')
									$('.text_2').removeClass('text_2')
						if($('.block_0_clone').find('.unactivated_wrap').length-1 == index){
							$('.unactivated_wrap').removeClass('unactivated_wrap')
						}
					// }

				})
				$('.block_'+(sub_counter+1)).css({'z-index':sub_counter+1})
			}

function clip_path(){

	$('.content_wrap').each(function(){
		var value = (($(this).outerHeight()/2*2.048)/$(this).outerWidth())*100
		if($('body').hasClass('exhibitions_frozen')){
			$(this).css({'clip-path':'polygon(-1% -1%, 101% -1%, 101% 101%,'+(value)+'% 101% ,  -1% 50%)'})
		}
		if($('body').hasClass('events_frozen')){
			$(this).css({'clip-path':'polygon(-1% -1%, 101% -1%, 101% 50%, '+(100-value)+'% 101%,  -1% 101%)'})
		}
		if($('body').hasClass('research_frozen')){
			$(this).css({'clip-path':'polygon(-1% -1%, 101% -1%, 101% 101%, '+value+'% 101%, -1% 50%)'})
		}
		if($('body').hasClass('special_frozen')){
			$(this).css({'clip-path':'polygon(-1% -1%, 101% -1%, 101% 50%,'+(100-value)+'% 101% ,  -1% 101%)'})
		}
		if($('body').hasClass('about_frozen')){
		}
		if($('body').hasClass('support_frozen')){
		}

	})
	$('.content_wrap').click(function(){
		popup_click_counter++
		$(this).css({'z-index':1000000+popup_click_counter})
	})
}
function list_view(sel_class){
	clicked = false
$('body').removeClass('support_frozen')
$('body').removeClass('about_frozen')
$('body').removeClass('frozen_exhibitions ')
$('body').removeClass('frozen_events')
$('body').removeClass('frozen_special ')
$('body').removeClass('frozen_research')
console.log('11111')
	$('body').addClass('frozen frozen_'+sel_class)
		$('.nocontents').removeClass('nocontents')
	if(sel_class === 'support'){
			$('body').addClass('support_frozen')
			$('body').removeClass('menuon')
			$('body').addClass('contenton')
			$('body').removeClass('liston')
			$('body').removeClass('listcontenton')
			$(window).scrollTop(0)
			$('body').addClass('popup_open')
			$('body').addClass('liston')
			fill_content('support')
		}
	if(sel_class === 'about'){
			$('body').addClass('about_frozen')
			$('body').removeClass('menuon')
			$('body').addClass('contenton')
			$('body').removeClass('liston')
			$('body').removeClass('listcontenton')
			$(window).scrollTop(0)
			$('body').addClass('popup_open')
			$('body').addClass('liston')
			fill_content('about')
		}
	if(sel_class === 'research'){
		$('body').addClass('nocontents')
	}
	if(sel_class === 'special'){
		$('body').addClass('nocontents')
	}else{
			$('.block_text').addClass('text_invisible')
			$('.block_text_'+sel_class).removeClass('text_invisible')
		}
		if(!clicked){clicked = true}
			$('.cube_unfocus').removeClass('cube_unfocus')
			$('.cube_ununfocus').removeClass('cube_ununfocus')
		$('.cube').addClass('cube_unfocus')
		console.log(sel_class)
		if(sel_class === 'research' || sel_class === 'special'){}else{
		$('.'+sel_class+'_cube').removeClass('cube_unfocus').addClass('cube_focus')

		}
		setTimeout(function(){$('.cube_unfocus').addClass('cube_ununfocus')},1000)
}
function btn_click(){
	$('.content_wrap_3 img').click(function(){

		$('.fullscreen').show()
		$('.fullscreen').removeClass().addClass('fullscreen')
		indexcounter = $('.content_wrap_3 img').index(this)
		$('.fullscreen').addClass('fullscreen_'+$('.content_wrap_3 img').index(this))
		$('body').addClass('fullscreen_mode')
		$('.fullscreen').css({'background-image':'url('+$(this).attr('src')+')'})
	})
	$('.btn_fullscreen_arrow_r').click(function(){
		indexcounter++
		if(indexcounter>$('.content_wrap_3 img').length-1){
			indexcounter = 0
		}
		$('.fullscreen').css({'background-image':'url('+$('.content_wrap_3 img').eq(indexcounter).attr('src')+')'})
	})
	$('.btn_fullscreen_arrow_l').click(function(){
		indexcounter--
		if(indexcounter<0){
			indexcounter = $('.content_wrap_3 img').length-1
		}
		$('.fullscreen').css({'background-image':'url('+$('.content_wrap_3 img').eq(indexcounter).attr('src')+')'})
	})
	$('.mobile .content_wrap>img').click(function(){
		$('.fullscreen').show()
		$('body').addClass('fullscreen_mode')
		$('.mobile .content_wrap_2').hide()
		$('.mobile .btn_close').hide()
		$('.fullscreen').css({'background-image':'url('+$(this).attr('src')+')'})
	})
	$('.btn_fullscreen_close').click(function(){
		$('.mobile .content_wrap_2').show()
		$('body').removeClass('fullscreen_mode')
		$('.mobile .btn_close').show()
		$('.fullscreen').hide()
	})
	$('.btn_sitemap').click(function(){
		$('body').addClass('mapon')
		$('body').removeClass('menuon')
		$('body').removeClass('contenton')
		$('body').removeClass('liston')
		$('body').removeClass('listcontenton')
		$('body').removeClass('popup_open')
		$('body').removeClass('liston')
	})
	$('.btn_sitemap_close').click(function(){
		$('body').removeClass('mapon')
	})
$('.list_under').click(function(){
	if($(this).attr('class').split('list_under_').length>1){
		console.log($(this).attr('class').split('list_under_')[1])
		fill_content(
			$(this).attr('class').split('list_under_')[1].split('_')[0]+'_',
			$(this).attr('class').split('list_under_')[1].split('_')[1]
			)
	}
})
	$('.block_text').unbind().click(function(){
		if($(this).parent().hasClass('support_block')){
			list_view('support')
		}
		if($(this).parent().hasClass('about_block')){
			list_view('about')
		}
		if($(this).parent().hasClass('contact_block')){
			
		}else if($(this).parent().hasClass('museum_block')){
			
		}else{
		list_view($(this).attr('class').split('block_text_')[1])

		}
	})
	$('.side_type_4').hover(function(){
		hovered = true
	},function(){
		hovered = false
	})
	$('.side_type_4').click(function(){
		var cat = $(this).parent().attr('class').split('cube ')[1].split('_cube')[0]
		if(cat === 'special_'){
			cat = 'events_'
		}
		if(cat === 'research_'){
			cat = 'exhibitions_'
		}
		console.log(cat)
		var i = $(this).parent().attr('class').split('cube_')[1]
		$('body').addClass($(this).parent().attr('class').split('cube ')[1].split('_cube')[0]+'frozen')
		fill_content(cat,i)
		setTimeout(function(){$('.content_wrap').removeClass('content_wrap_pre')},10)
		// clip_path()
		$('body').removeClass('menuon')
		$('body').addClass('contenton')
		$('body').removeClass('liston')
		$('body').removeClass('listcontenton')
		$(window).scrollTop(0)
		$('body').addClass('popup_open')
		$('body').addClass('liston')
	})
	$('.arrow_text').unbind().click(function(){
		if($(this).attr('class').split('arrow_text_')[1] === 'support'){
			$('body').addClass('support_frozen contenton popup_open liston')
			fill_content('support')
		}else if($(this).attr('class').split('arrow_text_')[1] === 'about'){
			$('body').addClass('about_frozen contenton popup_open liston')
			fill_content('about')
		}else{
			list_view($(this).attr('class').split('arrow_text_')[1])
		}
		if($(this).attr('class').split('arrow_text_')[1] === 'xmuseum'){
			window.open('https://xmuseum.org/', '_blank');
			$('.hide').removeClass('hide')
			$('.content_wrap').addClass('content_wrap_pre')
			$('.exhibitions_frozen').removeClass('exhibitions_frozen')
			$('.events_frozen').removeClass('events_frozen')
			$('.research_frozen').removeClass('research_frozen')
			$('.special_frozen').removeClass('special_frozen')
			$('.about_frozen').removeClass('about_frozen')
			$('.support_frozen').removeClass('support_frozen')
			$('.frozen_exhibitions').removeClass('frozen_exhibitions')
			$('.frozen_events').removeClass('frozen_events')
			$('.frozen_research').removeClass('frozen_research')
			$('.frozen_special').removeClass('frozen_special')
			$('.frozen_about').removeClass('frozen_about')
			$('.frozen_support').removeClass('frozen_support')
			$('body').removeClass('popup_open')
			$('body').removeClass('frozen')
			$('.cube_unfocus').removeClass('cube_unfocus')
			$('.cube_ununfocus').removeClass('cube_ununfocus')
			$('.cube_focus').removeClass('cube_focus')
			$('.text_invisible').removeClass('text_invisible')
			clicked = false
		}else if($(this).attr('class').split('arrow_text_')[1] === 'contact'){
			window.open('https://www.instagram.com/xvirtual.world/', '_blank');
			$('.hide').removeClass('hide')
			$('.content_wrap').addClass('content_wrap_pre')
			$('.exhibitions_frozen').removeClass('exhibitions_frozen')
			$('.events_frozen').removeClass('events_frozen')
			$('.research_frozen').removeClass('research_frozen')
			$('.special_frozen').removeClass('special_frozen')
			$('.about_frozen').removeClass('about_frozen')
			$('.support_frozen').removeClass('support_frozen')
			$('.frozen_exhibitions').removeClass('frozen_exhibitions')
			$('.frozen_events').removeClass('frozen_events')
			$('.frozen_research').removeClass('frozen_research')
			$('.frozen_special').removeClass('frozen_special')
			$('.frozen_about').removeClass('frozen_about')
			$('.frozen_support').removeClass('frozen_support')
			$('body').removeClass('popup_open')
			$('body').removeClass('frozen')
			$('.cube_unfocus').removeClass('cube_unfocus')
			$('.cube_ununfocus').removeClass('cube_ununfocus')
			$('.cube_focus').removeClass('cube_focus')
			$('.text_invisible').removeClass('text_invisible')
			clicked = false
		}else{
			$('body').removeClass('mapon')
		}
		return false
	})
	$('.btn_menu').click(function(){
		$('body').addClass('menuon')
	})
	$('.btn_close').click(function(){
		$('body').removeClass('nocontents')
		$('.hide').removeClass('hide')
		$('.content_wrap').addClass('content_wrap_pre')
		$('.exhibitions_frozen').removeClass('exhibitions_frozen')
		$('.events_frozen').removeClass('events_frozen')
		$('.research_frozen').removeClass('research_frozen')
		$('.special_frozen').removeClass('special_frozen')
		$('.about_frozen').removeClass('about_frozen')
		$('.support_frozen').removeClass('support_frozen')
		$('.frozen_exhibitions').removeClass('frozen_exhibitions')
		$('.frozen_events').removeClass('frozen_events')
		$('.frozen_research').removeClass('frozen_research')
		$('.frozen_special').removeClass('frozen_special')
		$('.frozen_about').removeClass('frozen_about')
		$('.frozen_support').removeClass('frozen_support')
		$('body').removeClass('popup_open')
		$('body').removeClass('frozen')
		$('.cube_unfocus').removeClass('cube_unfocus')
		$('.cube_ununfocus').removeClass('cube_ununfocus')
		$('.cube_focus').removeClass('cube_focus')
		$('.text_invisible').removeClass('text_invisible')
		clicked = false
	})
	$('.arrow_text_contact').click(function(){
	})
	$('.arrow_text_contact').click(function(){

	})
	$('.sub_menu_title').click(function(){
		$('body').removeClass('menuon')
		$('body').removeClass('contenton')
		$('body').removeClass('liston')
		$('body').addClass('listcontenton')
		$('.category_title').html('Exhibitions')
		$('.category_extra').empty()
	})
	$('.sub_menu_sub').click(function(){
		$('body').removeClass('menuon')
		$('body').removeClass('contenton')
		$('body').addClass('liston')
		$('.category_extra').empty().append('<div class="sort">oldercontents</div>')
		$('body').removeClass('listcontenton')
		$('.category_title').html('Past Exhibitions')
		$('.category_extra').empty()
	})
	$('.listcontent_under').click(function(){
		$('body').removeClass('menuon')
		$('body').removeClass('contenton')
		$('body').addClass('liston')
		$('.category_extra').empty().append('<div class="sort">oldercontents</div>')
		$('body').removeClass('listcontenton')
		$('.category_title').html('Past Exhibitions')
		$('.category_extra').empty()
	})
}
	function fill_content(cat,i){
		if(cat === 'about'){
		$('.content_wrap_2').empty()
			if(lang == 'zh'){
				$('.content_wrap_2').append(about_db[1])
			}else{
				$('.content_wrap_2').append(about_db[0])
			}

		}else if(cat === 'support'){
		$('.content_wrap_2').empty()
			if(lang == 'zh'){
				$('.content_wrap_2').append(support_db[1])
			}else{
				$('.content_wrap_2').append(support_db[0])
			}

		}else{
		var cat_array_pre = eval(cat+'array')
		var cat_array =cat_array_pre[parseInt(i)]
		var related_array = eval(cat+'array')
		var related = []
		$('.content_wrap_3').empty()
		if(cat === 'exhibitions_'){
			for (var k = 3; k >= 0; k--) {
				if(k !== i){related.push(k)}
			}
			for (var m = cat_array[12].length - 1; m >= 0; m--) {
				$('.content_wrap_3').append('<img src=img/Exhibition/Incubator/'+cat_array[12][m]+'>')
			}
		}
		if(cat === 'events_'){
				var ran = Math.floor(Math.random()*3)+1
				related.push((parseInt(i)+ran*1)%eval(cat+'array').length)
				related.push((parseInt(i)+ran*2)%eval(cat+'array').length)
				related.push((parseInt(i)+ran*3)%eval(cat+'array').length)
			for (var m = cat_array[12].length - 1; m >= 0; m--) {
				$('.content_wrap_3').append('<img src=img/Events/'+cat_array[12][m]+'>')
			}
		}
		$('.content_wrap_2').empty()
			if(lang == 'zh'){
				$('.content_wrap_2').append('\
					<div class="upper_info">\
						<div class="category_title bigboldfont">'+cat_array[7]+'</div>\
							<br>\
							<a class="explorebutton" target="_blank" href="'+cat_array[11]+' target="_blank"> <span class="en_lang">Click to Explore</span><span class="zh_lang">探索空间</span> </a>\
						<div class="category_wrap">\
							<div class="category category_subtitle">类别</div>\
							<div class="category category_list">'+cat_array[0]+'</div>\
						</div>\
						<div class="category_wrap">\
							<div class="category category_subtitle">艺术家</div>\
							<div class="category category_list">'+cat_array[8]+'</div>\
						</div>\
						<div class="category_wrap">\
							<div class="category category_subtitle">艺术家</div>\
							<div class="category category_list">'+cat_array[2]+'</div>\
						</div>\
							<br>\
							<br>\
					</div>\
					<div class="content">\
						<img class="content_innerthumb" src='+cat_array[1]+'><br><br>\
						<div class="content_innercontent content_innercontent_2">'+cat_array[9]+'<br>\
						<div class="smalltitlefont">关于艺术家</div>\
						'+cat_array[10]+'</div>\
						</div>\
					</div>\
					<div class="category_title smalltitlefont">相关内容</div>\
					<div class="list_under_wrap">\
						<div class="list_under list_under_'+cat.split('_')[0]+'_'+[related[0]]+' smalltitlefont">\
							<img src="'+related_array[related[0]][1]+'">\
							<div class="des">\
								<div class="title">'+related_array[related[0]][7]+'</div>\
								<div class="extra">'+related_array[related[0]][8]+'<br>'+related_array[related[0]][2]+'</div>\
							</div>\
						</div>\
						<div class="list_under list_under_'+cat.split('_')[0]+'_'+[related[1]]+' smalltitlefont">\
							<img src="'+related_array[related[1]][1]+'">\
							<div class="des">\
								<div class="title">'+related_array[related[1]][7]+'</div>\
								<div class="extra">'+related_array[related[1]][8]+'<br>'+related_array[related[1]][2]+'</div>\
							</div>\
						</div>\
						<div class="list_under list_under_'+cat.split('_')[0]+'_'+[related[2]]+' smalltitlefont">\
							<img src="'+related_array[related[2]][1]+'">\
							<div class="des">\
								<div class="title">'+related_array[related[2]][7]+'</div>\
								<div class="extra">'+related_array[related[2]][8]+'<br>'+related_array[related[2]][2]+'</div>\							</div>\
						</div>\
					</div>\
				')
			}else{
				$('.content_wrap_2').append('\
					<div class="upper_info">\
						<div class="category_title bigboldfont">'+cat_array[3]+'</div>\
							<br>\
							<a class="explorebutton" target="_blank" href="'+cat_array[11]+' target="_blank"> <span class="en_lang">Click to Explore</span><span class="zh_lang">探索空间</span></a>\
						<div class="category_wrap">\
							<div class="category category_subtitle">Category</div>\
							<div class="category category_list">'+cat_array[0]+'</div>\
						</div>\
						<div class="category_wrap">\
							<div class="category category_subtitle">Artist</div>\
							<div class="category category_list">'+cat_array[4]+'</div>\
						</div>\
						<div class="category_wrap">\
							<div class="category category_subtitle">Date</div>\
							<div class="category category_list">'+cat_array[2]+'</div>\
						</div>\
							<br>\
							<br>\
					</div>\
					<div class="content">\
						<img class="content_innerthumb" src='+cat_array[1]+'><br><br>\
						<div class="content_innercontent content_innercontent_2">'+cat_array[5]+'<br><br><br>\
						<div class="smalltitlefont">about the artist</div>\
						'+cat_array[6]+'</div>\
					</div>\
					<div class="category_title midsizefont">related-post</div>\
					<div class="list_under_wrap">\
						<div class="list_under list_under_'+cat.split('_')[0]+'_'+[related[0]]+' smalltitlefont">\
							<img src="'+related_array[related[0]][1]+'">\
							<div class="des">\
								<div class="title">'+related_array[related[0]][3]+'</div>\
								<div class="extra">'+related_array[related[0]][4]+'<br>'+related_array[related[0]][2]+'</div>\
							</div>\
						</div>\
						<div class="list_under list_under_'+cat.split('_')[0]+'_'+[related[1]]+' smalltitlefont">\
							<img src="'+related_array[related[1]][1]+'">\
							<div class="des">\
								<div class="title">'+related_array[related[1]][3]+'</div>\
								<div class="extra">'+related_array[related[1]][4]+'<br>'+related_array[related[1]][2]+'</div>\
							</div>\
						</div>\
						<div class="list_under list_under_'+cat.split('_')[0]+'_'+[related[2]]+' smalltitlefont">\
							<img src="'+related_array[related[2]][1]+'">\
							<div class="des">\
								<div class="title">'+related_array[related[2]][3]+'</div>\
								<div class="extra">'+related_array[related[2]][4]+'<br>'+related_array[related[2]][2]+'</div>\							</div>\
						</div>\
					</div>\
				')
			}
		}
		$('.content_wrap').scrollTop(0)
			btn_click()
	}
})