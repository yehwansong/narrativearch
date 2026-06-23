$(document).ready(function(){

	var init = function(){
		//if ( ! Detector.webgl ) Detector.addGetWebGLMessage();
		var mX
		var mY
		var value = 0
		var planeamount = 80
		var initangle = degtorad(180 - 2.25*planeamount/2)
		var planevalue = initangle
		// var planevalue = degtorad(-205)
		var am_x = 16
		var am_y = 60
		var amount = am_x*am_y
		var pivot_wrapper = Array(am_x)
		var pivot_wrapper_cube = Array(am_x)
		var pivot_single = Array(am_y)
		var pivot_single_cube = Array(am_y)
		var group_array = Array(60)
		for (var i = group_array.length - 1; i >= 0; i--) {
			group_array[i] = Array()
		}
		var plane 
		var bottom_plane 
		var ani_frame

		var D, aspect, camera, pre_geometry,geometry,geometry_ico, grid, height, light, material, renderer, scene, width;
		var texture0_obj  = Array(200)
		var materials_obj = Array(200)
		var faceMaterial_obj = Array(200)
		var texture_oico
		var materials_ico
		var faceMaterial_ico
		var wireframe
		var helper

		var init_rot_y
		var axis = new THREE.Vector3(1, 0, 0);
		const Axis = new THREE.Vector3(0, 0, 1);

		var counter = 0
		var changed_dir = 0
		var w = window.innerWidth
		var h = window.innerHeight
		var groundoffset = 0

		var rotation = 0
		var speedY = 0

		width = w;
		height = h;
		aspect = width / height;
		scene = new THREE.Scene();
		var unit_obj = h/15
		var radius = 27
	  	const fov = 55;
	  	const near = 0.1;
	  	const far = 300000;
		camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
		renderer = new THREE.WebGLRenderer({
			antialias: true
			,alpha: true
		});
		renderer.setSize(width, height);
		var dir = new THREE.Vector3();
		var speed = 30.0;
		var intro_z = Array(amount)

		var up = false
		var left = false
		var right = false
		var down = false
		// ////////Field for Installation///////////
		var key_pressed = true
		var key_pressed = false
		var ground_data_array
		var texture_bg3
onLoadFinish()
function onLoadFinish() {
    var firebaseConfig = {
    	apiKey: "AIzaSyBB-1ahm5pb6EFdm0Y2dcpdsT9025JY7CU",
    	authDomain: "futureschool-360e6.firebaseapp.com",
    	databaseURL: "https://futureschool-360e6-default-rtdb.firebaseio.com",
    	projectId: "futureschool-360e6",
    	storageBucket: "futureschool-360e6.appspot.com",
    	messagingSenderId: "448414277849",
    	appId: "1:448414277849:web:a100d6ffa3a3e7f64a9ec8",
    	measurementId: "G-XP721MQ4WX"
    };
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();

    window.setFirebaseValues = function (values) {
        firebase.database().ref('values').update(values);
    };

    firebase.database().ref('values').on('value', function (snapshot) {
        if (typeof firebaseValueChangeHandler !== 'function') {
            return;
        }
    	firebaseValueChangeHandler(snapshot.val());
    }); // ready to go

    if (typeof onFirebaseReady === 'function') {
        onFirebaseReady();
    }
	function onFirebaseReady() {
	    console.log('onFirebaseReady handler');
	}
	function firebaseValueChangeHandler(values) {
		console.log('------')
	        speedY = values.speedY/10
	        // rotation = toradians(values.rotation)
	}		
}

var raycaster = new THREE.Raycaster(); // create once
var mouse = new THREE.Vector2(); // create once
get_data_array()
function get_data_array() {
    var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
            data_array = JSON.parse(this.responseText).values
            console.log(data_array)
            // data_array.reverse();
            for (var i = data_array.length - 1; i >= 0; i--) {
            	data_array[i]=data_array[i].reverse();
            	if(i == 0){
				    var xhttp2 = new XMLHttpRequest();
				        xhttp2.onreadystatechange = function() {
				            if (this.readyState == 4 && this.status == 200) {
				            ground_data_array = JSON.parse(this.responseText).values
				            for (var j = ground_data_array.length - 1; j >= 0; j--) {
				            	ground_data_array[j]=ground_data_array[j].reverse();
				            	if(j == 0){
				            		console.log('---------------------------2')
				            		default_form(ground_data_array)
				            	}
				            }
				        };
				    }
				    xhttp2.open("GET", "https://sheets.googleapis.com/v4/spreadsheets/1PS8Cbm_HYHBDo9e0fy4p8bEKmd39g0aACBlWvczW2F0/values/Sheet2?key=AIzaSyAmcp44cOi9-6XM4EqjCjIQLbj_D__1YPE");
				    xhttp2.send();

            	}
            }
           
            // console.log(data_array)
        };
    }
    xhttp.open("GET", "https://sheets.googleapis.com/v4/spreadsheets/1PS8Cbm_HYHBDo9e0fy4p8bEKmd39g0aACBlWvczW2F0/values/Sheet3?key=AIzaSyAmcp44cOi9-6XM4EqjCjIQLbj_D__1YPE");
    xhttp.send();
}

	var mainpivot
	var textureLoader
	function default_form(data_array){
		mainpivot = new THREE.Group();
		scene.add( mainpivot );
			textureLoader = new THREE.TextureLoader();
		create_chs(data_array)
	}
	function create_chs(data_array){
		document.body.appendChild(renderer.domElement);
				var texture_bg1 = textureLoader.load( 'img/gd1.png' ); //left
					texture_bg1.wrapS = THREE.RepeatWrapping;
					texture_bg1.wrapT = THREE.RepeatWrapping;
					texture_bg1.repeat.set(-1, -1);
				var texture_bg2 = textureLoader.load( 'img/gd0.png' ); //left
					texture_bg2.wrapS = THREE.RepeatWrapping;
					texture_bg2.wrapT = THREE.RepeatWrapping;
					texture_bg2.repeat.set(-1, -1);
				var texture_bg3 = textureLoader.load( 'img/gd2.png' ); //left
					texture_bg3.wrapS = THREE.RepeatWrapping;
					texture_bg3.wrapT = THREE.RepeatWrapping;
					texture_bg3.repeat.set(-1, -1);
				// faceMaterial_obj[0] = [
				//     new THREE.MeshBasicMaterial( { map: texture_bg2 } ), //side
				//     new THREE.MeshBasicMaterial( { map: texture_bg2 } ),
				//     new THREE.MeshBasicMaterial( { map: texture_bg2 } ),
				//     new THREE.MeshBasicMaterial( { map: texture_bg2 } ),
				//     new THREE.MeshBasicMaterial( { map: texture_bg2 } ),
				//     new THREE.MeshBasicMaterial( { map: texture_bg2 } ) //front
				// ];
				faceMaterial_obj[0] = 
				    new THREE.MeshBasicMaterial( { map: texture_bg2,
										            side: THREE.DoubleSide } )

		for (var i = 26; i > 0; i--) {
				texture0_obj[i]  = Array(3)
				texture0_obj[i][0] = textureLoader.load( 'img/ch-'+pad(i, 2)+'.png' ); //left
				texture0_obj[i][0].wrapS = THREE.RepeatWrapping;
				texture0_obj[i][0].wrapT = THREE.RepeatWrapping;
				texture0_obj[i][0].repeat.set(-1, -1);
				texture0_obj[i][1] = textureLoader.load( 'img/cha-'+pad(i, 2)+'.png' ); //left
				texture0_obj[i][1].wrapS = THREE.RepeatWrapping;
				texture0_obj[i][1].wrapT = THREE.RepeatWrapping;
				texture0_obj[i][1].repeat.set(-1, -1);
				texture0_obj[i][2] = textureLoader.load( 'img/chb-'+pad(i, 2)+'.png' ); //left
				texture0_obj[i][2].wrapS = THREE.RepeatWrapping;
				texture0_obj[i][2].wrapT = THREE.RepeatWrapping;
				texture0_obj[i][2].repeat.set(-1, -1);
				materials_obj[i] = Array(3)
				faceMaterial_obj[i] = Array(3)
				faceMaterial_obj[i][0] = [
				    new THREE.MeshBasicMaterial( {color: 0xffffff} ), //side
				    new THREE.MeshBasicMaterial( {color: 0xffffff} ),
				    new THREE.MeshBasicMaterial( {color: 0xffffff} ),
				    new THREE.MeshBasicMaterial( {color: 0xffffff} ),
				    new THREE.MeshBasicMaterial( { map : texture0_obj[i][0]} ),
				    new THREE.MeshBasicMaterial( {color: 0xffffff} ) //front
				];
				faceMaterial_obj[i][1] = [
				    new THREE.MeshBasicMaterial( {color: 0x000000} ), //side
				    new THREE.MeshBasicMaterial( {color: 0x000000} ),
				    new THREE.MeshBasicMaterial( {color: 0x000000} ),
				    new THREE.MeshBasicMaterial( {color: 0x000000} ),
				    new THREE.MeshBasicMaterial( { map : texture0_obj[i][1]} ),
				    new THREE.MeshBasicMaterial( {color: 0x000000} ) //front
				];
				faceMaterial_obj[i][2] = [
				    new THREE.MeshBasicMaterial( {color: 0x2453ff} ), //side
				    new THREE.MeshBasicMaterial( {color: 0x2453ff} ),
				    new THREE.MeshBasicMaterial( {color: 0x2453ff} ),
				    new THREE.MeshBasicMaterial( {color: 0x2453ff} ),
				    new THREE.MeshBasicMaterial( { map : texture0_obj[i][2]} ),
				    new THREE.MeshBasicMaterial( {color: 0x2453ff} ) //front
				];
		}
		faceMaterial_obj[27] = [
		    new THREE.MeshBasicMaterial( {color: 0x2453ff} ), //side
		    new THREE.MeshBasicMaterial( {color: 0x2453ff} ),
		    new THREE.MeshBasicMaterial( {color: 0x2453ff} ),
		    new THREE.MeshBasicMaterial( {color: 0x2453ff} ),
		    new THREE.MeshBasicMaterial( {color: 0x2453ff} ),
		    new THREE.MeshBasicMaterial( {color: 0x2453ff} ) //front
		];





		// category
		for (var b = 50+30+42-1; b >= 50+30; b--) {
				texture0_obj[b] = textureLoader.load( 'img/program_'+(b-(50+30))+'.png' ); //left
				texture0_obj[b].wrapS = THREE.RepeatWrapping;
				texture0_obj[b].wrapT = THREE.RepeatWrapping;
				texture0_obj[b].repeat.set(-1, -1);

				materials_obj[b] = [
				    new THREE.MeshBasicMaterial( {color: 0x004b54}  ), //side
				    new THREE.MeshBasicMaterial( { map: texture0_obj[b] } ),
				    new THREE.MeshBasicMaterial({ map: texture_bg2 } ),
				    new THREE.MeshBasicMaterial({ map: texture_bg2 } ),
				    new THREE.MeshBasicMaterial({ map: texture_bg2 } ),
				    new THREE.MeshBasicMaterial({ map: texture_bg2 } )
				];
				faceMaterial_obj[b] = new THREE.MultiMaterial( materials_obj[b] )
		}
		for (var b = 50+30+42+42-1; b >= 50+30+42; b--) {
				texture0_obj[b] = textureLoader.load( 'img/exhibition_'+(b-(80+42))+'.png' ); //left
				texture0_obj[b].wrapS = THREE.RepeatWrapping;
				texture0_obj[b].wrapT = THREE.RepeatWrapping;
				texture0_obj[b].repeat.set(-1, -1);

				materials_obj[b] = [
				    new THREE.MeshBasicMaterial( { map: texture_bg2 } ), //side
				    new THREE.MeshBasicMaterial( { map: texture0_obj[b] } ),
				    new THREE.MeshBasicMaterial( { map: texture_bg2 } ),
				    new THREE.MeshBasicMaterial( { map: texture_bg2 } ),
				    new THREE.MeshBasicMaterial( { map: texture_bg2 } ),
				    new THREE.MeshBasicMaterial( { map: texture_bg2 } ) //front
				];
				faceMaterial_obj[b] = new THREE.MultiMaterial( materials_obj[b] )
		}





		// ground
		for (var b = (planeamount/4)+30-1; b >= 30; b--) {
			texture0_obj[b]  = Array(data_array[0].length)
			materials_obj[b] = Array(data_array[0].length)
			faceMaterial_obj[b] = Array(data_array[0].length)
			for (var a = data_array[0].length-1; a >= 0; a--) {
				texture0_obj[b][a] = Array(4)
				texture0_obj[b][a][0] = textureLoader.load( 'img/side_'+((b-30)+a*(planeamount/4))+'.png' ); //left
				texture0_obj[b][a][0].wrapS = THREE.RepeatWrapping;
				texture0_obj[b][a][0].wrapT = THREE.RepeatWrapping;
				texture0_obj[b][a][0].repeat.set(-1, -1);
				texture0_obj[b][a][1] = textureLoader.load( 'img/side_'+((b-30)+a*(planeamount/4))+'.png' ); //left
				texture0_obj[b][a][1].wrapS = THREE.RepeatWrapping;
				texture0_obj[b][a][1].wrapT = THREE.RepeatWrapping;
				texture0_obj[b][a][1].repeat.set(1, -1);
				// texture0_obj[b][a][2] = textureLoader.load( 'img/sidea_'+((b-30)+a*50)+'.png' ); //left
				// texture0_obj[b][a][2].wrapS = THREE.RepeatWrapping;
				// texture0_obj[b][a][2].wrapT = THREE.RepeatWrapping;
				// texture0_obj[b][a][2].repeat.set(-1, -1);
				// texture0_obj[b][a][3] = textureLoader.load( 'img/sidea_'+((b-30)+a*50)+'.png' ); //left
				// texture0_obj[b][a][3].wrapS = THREE.RepeatWrapping;
				// texture0_obj[b][a][3].wrapT = THREE.RepeatWrapping;
				// texture0_obj[b][a][3].repeat.set(1, -1);

				faceMaterial_obj[b][a] = new THREE.MeshBasicMaterial( 
					// {color: 0xffffff}
													{ 	
													map: texture0_obj[b][a][0],
										            // alphaMap : texture0_obj[b][a][2],
										            // transparent : true,
										            // depthWrite  : false ,
										            side: THREE.DoubleSide
										        } 
										        )
				if(a==0&b==30){
            		create_objects(data_array)
            	}
			}
		}


	}



	function create_objects(data_array){
		geometry = new THREE.BoxBufferGeometry(unit_obj, unit_obj, unit_obj);
		geometry_long = new THREE.BoxBufferGeometry(unit_obj, unit_obj*5, unit_obj);
		// 우측
		var j = -1;
		var side_texture_bg = textureLoader.load( 'img/circle-01.png' ); //left
			side_texture_bg.wrapS = THREE.RepeatWrapping;
			side_texture_bg.wrapT = THREE.RepeatWrapping;
			side_texture_bg.repeat.set(-1, -1);
		var side_texture_bga = textureLoader.load( 'img/circlea-01.png' ); //left
			side_texture_bga.wrapS = THREE.RepeatWrapping;
			side_texture_bga.wrapT = THREE.RepeatWrapping;
			side_texture_bga.repeat.set(-1, -1);
		const side_geometry = new THREE.PlaneGeometry( unit_obj*(radius+2.5)*2,unit_obj*(radius+2.5)*2 );
		const side_material = new THREE.MeshBasicMaterial( {map:side_texture_bg,
												            alphaMap : side_texture_bga,
												            transparent : true,
												            depthWrite  : false , 
												            side: THREE.DoubleSide} );
		plane = new THREE.Mesh( side_geometry, side_material );
		mainpivot.add( plane );

		// 바닥면
		var bottom_texture_bg = textureLoader.load( 'img/circle-01.png' ); //left
			bottom_texture_bg.wrapS = THREE.RepeatWrapping;
			bottom_texture_bg.wrapT = THREE.RepeatWrapping;
			bottom_texture_bg.repeat.set(-1, -1);
		var bottom_texture_bga = textureLoader.load( 'img/circlea-01.png' ); //left
			bottom_texture_bga.wrapS = THREE.RepeatWrapping;
			bottom_texture_bga.wrapT = THREE.RepeatWrapping;
			bottom_texture_bga.repeat.set(-1, -1);
		const bottom_geometry = new THREE.PlaneGeometry( unit_obj*(radius+2.5)*2,unit_obj*(radius+2.5)*2 );
		const bottom_material = new THREE.MeshBasicMaterial( {map:side_texture_bg,
												            alphaMap : side_texture_bga,
												            transparent : true,
												            depthWrite  : false , 
												            side: THREE.DoubleSide} );
		bottomplane = new THREE.Mesh( bottom_geometry, bottom_material );
		mainpivot.add( bottomplane );
		bottomplane.rotation.x = degtorad(0)
		bottomplane.rotation.y = degtorad(90)
		bottomplane.rotation.z = degtorad(-10)
		bottomplane.position.set( -1*unit_obj*radius,0, 0)

		// const bottom_geometry = new THREE.CylinderGeometry( unit_obj*radius, unit_obj*radius, unit_obj*data_array[0].length);
		// const bottom_material = new THREE.MeshBasicMaterial( {color: 0x000000} );
		// const cylinder = new THREE.Mesh( bottom_geometry, bottom_material );
		// cylinder.rotation.z = degtorad(-90)
		// mainpivot.add( cylinder );
		// console.log(cylinder)
	
        for (var j = data_array[0].length-1; j >= 0; j--) {
				get_obj_position(j)
        }
	}

	function get_obj_position(j){
		pivot_wrapper[j] = new THREE.Group();
		pivot_wrapper_cube[j] = new THREE.Group();
		mainpivot.add( pivot_wrapper[j] );
		mainpivot.add( pivot_wrapper_cube[j] );
		pivot_wrapper[j].position.set(0, -0.5*getheight(unit_obj*Math.abs( pivot_wrapper.length/2 - j ),unit_obj*radius), unit_obj*j-unit_obj*data_array[0].length/2)
		pivot_wrapper_cube[j].position.set(0, -0.5*getheight(unit_obj*Math.abs( pivot_wrapper.length/2 - j ),unit_obj*radius), unit_obj*j-unit_obj*data_array[0].length/2)
		
        for (var k = (ground_data_array.length)*4-1; k >= 0; k--) {
			pivot_single[k] = new THREE.Group();
			
			if(ground_data_array[k%ground_data_array.length][j] === '.'){

			}else if(ground_data_array[k%ground_data_array.length][j] === '*'){
					var planelet = new THREE.Mesh( new THREE.PlaneGeometry(unit_obj*5,unit_obj*5), new THREE.MeshBasicMaterial( {color: 0xc9bc95,side: THREE.DoubleSide } ));
					// planelet.rotation.z = degtorad(90)
					// planelet.rotation.y = degtorad(90)
					planelet.position.set(0, unit_obj*(radius+5), 0);
					pivot_single[k].add(planelet);
					pivot_single[k].rotation.z = degtorad(2.25)*k
					pivot_wrapper[j].add(pivot_single[k])

			}else if((k < planeamount)){
				if((k%ground_data_array.length<ground_data_array.length-1) && ground_data_array[k%ground_data_array.length+1][j] === '*'){
					var cube = new THREE.Mesh( new THREE.PlaneGeometry(unit_obj*2,unit_obj*5), new THREE.MeshBasicMaterial( {color: 0xffffff,side: THREE.DoubleSide } ));
					cube.position.set(0, unit_obj*(radius+2.5+0.25), 0);
					cube.rotation.y = degtorad(90)
				}
				if((k%ground_data_array.length>1) && ground_data_array[k%ground_data_array.length-1][j] === '*'){
					var cube = new THREE.Mesh( new THREE.PlaneGeometry(unit_obj*2,unit_obj*5), new THREE.MeshBasicMaterial( {color: 0xffffff,side: THREE.DoubleSide } ));
					cube.position.set(0, unit_obj*(radius+2.5+0.25), 0);
					cube.rotation.y = degtorad(90)
				}




        		if(k%2 == 0){
					var planelet = new THREE.Mesh( new THREE.PlaneGeometry(unit_obj,unit_obj), faceMaterial_obj[0]);
					planelet.rotation.y = degtorad(90)
					planelet.position.set(0, unit_obj*(radius), 0);
					pivot_single[k].add(planelet);
					pivot_single[k].rotation.z = degtorad(2.25)*k
					pivot_wrapper[j].add(pivot_single[k])
        		}else{
					var planelet = new THREE.Mesh( new THREE.PlaneGeometry(unit_obj*2,unit_obj/2), faceMaterial_obj[((k-1)/2)%(planeamount/4)+groundoffset+30][j]);
					planelet.position.set(0, unit_obj*(radius), 0);
					pivot_single[k].add(planelet);
					pivot_single[k].rotation.z = degtorad(2.25)*k
					pivot_wrapper[j].add(pivot_single[k])
        		}

			}
		}
        for (var k = data_array.length-1; k >= 0; k--) {
			pivot_single_cube[k] = new THREE.Group();
			if(data_array[k][j] === '_'){}else{
				if(data_array[k][j] === '*'||data_array[k][j] === '.'){
				}else{
						if(data_array[k][j].split('|').length>1){
						}else{
							floor = 1
						}
							floor = (17-j%17)*0.5-0.5
							if(data_array[k][j].split('.').length>1){
							floor = 1
							}
							console.log(floor)
						if(data_array[k][j].split('|')[0].split('.').length == 3){
							var sel_cube = new THREE.Mesh( geometry,faceMaterial_obj[ch_to_tex(data_array[k][j].split('|')[0].split('.')[0])][2]);
						}else if(data_array[k][j].split('|')[0].split('.').length == 2){
							var sel_cube = new THREE.Mesh( geometry,faceMaterial_obj[ch_to_tex(data_array[k][j].split('|')[0].split('.')[0])][1]);
						}else{
							var sel_cube = new THREE.Mesh( geometry,faceMaterial_obj[ch_to_tex(data_array[k][j].split('|')[0].split('.')[0])][0]);
						}
						sel_cube.position.set(0, unit_obj*(radius-floor), 0);
						pivot_single_cube[k].add(sel_cube);
						pivot_single_cube[k].rotation.z = degtorad(2.25)*k
						pivot_wrapper_cube[j].add(pivot_single_cube[k])
						// EventsControls.attach(sel_cube);
						// console.log(group_array)
						group_array[Math.floor(k/8)*3+Math.floor(j/17)].push(sel_cube)
						sel_cube.group = Math.floor(k/8)*3+Math.floor(j/17);
						sel_cube.ch = ch_to_tex(data_array[k][j].split('|')[0].split('.')[0])
						// 20*3
				}
			}
			// pivot_single[k].add(line);
        	if(k == 0){
			}
			// ////////Field for Installation///////////
			$(document).mousemove(function( event ) {
				mX = event.pageX
				mY = event.pageY
			});
        	if(k == 0 && j == 0){
				document.addEventListener('keydown',press)
				function press(e){
					console.log('----')
					key_pressed = true
						window.cancelAnimationFrame(ani_frame);
					animate()
					if (e.keyCode === 38 /* up */ || e.keyCode === 87 /* w */ || e.keyCode === 90 /* z */){
					up = true
					}
					if (e.keyCode === 39 /* right */ || e.keyCode === 68 /* d */){
					right = true
					}
					if (e.keyCode === 40 /* down */ || e.keyCode === 83 /* s */){
					down = true
					}
					if (e.keyCode === 37 /* left */ || e.keyCode === 65 /* a */ || e.keyCode === 81 /* q */){
					left = true
					}
				}
				document.addEventListener('keyup',release)
				function release(e){
					
					if (e.keyCode === 38 /* up */ || e.keyCode === 87 /* w */ || e.keyCode === 90 /* z */){
					up = false
					}
					if (e.keyCode === 39 /* right */ || e.keyCode === 68 /* d */){
					right = false
					}
					if (e.keyCode === 40 /* down */ || e.keyCode === 83 /* s */){
					down = false
					}
					if (e.keyCode === 37 /* left */ || e.keyCode === 65 /* a */ || e.keyCode === 81 /* q */){
					left = false
					}
					if( up || right || down || left ){}else{key_pressed = false}
				}

			var camerapivot = new THREE.Group();
			scene.add( camerapivot );

				camera.position.set(0, -1*unit_obj*(radius-2), 0);
				camera.rotation.y = Math.PI/2

				camera.rotateOnWorldAxis(Axis, THREE.Math.degToRad(-20));
				init_rot_y =camera.rotation.y


				mouse.x = ( event.clientX / renderer.domElement.clientWidth ) * 2 - 1;
				mouse.y = - ( event.clientY / renderer.domElement.clientHeight ) * 2 + 1;

			camera.getWorldDirection( dir )
				animate()
        	}
        }
		return false
	}
			$(document).mousedown(function( event ) {
					console.log('------1')
				mX = event.pageX
				mY = event.pageY
					console.log(mX)
				key_pressed = true
					window.cancelAnimationFrame(ani_frame);
					animate()
			});
			$(document).mouseup(function( event ) {
				mX = event.pageX
				mY = event.pageY
					console.log('------2')
					window.cancelAnimationFrame(ani_frame);
					key_pressed = false
			});
	// EventsControls = new EventsControls( camera, renderer.domElement );
	// var hover_mataerial_array = []
	// var mouseovered_group = -1
	// var timeout;
	// document.onmousemove = function(){
	// 	clearTimeout(timeout);
	// }
	// EventsControls.attachEvent( 'mouseOver', function () {
	// 	if(mouseovered_group !== this.event.object.group){
	// 		this.container.style.cursor = 'pointer';
	// 		clearTimeout(timeout);
	// 		if(mouseovered_group>-1){
	// 			for (var i = group_array[mouseovered_group].length - 1; i >= 0; i--) {
	// 				group_array[mouseovered_group][i].material = hover_mataerial_array[i]
	// 			}
	// 		}
	// 		mouseovered_group = this.event.object.group
	// 		hover_mataerial_array = []
	// 		for (var i = group_array[mouseovered_group].length - 1; i >= 0; i--) {
	// 			hover_mataerial_array.push( group_array[mouseovered_group][i].material)
	// 			group_array[mouseovered_group][i].material = faceMaterial_obj[27]
	// 		}
	// 		renderer.render( scene, camera );
	// 		timeout = setTimeout(function(){
	// 			for (var i = group_array[mouseovered_group].length - 1; i >= 0; i--) {
	// 				group_array[mouseovered_group][i].material = hover_mataerial_array[i]
	// 			}
	// 		}, 3000);
	// 	}
	// });
	// EventsControls.attachEvent( 'mouseOut', function () {
	// 	this.container.style.cursor = 'auto';
	// 	if(mouseovered_group !== this.event.object.group){
	// 	}
	// });
	// EventsControls.attachEvent( 'onclick', function () {
 //    	window.open("http://synacor.com","my_window", "width=400, height=400");
	// });


	function getheight(b,c){
		return c - Math.sqrt((c*c)+(b*b))
	}
	function ch_to_tex(ch){
		// return 1
			 if(ch.toLowerCase() === 'a'){return 1 }
		else if(ch.toLowerCase() === 'b'){return 2 }
		else if(ch.toLowerCase() === 'c'){return 3 }
		else if(ch.toLowerCase() === 'd'){return 4 }
		else if(ch.toLowerCase() === 'e'){return 5 }
		else if(ch.toLowerCase() === 'f'){return 6 }
		else if(ch.toLowerCase() === 'g'){return 7 }
		else if(ch.toLowerCase() === 'h'){return 8 }
		else if(ch.toLowerCase() === 'i'){return 9 }
		else if(ch.toLowerCase() === 'j'){return 10}
		else if(ch.toLowerCase() === 'k'){return 11}
		else if(ch.toLowerCase() === 'l'){return 12}
		else if(ch.toLowerCase() === 'n'){return 13}
		else if(ch.toLowerCase() === 'm'){return 14}
		else if(ch.toLowerCase() === 'o'){return 15}
		else if(ch.toLowerCase() === 'p'){return 16}
		else if(ch.toLowerCase() === 'q'){return 17}
		else if(ch.toLowerCase() === 'r'){return 18}
		else if(ch.toLowerCase() === 's'){return 19}
		else if(ch.toLowerCase() === 't'){return 20}
		else if(ch.toLowerCase() === 'u'){return 21}
		else if(ch.toLowerCase() === 'v'){return 22}
		else if(ch.toLowerCase() === 'w'){return 23}
		else if(ch.toLowerCase() === 'x'){return 24}
		else if(ch.toLowerCase() === 'y'){return 25}
		else if(ch.toLowerCase() === 'z'){return 26}
		else{return 26}
	}
	function ch_to_col(ch){
			 if(ch.toLowerCase() === 'w'){return 0 }
		else if(ch.toLowerCase() === 'b'){return 1 }
	}


// var scene = new THREE.Scene(); // initialising the scene
// scene.background = new THREE.Color( 0xff0000 );
		
		function animate() {
			// ////////Field for Installation///////////
				if(mY/window.innerHeight < 0.5){
					down = false
					up = true
				}
				if(mY/window.innerHeight > 0.5){
					down = true
					up = false
				}
				if(mX/window.innerWidth < 0.5){
					right = false
					left = true
				}
				if(mX/window.innerWidth > 0.5){
					right = true
					left = false
				}
			if(up){
				counter = counter + Math.cos(-1*mainpivot.rotation.y+Math.PI/2)/5*3
				value = value + Math.sin(-1*mainpivot.rotation.y+Math.PI/2)/200*3
				planevalue = planevalue + Math.sin(-1*mainpivot.rotation.y+Math.PI/2)/200*3
		 	}
			if(down){
				counter = counter - Math.cos(-1*mainpivot.rotation.y+Math.PI/2)/5*3
				value = value - Math.sin(-1*mainpivot.rotation.y+Math.PI/2)/200*3
				planevalue = planevalue - Math.sin(-1*mainpivot.rotation.y+Math.PI/2)/200*3
		 	}
			// console.log(right)
			// console.log(changed_dir)
			if(right){
				// counter = counter + 0.01
				changed_dir ++
		 		mainpivot.rotation.y = 1*degtorad(changed_dir)
		 		if(changed_dir<90 && changed_dir>0){
		 		camera.rotation.y = init_rot_y+1*degtorad(changed_dir*10/90)
		 		}else if(changed_dir>-90 && changed_dir<=0){
		 		camera.rotation.y = init_rot_y-1*degtorad(changed_dir*10/90)
		 		}
			}
			if(left){
				// counter = counter - 0.01
				changed_dir --
		 		mainpivot.rotation.y = 1*degtorad(changed_dir)
		 		if(changed_dir<90 && changed_dir>0){
		 		camera.rotation.y = init_rot_y+1*degtorad(changed_dir*10/90)
		 		}else if(changed_dir>-90 && changed_dir<=0){
		 		camera.rotation.y = init_rot_y-1*degtorad(changed_dir*10/90)
		 		}
			}
			// pivot_wrapper[i]
			if(planevalue - initangle<degtorad(-1*2.25*planeamount/4)){
				planevalue = planevalue + degtorad(2.25*planeamount/4)
				initangle = planevalue
			}
			if(planevalue - initangle>degtorad(2.25*planeamount/4)){
				planevalue = planevalue - degtorad(2.25*planeamount/4)
				initangle = planevalue
			}

			if((changed_dir+3600)%360<60||(changed_dir+3600)%360>300){
				var offset = -1*degtorad(2.25*planeamount/4)
			}else if((changed_dir+3600)%360<120||(changed_dir+3600)%360>240){
				var offset = 0
			}else{
				var offset = 1*degtorad(2.25*planeamount/4)
			}

				var new_dir = (changed_dir+3600)%360
				if(new_dir>90 && new_dir<=180){
					new_dir = 180-new_dir
				}else if(new_dir>180 && new_dir<=270){
					new_dir = 180-new_dir
				}else if(new_dir>270 && new_dir<=360){
					new_dir = new_dir-360
				}
				// if(changed_dir>(data_array[0].length/2)){
				// 	new_dir = data_array[0].length-changed_dir
				// }
			for (var i = pivot_wrapper.length - 1; i >= 0; i--) {
				pivot_wrapper[i].rotation.z = planevalue+offset
				pivot_wrapper_cube[i].rotation.z = value

				var selectedvalue = (i + counter)%data_array[0].length
				var degreeoffset = new_dir/(90/(data_array[0].length/2))
				// -90~90
				// 90~
				// console.log(degreeoffset)
				// console.log(selectedvalue)
				if(selectedvalue < (-1*data_array[0].length/2	- degreeoffset)	){
					selectedvalue = selectedvalue + data_array[0].length
				}
				if(selectedvalue > (data_array[0].length/2	- degreeoffset)	){
					selectedvalue = selectedvalue - data_array[0].length
				}

				result = unit_obj*selectedvalue
				pivot_wrapper[i].position.z = result
				pivot_wrapper[i].position.y= -0.5*getheight( Math.abs(result),unit_obj*(radius-1))
				pivot_wrapper_cube[i].position.z = result
				pivot_wrapper_cube[i].position.y= -0.5*getheight( Math.abs(result),unit_obj*(radius-1))
				// console.log(degreeoffset)
				if(i == 0){
					result = (-1*data_array[0].length/2 - degreeoffset)*unit_obj
					plane.position.z = result
					plane.position.y = -0.5*getheight( Math.abs(result),unit_obj*(radius-1))
				}
			}

			if(key_pressed){
					  	ani_frame = requestAnimationFrame( animate );
					}else{
						window.cancelAnimationFrame(ani_frame);
					}
			  // 
			  renderer.setClearColor( 0xffffff, 0);      
		  	renderer.render( scene, camera );
		};
		// function moveForward() { 
		// 	camera.getWorldDirection( dir );
		//   	camera.position.addScaledVector( dir, speed );
			
		// }
		// function rotateLeft() {
		//  	camera.rotation.y += Math.PI / 16; 
		 	
		// }
		// function rotateRight() {
		//  	camera.rotation.y -= Math.PI / 16; 
		 	
		// }

	};


	window.onload = init();
})
function radtodeg(radians)
{
  var pi = Math.PI;
  return radians * (180/pi);
}
  
function degtorad(degrees){
	return degrees * Math.PI / 180;
}
function pad(n, width, z) {
  z = z || '0';
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}