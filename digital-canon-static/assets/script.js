
// jQuery('.site-content').perfectScrollbar();
var isMobile = false; //initiate as false
// device detection
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
    isMobile = true;
}

jQuery( document ).ready(function() {



if(!isMobile){

if(window.innerHeight<700 && window.innerWidth/window.innerHeight < 81/95){
    isMobile = true;
}
if(window.location.hash === ''){
        jQuery(' .top_title').css({'pointerEvents':'none'})
        setTimeout(block_top, 3000);
        window.location.hash = 'list';
}else{
        locationHashChanged()
}


var home = document.getElementsByClassName('home')[0]
if(home){
    var mobile_scroll_count = 0
}

///////////////////////////////////////////////
// scroll_proxy: replaces perfect-scrollbar entirely.
// A real, native, full-page overlay div with overflow-y:scroll gives proper
// momentum/trackpad scrolling. Its scrollTop is mirrored onto the margin-top
// of whichever content is currently active -- the same technique already used
// for .projecting_line on the front mosaic (window scroll -> marginTop).
///////////////////////////////////////////////
var $scrollProxy, $scrollProxySpacer;

if (!isMobile && home) {
    $scrollProxy = jQuery('<div id="scroll_proxy"></div>');
    $scrollProxySpacer = jQuery('<div id="scroll_proxy_spacer"></div>');

    $scrollProxy.append($scrollProxySpacer);
    jQuery('body').append($scrollProxy);
    console.log($scrollProxy);

    function scrollProxyTarget() {
        var h = window.location.hash.replace('#', '');

        if (h === 'backside' || h === 'backside_longlist' || h.indexOf('page') === 0) {
            return jQuery('.back_wrap .back').get(0);
        }

        if (!isNaN(h) && h !== '') {
            return jQuery('#front_content .front_wrap').get(0);
        }

        return null;
    }

    function scrollProxySync() {
        var t = scrollProxyTarget();
        var active = !!t;

        $scrollProxy.css('display', active ? 'block' : 'none');

        if (!active) return;

        var h = t.scrollHeight || window.innerHeight;
        $scrollProxySpacer.height(Math.max(h, window.innerHeight));
    }

    $scrollProxy.on('scroll', function () {
        var t = scrollProxyTarget();
        if (t) {
            t.style.marginTop = (-$scrollProxy.scrollTop()) + 'px';
        }
    });

    $scrollProxy.on('click', function (e) {
        $scrollProxy.css('pointer-events', 'none');

        var el = document.elementFromPoint(e.clientX, e.clientY);

        $scrollProxy.css('pointer-events', 'auto');

        if (el) {
            el.dispatchEvent(new MouseEvent('click', {
                bubbles: true,
                cancelable: true,
                clientX: e.clientX,
                clientY: e.clientY
            }));
        }
    });

    jQuery(window).on('hashchange', function () {
        $scrollProxy.scrollTop(0);

        var t = scrollProxyTarget();
        if (t) {
            t.style.marginTop = '0px';
        }

        setTimeout(scrollProxySync, 400);
    });

    jQuery(window).on('resize', scrollProxySync);

    setInterval(scrollProxySync, 1000);
    scrollProxySync();
}

back_intro_load();
///////////////////////////////////////////////
// topbuttons
///////////////////////////////////////////////


var projecting = false
var go_back_finished
var current_front_hash 

jQuery(' .go_btn_back ').click(function() {
    jQuery(' .top_title').css({'pointerEvents':'none'})
    setTimeout(block_top, 3000);


    current_front_hash = window.location.hash
    window.location.hash = 'backside';
    go_back()
});



jQuery('#intro_backside ').click(function() {
    jQuery(' .top_title').css({'pointerEvents':'none'})
    setTimeout(block_top, 3000);


    current_front_hash = window.location.hash
    window.location.hash = 'backside';
    go_back()
});



jQuery(' .intro_backside ').click(function() {
    window.location.href === "http://touchposter.xyz/digitalcanon/?page_id=474"
})



jQuery(' .go_btn_front ').click(function() {
    jQuery(' .top_title').css({'pointerEvents':'none'})
    setTimeout(block_top, 3000);


    setTimeout(hash_front, 2300);
    go_front()
});


function hash_front(){
    if(current_front_hash ){
        window.location.hash = current_front_hash;
    }else{
        window.location.hash = 'list';
    }
}
function block_top(){
    jQuery(' .top_title').css({'pointerEvents':'auto'})
}


jQuery(' #intro ').find('.x_button').click(function() {
    jQuery(' #intro ').hide()
})

jQuery(' .longlist_content ').find('.x_button').click(function() {
    window.location.hash = 'backside';
    jQuery('.sec_longlist').find('.longlist_content').hide()
    jQuery('.content-area .longlist_button').show()
    jQuery('.sec_context_l').find('.context_l_wrap').show()
    jQuery('.sec_context_l').find('.further_reading').show()
    jQuery('.sec_context_l').find('.sec_title').show()
    jQuery('.fake_longlist_cat .longlist_el').hide()
    jQuery('.context_l').find('.longlist_button').show()
    jQuery('.fake_longlist_title').hide()
    jQuery('.fake_longlist_cat').hide()
    jQuery('.about').show()
    jQuery('.further_reading').hide()
    // jQuery('.sec_context_l').find('.sec_title').css({'marginTop':'0vh'})
    jQuery('.back').find('#primary').css({pointerEvents: 'auto'})
})

jQuery(' .context_l_title').click(function() {
    jQuery(' .top_title').css({'pointerEvents':'none'})
    setTimeout(block_top, 1000);
    if(!isNaN(jQuery( this ).parent().attr('id'))){
        window.location.hash = 'page'+ jQuery( this ).parent().attr('id');
    }else{
        window.location.hash = 'backside'
    }
})


if(!isMobile){
    var timing = 200;
    jQuery('.arrowright').click(function() {
            jQuery('.vp-title').hide();
            img_counter = document.getElementsByClassName('image_el').length
        if(slide_counter <= img_counter-1){
            slide_counter ++
            jQuery('.image_el').animate({'marginLeft':(1-slide_counter)*100+'%'}, timing); 
        }else if(slide_counter == img_counter){
            slide_counter = 1
            jQuery('.image_el').animate({'marginLeft':'0%'}, timing); 
        }
    })

    jQuery('.arrowleft').click(function() {
            img_counter = document.getElementsByClassName('image_el').length
        if(slide_counter > 1){
            slide_counter --
            jQuery('.image_el').animate({'marginLeft':(1-slide_counter)*100+'%'}, timing); 
        }else if(slide_counter == 1){
            slide_counter = img_counter
            jQuery('.image_el').animate({'marginLeft': (1-img_counter)*100+'%'}, timing); 
        }
    })
}
























///////////////////////////////////////////////
// locationchanged
///////////////////////////////////////////////
window.onhashchange = locationHashChanged;
function locationHashChanged() {
var current_loc = location.hash.split('#')[1]

  if (current_loc === 'list') {
    console.log('here')
        // jQuery('.back #primary').css({'margin-top': '0vh'})
        jQuery('#intro').show()
        intro_load()

        if ( jQuery('.projecting_line1').children().length > 0 ) {  
        }else{
            projecting_1() 
        }
        if(jQuery( "#pivot" ).hasClass( "pivot_animate" )){
            go_front()
        }
        list_1()





    }else if (!isNaN(current_loc)) {    //front page article
        jQuery('.scrollbar').scrollTop(0)
        // jQuery('.back #primary').css({'margin-top': '0vh'})
        artist(current_loc)
        jQuery('#intro').hide()
        if(jQuery( "#pivot" ).hasClass( "pivot_animate" )){
            go_front()
        }




  }else if (current_loc === 'backside') {
                    jQuery('.scrollbar').scrollTop(0)
                    jQuery(' #intro ').hide()
                    jQuery('.sec_longlist').find('.longlist_content').hide()
                    jQuery('.content-area .longlist_button').show()
                    // jQuery('.back #primary').css({'margin-top': '3vh'})
                    jQuery('.sec_context_l').find('.context_l_wrap').show()
                    jQuery('.sec_context_l').find('.further_reading').show()
                    jQuery('.sec_context_l').find('.sec_title').show()
                    jQuery('.fake_longlist_cat .longlist_el').hide()
                    jQuery('.context_l').find('.longlist_button').show()
                    jQuery('.fake_longlist_title').hide()
                    jQuery('.fake_longlist_cat').hide()
                    jQuery('.about').show()
                    jQuery('.further_reading').hide()
                    // jQuery('.sec_context_l').find('.sec_title').css({'marginTop':'0vh'})

    jQuery('.back').find('#primary').css({pointerEvents: 'auto'})
    if ( !jQuery('.context_l_conetents').children().length == 0 ) {
                      back_contents_in()
                    }
    if(!jQuery( "#pivot" ).hasClass( "pivot_animate" )){
    jQuery('#intro').hide()
    go_back()
    }




    }else if (current_loc === 'backside_intro') {
        // jQuery('.back #primary').css({'margin-top': '3vh'})
        jQuery('.back_intro').show()
                      back_contents_in_intro()
    if(!jQuery( "#pivot" ).hasClass( "pivot_animate" )){
    go_back()
    }




    }else if (current_loc === 'backside_longlist') {
        // jQuery('.back #primary').css({'margin-top': '0vh'})
        jQuery('.sec_longlist').find('.longlist_content').show()
        jQuery('.content-area .longlist_button').hide()
        jQuery('.sec_context_l').find('.sec_title').hide()
        jQuery('.sec_context_l').find('.context_l_wrap').hide()
        jQuery('.sec_context_l').find('.further_reading').hide()
        jQuery('.fake_longlist_cat .longlist_el').show()
        jQuery('.longlist').show()
        back_contents_in()
        if(!jQuery( "#pivot" ).hasClass( "pivot_animate" )){
        jQuery('#intro').hide()
        go_back()
        }
                    jQuery('.sec_longlist').find('.longlist_content').show()
                    jQuery('.content-area .longlist_button').hide()
                    jQuery('.sec_context_l').find('.sec_title').hide()
                    jQuery('.sec_context_l').find('.context_l_wrap').hide()
                    jQuery('.sec_context_l').find('.further_reading').hide()
                    jQuery('.fake_longlist_cat .longlist_el').show()
                    jQuery('.about').hide()
                    // jQuery('.sec_context_l').find('.sec_title').css({'marginTop':'3vh'})
      jQuery('.context_l').find('.longlist_button').hide()
      jQuery('.fake_longlist_title').show()
      jQuery('.fake_longlist_cat').show()







  }else if (current_loc.includes('page')) {


      // jQuery('.back #primary').css({'margin-top': '0vh'})
    if(!jQuery( "#pivot" ).hasClass( "pivot_animate" )){
    go_back()
    }
    var id_page = current_loc.split('page')[1]
    back_contents_load(id_page)
    jQuery('#intro').hide()

  } else{



    window.location.hash = 'list';
    jQuery('#intro').show()
    intro_load()

    if ( jQuery('.projecting_line1').children().length > 0 ) {
    }else{
    projecting_1() 
    }
    if(!jQuery( "#pivot" ).hasClass( "pivot_animate" )){
        go_front()
    }
    list_1()
  }
}


















































































///////////////////////////////////////////////
// front_back
///////////////////////////////////////////////
var back_intro_seen_tf = false
function back_intro_seen(){
    window.location.hash = 'backside';
    back_intro_seen_tf = true
    jQuery('.sec_longlist .el_wrap .longlist_el').attr('style','color:white !important');
    jQuery('.context_l .el_wrap div').attr('style','color:white !important');
    jQuery('.sec_about').css({'opacity': '1'})
    jQuery('.back').find('#primary').css({pointerEvents: 'auto'})
    jQuery('.back_intro').attr('style','display:none !important');
}

function go_back(){
    jQuery('.shr_13').removeClass('shr_ani')
    jQuery('.shr_1').removeClass('shr_ani')
    jQuery('.shr_4').removeClass('shr_ani')
    jQuery('.column1').removeClass('column_ani')
    jQuery('.column5').removeClass('column_ani')
    jQuery('.column4').removeClass('column_ani')
    jQuery('.column3').removeClass('column_ani')
    jQuery('.projecting_whole').removeClass('projecting_ani_1')
    jQuery('.scroll').removeClass('scroll_ani')

    jQuery(' #pivot ').show()
    jQuery(' .img_btn ').attr('style','color:black !important');
    jQuery(' .img_btn ').css({pointerEvents : 'none'})
    jQuery('.dropdown').hide();
    if(!isMobile){
        jQuery('#pivot').attr('style','transition: transform 0s !important;');
    }
    jQuery(' #pivot ').removeClass('pivot_animate')
    jQuery(' #pivot ').removeClass('pivot_in_animate')


    jQuery("html, body").animate({ scrollTop: 0 }, 500, function(){

    if(!isMobile){
        jQuery('#pivot').attr('style','transition: transform 1.5s !important;');
    }
        jQuery(' #pivot ').addClass('pivot_animate')
        jQuery(' body ').addClass('body_animate')

        jQuery(' .go_btn_back ').hide();
        jQuery(' .go_btn_front ').attr('style','display:inline-block !important');

        jQuery(' .back_wrap ').addClass('back_wrap_animate')
        jQuery(' .front_wrap ').addClass('front_wrap_animate')
        jQuery(' .back ').addClass('back_animate')
        jQuery('.projecting_back').removeClass('projecting_back_ani_1')
    })
}

function go_front(){
    jQuery('.dropdown').hide();
    jQuery(' .projecting_distort_wrap').show()
    jQuery(' .projecting').show()


    jQuery("html, body").animate({ scrollTop: 0 }, 500, function(){

        jQuery(' .img_btn ').attr('style','color:white !important');
        jQuery(' .img_btn ').css({pointerEvents : 'auto'})
        jQuery(' #pivot ').addClass('pivot_in_animate')
        jQuery(' #pivot ').removeClass('pivot_animate')

        jQuery(' .go_btn_back ').show();
        jQuery(' .go_btn_front ').attr('style','display:none !important');

        jQuery(' body ').removeClass('body_animate')

        if(!isMobile){
            jQuery(' .back_wrap ').removeClass('back_wrap_animate')
            jQuery(' .front_wrap ').removeClass('front_wrap_animate')
            jQuery(' .back ').removeClass('back_animate')
        }
    })
}














///////////////////////////////////////////////
// menu_cube
///////////////////////////////////////////////
var menu = document.getElementsByClassName('menu')[0]
if(menu){


if(!isMobile){
jQuery("body").css("cursor", "progress");
    jQuery('body').css({'margin': '0px', 'overflow' : 'hidden'})
        if (!window.requestAnimationFrame) {
          window.requestAnimationFrame = (function() {
            return window.webkitRequestAnimationFrame ||
              window.mozRequestAnimationFrame ||
              window.oRequestAnimationFrame ||
              window.msRequestAnimationFrame ||
              function( /* function FrameRequestCallback */ callback, /* DOMElement Element */ element) {
                window.setTimeout(callback, 1000 / 60);
              };
          })();
        }
            var container, stats;
            var camera, scene, renderer;
            var cube, plane;
            var targetRotationX = 0.23;
            var targetRotationOnMouseDownX = 0;
            var targetRotationY = 0;
            var targetRotationZ = 0;
            var targetRotationOnMouseDownY = 0;
            var mouseX = 0;
            var mouseXOnMouseDown = 0;
            var mouseY = 0;
            var mouseYOnMouseDown = 0;
            var windowHalfX = window.innerWidth / 2;
            var windowHalfY = window.innerHeight*0.9 / 2;
            var slowingFactor = 0.25;

            init();

            function init() {
                container = document.createElement( 'div' );
                document.body.appendChild( container );
                scene = new THREE.Scene();
                camera = new THREE.PerspectiveCamera( 3, 1, 1, 30000 );
                camera.position.y = 2150;
                camera.position.z = 2150;
                scene.add( camera );

                var textureLoader = new THREE.TextureLoader();
                var loader = new THREE.TextureLoader();
                loader.load(
                'assets/img3.png',
                function ( texture0 ) {
                        var materials = [
                            new THREE.MeshBasicMaterial( {
                                map: THREE.ImageUtils.loadTexture('assets/img2.png') ,
                                 transparent:true, opacity:1, side: THREE.DoubleSide } ),
                            new THREE.MeshBasicMaterial( {map: texture0 , transparent:true, opacity:0.9, side: THREE.DoubleSide  } ),
                            new THREE.MeshBasicMaterial( {color:0x4d4d4d , transparent:true, opacity:0.6, side: THREE.DoubleSide } ),
                            new THREE.MeshBasicMaterial( {color:0xffffff , transparent:true, opacity:0.8, side: THREE.DoubleSide  } ),
                            new THREE.MeshBasicMaterial( {color:0x7595f8 , transparent:true, opacity:0.8, side: THREE.DoubleSide  } ),
                            new THREE.MeshBasicMaterial( {color:0x7595f8 , transparent:true, opacity:0.8, side: THREE.DoubleSide  } )
                        ]; 
                            // new THREE.MeshBasicMaterial( { map: texture0 , transparent:true, opacity:0.8, side: THREE.DoubleSide  } ),
                        cube = new THREE.Mesh(  new THREE.BoxGeometry( 10, 110, 150 ) , new THREE.MeshFaceMaterial(materials) );
                        cube.position.y = 20;
                        cube.overdraw = true;
                        scene.add( cube );    
                        camera.lookAt( cube.position )  
                    animate();
                    }
                );

                plane = new THREE.Mesh( new THREE.PlaneGeometry( 200, 200 ), new THREE.MeshBasicMaterial( { color: 0xffffff } ) );
                plane.rotation.x = - 90 * ( Math.PI / 180 );
                plane.overdraw = true;
                renderer = new THREE.WebGLRenderer( { alpha: true } );
                renderer.setSize( window.innerWidth, window.innerHeight*0.9 );
                container.appendChild( renderer.domElement );
                stats = new Stats();
                stats.domElement.style.position = 'absolute';
                stats.domElement.style.top = '0px';
                container.appendChild( stats.domElement );
                document.addEventListener( 'mousedown', onDocumentMouseDown, false );
            }







            function onDocumentMouseDown( event ) {
                event.preventDefault();
                document.addEventListener( 'mousemove', onDocumentMouseMove, false );
                document.addEventListener( 'mouseup', onDocumentMouseUp, false );
                document.addEventListener( 'mouseout', onDocumentMouseOut, false );
                mouseXOnMouseDown = event.clientX - windowHalfX;
                targetRotationOnMouseDownX = targetRotationX;
                mouseYOnMouseDown = event.clientY - windowHalfY;
                targetRotationOnMouseDownY = targetRotationY;
            }

            function onDocumentMouseMove( event ) {
                mouseX = event.clientX - windowHalfX;
                targetRotationX = ( mouseX - mouseXOnMouseDown ) * 0.00025;
                mouseY = event.clientY - windowHalfY;
            }

            function onDocumentMouseUp( event ) {
                document.removeEventListener( 'mousemove', onDocumentMouseMove, false );
                document.removeEventListener( 'mouseup', onDocumentMouseUp, false );
                document.removeEventListener( 'mouseout', onDocumentMouseOut, false );
            }

            function onDocumentMouseOut( event ) {
                document.removeEventListener( 'mousemove', onDocumentMouseMove, false );
                document.removeEventListener( 'mouseup', onDocumentMouseUp, false );
                document.removeEventListener( 'mouseout', onDocumentMouseOut, false );
            }

            function animate() {
                requestAnimationFrame( animate );
                render();
                stats.update();
            }

            function render() {
                rotateAroundWorldAxis(cube, new THREE.Vector3(0, 1, 0), targetRotationX);
                rotateAroundWorldAxis(cube, new THREE.Vector3(1, 0, 0), targetRotationY);
                rotateAroundWorldAxis(cube, new THREE.Vector3(0, 0, 1), targetRotationZ);
                targetRotationY = targetRotationY * (1 - slowingFactor);
                targetRotationZ = targetRotationZ * (1 - slowingFactor);
                targetRotationX = targetRotationX * (1 - slowingFactor);
                camera.up = new THREE.Vector3( 0, 0, 1 );
                renderer.render( scene, camera );
                jQuery("body").css("cursor", "default");
            }

            function rotateAroundObjectAxis(object, axis, radians) {
                var rotationMatrix = new THREE.Matrix4();

                rotationMatrix.makeRotationAxis(axis.normalize(), radians);
                object.matrix.multiply(rotationMatrix);
                object.rotation.setFromRotationMatrix( object.matrix );

            }

          function rotateAroundWorldAxis( object, axis, radians ) {

              var rotationMatrix = new THREE.Matrix4();

              rotationMatrix.makeRotationAxis( axis.normalize(), radians );
              rotationMatrix.multiply( object.matrix );                       // pre-multiply
              object.matrix = rotationMatrix;
              object.rotation.setFromRotationMatrix( object.matrix );
          }
}



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
            jQuery('.reflection_title').html('LITERATURE')
            jQuery('.part_of_active_discussion_title').html('part of active discussion')
            jQuery('.scene__artists__institutes_title').html('scene artists institutes')
            jQuery('.footnote_title').html('footnote')




            var id_post =   clicked_one;
            var appendhere = jQuery('.append_div')
            var a_title = jQuery('.fixed').find('.title')
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
                    jQuery('.append_div').css({'opacity':1})
                    jQuery('.el_title').css({'opacity':1})
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
                    jQuery(".images>br").remove()


            jQuery(".images>img").each(function() {
                if(jQuery(".images>img").next().prop("tagName") === 'P'){
                    jQuery(this).next('p')
                    .addBack()
                    .wrapAll("<div class='image_el'></div>");
                }else{
                    jQuery(this).wrap("<div class='image_el'></div>");
                }
            });


            jQuery('.append_div').each(function() {
            if( jQuery( this ).contents().length == 0 ) {
                jQuery(this).css({'opacity':0})
                jQuery(this).prev().css({'opacity':0})
            }

                var img_counter = document.getElementsByClassName('image_el').length
                for (var i = img_counter - 1; i >= 0; i--) {
                document.getElementsByClassName('image_el')[i].style.left = 100*i+"%";
                }

            });
                    var bottom = jQuery(".fixed sec .artworks").outerHeight( true )
                    jQuery(".sec_context").css({'paddingBottom':'bottom'})

                jQuery('.post_nav').css({paddingBottom: jQuery(".sec").outerHeight()-0.055*window.innerHeight})
                console.log(jQuery(".sec").outerHeight()) 
                console.log(0.075*window.innerHeight) 

            



            if(jQuery('.artist_wrap').height()>0.07*window.innerHeight){
                jQuery('.artist').css({'font-size': '4.5vh'})
            }
            if(jQuery('.title_wrap').height()>0.07*window.innerHeight){
                jQuery('.title').css({'font-size': '4.5vh'})
            }
            })(getWorkResultString(id_post));

}
















    




///////////////////////////////////////////////
// image_load
///////////////////////////////////////////////



function splitUp(arr, n) {
    var rest = arr.length % n, // how much to divide
        restUsed = rest, // to keep track of the division over the elements
        partLength = Math.floor(arr.length / n),
        result = [];
    for(var i = 0; i < arr.length; i += partLength) {
        var end = partLength + i,
            add = false;
        if(rest !== 0 && restUsed) { // should add one element for the division
            end++;
            restUsed--; // we've used one division element now
            add = true;
        }
        result.push(arr.slice(i, end)); // part of the array
        if(add) {
            i++; // also increment i in the case we added an extra element for division
        }
    }
    return result;
}

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}






























