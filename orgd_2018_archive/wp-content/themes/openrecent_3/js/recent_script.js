
jQuery(document).ready(function($){
             jQuery(window).load(function() {
                 console.log("Time until everything loaded: ", Date.now()-timerStart);
             });



      var posttop = jQuery('#index').innerHeight();
      jQuery('#posts').css('marginTop', posttop);


jQuery('.entry-content').empty();
    var hrefname = window.location.href.split("/");
    var hrefpostnumber = hrefname[hrefname.length-2]

    if(!isNaN(hrefpostnumber)){
      window.location.replace("http://localhost:8888/openrecent/");
    }
////////////////////////////////////////////////////////////////////////////////////
    if (window.history && window.history.pushState) {

    $(window).on('popstate', function() {
      var hashLocation = location.hash;
      var hashSplit = hashLocation.split("#!/");
      var hashName = hashSplit[1];

      if(hrefpostnumber=='openrecent'){
      history.pushState('',"",'/openrecent/')
      jQuery('#posts').find('img').css('width', '100%');
      jQuery('.entry-content').empty();
      jQuery(".back").hide();
      jQuery("article").show();
    }

    });

  }

////////////////////////////////////////////////////////////////////////////////////






    jQuery("article").click(function () {

    idname = jQuery(this).attr('id').split("-")[1];
    history.pushState({urlPath:'/'+idname+'/'},"",'/openrecent/'+idname+'/')

      jQuery(".back").show();
      jQuery("article").hide();
      jQuery(this).show();
      jQuery(this).find('img').css('width', '100%');
      jQuery(this).find('img').css('height', '100%');

    var id_post = 5;
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
////////////////////////////////////////////////////////////////////////////////////

    jQuery(".back").click(function () {
      history.pushState('',"",'/openrecent/')

      jQuery('#posts').find('img').css('width', '100%');
      jQuery(this).find('img').css('height', '100%');
      jQuery('.entry-content').empty();
      jQuery(".back").hide();
      jQuery("article").show();

    });
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
      var width = window.innerWidth
      var h = window.innerHeight

      var counter = 0
      var time
      var classname

      var pngurl_array =[]
      var prevtime_array =[]
      var location_array=[]
      var scroll_array=[]
      var reportsettimeout

      var recent_parent = document.getElementsByClassName("recent");
      var recent = document.getElementsByClassName("recent_img");
      var archived_time = document.getElementsByClassName("archived_time");

      var clicked_number = 0


        var count = 0
        var report_time
        var sizearray = [21,21,21,21,21,21,21,21,21,21]
        var times = [1,1,1,1,1,1,1,1,1,1];
        var heightval

        var rh = jQuery('.recent-area').height();
        var rw = jQuery('.recent-area').width();
        var rr = jQuery('.recent-area').width();
        var reporting



        var c_ratio = jQuery('.content-area').width()/jQuery('.content-area').height();
                         var heightvalue = [
                          13.5/15.5*rh,
                          12.5/15.5*rh,
                          11.5/15.5*rh,
                          10.5/15.5*rh,
                          9.5/15.5*rh,
                          8.5/15.5*rh,
                          7.5/15.5*rh,
                          6.5/15.5*rh,
                          5.5/15.5*rh,
                          5.1/15.5*rh,
                          4.7/15.5*rh,
                          4.3/15.5*rh,
                          3.9/15.5*rh,
                          3.5/15.5*rh,
                          3.1/15.5*rh,
                          2.7/15.5*rh,
                          2.3/15.5*rh
                          ]
                          // var rightstep1 = 
                         var rightvalue = [
                          11/13*rw,
                          10/13*rw,
                          9/13*rw,
                          8/13*rw,
                          7/13*rw,
                          6/13*rw,
                          5/13*rw,
                          4/13*rw,
                          3/13*rw,//6-1.5
                          2.6/13*rw,
                          2.2/13*rw,
                          1.8/13*rw,
                          1.4/13*rw,
                          1/13*rw,
                          0.6/13*rw,
                          0.2/13*rw,
                          0.2/13*rw
                          ]

$( window ).resize(function() {
      var width = window.innerWidth
      var h = window.innerHeight
        rh = jQuery('.recent-area').height();
        rw = jQuery('.recent-area').width();
        rr = jQuery('.recent-area').width(); 
                         for (var i = 16; i >= 0; i--) {
                          jQuery(recent_parent[i]).css({height:heightvalue[i]+"px"});
                          jQuery(recent_parent[i]).css({width:heightvalue[i]*c_ratio+"px"});
                          jQuery(recent_parent[i]).css({right:rightvalue[i]+"px"});
                          jQuery(recent_parent[i]).css({bottom:'0'});
                        }     


        c_ratio = jQuery('.content-area').width()/jQuery('.content-area').height();
                         heightvalue = [
                          13.5/15.5*rh,
                          12.5/15.5*rh,
                          11.5/15.5*rh,
                          10.5/15.5*rh,
                          9.5/15.5*rh,
                          8.5/15.5*rh,
                          7.5/15.5*rh,
                          6.5/15.5*rh,
                          5.5/15.5*rh,
                          5.1/15.5*rh,
                          4.7/15.5*rh,
                          4.3/15.5*rh,
                          3.9/15.5*rh,
                          3.5/15.5*rh,
                          3.1/15.5*rh,
                          2.7/15.5*rh,
                          2.3/15.5*rh
                          ]
                          // var rightstep1 = 
                         rightvalue = [
                          11/13*rw,
                          10/13*rw,
                          9/13*rw,
                          8/13*rw,
                          7/13*rw,
                          6/13*rw,
                          5/13*rw,
                          4/13*rw,
                          3/13*rw,//6-1.5
                          2.6/13*rw,
                          2.2/13*rw,
                          1.8/13*rw,
                          1.4/13*rw,
                          1/13*rw,
                          0.6/13*rw,
                          0.2/13*rw,
                          0.2/13*rw
                          ]   
});
                var pngUrl;
                var prevtime;

                        for (var i = 16; i >= 0; i--) {
                          jQuery(recent_parent[i]).animate({height:heightvalue[i]+"px"}, { duration: 1000, queue: false });
                          jQuery(recent_parent[i]).animate({width:heightvalue[i]*c_ratio+"px"}, { duration: 1000, queue: false });
                          jQuery(recent_parent[i]).animate({right:rightvalue[i]+"px"}, { duration: 1000, queue: false });
                          // jQuery(recent_parent[i]).animate({top:(rh-heightvalue[i])/4*3+"px"}, { duration: 1000, queue: false });
                          jQuery(recent_parent[i]).animate({bottom:'0'}, { duration: 1000, queue: false });
                        }        

      pre_report();
      setTimeout(function () {
          report();
      }, 3000);










var innerhtml_content
  function pre_report() {
  jQuery("#primary").css('opacity', 1);
      html2canvas(document.querySelector(".content-area"),{
      }).then(canvas => {
                pngUrl = canvas.toDataURL('image/jpeg', 0.5);
                prevtime = new Date().toLocaleTimeString();
                let location = window.location.href;
                let scroll = jQuery('.content-area').scrollTop();

                  for (var i = 0; i < 17; i++) {
                      jQuery(recent_parent[i]).find( '.recent_img' ).css("background-image", 'url('+pngUrl+')');
                      location_array.unshift( location );
                      jQuery(recent_parent[i]).find( '.archived_time' ).html(prevtime);
                      scroll_array.unshift( scroll );
                    }


              })

          }

  function report() {
    $('#cover_whole').show();
        html2canvas(document.querySelector(".content-area"),{
      }).then(canvas => {
                pngUrl = canvas.toDataURL('image/jpeg', 0.5);
                          jQuery(recent_parent[0]).find( '.recent_img' ).css("background-image", 'url('+pngUrl+')');
                prevtime = new Date().toLocaleTimeString();
                          jQuery(recent_parent[0]).find( '.archived_time' ).innerHTML =' prevtime';
                changed = true
                var location = window.location.href;
                let scroll = jQuery('.content-area').scrollTop();

                location_array.unshift( location );
                scroll_array.unshift( scroll );
                let recent = document.getElementsByClassName("recent_img");
                let archived_time = document.getElementsByClassName("archived_time");

                });

                  location_array=location_array.slice(0, 16)
                  scroll_array=scroll_array.slice(0, 16)
                  inbetween_report() 
                }
var changed=false
var zincount = 16
function inbetween_report() {
  ///16 to front
  var eElement = document.getElementsByClassName("recent-area")[0] // some E DOM instance
  var newFirstElement = recent_parent[16] //element which should be first in E
  eElement.insertBefore(newFirstElement, eElement.firstChild);
  zincount++
                          jQuery(recent_parent[0]).css("z-index", zincount);
                          recent_parent[0].style.height = h+"px"
                          recent_parent[0].style.width = rh*c_ratio+"px"
                          recent_parent[0].style.bottom = "0px"
                          recent_parent[0].style.right = jQuery('.recent-area').width()+"px"

                  after_report();
                }



  function after_report() {
    changed=false
////animate
jQuery(recent_parent[0]).show();
jQuery(recent_parent[16]).fadeOut(100);
                        for (var i = 9; i >= 0; i--) {
                          jQuery(recent_parent[i]).find('.recent_img').animate({opacity:1}, { duration: 1000, queue: false });
                        }
                          jQuery(recent_parent[16]).find('.recent_img').animate({opacity:0}, { duration: 1000, queue: false });
                          jQuery(recent_parent[15]).find('.recent_img').animate({opacity:0.1}, { duration: 1000, queue: false });
                          jQuery(recent_parent[14]).find('.recent_img').animate({opacity:0.2}, { duration: 1000, queue: false });
                          jQuery(recent_parent[13]).find('.recent_img').animate({opacity:0.3}, { duration: 1000, queue: false });
                          jQuery(recent_parent[12]).find('.recent_img').animate({opacity:0.4}, { duration: 1000, queue: false });
                          jQuery(recent_parent[11]).find('.recent_img').animate({opacity:0.5}, { duration: 1000, queue: false });
                          jQuery(recent_parent[10]).find('.recent_img').animate({opacity:0.6}, { duration: 1000, queue: false });

                        for (var i = 16; i >= 0; i--) {
                          jQuery(recent_parent[i]).animate({height:heightvalue[i]+"px"}, { duration: 1000, queue: false });
                          jQuery(recent_parent[i]).animate({width:heightvalue[i]*c_ratio+"px"}, { duration: 1000, queue: false });
                          jQuery(recent_parent[i]).animate({right:rightvalue[i]+"px"}, { duration: 1000, queue: false });
                          // jQuery(recent_parent[i]).animate({top:(rh-heightvalue[i])/2+"px"}, { duration: 1000, queue: false });
                          jQuery(recent_parent[i]).animate({bottom:'0'}, { duration: 1000, queue: false });
                        }
if(!recent_clicked){
        reportsettimeout = setTimeout(function () {
        report();
        }, 3000);
    }else{
    }
    $('#cover_whole').hide();

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
    $('#cover_whole').show();
      recent_clicked=true
      clearTimeout(reportsettimeout);
          k = jQuery(this).index();
          clicked_number = k;
          if(k>0){
                for (var i = 0; i <= k; i++) {
                  jQuery(recent_parent[i]).addClass("click_before")
                }  }  
          recent_between_click1(k);
    });



    function recent_between_click1(k) {
    click_before = document.getElementsByClassName("click_before");
                          jQuery('.click_before').animate({
                              height: h+"px",
                              width:rh*c_ratio+"px",
                              right:jQuery('.recent-area').width()+"px"
                          }, { duration: 1000, queue: false });

                        for (var i = 16; i >= k+1; i--) {
                          jQuery(recent_parent[i]).animate({
                              height:heightvalue[i-k]+"px",
                              width:heightvalue[i-k]*c_ratio+"px",
                              right:rightvalue[i-k]+"px"
                          }, { duration: 1000, queue: false });
                        }    
                        jQuery('.click_before').promise().done(function(){
                          recent_between_click2(k)
                        });
    }


    function recent_between_click2(k) {
        jQuery('.click_before').hide();
        jQuery('.click_before').insertAfter(jQuery(recent_parent[16]));
      for (var i = click_before.length - 1; i >= 0; i--) {
      } 
        jQuery('.click_before').promise().done(function(){
        recent_click(k)
        });
    }


    function recent_click(k) {
    $('#cover_whole').hide();
    jQuery('.click_before').removeClass("click_before");


    jQuery('.content-area').css({scrollTop: scroll_array[k]});
    hrefname_recent = location_array[k].split("/");
    hrefpostnumber_recent = hrefname_recent[hrefname_recent.length-2]
    hrefpost_recent = 'post-'+hrefname_recent[hrefname_recent.length-2]

    if(!isNaN(hrefpostnumber_recent)){/*so it's number*/
      // alert("nd")
      jQuery(".back").show();
      jQuery("article").hide();
      jQuery("#"+hrefpost_recent).show();
      jQuery("#"+hrefpost_recent).find('img').css('width', '100%');
      jQuery("#"+hrefpost_recent).find('img').css('height', 'auto');
      var id_post = 5;
      var appendhere = jQuery("#"+hrefpost_recent).find('.entry-content')
    history.pushState({urlPath:'/'+hrefpostnumber_recent+'/'},"",'/openrecent/'+hrefpostnumber_recent+'/')
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

        }else{   
        history.pushState({urlPath:'/'},"",'/openrecent/')
          // alert("n")
      jQuery('#posts').find('img').css('width', '100%');
      jQuery("#"+hrefpost_recent).find('img').css('height', '100%');
      jQuery('.entry-content').empty();
      jQuery(".back").hide();
      jQuery("article").show();
        }
    recent_clicked = false
      clearTimeout(reportsettimeout);
      reportsettimeout = setTimeout(function () {
          report();
      }, 1000);

  }

////////////////////////////////////////////////////////////////////////////////////


jQuery('.recent').on('mouseover', function(e){
  jQuery('this').addClass('hoveredrecent')
})
jQuery('.recent').on('mouseout', function(e){
  jQuery('this').removeClass('hoveredrecent')
})


////////////////////////////////////////////////////////////////////////////////////

setInterval(function() {
  document.getElementById("real_time").innerHTML = new Date().toLocaleTimeString()
}, 1000)


      var w = window.innerWidth
      var h = window.innerHeight
      var recentwidth = jQuery('.recent-area').width();
      var recentheight = jQuery('.recent-area').height();
////////////////////////////////////////////////////////////////////////////////////
//     jQuery("#button_ys").click(function () {
//       recent_clicked=true
//       clearTimeout(reportsettimeout);
//     $('#cover_whole').css('backgroundColor', 'black');
//     $('#cover_whole').show(100);
//     rotate();
//     })
//     function rotate(){
//       $('#cover_whole').animateRotate(90);
//     }
// $.fn.animateRotate = function(angle) {
//       jQuery('.recent-area').hide();
//       jQuery('.content-area').hide();
//     var $elem = $(this);
//     $({deg: 0}).animate({deg: angle}, {
//       step: function(now) {
//         $elem.css({
//            transform: 'rotateY(' + now + 'deg)'
//          });
//       },
//     });
//       $('#ys_artwork').animateRotate_back(0);
// };
// $.fn.animateRotate_back = function(angle) {
//     $('#ys_artwork').show();
//     var $elem_back = $(this);
//     $({deg: -90}).animate({deg: angle}, {
//       step: function(now) {
//         $elem_back.css({
//            transform: 'rotateY(' + now + 'deg)'
//          });
//       },
//     });
// };


////////////////////////////////////////////////////////////////////////////////////
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}


    var number = 3
    var arrayset1=[1, 2, 3, 4, 5]
    var arrayset2=[6, 7, 8]
    var arrayset3=[9, 10]
    var arrayset4=[11, 12, 13]
// Used like so
arrayset1 = shuffle(arrayset1);
arrayset2 = shuffle(arrayset2);
arrayset3 = shuffle(arrayset3);
// arrayset4 = shuffle(arrayset4);



var selected_man
var pre_man_array = [1, 2]
var man_array = [1, 2, 3, 4, 5, 6, 7]
var pre_man_random;
var man_random 

    if(number<=4){
      for (var i = number; i >= 0; i--) {
        selected_man = $('#man_wrap' + arrayset1[i])
        man_animate(selected_man)
      }
    }
    else if(number<=7){
      for (var i = 4; i >= 0; i--) {
        selected_man = $('#man_wrap' + arrayset1[i])
        man_animate(selected_man)
      }
      for (var i = number; i >= 5; i--) {
        selected_man = $('#man_wrap' + arrayset2[i-5])
        man_animate(selected_man)
      }
    }
    else if(number<=9){
      for (var i = 4; i >= 0; i--) {
        selected_man = $('#man_wrap' + arrayset1[i])
        man_animate(selected_man)
      }
      for (var i = 7; i >= 5; i--) {
        selected_man = $('#man_wrap' + arrayset2[i-5])
        man_animate(selected_man)
      }
      for (var i = number; i >= 8; i--) {
        selected_man = $('#man_wrap' + arrayset3[i-8])
        man_animate(selected_man)
      }
    }
    else{
      for (var i = 4; i >= 0; i--) {
        selected_man = $('#man_wrap' + arrayset1[i])
        man_animate(selected_man)
      }
      for (var i = 7; i >= 5; i--) {
        selected_man = $('#man_wrap' + arrayset2[i-5])
        man_animate(selected_man)
      }
      for (var i = 10; i >= 8; i--) {
        selected_man = $('#man_wrap' + arrayset3[i-8])
        man_animate(selected_man)
      }
      for (var i = number; i >= 11; i--) {
        selected_man = $('#man_wrap' + arrayset4[i-11])
        man_animate(selected_man)

      }

    }
function man_animate(selected_man){
  console.log(pre_man_array)
  pre_man_random = pre_man_array[Math.floor(Math.random() * pre_man_array.length)];
  man_random = man_array[Math.floor(Math.random() * man_array.length)];
  man_random_result = 'man' + pre_man_random +'_'+man_random
  console.log(man_random_result)

  jQuery(selected_man).find('.pre_man1').remove();
  jQuery(selected_man).find('.pre_man2').remove();
  jQuery(selected_man).append('<div class="pre_man'+pre_man_random+'"></div>');
  jQuery(selected_man).find('.man').addClass(man_random_result);
  setTimeout(function(){ man_animate_after(selected_man); }, 3000);
  
}
function man_animate_after(selected_man){

  jQuery(selected_man).find('.man').fadeIn(300);
  jQuery('#ys_artwork').addClass('ocr_image');
}


(function () {
  'use strict';
  var video = document.querySelector('video'),
    canvas, img;

  function recognizeImage(image) {
    console.log(image)
    Tesseract.recognize(image)
      .progress(message => document.getElementById('ocr_result').innerHTML = "<h3>Recognizing..</h3>")
      .then(function (result) {
        document.getElementById('ocr_result').innerHTML = result.html;
  // var contentArea = document.getElementById('ocr_result')
  // contentArea.innerHTML = result.text;
        document.getElementById('confidence').innerHTML = `Recognition confidence: ${result.confidence}`;
      })
      .catch(err => console.error(err))
  }
var pngUrl
     function capture() {
      html2canvas(document.querySelector("#ys_artwork"),{
      }).then(canvas => {
                pngUrl = canvas.toDataURL('image/jpeg', 0.5);
        recognizeImage( canvas.toDataURL('image/jpeg', 0.5));

              })

          }

$( document ).ready(function() {
  setTimeout(function(){ capture(); }, 6000);
    
});
})();

////////////////////////////////////////////////////////////////////////////////////

})
