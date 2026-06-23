

window.onload = function(e){
    document.getElementById("whiteforremove2").style.display = "none";
}
$(document).ready(function(){ 
	$(this).scrollTop( 0 )
     $(window).scroll(function(){
     	var k =$(this).innerHeight()*0.9
       $('#column2').css('transform', 'translate3d(0,' + $(this).scrollTop() + 'px, 0)'); 
       $('#column4').css('transform', 'translate3d(0,' + $(this).scrollTop() + 'px, 0)'); 

    $topOffset = $(this).scrollTop();
    console.log( $topOffset)
    if($topOffset >0){
        $('#image9').css('backgroundImage','url(photos/009.jpg)');
        $('#image12').css('backgroundImage','url(photos/012.jpg)');


        $('#image56').css('backgroundImage','url(photos/056.jpg)');
        $('#image57').css('backgroundImage','url(photos/057.jpg)');


        $('#image113').css('backgroundImage','url(photos/113.jpg)');
        $('#image17').css('backgroundImage','url(photos/017.jpg)');
        $('#image58').css('backgroundImage','url(photos/058.jpg)');


        $('#image78').css('backgroundImage','url(photos/078.jpg)');
        $('#image85').css('backgroundImage','url(photos/085.jpg)');
        $('#image32').css('backgroundImage','url(photos/032.jpg)');}
    if($topOffset >k){
        $('#image95').css('backgroundImage','url(photos/095.jpg)');
        $('#image96').css('backgroundImage','url(photos/096.jpg)');


        $('#image59').css('backgroundImage','url(photos/059.jpg)');
        $('#image60').css('backgroundImage','url(photos/060.jpg)');


        $('#image11').css('backgroundImage','url(photos/011.jpg)');
        $('#image69').css('backgroundImage','url(photos/069.jpg)');


        $('#image72').css('backgroundImage','url(photos/072.jpg)');
        $('#image109').css('backgroundImage','url(photos/109.jpg)');
    }
    if($topOffset >2*k){
        $('#image97').css('backgroundImage','url(photos/097.jpg)');
        $('#image103').css('backgroundImage','url(photos/103.jpg)');
        $('#image26').css('backgroundImage','url(photos/026.jpg)');


        $('#image61').css('backgroundImage','url(photos/061.jpg)');
        $('#image10').css('backgroundImage','url(photos/010.jpg)');


        $('#image100').css('backgroundImage','url(photos/100.jpg)');
        $('#image90').css('backgroundImage','url(photos/090.jpg)');
        $('#image34').css('backgroundImage','url(photos/034.jpg)');


        $('#image110').css('backgroundImage','url(photos/110.jpg)');
        $('#image43_2').css('backgroundImage','url(photos/043.jpg)');}
    if($topOffset >3*k){
        $('#image1').css('backgroundImage','url(photos/001.jpg)');
        $('#image27').css('backgroundImage','url(photos/027.jpg)');
        $('#image13').css('backgroundImage','url(photos/013.jpg)');


        $('#image86').css('backgroundImage','url(photos/086.jpg)');
        $('#image87').css('backgroundImage','url(photos/087.jpg)');
        $('#image14').css('backgroundImage','url(photos/014.jpg)');


        $('#image89').css('backgroundImage','url(photos/089.jpg)');
        $('#image64').css('backgroundImage','url(photos/064.jpg)');
        $('#image33').css('backgroundImage','url(photos/033.jpg)');


        $('#image106').css('backgroundImage','url(photos/106.jpg)');
        $('#image107').css('backgroundImage','url(photos/107.jpg)');
        $('#image108').css('backgroundImage','url(photos/108.jpg)');}
    if($topOffset >4*k){
        $('#image4').css('backgroundImage','url(photos/004.jpg)');
        $('#image22').css('backgroundImage','url(photos/022.jpg)');


        $('#image88').css('backgroundImage','url(photos/088.jpg)');
        $('#image75').css('backgroundImage','url(photos/075.jpg)');
        $('#image79').css('backgroundImage','url(photos/079.jpg)');

        $('#image45').css('backgroundImage','url(photos/045.jpg)');
        $('#image46').css('backgroundImage','url(photos/046.jpg)');


        $('#image112').css('backgroundImage','url(photos/112.jpg)');
        $('#image104').css('backgroundImage','url(photos/104.jpg)');
        $('#image21').css('backgroundImage','url(photos/021.jpg)');
}
    if($topOffset >5*k){
        $('#image81').css('backgroundImage','url(photos/081.jpg)');
        $('#image23').css('backgroundImage','url(photos/023.jpg)');


        $('#image80').css('backgroundImage','url(photos/080.jpg)');
        $('#image47').css('backgroundImage','url(photos/047.jpg)');
        $('#image82').css('backgroundImage','url(photos/082.jpg)');

        $('#image42').css('backgroundImage','url(photos/042.jpg)');
        $('#image44').css('backgroundImage','url(photos/044.jpg)');


        $('#image41').css('backgroundImage','url(photos/041.jpg)');
        $('#image36').css('backgroundImage','url(photos/036.jpg)');
        $('#image35').css('backgroundImage','url(photos/035.jpg)');
}
    if($topOffset >6*k){
        $('#image77').css('backgroundImage','url(photos/077.jpg)');
        $('#image48').css('backgroundImage','url(photos/048.jpg)');


        $('#image91').css('backgroundImage','url(photos/091.jpg)');
        $('#image92').css('backgroundImage','url(photos/092.jpg)');

        $('#image25').css('backgroundImage','url(photos/025.jpg)');
        $('#image105').css('backgroundImage','url(photos/105.jpg)');

        $('#image84').css('backgroundImage','url(photos/084.jpg)');
        $('#image43').css('backgroundImage','url(photos/043.jpg)');
}
    if($topOffset >7*k){
        $('#image29').css('backgroundImage','url(photos/029.jpg)');
        $('#image30').css('backgroundImage','url(photos/030.jpg)');


        $('#image67').css('backgroundImage','url(photos/067.jpg)');
        $('#image94').css('backgroundImage','url(photos/094.jpg)');

        $('#image24').css('backgroundImage','url(photos/024.jpg)');
        $('#image93').css('backgroundImage','url(photos/093.jpg)');

        $('#image40').css('backgroundImage','url(photos/040.jpg)');
        $('#image31').css('backgroundImage','url(photos/031.jpg)');

}


    }).scroll();

var imagediv = document.getElementsByClassName("imagediv")
    // $(".yphoto15").hover(function(){
    //     $(this).css("background-color", "yellow");
    //     }, function(){
    //     $(this).css("background-color", "pink");
    // });
 $('.yphoto15').hover(function() {
    $('.y15').css('opacity', '1');
		},function() {
    $('.y15').css('opacity', '0');})
 $('.yphoto16').hover(function() {
    $('.y16').css('opacity', '1');
        },function() {
    $('.y16').css('opacity', '0');})
 $('.yphoto17').hover(function() {
    $('.y17').css('opacity', '1');
        },function() {
    $('.y17').css('opacity', '0');})

});
// // window.onload = function() {
// // var images = ['001.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg'];


// // var elements = document.getElementsByClassName("imagediv");
// //     for(var i = 0, length = elements.length; i < length; i++) {
// //           elements[i].onmouseover = function() {mouseOver(this)};
// //           elements[i].onmouseout = function() {mouseOut()};
// //     } 
// // function mouseOver(x) {
// //    x.style.backgroundImage = "url(photos/' + images[Math.floor(Math.random() * images.length)] + ')";
// // }

// // function mouseOut() {
// //     this.style.backgroundImage = "url(photos/' + images[Math.floor(Math.random() * images.length)] + ')";
// // }

// // }






// window.onload = function() {
// var images = ['001.jpg'];


// var elements = document.getElementsByClassName("imagediv");
//     for(var i = 0, length = elements.length; i < length; i++) {
//           elements[i].onmouseover = function() {mouseOver1(this)};
//           elements[i].onmouseout = function() {mouseOut1(this)};
//     } 
// function mouseOver1(x) {
//    x.style.backgroundImage = "url(photos/' + images[Math.floor(Math.random() * images.length)] + ')";
// }

// function mouseOut1(x) {
//     x.style.backgroundImage = "none";
// }












// }