function list_1(){
    if(!isMobile){
        jQuery('.shr_1').removeClass('shr_ani')
        jQuery('.shr_4').removeClass('shr_ani')
        jQuery('.shr_13').removeClass('shr_ani')
        jQuery('.column1').removeClass('column_ani')
        jQuery('.column5').removeClass('column_ani')
        jQuery('.column4').removeClass('column_ani')
        jQuery('.column3').removeClass('column_ani')
        jQuery('.fixed .front_wrap').removeClass('fixed_front_wrap_ani')
    }
    jQuery("html, body").animate({ scrollTop: 0 }, 500);
    setTimeout(list_2, 100);
}



function list_2(){
    projecting = true
    jQuery('.projecting_whole').addClass('projecting_ani_1');
    if(isMobile){
        jQuery('.scroll').css({"position": 'fixed'})
        jQuery('.scroll').css({"height": '100vh'})
    }
    timeout()
    function timeout() {
        setTimeout(function () {
        if(jQuery('.projecting_line1').children().length > 0 ) {
            list_3()
            jQuery('bottom_shadow').removeClass('bottom_shadow_ani')
            jQuery('right_shadow').removeClass('right_shadow_ani')
        }else{
            timeout()
        }
        }, 1000);
    }

}



function list_3() {
    jQuery('.append_div').empty()
    jQuery('.scroll').addClass('scroll_ani');
    jQuery('#pivot').hide();

}



