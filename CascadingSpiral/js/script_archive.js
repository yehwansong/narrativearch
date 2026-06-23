
$(document).ready(function(){

    var scene = new THREE.Scene();
    var whole_pivot = new THREE.Group()
    var layer_amount = 18
    var layer_pivot_array = Array(layer_amount)
    var layer_texture_array = Array(layer_amount)
    var plate_pivot_array = Array(layer_amount)
    var translatey = 15
    var translatez = 10
    var staying = 5


                var scrolldirection_value = 0

    var w = window.innerWidth
    var h = window.innerHeight
    $('.fake_scroll').css({'height':(layer_amount*translatey*h)+'px'})
        scene.add(whole_pivot)

    $(window).scroll(function (event) {
        var scrollpos = $(window).scrollTop();
        var k = Math.floor(scrollpos/(translatey*h))
                if(scrollpos > scrolldirection_value){
                    scrolldirection = 'down'
                }else{
                    scrolldirection = 'up'
                }
                scrolldirection_value = scrollpos
                whole_pivot.rotation.y = degrees_to_radians(scrollpos%(translatey*h)/(translatey*h)*360)
                var transition_unit = 0
                if(scrollpos%(translatey*h) < (staying*h)){
                    if(layer_pivot_array[k-2]){
                            layer_pivot_array[k-2].position.y = translatey*1.98
                            layer_pivot_array[k-2].scale.y = 1
                            layer_pivot_array[k-2].scale.x = 4.0
                            layer_pivot_array[k-2].scale.z = 4.0
                        }

                    if(layer_pivot_array[k-1]){
                            layer_pivot_array[k-1].position.y = translatey*0.997
                            layer_pivot_array[k-1].scale.y = 1
                            layer_pivot_array[k-1].scale.x = 2.5
                            layer_pivot_array[k-1].scale.z = 2.5
                        }

                    if(layer_pivot_array[k-0]){
                            layer_pivot_array[k-0].position.y = translatey*0.07
                            layer_pivot_array[k-0].scale.y = 1
                            layer_pivot_array[k-0].scale.x = 1
                            layer_pivot_array[k-0].scale.z = 1
                        }

                    if(layer_pivot_array[k+1]){
                            layer_pivot_array[k+1].position.y = translatey*-0.76
                            layer_pivot_array[k+1].scale.y = 1
                            layer_pivot_array[k+1].scale.x = 0.45
                            layer_pivot_array[k+1].scale.z = 0.45
                        }

                    if(layer_pivot_array[k+2]){
                            layer_pivot_array[k+2].position.y = translatey*-0.73
                            layer_pivot_array[k+2].scale.y = 1
                            layer_pivot_array[k+2].scale.x = 0.2
                            layer_pivot_array[k+2].scale.z = 0.2
                        }

                    if(layer_pivot_array[k+3]){
                            layer_pivot_array[k+3].position.y = translatey*-0.73
                            layer_pivot_array[k+3].scale.y = 1
                            layer_pivot_array[k+3].scale.x = 0.15
                            layer_pivot_array[k+3].scale.z = 0.15
                        }
                }else{
                    for (var i = layer_pivot_array.length - 1; i >= 0; i--) {
                        layer_pivot_array[i].visible = true
                    }
                        transition_unit = ((scrollpos%(translatey*h)-(staying*h))/((translatey*h)-(staying*h)))*10
                        transition_unit = ((scrollpos%(translatey*h)-(staying*h))/((translatey*h)-(staying*h)))*10
                        if(layer_pivot_array[k-2]){
                            layer_pivot_array[k-2].visible = true
                            layer_pivot_array[k-2].position.y = map_range(transition_unit, 0, 10, translatey*1.98, translatey*3)
                            layer_pivot_array[k-2].scale.x = map_range(transition_unit, 0, 10, 4.0, 10.0) 
                            layer_pivot_array[k-2].scale.z = map_range(transition_unit, 0, 10, 4.0, 10.0)
                        }

                        if(layer_pivot_array[k-1]){
                            layer_pivot_array[k-1].visible = true
                            layer_pivot_array[k-1].position.y = map_range(transition_unit, 0, 10, translatey*0.997, translatey*1.98)
                            layer_pivot_array[k-1].scale.x = map_range(transition_unit, 0, 10, 2.5, 4.0)
                            layer_pivot_array[k-1].scale.z = map_range(transition_unit, 0, 10, 2.5, 4.0)
                        }

                        if(layer_pivot_array[k-0]){
                            layer_pivot_array[k-0].visible = true
                            layer_pivot_array[k-0].position.y = map_range(transition_unit, 0, 10, translatey*0.07, translatey*0.997)
                            layer_pivot_array[k-0].scale.x = map_range(transition_unit, 0, 10, 1, 2.5)
                            layer_pivot_array[k-0].scale.z = map_range(transition_unit, 0, 10, 1, 2.5)
                        }

                        if(layer_pivot_array[k+1]){
                            layer_pivot_array[k+1].visible = true
                            layer_pivot_array[k+1].position.y = map_range(transition_unit, 0, 10, translatey*-0.76, translatey*0.07)
                            layer_pivot_array[k+1].scale.x = map_range(transition_unit, 0, 10, 0.45, 1)
                            layer_pivot_array[k+1].scale.z = map_range(transition_unit, 0, 10, 0.45, 1)
                        }

                        if(layer_pivot_array[k+2]){
                            layer_pivot_array[k+2].visible = true
                            layer_pivot_array[k+2].position.y = map_range(transition_unit, 0, 10, translatey*-0.73, translatey*-0.76)
                            layer_pivot_array[k+2].scale.x = map_range(transition_unit, 0, 10, 0.2, 0.45)
                            layer_pivot_array[k+2].scale.z = map_range(transition_unit, 0, 10, 0.2, 0.45)
                        }

                        if(layer_pivot_array[k+3]){
                            layer_pivot_array[k+3].visible = true
                            layer_pivot_array[k+3].position.y = map_range(transition_unit, 0, 10, translatey*-0.73, translatey*-0.73)
                            layer_pivot_array[k+3].scale.x = map_range(transition_unit, 0, 10, 0.15, 0.2)
                            layer_pivot_array[k+3].scale.z = map_range(transition_unit, 0, 10, 0.15, 0.2)
                        }

                        if(layer_pivot_array[k+4]){
                            layer_pivot_array[k+4].visible = true
                            layer_pivot_array[k+4].position.y = map_range(transition_unit, 0, 10, translatey*-1.5, translatey*-0.73)
                            layer_pivot_array[k+4].scale.x = map_range(transition_unit, 0, 10, 0, 0.15)
                            layer_pivot_array[k+4].scale.z = map_range(transition_unit, 0, 10, 0, 0.15)
                        }
                }

    });



create_board()
function create_board(){
    for (var i = 0; i < layer_amount; i++) {
        layer_pivot_array[i] = new THREE.Group()
        plate_pivot_array[i] = Array(layer_amount-i+2)
        layer_texture_array[i] = new THREE.TextureLoader().load( "img/bg-"+pad(layer_amount-i, 2)+".png" );
        // layer_texture_array[i].repeat.x = 1/(layer_amount+2)

            for (var k = 0; k < plate_pivot_array[i].length; k++) {
                const geometry = new THREE.PlaneGeometry(get_width(translatez,plate_pivot_array[i].length),translatey );
                geometry.faceVertexUvs[0][0][0].x = (plate_pivot_array[i].length-k+1)/(plate_pivot_array[i].length)
                geometry.faceVertexUvs[0][0][1].x = (plate_pivot_array[i].length-k+1)/(plate_pivot_array[i].length)
                geometry.faceVertexUvs[0][0][2].x = (plate_pivot_array[i].length-k+0)/(plate_pivot_array[i].length)
                geometry.faceVertexUvs[0][1][0].x = (plate_pivot_array[i].length-k+1)/(plate_pivot_array[i].length)
                geometry.faceVertexUvs[0][1][2].x = (plate_pivot_array[i].length-k+0)/(plate_pivot_array[i].length)
                geometry.faceVertexUvs[0][1][1].x = (plate_pivot_array[i].length-k+0)/(plate_pivot_array[i].length)
                var random_color = eval('0x'+Math.floor(Math.random()*16777215).toString(16))
                const material = new THREE.MeshBasicMaterial( {map: layer_texture_array[i], side: THREE.DoubleSide} );
                const plate = new THREE.Mesh( geometry, material );
                      plate.position.z = translatez

                plate_pivot_array[i][k] = new THREE.Group()
                plate_pivot_array[i][k].rotation.y = degrees_to_radians(360/(plate_pivot_array[i].length)*k)
                plate_pivot_array[i][k].add(plate)
                layer_pivot_array[i].add( plate_pivot_array[i][k] );
            }
        whole_pivot.add(layer_pivot_array[i])
    }
    console.log(scene)
}



  // camera = new THREE.OrthographicCamera( window.innerWidth / - 50, window.innerWidth / 50, window.innerHeight / 50, window.innerHeight / -50, - 500, 1000); 
  // camera.position.x = 0.5;
  // camera.position.y = 2.5;
    var aspect = w/h
  // camera = new THREE.PerspectiveCamera( 90, aspect, 1, 1000 );
  // camera.position.z = 6.5;
  camera = new THREE.PerspectiveCamera( 10, aspect, 1, 1000 );
  camera.position.z = 300;
  camera.position.y = 300;
  camera.lookAt(scene.position);

    var canvas = document.getElementById("canvas");
    var renderer = new THREE.WebGLRenderer( { antialias: true, canvas: canvas } );
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.setClearColor( 0x000000 );//0x );

    renderer.toneMapping = THREE.LinearToneMapping;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;

    window.addEventListener( 'resize', function () {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize( window.innerWidth, window.innerHeight );
    }, false );

    var counter = 0
    function render () {
        update()
        requestAnimationFrame( render );
        renderer.render( scene, camera );
    }
    render();
    function update(){
    }






var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();

$('canvas').click(function(){
    event.preventDefault();

    mouse.x = ( event.clientX / renderer.domElement.clientWidth ) * 2 - 1;
    mouse.y = - ( event.clientY / renderer.domElement.clientHeight ) * 2 + 1;

    raycaster.setFromCamera( mouse, camera );

    for (var i = obj_group.children.length - 1; i >= 0; i--) {
        var intersects = raycaster.intersectObjects(obj_group.children[i].children[0]); 
        if ( intersects.length > 0 ) {
            console.log('hey')
        }
    }

})





    function map_range(value, low1, high1, low2, high2) {
        return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
    }

    function pad(n, width, z) {
      z = z || '0';
      n = n + '';
      return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
    }

    function get_width(translatez,number_of_board){
        return translatez*Math.tan((360/(number_of_board*2)) * Math.PI / 180)   *2
    }

    function get_rad(width,number_of_board){
        return (width/2)/Math.tan((360/(number_of_board*2)) * Math.PI / 180)
    }

    function degrees_to_radians(degrees){
        var pi = Math.PI;
        return degrees * (pi/180);
    }
})

