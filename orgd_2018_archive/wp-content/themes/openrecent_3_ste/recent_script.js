
jQuery(document).ready(function($){
             // jQuery(window).load(function() {
             //     console.log("Time until everything loaded: ", Date.now()-timerStart);
             // });

/*! Copyright (c) 2008 Brandon Aaron (brandon.aaron@gmail.com || http://brandonaaron.net)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) 
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 */

/**
 * Gets the width of the OS scrollbar
 */
 var isMobile = false; //initiate as false
// device detection
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
    isMobile = true;
}
if(isMobile){
  if(window.location.href === 'http://yhsong.com/orgd_2018_archive/9/'){
  // if(window.location.href = 
document.addEventListener('touchmove', function(e) {
    e.preventDefault();
}, { passive: false });}
}
 scrollbar(fontsize);
  var scrollbarWidth = 0;
  var fontsize;
 function scrollbar(callback) {
    if ( !scrollbarWidth ) {
      if ( $.browser.msie ) {
        var $textarea1 = $('<textarea cols="10" rows="2"></textarea>')
            .css({ position: 'absolute', top: -1000, left: -1000 }).appendTo('body'),
          $textarea2 = $('<textarea cols="10" rows="2" style="overflow: hidden;"></textarea>')
            .css({ position: 'absolute', top: -1000, left: -1000 }).appendTo('body');
        scrollbarWidth = $textarea1.width() - $textarea2.width();
        $textarea1.add($textarea2).remove();
      } else {
        var $div = $('<div />')
          .css({ width: 100, height: 100, overflow: 'auto', position: 'absolute', top: -1000, left: -1000 })
          .prependTo('body').append('<div />').find('div')
            .css({ width: '100%', height: 200 });
        scrollbarWidth = 100 - $div.width();
        $div.parent().remove();
      }
    }
    console.log(scrollbarWidth)
    jQuery('.recent-area').find('div').css('backgroundPosition', scrollbarWidth+'px 0px');
    callback();
  };
 function fontsize() {
  // fontsize = 5.775-scrollbarWidth*0.025
  // jQuery('.site-title').css('fontSize',fontsize+'vh')
  jQuery('#site-title-link').find('span').css('left',jQuery('.site-title-link').outerWidth())
  jQuery('#site-title-link').find('span').css('marginLeft',-1*jQuery('#site-title-link').outerWidth())
}
////////////////////////////////////////////////////////////////////////////////////

      var posttop = jQuery('#index').innerHeight();
      jQuery('#posts').css('marginTop', posttop);


    var hrefname = window.location.href.split("/");
    var hrefpostnumber = hrefname[hrefname.length-2]
    console.log(hrefpostnumber)



    if(hrefpostnumber === '9'){
jQuery("#fromstart").click(function(){
        jQuery('.entry-content').animate({top : 0}, 600);

})
      jQuery('#topshadow').hide();
      jQuery('.thanks_button_div').hide();
      jQuery('#post-22').css("cssText", "display:block !important;")
      jQuery('#primary').css({'overflow': 'hidden',
                            'width':'100vw',
                              'height' : '100vh',})
      var counter = 0
      var maxcounter = jQuery('.entry-content').innerHeight()/0.9*h -1
      console.log(jQuery('.entry-content').innerHeight())
      console.log(0.9*h)
      jQuery('.image_top').css('opacity', '0');
      intropage = true
        jQuery("#back_wrap").hide();
      jQuery('.image_top').css('opacity', '0');
      jQuery('.image_top').css('opacity', '0');
      jQuery("#fromstart").css({"paddingLeft": "2vw"})
      jQuery("#fromstart").show();
      jQuery("#fromstart").css('marginLeft', '50vw').css('marginLeft', '-=62.5vh');
      jQuery('.entry-content').css({"paddingLeft": "2vw", "paddingRight": "2vw"
        ,'fontSize': '5.2vh', 'lineHeight': '7vh', 'wordBreak':'keep-all',
        'width': '110vh'})
      jQuery('.entry-content').css('marginLeft', '50vw').css('marginLeft', '-=62.5vh');
      jQuery('.entry-content').css({"marginTop": "0vh", 'position':'fixed'})
      jQuery('.content-area').css('backgroundColor','rgba(240,240,240,1)')
      jQuery('.entry-content').css('backgroundColor','rgba(240,240,240,1)')


      jQuery("#arrow_bottom").click(function () {
        console.log(hrefpostnumber)
      counter++
      jQuery('.entry-content').animate({top : -counter*0.9*h}, 600);
      if(counter == maxcounter-1){
        jQuery('.thanks_button_div').show();
        // jQuery("#arrow_bottom_wrap").hide();
      }

    })


    jQuery(".thanks_button_div").click(function () {
        jQuery('.thanks_button_div').hide();
        jQuery("#arrow_bottom_wrap").hide();
        counter++
        jQuery('.entry-content').animate({top : -counter*0.9*h}, 600);
      setTimeout(function () {
location.reload();
      }, 5000);
    })
var intropage = false
function viewcounter0(callback){
      jQuery('#whitewrap').show();
        callback(viewcounter2);
}
function viewcounter1(callback){

      jQuery('.thanks_button_div').load(' .thanks_button_div');
      setTimeout(function () {
        callback();
      }, 1000);
}
function viewcounter2(){
      jQuery('#whitewrap').hide();
        jQuery("#arrow_bottom").hide();
        jQuery('.thanks_button_div').show();
        jQuery('.thanks_button_div').find('input').css("cssText", "height: 100vh !important;");
        jQuery('.thanks_button_div').find('input').css('fontSize' , '100vh');
        jQuery('.thanks_button_div').find('input').css('width' , '100vw');
        jQuery('.thanks_button_div').find('input').css('color' , 'black');
        jQuery('.thanks_button_div').find('input').css('backgroundColor' , 'white');
        jQuery('.thanks_button_div').find('input').css('position' , 'fixed');
        jQuery('.thanks_button_div').find('input').css('left' , '0');
        jQuery('.thanks_button_div').find('input').css('top' , '0');
        jQuery('.thanks_button_div').find('input').css('pointerEvents' , 'none');
      setTimeout(function () {
      viewcounter0(viewcounter1);
      }, 3000);
}
    jQuery("#counter").click(function () {

      jQuery('#topshadow').hide();
      jQuery('.image_top').css('opacity', '0');
      viewcounter0(viewcounter1);
      intropage = true
    })


    jQuery("#hideback").click(function () {
    })



}else
{jQuery('.entry-content').empty(); }
console.log(hrefpostnumber)
    if(!isNaN(hrefpostnumber)){
      if(!hrefpostnumber_recent ==9){
      window.location.replace("http://yhsong.com/orgd_2018_archive/");
    }
    }
////////////////////////////////////////////////////////////////////////////////////
var strMessage1 = document.getElementById("site-title-link");
    if(hrefpostnumber === '9'){
      jQuery('.recent-area').hide(); 
      jQuery('.content-area').css('width','100vw')
}else if(hrefpostnumber === 'introduction'){
}else if(hrefpostnumber === 'intro_count'){
}else
{
jQuery('.category-introduction').hide()
strMessage1.innerHTML = strMessage1.innerHTML.replace("*", "<span>").replace("/", "<span>");}
////////////////////////////////////////////////////////////////////////////////////
    if (window.history && window.history.pushState) {

    $(window).on('popstate', function() {
      var hashLocation = location.hash;
      var hashSplit = hashLocation.split("#!/");
      var hashName = hashSplit[1];
      if(hrefpostnumber == 'orgd.org'){
      history.pushState('',"",'http://yhsong.com/orgd_2018_archive/')

      jQuery('.entry-content').empty();
      jQuery(".back").hide();
      jQuery("article").show();
      jQuery('#post-9').hide();
      jQuery(".column").show();
      jQuery("#index").show(); 
      jQuery("#index").css({'top': '0vh','height': '50vh'});
      jQuery(".site-title").show();

      jQuery("article").css('width', '100%');
      jQuery("article").find('a').css('width', '50%');
      jQuery("article").find('header').css('width', '50%');
      jQuery("article").find("img").css({'width':'100%', 'marginLeft':'0%'});
      jQuery("article").find("img").css({'left':'0'});
      jQuery('#posts').css('marginTop', posttop);
      jQuery("#posts").css('paddingTop', '0');
      jQuery("#indexwhite").css('marginLeft', '0%');


      if(window.innerWidth/window.innerHeight< 86/100){
      jQuery("#index").css("transform", "scaleY(1)");}

      jQuery("#indexwhite").css('height', '12vh');
      jQuery("#index").css('height', '50vh');
      jQuery("#index").css('paddingBottom', '20.12vh');;
      jQuery("#index").css('backgroundImage', 'linear-gradient(black 85%, white )');
      jQuery(".category-test").find('header').find('p').css('width', '20%');
    }

    });

  }

////////////////////////////////////////////////////////////////////////////////////
if(hrefpostnumber === '9'){
}else if(hrefpostnumber === 'introduction'){
}else if(hrefpostnumber === 'intro_count'){
}else
{
    jQuery("article").click(function () {
    idname = jQuery(this).attr('id').split("-")[1];
    history.pushState({urlPath:'http://yhsong.com/orgd_2018_archive/'+idname+'/'},"",'http://yhsong.com/orgd_2018_archive/'+idname+'/')

      jQuery(".back").show();
      jQuery("article").hide();
      jQuery(".column").hide();
      jQuery(".site-title").hide();

      jQuery(this).show();
      jQuery(this).css('width', '100%');
      jQuery(this).find('a').css('width', '100%');
      jQuery(this).find('header').css('width', '100%');
      jQuery(this).css('width', jQuery('#index').width());
      jQuery(this).find("img").css({'width':'100%'});
      if(jQuery(this).attr('id')== 'post-14'){
      jQuery(this).find("img").css({'width':'70%'})
      jQuery(this).find("img").css({'left':'15%'})
      }

      if(window.innerWidth/window.innerHeight< 86/100){
      jQuery("#index").css("transform", "scaleY(0.1)");}

      jQuery("#posts").css('marginTop', '7vh');
      jQuery("#posts").css('paddingTop', '0.5vh');
      jQuery("#indexwhite").css('height', '6.8vh');
      jQuery("#index").css('height', '7vh');
      jQuery("#index").css('paddingBottom', '0vh');;
      jQuery("#index").css('backgroundImage', 'linear-gradient(black 50%, white )');
      jQuery('header').find('p').css("cssText", "width:50% !important");


    var id_post = idname;
    var appendhere = jQuery(this).find('.entry-content')

    $.ajax({
        type: 'POST',
        url: ajax_object.ajax_url,
        data: {
            'post_id': id_post,
            'action': 'f711_get_post_content' //this is the name of the AJAX method called in WordPress
        }, success: function (result) {
          if(appendhere.is(':empty') ) {
           appendhere.append( result );
         }
        },
        error: function () {
            alert("error");
        }
        });
    });
  }
////////////////////////////////////////////////////////////////////////////////////

    jQuery(".back").click(function () {
      
      history.pushState('',"",'http://yhsong.com/orgd_2018_archive/')

      jQuery('.entry-content').empty();
      jQuery(".back").hide();
      jQuery("article").show();
      jQuery('#post-9').hide();
      jQuery(".column").show();
      jQuery("#index").show();  
      jQuery("#index").css({'top': '0vh','height': '50vh'});
      jQuery(".site-title").show();

      if(window.innerWidth/window.innerHeight< 86/100){
      jQuery("#index").css("transform", "scaleY(1)");}

      jQuery("article").css('width', '100%');
      jQuery("article").find('a').css('width', '50%');
      jQuery("article").find('header').css('width', '50%');
      jQuery("article").find("img").css({'width':'100%', 'marginLeft':'0%'});
      jQuery('#posts').css('marginTop', posttop);
      jQuery("#posts").css('paddingTop', '0');
      jQuery("#indexwhite").css('marginLeft', '0%');

      jQuery("#indexwhite").css('height', '12vh');
      jQuery("#index").css('height', '50vh');
      jQuery("#index").css('paddingBottom', '20.12vh');;
      jQuery("#index").css('backgroundImage', 'linear-gradient(black 85%, white )');
      jQuery(".category-test").find('header').find('p').css('width', '20%');


    });
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
      var width = window.innerWidth
      var h = window.innerHeight
      var prevtime_array =[]
      var location_array=[]
      var scroll_array=[]

      var recent_parent = document.getElementsByClassName("recent");
      var recent = document.getElementsByClassName("recent_img");
      var archived_time = document.getElementsByClassName("archived_time");

        var rh = jQuery('.recent-area').height();
        var rw = jQuery('.recent-area').width();



                var heightvalue = [ 14.5/15.5*rh, 13.5/15.5*rh, 12.5/15.5*rh, 11.5/15.5*rh, 10.5/15.5*rh, 9.5/15.5*rh, 8.5/15.5*rh, 7.5/15.5*rh, 6.5/15.5*rh, 5.5/15.5*rh, 5.1/15.5*rh, 4.7/15.5*rh, 4.3/15.5*rh, 3.9/15.5*rh, 3.5/15.5*rh, 3.1/15.5*rh, 2.7/15.5*rh, 2.3/15.5*rh]
                var rightvalue = [ 12/13*rw, 11/13*rw, 10/13*rw, 9/13*rw, 8/13*rw, 7/13*rw, 6/13*rw, 5/13*rw, 4/13*rw, 3/13*rw, 2.6/13*rw, 2.2/13*rw, 1.8/13*rw, 1.4/13*rw, 1/13*rw, 0.6/13*rw, 0.2/13*rw, 0.2/13*rw]
                var pngUrl;
                var prevtime;
                        for (var i = 16; i >= 0; i--) {
                          jQuery(recent_parent[i]).animate({
                            top:h-heightvalue[i]+"px",
                            right:rightvalue[i]+"px"}, { duration: 500});
                        }        
if(!isMobile){
  if(!intropage){
      pre_report();
      setTimeout(function () {
          report(after_report);
      }, 3000);}
    }



////////////////////////////////////////////////////////////////////////////////////
image1show();

function image1show(){
  jQuery("#image_top1").fadeIn(500);
      setTimeout(function () {image2show()}, 3000);
}
function image2show(){
  jQuery("#image_top2").fadeIn(500);
      setTimeout(function () {image3show()}, 3000);
}
function image3show(){
  jQuery("#image_top1").fadeOut(500);
  jQuery("#image_top2").fadeOut(500);
      setTimeout(function () {image1show()}, 3000);
}

// videoplay();
// var videoplaynum = 0
// var arrayset
// function videoplay(){
//   videoplaynum++
//   arrayset = videoplaynum % 2 +1
//   console.log(arrayset)

//         selected_video ='video_top' + arrayset
//         jQuery('.video_top').hide(); 
//         jQuery("#" + selected_video).currentTime = 0;
//         jQuery("#" + selected_video).show();
//         jQuery("#" + selected_video).trigger('play');
//       setTimeout(function () {
//           videoplay();
//       }, 30000);
// }


////////////////////////////////////////////////////////////////////////////////////
  function pre_report() {
      html2canvas(document.querySelector(".content-area"),{
      }).then(canvas => {
                pngUrl = canvas.toDataURL('image/jpeg', 0.3);
                prevtime = new Date().toLocaleTimeString();
                let location = window.location.href;
                let scroll = jQuery('.content-area').scrollTop();

                  for (var i = 0; i < 17; i++) {
                      // jQuery(recent_parent[i]).find( '.recent_img' ).css("background-image", 'url('+pngUrl+')');
                      location_array.unshift( location );
                      // jQuery(recent_parent[i]).find( '.archived_time' ).html(prevtime);
                      scroll_array.unshift( scroll );
                    }
              })
   return false;
          }

var recentarea_position = 0
var zincount = 16;
var recenttop
var recentleft 
$( window ).resize(function() {
        width = window.innerWidth
        h = window.innerHeight

        rh = jQuery('.recent-area').height();
        rw = jQuery('.recent-area').width();
                heightvalue = [ 14.5/15.5*rh, 13.5/15.5*rh, 12.5/15.5*rh, 11.5/15.5*rh, 10.5/15.5*rh, 9.5/15.5*rh, 8.5/15.5*rh, 7.5/15.5*rh, 6.5/15.5*rh, 5.5/15.5*rh, 5.1/15.5*rh, 4.7/15.5*rh, 4.3/15.5*rh, 3.9/15.5*rh, 3.5/15.5*rh, 3.1/15.5*rh, 2.7/15.5*rh, 2.3/15.5*rh]
                rightvalue = [ 12/13*rw, 11/13*rw, 10/13*rw, 9/13*rw, 8/13*rw, 7/13*rw, 6/13*rw, 5/13*rw, 4/13*rw, 3/13*rw, 2.6/13*rw, 2.2/13*rw, 1.8/13*rw, 1.4/13*rw, 1/13*rw, 0.6/13*rw, 0.2/13*rw, 0.2/13*rw]

                        for (var i = 16; i >= 0; i--) {
                          jQuery(recent_parent[i]).css({
                            top:h-heightvalue[i]+"px",
                            right:rightvalue[i]+"px"});
                        }    
});


  function report(callback) {
        html2canvas(document.querySelector(".content-area"),{
      }).then(canvas => {
                pngUrl = canvas.toDataURL('image/jpeg', 0.3);
                          jQuery(recent_parent[0]).find( '.recent_img' ).css("background-image", 'url('+pngUrl+')');
                prevtime = new Date().toLocaleTimeString();
                          jQuery(recent_parent[0]).find( '.archived_time' ).html(prevtime);
                var location = window.location.href;
                let scroll = jQuery('.content-area').scrollTop();

                location_array.unshift( location );
                scroll_array.unshift( scroll );
                let recent = document.getElementsByClassName("recent_img");
                let archived_time = document.getElementsByClassName("archived_time");

                });
                  location_array=location_array.slice(0, 16)
                  scroll_array=scroll_array.slice(0, 16)


    var eElement = document.getElementsByClassName("recent-area")[0]
    var newFirstElement = recent_parent[16]
    eElement.insertBefore(newFirstElement, eElement.firstChild);
    zincount++
    callback();
    return false;
                }

  function after_report() {recentarea_position++
                          recenttop = jQuery('.recent-area').offset().top;
                          recentleft = jQuery('.recent-area').offset().left;
                          rw = jQuery('.recent-area').width();
                          jQuery(recent_parent[0]).css("z-index", zincount);
                          recent_parent[0].style.top=0-recenttop+"px",
                          recent_parent[0].style.right=rw+(recentleft-jQuery('.content-area').width())+"px"

        jQuery(recent_parent[0]).show();
        jQuery(recent_parent[16]).fadeOut(100);
                          jQuery('.recent-area').animate({
                              top:recentarea_position*1/15.5*h+"px",
                              left:recentarea_position*1/13*rw+0.865*h+"px"}, { duration: 800});
        // jQuery(recent_parent[15]).css({opacity: '0.05'})


        setTimeout(function () {
        report(after_report);
        }, 3000);
   return false;

    }


////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////

    var hrefname_recent;
    var hrefpostnumber_recent
    var k
    var click_before
    var recent_clicked = false


    jQuery(".recent").click(function() {
      recent_clicked=true
          k = jQuery(this).index();
          if(k>0){
                for (var i = 0; i <= k; i++) {
                  jQuery(recent_parent[i]).addClass("click_before")
                }  }  
          recent_between_click1(k);
      return false;
    });

var  recenttop2
var recentleft2
    function recent_between_click1(k) {
                          recenttop2 = jQuery('.recent-area').offset().top;
                          recentleft2 = jQuery('.recent-area').offset().left;

                          click_before = document.getElementsByClassName("click_before");
                          jQuery('.click_before').animate({
                              top:0-recenttop2+"px",
                              right:rw+(recentleft2-jQuery('.content-area').width())+"px"
                          }, { duration: 500, queue: false });

                        for (var i = 16; i >= k+1; i--) {
                          jQuery(recent_parent[i]).animate({
                              top:h-heightvalue[i-k-1]-recenttop2+"px",
                              right:rightvalue[i-k-1]+(recentleft2-jQuery('.content-area').width())+"px"
                          }, { duration: 500, queue: false });
                        }    
                        jQuery('.click_before').promise().done(function(){
                          recent_between_click2(k)
                        });
   return false;
    }


    function recent_between_click2(k) {
        jQuery('.click_before').hide();
        jQuery('.click_before').insertAfter(jQuery(recent_parent[16]));
        jQuery('.click_before').promise().done(function(){
        recent_click(k)
        });
   return false;
    }


    function recent_click(k) {
    jQuery('.click_before').removeClass("click_before");
    document.getElementsByClassName('content-area')[0].scrollTo(scroll_array[k],0);
    
    // jQuery('.content-area').css({scrollTop: scroll_array[k]});
    hrefname_recent = location_array[k].split("/");
    hrefpostnumber_recent = hrefname_recent[hrefname_recent.length-2]
    hrefpost_recent = 'post-'+hrefname_recent[hrefname_recent.length-2]

    if(!isNaN(hrefpostnumber_recent)){
      if(!hrefpostnumber_recent ==9){/*so it's number*/
      // alert("nd")
      jQuery(".back").show();
      jQuery("article").hide();
      jQuery("#"+hrefpost_recent).show();
      jQuery("#"+hrefpost_recent).css('width', jQuery('.content-area').width());


      var id_post = 5;
      var appendhere = jQuery("#"+hrefpost_recent).find('.entry-content')
    history.pushState({urlPath:'http://yhsong.com/orgd_2018_archive/'+hrefpostnumber_recent+'/'},"",'http://yhsong.com/orgd_2018_archive/'+hrefpostnumber_recent+'/')
    $.ajax({
        type: 'POST',
        url: ajax_object.ajax_url,
        data: {
            'post_id': id_post,
            'action': 'f711_get_post_content' //this is the name of the AJAX method called in WordPress
        }, success: function (result) {
          if(appendhere.is(':empty') ) {
           appendhere.append( result );
         }
        },
        error: function () {
            alert("error");
        }
    });
}
        }else{   
        history.pushState({urlPath:'http://yhsong.com/orgd_2018_archive/'},"",'http://yhsong.com/orgd_2018_archive/')
          // alert("n")
      history.pushState('',"",'http://yhsong.com/orgd_2018_archive/')

      jQuery('.entry-content').empty();
      jQuery(".back").hide();
      jQuery("article").show();
      jQuery('#post-9').hide();
      jQuery(".column").show();
      jQuery("#index").show();  
      jQuery("#index").css({'top': '0vh','height': '50vh'});
      jQuery(".site-title").show();

      jQuery("article").css('width', '100%');
      jQuery("article").find('a').css('width', '50%');
      jQuery("article").find('header').css('width', '50%');
      jQuery("article").find("img").css({'width':'100%', 'marginLeft':'0%'});
      jQuery('#posts').css('marginTop', posttop);
      jQuery("#posts").css('paddingTop', '0');
      jQuery("#indexwhite").css('marginLeft', '0%');


      if(window.innerWidth/window.innerHeight< 86/100){
      jQuery("#index").css("transform", "scaleY(1)");}

      jQuery("#indexwhite").css('height', '12vh');
      jQuery("#index").css('height', '50vh');
      jQuery("#index").css('paddingBottom', '20.12vh');;
      jQuery("#index").css('backgroundImage', 'linear-gradient(black 85%, white )');
      jQuery(".category-test").find('header').find('p').css('width', '20%');
        }
    recent_clicked = false
   return false;

  }

////////////////////////////////////////////////////////////////////////////////////


jQuery('.recent').on('mouseover', function(e){
  jQuery('this').addClass('hoveredrecent')
})
jQuery('.recent').on('mouseout', function(e){
  jQuery('this').removeClass('hoveredrecent')
})


////////////////////////////////////////////////////////////////////////////////////



      var w = window.innerWidth
      var h = window.innerHeight
      var recentwidth = jQuery('.recent-area').width();
      var recentheight = jQuery('.recent-area').height();
////////////////////////////////////////////////////////////////////////////////////
if(window.innerWidth/window.innerHeight < 86/100){
  var post_height = jQuery('#posts').innerHeight()+ jQuery('#index').innerHeight();
  jQuery('.content-area').css('height',post_height) 
  jQuery('#content').css('height',post_height) 
  // jQuery('#content').css('height',post_height)
  // jQuery('.content-area').css('overflowY','hidden')
  // jQuery('body').css('height',post_height)
}
////////////////////////////////////////////////////////////////////////////////////
jQuery("#cat_test").click(function(){
  jQuery('#posts').find('article').hide();
  jQuery('#posts').find('.category-test').show();
});
jQuery("#cat_task").click(function(){
  jQuery('#posts').find('article').hide();
  jQuery('#posts').find('.category-task').show();
});
jQuery("#cat_program").click(function(){
  jQuery('#posts').find('article').hide();
  jQuery('#posts').find('.category-program').show();
});
})