function in_artist(){
    if(!isMobile){
        jQuery('.shr_1').removeClass('shr_ani')
        jQuery('.shr_4').removeClass('shr_ani')
        jQuery('.shr_13').removeClass('shr_ani')
        jQuery('.column1').removeClass('column_ani')
        jQuery('.column5').removeClass('column_ani')
        jQuery('.column4').removeClass('column_ani')
        jQuery('.column3').removeClass('column_ani')
        jQuery('.fixed .front_wrap').removeClass('fixed_front_wrap_ani')
        jQuery('bottom_shadow').removeClass('bottom_shadow_ani')
        jQuery('right_shadow').removeClass('right_shadow_ani')
    }
        jQuery("html, body").animate({ scrollTop: 0 }, 500);
        jQuery('.append_div').empty()
    
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
                    appendhere5.append('<div class="title">Digital Canon!</div>');
                    appendhere5.append('<div class="x_button"></div>');
                    appendhere5.append( result );
                    appendhere5.append('<br><a href="#list" class="intro_sitemap">SITEMAP &nbsp;<div class="arrow arrow_dia"></div></a>');
                    appendhere5.append('<img src="assets/img3.png" width="50%" class="intro_sitemap_img">');
                    appendhere5.append('<a href="#backside" class="intro_backside" >GOTO BACKSIDE &nbsp;<div class="arrow arrow_dia"></div></a>');
                    appendhere5.append('<img src="assets/img2.png" width="50%" class="intro_backside_img">');


                jQuery('#intro').find('.x_button').click(function() {
                jQuery(' #intro ').hide()
            })
            })(getContextHtml(id_post));
}

















    


