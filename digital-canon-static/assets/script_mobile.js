jQuery( document ).ready(function() {
// jQuery('.site-content').perfectScrollbar();
var isMobile = false; //initiate as false
// device detection
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
    isMobile = true;
}
if(window.innerHeight<700 && window.innerWidth/window.innerHeight < 81/95){
    isMobile = true;
}


// if(isMobile){
//   window.location.href = "http://touchposter.xyz/digitalcanon/?page_id=513"
// }



if(isMobile){

        setTimeout(function () {
        jQuery('#pivot').attr('style','transition: transform 1.5s !important;');
  if (location.hash.split('#')[1] === 'list') {
        jQuery('#pivot').hide()
  }
        }, 300);



if(jQuery('.longlist_el').length){
jQuery('.longlist_el').each(function(){
  if(jQuery(this).is(":empty")){
      jQuery(this).addClass('nonempty')
    }
  if(jQuery(this).text() === 'y'){
      jQuery(this).html( '&nbsp;' );
    }
})
}







var home = document.getElementsByClassName('page-id-513')[0]
if(home){

if(window.location.hash === ''){
    window.location.hash = 'intro';}else{
        locationHashChanged()
    }
// projecting_1()
// window.location.hash = 'intro';
locationHashChanged() 
var mobile_scroll_count = 0
}
///////////////////////////////////////////////
// topbuttons
///////////////////////////////////////////////
var current_front_hash
var front_to_back = false
var projecting = false


    back_intro_load()
    intro_load()

jQuery(' .go_btn_back ').click(function() {
jQuery('#pivot').addClass( "pivot_mobile_goback_animate" )
    if(back_intro_seen_tf){
    window.location.hash = 'backside';
    }else{
    window.location.hash = 'backside_intro';
    }
    go_back()
});


jQuery(' .go_btn_front ').click(function() {
jQuery('#pivot').addClass( "pivot_mobile_goback_animate" )
  if(current_front_hash ){
  window.location.hash = current_front_hash;
  }else{
  window.location.hash = 'list';
  }
});


function hash_front(){
}
function hash_back(){
}

// jQuery(' .img_btn ').click(function() {
//     window.location.hash = 'list';
// })




var current_loc = location.hash.split('#')[1]
jQuery('#intro').click(function() {
  if (current_loc === 'intro'){
    window.location.hash = 'list'; 
  }
});


jQuery('.back_intro').click(function() {
    back_intro_seen_tf = true
    window.location.hash = 'backside';
})

jQuery('.projecting_line').find('span').click(function() {
    window.location.hash = jQuery(this).attr('class');
})




window.onhashchange = locationHashChanged;
function locationHashChanged() {
var current_loc = location.hash.split('#')[1]
  if (current_loc === 'list') {
    jQuery('#intro').removeClass( "mobile_fadein" )
    if(jQuery( "#pivot" ).hasClass( "pivot_animate" )){
        go_front()
        setTimeout(list_1, 2300);
    }else{
        list_1()
    }
  }




  if (current_loc === 'intro') {
    intro_load()
    jQuery('.projecting_whole').removeClass('projecting_whole_ani');
    if(!jQuery( "#pivot" ).hasClass( "pivot_animate" )){
        go_front()
        setTimeout(function(){jQuery('#intro').addClass( "mobile_fadein" )}, 2300);
    }else{
        jQuery('#intro').addClass( "mobile_fadein" )
    }
  }



  if (current_loc === 'backside') {
    back_intro_seen()
    jQuery('#intro').removeClass( "mobile_fadein" )
    jQuery('#back_intro').removeClass( "mobile_fadein" )


    if(!jQuery( "#pivot" ).hasClass( "pivot_animate" )){
    go_back()
    }
  }



  if (current_loc === 'backside_intro') {
    jQuery('#intro').removeClass( "mobile_fadein" )
    if(!jQuery( "#pivot" ).hasClass( "pivot_animate" )){
        go_back()
        setTimeout(function(){jQuery('.back_intro').addClass( "mobile_fadein" )}, 2300);
    }else{
        jQuery('.back_intro').addClass( "mobile_fadein" )
    }

  }
}



















































































///////////////////////////////////////////////
// front_back
///////////////////////////////////////////////

function back_intro_seen(){
    jQuery('.sec_longlist .el_wrap .longlist_el').attr('style','color:white !important');
    jQuery('.context_l .el_wrap div').attr('style','color:white !important');
    jQuery('.sec_about').css({'opacity': '1'})
    jQuery('.back').find('#primary').removeClass('mobile_fadeout')
    jQuery('.back_intro').removeClass('mobile_fadein')
  }


function go_back(){
  jQuery(' #front_content').css({'background' : 'linear-gradient(to right, rgba(155, 210, 255, 0.4)10.9%, rgba(0, 0, 0, 0.1) 11%, rgba(255, 255, 255, 0.1));'})
    in_list()
    jQuery('.projecting_whole').removeClass('projecting_ani_1')

  // jQuery(' #pivot ').show()
  jQuery(' .img_btn ').hide()
  jQuery(' #pivot ').removeClass('pivot_in_animate')
  jQuery(' #pivot ').removeClass('pivot_animate')
  jQuery(' #back_content').removeClass('mobile_fadeout')
  jQuery(' #front_content ').addClass('mobile_fadeout')


  jQuery("html, body").animate({ scrollTop: 0 }, 500, function(){


  jQuery(' .go_btn_back ').hide();
  jQuery(' .go_btn_front ').attr('style','display:inline-block !important');
  setTimeout(go_back_1, 300);
  })
}
function go_back_1(){
  jQuery(' #pivot ').addClass('pivot_animate')
  jQuery(' body ').addClass('body_animate')
}



function go_front(){
      jQuery(' #front_content').removeClass('mobile_fadeout')
      jQuery(' #back_content ').addClass('mobile_fadeout')

      jQuery(' .img_btn ').show()
      jQuery(' .go_btn_back ').show();
      jQuery(' .go_btn_front ').attr('style','display:none !important');
      jQuery(' #pivot ').addClass('pivot_in_animate')
      jQuery(' body ').removeClass('body_animate')

}











///////////////////////////////////////////////
// index_front
///////////////////////////////////////////////

function front_content(clicked_one){




		    jQuery('.title_title').html('title')
		    jQuery('.artist_title').html('artist')
		    jQuery('.year_title').html('year')
		    jQuery('.website_title').html('website')

		    jQuery('.images_title').html('images')

		    jQuery('.software_title').html('software')
		    jQuery('.hardware_title').html('hardware')
		    jQuery('.premiere_title').html('premiere')
		    jQuery('.production_title').html('production')

		    jQuery('.technical_specs_title').html('technical specs')
		    jQuery('.functionality_title').html('functionality')
		    jQuery('.part_of_collection_title').html('part of collection')
		    jQuery('.keywords_title').html('keywords')

		    jQuery('.intro_title').html('intro')
		    jQuery('.biography_artist_title').html('biography artist')
		    jQuery('.intention_artistquote_by_artist_title').html('intention artistquote by artist')
		    jQuery('.related_work_of_artist_title').html('related work of artist')
		    jQuery('.artist_statement_title').html('quote')

		    jQuery('.influence_title').html('influence')
		    jQuery('.context_title').html('context')
		    jQuery('.reflection_title').html('reflection')
		    jQuery('.part_of_active_discussion_title').html('part of active discussion')
		    jQuery('.scene__artists__institutes_title').html('scene artists institutes')
        jQuery('.footnote').html('footnote')




		    var id_post =   clicked_one;
		    var appendhere = jQuery('.append_div')
		    var a_title = jQuery('.title')
		    var a_artist = jQuery('.artist')
		    var a_year = jQuery('.year')
		    var a_website = jQuery('.website')

		    var a_images = jQuery('.images')

		    var a_software = jQuery('.software')
		    var a_hardware = jQuery('.hardware')
		    var a_premiere = jQuery('.premiere')
		    var a_production = jQuery('.production')

		    var a_technical_specs = jQuery('.technical_specs')
		    var a_functionality = jQuery('.functionality')
		    var a_part_of_collection = jQuery('.part_of_collection')
		    var a_keywords = jQuery('.keywords')

		    var a_intro = jQuery('.intro')
		    var a_biography_artist = jQuery('.biography_artist')
		    var a_intention_artistquote_by_artist = jQuery('.intention_artistquote_by_artist')
		    var a_related_work_of_artist = jQuery('.related_work_of_artist')
		    var a_artist_statement = jQuery('.artist_statement')

		    var a_influence = jQuery('.influence')
		    var a_context = jQuery('.context')
		    var a_reflection = jQuery('.reflection')
		    var a_part_of_active_discussion = jQuery('.part_of_active_discussion')
		    var a_scene__artists__institutes = jQuery('.scene__artists__institutes')
        var a_footnote = jQuery('.footnote')

		    var result_array

		    ;(function (result) {
		    		appendhere.empty()
		    		result_array=result.split('|*')
		            a_title.append( result_array[0] )
		            a_artist.append( result_array[1] )
		            a_year.append( result_array[2] )
		            a_website.append( result_array[3] )
		            a_images.append( result_array[4] )
		            a_software.append( result_array[5] )
		            a_hardware.append( result_array[6] )
		            a_premiere.append( result_array[7] )
		            a_production.append( result_array[8] )

		            a_technical_specs.append( result_array[9] )
		            a_functionality.append( result_array[10] )
		            a_part_of_collection.append( result_array[11] )
		            a_keywords.append( result_array[12] )
					// window.history.pushState('',"",'#' + id_post)
		    		a_intro.append( result_array[13] )
		    		a_biography_artist.append( result_array[14] )
		    		a_intention_artistquote_by_artist.append( result_array[15] )
		    		a_related_work_of_artist.append( result_array[16] )
		    		a_artist_statement.append( result_array[17] )

		    		a_influence.append( result_array[18] )
		    		a_context.append( result_array[19] )
		    		a_reflection.append( result_array[20] )
		    		a_part_of_active_discussion.append( result_array[21] )
		    		a_scene__artists__institutes.append( result_array[22] )
            a_footnote.append( result_array[23] )

    				// jQuery(". s img").wrap("<div class='image_el'></div>");

                    var bottom = jQuery(".fixed sec .artworks").outerHeight( true )
                    jQuery(".sec_context").css({'paddingBottom':'bottom'})

            
		    })(getWorkResultString(id_post));

}


///////////////////////////////////////////////
// image_load
///////////////////////////////////////////////
// .attr('class')


function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}






























function list_1(){
    jQuery('.projecting_whole').addClass('projecting_whole_ani')
    jQuery('#pivot').css({'display':'none'})
}

///////////////////////////////////////////////
// intro
///////////////////////////////////////////////
function intro_load(){
            var id_post = 478;
                var appendhere5 = jQuery('#intro')
            var appendhere_title = jQuery('.title')
            ;(function (result) {
                    appendhere5.empty()
                    appendhere5.append('<div class="intro_title">Digital Canon!</div>')
                    appendhere5.append('<div class="x_button"></div>')
                    appendhere5.append( result )
                    // projecting_1()
            })(getContextHtml(id_post));

}



///////////////////////////////////////////////
// intro_in the back
///////////////////////////////////////////////
function back_intro_load(){ 
            var id_post = 476;
            var appendhere = jQuery('.back_intro')
            ;(function (result) {
                    appendhere.empty()
                    appendhere.append('<div class="intro_title">Digital Canon?</div>')
                    appendhere.append('<div class="x_button"></div>')
                    appendhere.append( result )
            })(getContextHtml(id_post));
}






var img = []
function projecting_1() {
  img = getProjectingSpans();
  projecting_2(img);
  projecting_interaction();
}
var counter =0

var mobile_img = 1
function projecting_2(img) {
                    if(mobile_img<=10){
                    var shuffled_img = shuffle(img)

                    var splited_shuffled_img = img.slice((mobile_img-1)*4, mobile_img*4);
                    line_1=document.getElementsByClassName("projecting_line1");
                    var w = window.innerWidth;
                    var h = window.innerHeight;
                    
                        for (var i = line_1.length - 1; i >= 0; i--) {
                            line_1[i].innerHTML += splited_shuffled_img.join("");
                        }
                    mobile_img++
                    }
}






function projecting_interaction(){
    jQuery('.scroll_down_mobile').show()
    jQuery('.scroll_down_mobile').click(function() {
  projecting_2(img)
        mobile_scroll_count++
        if(mobile_scroll_count == 1){
        jQuery('.projecting_distort_img_wrap').addClass('scroll_ani_mobile_1')
        jQuery('.projecting_line_wrap').addClass('scroll_ani_mobile_1')
        }else if(mobile_scroll_count == 2){
        jQuery('.projecting_distort_img_wrap').addClass('scroll_ani_mobile_2')
        jQuery('.projecting_line_wrap').addClass('scroll_ani_mobile_2')
        }else if(mobile_scroll_count == 3){
        jQuery('.projecting_distort_img_wrap').addClass('scroll_ani_mobile_3')
        jQuery('.projecting_line_wrap').addClass('scroll_ani_mobile_3')            
        }else if(mobile_scroll_count == 4){
        jQuery('.projecting_distort_img_wrap').addClass('scroll_ani_mobile_4')
        jQuery('.projecting_line_wrap').addClass('scroll_ani_mobile_4')            
        }else if(mobile_scroll_count == 5){
        jQuery('.projecting_distort_img_wrap').addClass('scroll_ani_mobile_5')
        jQuery('.projecting_line_wrap').addClass('scroll_ani_mobile_5')            
        }else if(mobile_scroll_count == 6){
        jQuery('.projecting_distort_img_wrap').addClass('scroll_ani_mobile_6')
        jQuery('.projecting_line_wrap').addClass('scroll_ani_mobile_6')            
        }else if(mobile_scroll_count == 7){
        jQuery('.projecting_distort_img_wrap').addClass('scroll_ani_mobile_7')
        jQuery('.projecting_line_wrap').addClass('scroll_ani_mobile_7')            
        }else{
        jQuery('.projecting_distort_img_wrap').removeClass('scroll_ani_mobile_1')
        jQuery('.projecting_line_wrap').removeClass('scroll_ani_mobile_1') 
        jQuery('.projecting_distort_img_wrap').removeClass('scroll_ani_mobile_2')
        jQuery('.projecting_line_wrap').removeClass('scroll_ani_mobile_2') 
        jQuery('.projecting_distort_img_wrap').removeClass('scroll_ani_mobile_3')
        jQuery('.projecting_line_wrap').removeClass('scroll_ani_mobile_3') 
        jQuery('.projecting_distort_img_wrap').removeClass('scroll_ani_mobile_4')
        jQuery('.projecting_line_wrap').removeClass('scroll_ani_mobile_4') 
        jQuery('.projecting_distort_img_wrap').removeClass('scroll_ani_mobile_5')
        jQuery('.projecting_line_wrap').removeClass('scroll_ani_mobile_5') 
        jQuery('.projecting_distort_img_wrap').removeClass('scroll_ani_mobile_6')
        jQuery('.projecting_line_wrap').removeClass('scroll_ani_mobile_6') 
        jQuery('.projecting_distort_img_wrap').removeClass('scroll_ani_mobile_7')
        jQuery('.projecting_line_wrap').removeClass('scroll_ani_mobile_7') 
        mobile_scroll_count = 0
        }
    })





}

function in_list(){
    jQuery('.projecting_whole').removeClass('projecting_whole_ani');
    jQuery('#pivot').css({'display':'block'})
}































var page_image = document.getElementsByClassName('page-template-page_mobile-php')[0]
if(page_image){
var clone_images = jQuery('.projecting_line').clone(true);
jQuery('.projecting_line_wrap_each_0').html(clone_images);
jQuery('.projecting_distort_img_wrap').html(clone_images);

var myElement = document.getElementsByTagName('body')[0];
var mc = new Hammer(myElement);
mc.get('swipe').set({ direction: Hammer.DIRECTION_ALL });
// li  to events...


var mobile_scroll_count = 0
mc.on("swipeup", function(ev) {
        mobile_scroll_count++
        if(mobile_scroll_count == 1){
        jQuery('.projecting_distort_img_wrap').addClass('scroll_ani_mobile_1')
        jQuery('.projecting_line_wrap_each_0').addClass('scroll_ani_mobile_1')
        jQuery('.projecting_line_wrap_each_1').addClass('scroll_ani_mobile_1')
        }else if(mobile_scroll_count == 2){
        jQuery('.projecting_distort_img_wrap').addClass('scroll_ani_mobile_2')
        jQuery('.projecting_line_wrap_each_0').addClass('scroll_ani_mobile_2')
        jQuery('.projecting_line_wrap_each_1').addClass('scroll_ani_mobile_2')
        }else if(mobile_scroll_count == 3){
        jQuery('.projecting_distort_img_wrap').addClass('scroll_ani_mobile_3')
        jQuery('.projecting_line_wrap_each_0').addClass('scroll_ani_mobile_3')
        jQuery('.projecting_line_wrap_each_1').addClass('scroll_ani_mobile_3')            
        }else if(mobile_scroll_count == 4){
        jQuery('.projecting_distort_img_wrap').addClass('scroll_ani_mobile_4')
        jQuery('.projecting_line_wrap_each_0').addClass('scroll_ani_mobile_4')
        jQuery('.projecting_line_wrap_each_1').addClass('scroll_ani_mobile_4')            
        }else if(mobile_scroll_count == 5){
        jQuery('.projecting_distort_img_wrap').addClass('scroll_ani_mobile_5')
        jQuery('.projecting_line_wrap_each_0').addClass('scroll_ani_mobile_5')
        jQuery('.projecting_line_wrap_each_1').addClass('scroll_ani_mobile_5')            
        }else if(mobile_scroll_count == 6){
        jQuery('.projecting_distort_img_wrap').addClass('scroll_ani_mobile_6')
        jQuery('.projecting_line_wrap_each_0').addClass('scroll_ani_mobile_6')
        jQuery('.projecting_line_wrap_each_1').addClass('scroll_ani_mobile_6')            
        }else if(mobile_scroll_count == 7){
        jQuery('.projecting_distort_img_wrap').addClass('scroll_ani_mobile_7')
        jQuery('.projecting_line_wrap_each_0').addClass('scroll_ani_mobile_7')
        jQuery('.projecting_line_wrap_each_1').addClass('scroll_ani_mobile_7')            
        }else{
        jQuery('.projecting_distort_img_wrap').removeClass('scroll_ani_mobile_1')
        jQuery('.projecting_line_wrap_each_0').removeClass('scroll_ani_mobile_1')
        jQuery('.projecting_line_wrap_each_1').removeClass('scroll_ani_mobile_1') 
        jQuery('.projecting_distort_img_wrap').removeClass('scroll_ani_mobile_2')
        jQuery('.projecting_line_wrap_each_0').removeClass('scroll_ani_mobile_2')
        jQuery('.projecting_line_wrap_each_1').removeClass('scroll_ani_mobile_2') 
        jQuery('.projecting_distort_img_wrap').removeClass('scroll_ani_mobile_3')
        jQuery('.projecting_line_wrap_each_0').removeClass('scroll_ani_mobile_3')
        jQuery('.projecting_line_wrap_each_1').removeClass('scroll_ani_mobile_3') 
        jQuery('.projecting_distort_img_wrap').removeClass('scroll_ani_mobile_4')
        jQuery('.projecting_line_wrap_each_0').removeClass('scroll_ani_mobile_4')
        jQuery('.projecting_line_wrap_each_1').removeClass('scroll_ani_mobile_4') 
        jQuery('.projecting_distort_img_wrap').removeClass('scroll_ani_mobile_5')
        jQuery('.projecting_line_wrap_each_0').removeClass('scroll_ani_mobile_5')
        jQuery('.projecting_line_wrap_each_1').removeClass('scroll_ani_mobile_5') 
        jQuery('.projecting_distort_img_wrap').removeClass('scroll_ani_mobile_6')
        jQuery('.projecting_line_wrap_each_0').removeClass('scroll_ani_mobile_6')
        jQuery('.projecting_line_wrap_each_1').removeClass('scroll_ani_mobile_6') 
        jQuery('.projecting_distort_img_wrap').removeClass('scroll_ani_mobile_7')
        jQuery('.projecting_line_wrap_each_0').removeClass('scroll_ani_mobile_7')
        jQuery('.projecting_line_wrap_each_1').removeClass('scroll_ani_mobile_7') 
        mobile_scroll_count = 0
        }
    })
mc.on("swipedown", function(ev) {
        if(mobile_scroll_count == 0){
        }else if(mobile_scroll_count == 1){
        jQuery('.projecting_distort_img_wrap').removeClass('scroll_ani_mobile_1')
        jQuery('.projecting_line_wrap_each_0').removeClass('scroll_ani_mobile_1')
        jQuery('.projecting_line_wrap_each_1').removeClass('scroll_ani_mobile_1')
        }else if(mobile_scroll_count == 2){
        jQuery('.projecting_distort_img_wrap').removeClass('scroll_ani_mobile_2')
        jQuery('.projecting_line_wrap_each_0').removeClass('scroll_ani_mobile_2')
        jQuery('.projecting_line_wrap_each_1').removeClass('scroll_ani_mobile_2')
        }else if(mobile_scroll_count == 3){
        jQuery('.projecting_distort_img_wrap').removeClass('scroll_ani_mobile_3')
        jQuery('.projecting_line_wrap_each_0').removeClass('scroll_ani_mobile_3')
        jQuery('.projecting_line_wrap_each_1').removeClass('scroll_ani_mobile_3')            
        }else if(mobile_scroll_count == 4){
        jQuery('.projecting_distort_img_wrap').removeClass('scroll_ani_mobile_4')
        jQuery('.projecting_line_wrap_each_0').removeClass('scroll_ani_mobile_4')
        jQuery('.projecting_line_wrap_each_1').removeClass('scroll_ani_mobile_4')            
        }else if(mobile_scroll_count == 5){
        jQuery('.projecting_distort_img_wrap').removeClass('scroll_ani_mobile_5')
        jQuery('.projecting_line_wrap_each_0').removeClass('scroll_ani_mobile_5')
        jQuery('.projecting_line_wrap_each_1').removeClass('scroll_ani_mobile_5')            
        }else if(mobile_scroll_count == 6){
        jQuery('.projecting_distort_img_wrap').removeClass('scroll_ani_mobile_6')
        jQuery('.projecting_line_wrap_each_0').removeClass('scroll_ani_mobile_6')
        jQuery('.projecting_line_wrap_each_1').removeClass('scroll_ani_mobile_6')            
        }else if(mobile_scroll_count == 7){
        jQuery('.projecting_distort_img_wrap').removeClass('scroll_ani_mobile_7')
        jQuery('.projecting_line_wrap_each_0').removeClass('scroll_ani_mobile_7')
        jQuery('.projecting_line_wrap_each_1').removeClass('scroll_ani_mobile_7')            
        }
        if(mobile_scroll_count > 0){ 
        mobile_scroll_count--}else{
        mobile_scroll_count = 0
        }
    })



}
var single = document.getElementsByClassName('single')[0]
if(single){
            jQuery('.append_div').each(function() {
            if( jQuery( this ).contents().length <= 1 ) {
              jQuery(this).parent().hide()
              jQuery('.title_wrap').show()
              jQuery('.artist_wrap').show()
            }
            });





var image_swipe = document.getElementsByClassName('images_el_wrap')[0];
var image_c = new Hammer(image_swipe );
image_c.get('swipe').set({ direction: Hammer.DIRECTION_ALL });








            jQuery(".images img").wrap("<div class='image_el'></div>"); 
var slide_counter = 1




  jQuery('.arrowright').click(function() {
    img_counter = document.getElementsByClassName('images')[0].childElementCount
    if(slide_counter <= img_counter-1){
      slide_counter ++
      jQuery('.images').animate({'marginLeft':'-=100vw'})
    }else if(slide_counter == img_counter){
      slide_counter = 1
      jQuery('.images').animate({'marginLeft':'0vw'})
    }
  })





  image_c.on("swipeleft", function(ev) {
    img_counter = document.getElementsByClassName('images')[0].childElementCount
    if(slide_counter <= img_counter-1){
      slide_counter ++
      jQuery('.images').animate({'marginLeft':'-=100vw'})
    }else if(slide_counter == img_counter){
      slide_counter = 1
      jQuery('.images').animate({'marginLeft':'0vw'})
    }
  })



  jQuery('.arrowleft').click(function() {
                img_counter = document.getElementsByClassName('images')[0].childElementCount
    if(slide_counter > 1){
      slide_counter --
      jQuery('.images').animate({'marginLeft':'+=100vw'})
    }else if(slide_counter == 1){
      slide_counter = (img_counter)
      jQuery('.images').animate({'marginLeft': (img_counter-1)*-100+'vw'})
    }
  })


  image_c.on("swiperight", function(ev) {
                img_counter = document.getElementsByClassName('images')[0].childElementCount
    if(slide_counter > 1){
      slide_counter --
      jQuery('.images').animate({'marginLeft':'+=100vw'})
    }else if(slide_counter == 1){
      slide_counter = (img_counter)
      jQuery('.images').animate({'marginLeft': (img_counter-1)*-100+'vw'})
    }
  })




var arrowdownclicked = false
var dropdown_top = 0
jQuery('.arrowdown').click(function() {
  if(!arrowdownclicked){
    dropdown_top = jQuery('.artist').outerHeight() + jQuery('.artist').offset().top;
    jQuery('.dropdown').css({'top':dropdown_top})
    jQuery('.dropdown').show();
    arrowdownclicked = true
  }else{
    jQuery('.dropdown').hide();
    arrowdownclicked = false

  }
})


}


























///////////////////////////////////////////////
// about_in the back
///////////////////////////////////////////////

var back_intro_seen_tf = false





jQuery('.longlist_el').each(function(){
 	if(jQuery(this).is(":empty")){
    	jQuery(this).css({'background':'rgba(0,0,0,0)'})
    }
})
		// jQuery('.artworks .sec_discription .el_wrap .append_div').each(function(){
  //       	if(!jQuery.trim( jQuery(this).html() ).length) {
		//     	jQuery(this).css({'padding':'0', 'minHeight':'2vh'})
		//     }
		// })
		// jQuery('.artworks .sec_context .el_wrap .append_div').each(function(){
  //       	if(!jQuery.trim( jQuery(this).html() ).length) {
		//     	jQuery(this).css({'padding':'0', 'minHeight':'2vh'})
		//     }
		// })
///////////////////////////////////////////////
// image_slide
///////////////////////////////////////////////
}
})