///////////////////////////////////////////////
// intro_in the back
///////////////////////////////////////////////
function back_intro_load(){ 
            var id_post = 476;
            var appendhere = jQuery('.back_intro').find('.context_l_inner_contents')
            ;(function (result) {
                    appendhere.empty()
                    appendhere.append('<div class="title">Digital Canon?</div>');
                    appendhere.append('<div class="x_button"></div>');
                    appendhere.append( result )
                    jQuery('.projecting_right_shadow').show()
            })(getContextHtml(id_post));
}

















    


///////////////////////////////////////////////
// back
///////////////////////////////////////////////

function back_contents_load(id){
            var id_post = id;
            // if(isMobile){
            //     var appendhere5 = jQuery('#intro_mobile')
            // }else{
                var appendhere0 = jQuery('#' + id_post).find('.context_l_conetents:eq( 0 )')
            // }
            ;(function (result) {
                  jQuery('.context_l_conetents').empty()
                    appendhere0.append( result )
                    appendhere0.css({'background-color':'#000000e6'})
                    appendhere0.append( '<div class="x_button"></div>' )
                    // jQuery('.context_l_wrap').hide()
                    jQuery('.longlist').hide()
                    jQuery('.fake_longlist_title').hide()
                    jQuery('.fake_longlist_cat').hide()
                    jQuery('.context_l').find('.longlist_button').show()
                    jQuery('.about').hide()
                    jQuery('#' + id_post).show()
                    jQuery('.back').find( ".context_l" ).hide(); 
                    jQuery('#' + id_post).parent( ".sec_context_l" ).parent( ".context_l" ).show();
                    jQuery('.further_reading').show() 
                    jQuery('.sec_longlist').find('.longlist_content').hide()
                    jQuery('.content-area .longlist_button').show()
                    jQuery('.sec_context_l').find('.context_l_wrap').show()
                    jQuery('.sec_context_l').find('.further_reading').show()
                    jQuery('.sec_context_l').find('.sec_title').show()
                    jQuery('.fake_longlist_cat .longlist_el').show()

                    jQuery('.scrollbar').scrollTop(0)

                    jQuery('.context_l_wrap').removeClass('context_autoheight')
                    jQuery('#' + id_post).addClass('context_autoheight')
                    // jQuery('.sec_context_l').find('.sec_title').css({'marginTop':'3vh'})

                    jQuery('#' + id_post).parent( ".sec_context_l" ).find('.further_reading').insertAfter( jQuery('#' + id_post).siblings(".sec_title")); 
                    jQuery('#' + id_post).insertAfter( jQuery('#' + id_post).siblings(".sec_title"));

                    jQuery('.context_l_conetents .x_button').click(function() {
                    window.location.hash = 'backside';
                    back_contents_in();
                })

                if(!isMobile){
                    jQuery(".context_l_wrap").click(function(e) {
                        if(e.clientX < 0.1665*window.innerWidth || e.clientX > 0.8335*window.innerWidth){
                            window.location.hash = 'backside';
                            back_contents_in();
                        }
                    });
                }

            })(getContextHtml(id_post));

}

function back_contents_in(){
                    jQuery('.context_l_conetents').empty()
                    jQuery('.back').find( ".context_l" ).show(); 
                    // jQuery('.context_l_wrap').show()
                    jQuery('.longlist').show()
      jQuery('.fake_longlist_title').hide()
      jQuery('.fake_longlist_cat').hide()
                    jQuery('.context_l').find('.longlist_button').show()
                    jQuery('.about').show()
                    jQuery('.context_l_conetents').each(function() {                    
                      jQuery('this').css({'backgroundColor':'#000000e6'})
                    });
                    jQuery('.further_reading').hide()
                    // jQuery('.sec_context_l').find('.sec_title').css({'marginTop':'0vh'})
                    jQuery('.context_l_wrap').removeClass('context_autoheight')
                    // jQuery('.back_wrap').find('.sec_title').attr('style','color: black !important');
                    }

function back_contents_in_intro(){
                    window.location.hash = 'backside';
                    jQuery('.context_l_conetents').empty()
                    jQuery('.back').find( ".context_l" ).show(); 
                    // jQuery('.context_l_wrap').show()
                    jQuery('.longlist').show()
      jQuery('.fake_longlist_title').hide()
      jQuery('.fake_longlist_cat').hide()
                    jQuery('.context_l').find('.longlist_button').show()
                    jQuery('.about').show()
                    jQuery('.further_reading').hide()
                    // jQuery('.sec_context_l').find('.sec_title').css({'marginTop':'0vh'})
                    jQuery('.context_l_wrap').css({'height':'4vh'})
                    jQuery('.back_wrap').find('div').attr('style','color: #00000000 !important');
                    jQuery('.back_intro').find('.title').attr('style','color: white !important');
                    }

function projecting_1() {
  img = getProjectingSpans();
  projecting_2(img);
  projecting_interaction();
}
var img = []
var counter =0
function projecting_2(img) {
                    var shuffled_img = shuffle(img)
                    line_1=document.getElementsByClassName("projecting_line1");
                    line_2=document.getElementsByClassName("projecting_line2");
                    line_3=document.getElementsByClassName("projecting_line3");
                    var w = window.innerWidth;
                    var h = window.innerHeight
                    
                    if(w/h < 81/95){
                    jQuery('.projecting_distort_wrap').css({'-webkit-mask-image':'none', 'background':'gray'})
                        for (var i = line_1.length - 1; i >= 0; i--) {
                            // line_1[i].innerHTML = shuffled_img[0]
                            line_1[i].innerHTML = shuffled_img.join("");
                        }
                        for (var i = line_2.length - 1; i >= 0; i--) {
                            line_2[i].style.display = 'none'
                        }
                        for (var i = line_3.length - 1; i >= 0; i--) {
                            line_3[i].style.display = 'none'
                        }
                    }else{
                    var splited_array = splitUp(shuffled_img, 3)
                        for (var i = line_1.length - 1; i >= 0; i--) {
                            line_1[i].innerHTML = splited_array[0].join("");
                        }
                        for (var i = line_2.length - 1; i >= 0; i--) {
                            line_2[i].innerHTML = splited_array[1].join("");
                        }
                        for (var i = line_3.length - 1; i >= 0; i--) {
                            line_3[i].innerHTML = splited_array[2].join("");
                        }
                    }
jQuery("body").css("cursor", "default");
}






function projecting_interaction(){
if(!isMobile){
    jQuery(window).on( 'scroll', function(){
        if(projecting){
        jQuery('.projecting_line').css({'marginTop':jQuery(window).scrollTop()*-1})
        }
    });
    }
    jQuery('.scroll_down_mobile').click(function() {
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
        }
    })



var projecting_img_array=[]
if(projecting){
    jQuery('.projecting_line').find('img').hover(
      function() {
        projecting_img = jQuery( this ).attr('class').split(" ")[0];
        projecting_img_array = document.getElementsByClassName(projecting_img)
        for (var i = projecting_img_array.length - 1; i >= 0; i--) {
            jQuery( projecting_img_array[i] ).siblings().show()
            projecting_img_array[i].style.opacity = 0.1;
        }
      }, function() {
        for (var i = projecting_img_array.length - 1; i >= 0; i--) {
            jQuery( projecting_img_array[i] ).siblings().hide()
            projecting_img_array[i].style.opacity = 1
        }
      }
    );
}



jQuery('.projecting_line').find('span').click(function() {
    window.location.hash = jQuery(this).attr('class');

})



}

function in_list_1(){
    setTimeout(in_list_2, 300);
    jQuery('.projecting_whole').removeClass('projecting_ani_1');
}
function in_list_2(){
    jQuery('.scroll').removeClass('scroll_ani');
}
































var img_counter 
var slide_counter = 1

function artist(clicked_one){
    jQuery('#pivot').show();
    setTimeout(function () {
        jQuery('#pivot').show();
    }, 300);

    front_content(clicked_one);
    slide_counter = 1
    if(!isMobile){
        jQuery('.shr_1').addClass('shr_ani')
        jQuery('.shr_4').addClass('shr_ani')
        jQuery('.shr_13').addClass('shr_ani')
        jQuery('.column1').addClass('column_ani')
        jQuery('.column5').addClass('column_ani')
        jQuery('.column4').addClass('column_ani')
        jQuery('.column3').addClass('column_ani')
        jQuery('.fixed .front_wrap').addClass('fixed_front_wrap_ani')
    }

    jQuery('.bottom_shadow').addClass('bottom_shadow_ani');
    jQuery('.right_shadow').addClass('right_shadow_ani');

    jQuery('.scroll').removeClass('scroll_ani');
    jQuery('.arrow').show();


    jQuery('.projecting_whole').removeClass('projecting_ani_1')



    jQuery('.sec_longlist .el_wrap .longlist_el').attr('style','color:white !important');
    jQuery('.context_l .el_wrap div').attr('style','color:white !important');
    jQuery('.sec_about').css({'opacity': '1'})
    jQuery('#primary').css({pointerEvents: 'auto'})
    jQuery('.back_intro').attr('style','display:none !important');
        in_list_1()

}
































///////////////////////////////////////////////
// about_in the back
///////////////////////////////////////////////


    jQuery('.back_intro').click(function() {
        jQuery('.back_intro').attr('style','display: none !important');
    })

    var sec_about_show = false
    jQuery('.sec_about').find('.x_button').click(function() {
        jQuery('.sec_about').hide()
        jQuery('.context_l').show()
    })

    jQuery('.colophon').click(function() {
      if(sec_about_show){
      jQuery('.sec_about').hide()
      jQuery('.context_l').show()
      sec_about_show = false
      }else{
      jQuery('.sec_about').show()
      jQuery('.context_l').hide()
      sec_about_show = true
      }
    })

    jQuery('.longlist_el').each(function(){
        if(jQuery(this).is(":empty")){
            jQuery(this).addClass('nonempty')
        }
        if(jQuery(this).text() === 'y'){
            jQuery(this).html( '&nbsp;' );
        }
    })

    jQuery('.dropdown_wrap').click(function() {
        arrowdownclicked = false
        window.location.hash = jQuery(this).attr('id');
        jQuery('.dropdown').hide();
    })

    jQuery('.dropdown').click(function() {
        arrowdownclicked = false
        jQuery('.dropdown').hide();
    }).children().click(function(e) {
      return false;
    });

    jQuery('.post_nav_wrap').click(function() {
        jQuery('.scrollbar').scrollTop(0)
        window.location.hash = jQuery(this).attr('id');
    })

    var dropdown_top = 0
    var arrowdownclicked = false
    jQuery('.arrowdown').click(function() {
      if(!arrowdownclicked){
        jQuery('.dropdown').show();
        dropdown_top = Math.max(jQuery('.title_wrap .append_div').outerHeight(), jQuery('.artist_wrap .append_div').outerHeight())
        jQuery('.dropdown').css({'top':dropdown_top + 0.02*window.innerHeight})
        arrowdownclicked = true
        jQuery('.title_all').each(function() {
            if(jQuery(this).height()>0.07*window.innerHeight){
                jQuery(this).css({'font-size': '4.5vh'})
            }
        });
        jQuery('.artist_all').each(function() {
            if(jQuery(this).height()>0.07*window.innerHeight){
                jQuery(this).css({'font-size': '4.5vh'})
            }
        });
      }else{
        jQuery('.dropdown').hide();
        arrowdownclicked = false

      }
    })

    jQuery('.shr_4').hover(
      function() {
        jQuery( this ).css({'maxHeight':'100vh'});
            if(jQuery( this ).height()>0.136*window.innerHeight){
            jQuery( '.fixed' ).css({'border-bottom': '1px solid #d2d2d2'})
        }
        }, function() {
            jQuery( this ).css({'maxHeight':'13.6vh'});
            jQuery( '.fixed' ).css({'border-bottom': 'none'})
        }
    );
    jQuery('.shr_1').hover(
      function() {
        jQuery( this ).css({'maxHeight':'100vh'});
            if(jQuery( this ).height()>0.136*window.innerHeight){
            jQuery( '.fixed' ).css({'border-bottom': '1px solid #d2d2d2'})
        }
        }, function() {
            jQuery( this ).css({'maxHeight':'13.6vh'});
            jQuery( '.fixed' ).css({'border-bottom': 'none'})
        }
    );

    }
    jQuery('.longlist_button').click(function() {
        window.location.hash = 'backside_longlist';
    });

})