$(document).ready(function(){
	// $('iframe').wrap('<div class="right"></div>')
$('.right').append('\
	<span>This is a virtual school space and a trial of building a community space where can be constructed, modified and reconstructed collaboratively by group of people. This website uses google spreadsheet as a database.(converts google spreadsheet into 3d space)  Whenever user enters, this brings the real time data from the spreadsheet and reconstruct the environment. if anyone who have access to the spreadsheet changes the information of it, the modification directly applied to this virtual environment. This system represents the school where is a collaborative community space built by people from comunity</br>\
	<br>\
	It’s yet on it’s default mode, where the buildings(which represents list of programs and exhibitions) are all just lined up. This arrangement will be transformed as the programs and exhibitions progressed, creates new relationships and shapes, during the binneale season.<br>\
	Artwork from _____, Commissioned by _____<br>\
	</span>')

	var init = function(){
		//if ( ! Detector.webgl ) Detector.addGetWebGLMessage();
		var mX
		var mY
		var skymove_a = 0
		var skymove_b = 0
		var value = 0
		var planeamount = 80
		var initangle = degtorad(180 - 2.25*planeamount/2)
		var planevalue = initangle
		var pivot_array = []
		var degreeoffset = 0
		// var planevalue = degtorad(-205)
		var am_x = 16
		var am_y = 60
		var amount = am_x*am_y
		var sky_initpos_array = []
		var pivot_wrapper = Array(am_x)
		var pivot_wrapper_cube = Array(am_x)
		var pivot_wrapper_sky = Array(3)
		var side_pivot_wrapper = Array(0)
		var pivot_single = Array(am_y)
		var pivot_single_cube = Array(am_y)
		var pivot_single_sky = Array(30)
		var side_pivot_single = Array(am_y)
		var group_array = Array(60)
		for (var i = group_array.length - 1; i >= 0; i--) {
			group_array[i] = Array(2)
			group_array[i][0] = Array()
			group_array[i][1] = Array()
		}
		var result_sky = 0
		var start = true
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
var plane_op_1
		var init_rot_y
		var axis = new THREE.Vector3(1, 0, 0);
		const Axis = new THREE.Vector3(0, 0, 1);

		var counter = 0
		var changed_dir = 1890
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
		// var key_pressed = true
		var key_pressed = false
		var ground_data_array
		var sky_data_array
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
            for (var m = data_array.length - 1; m >= 0; m--) {
            	pivot_array.push(data_array[data_array.length-1-m][0]);
	            if(m==0){
		            for (var i = data_array.length - 1; i >= 0; i--) {
		            	pivot_array.push(data_array[data_array.length-1-i][0]);
		            	data_array[i]=data_array[i].splice(1,data_array[i].length-1).reverse();
		            	if(i == 0){
						    var xhttp2 = new XMLHttpRequest();
						        xhttp2.onreadystatechange = function() {
						            if (this.readyState == 4 && this.status == 200) {
						            ground_data_array = JSON.parse(this.responseText).values
						            for (var j = ground_data_array.length - 1; j >= 0; j--) {
						            	ground_data_array[j]=ground_data_array[j].reverse();
						            	if(j == 0){
										    var xhttp2 = new XMLHttpRequest();
										        xhttp2.onreadystatechange = function() {
										            if (this.readyState == 4 && this.status == 200) {
										            sky_data_array = JSON.parse(this.responseText).values
										            for (var k = ground_data_array.length - 1; k >= 0; k--) {
										            	ground_data_array[k]=ground_data_array[k].reverse();
										            	if(k == 0){
										            		default_form(ground_data_array)
										            	}
										            }
										        };
										    }
										    xhttp2.open("GET", "https://sheets.googleapis.com/v4/spreadsheets/1aQVRscxiWThOiN6XlCRmrZ20OdUtdKF3mrAqdFwXsJo/values/Sheet4?key=AIzaSyAmcp44cOi9-6XM4EqjCjIQLbj_D__1YPE");
										    xhttp2.send();
						            	}
						            }
						        };
						    }
						    xhttp2.open("GET", "https://sheets.googleapis.com/v4/spreadsheets/1aQVRscxiWThOiN6XlCRmrZ20OdUtdKF3mrAqdFwXsJo/values/Sheet2?key=AIzaSyAmcp44cOi9-6XM4EqjCjIQLbj_D__1YPE");
						    xhttp2.send();
		            	}
		            }
            	}
            }
        };
    }
    xhttp.open("GET", "https://sheets.googleapis.com/v4/spreadsheets/1aQVRscxiWThOiN6XlCRmrZ20OdUtdKF3mrAqdFwXsJo/values/Sheet3?key=AIzaSyAmcp44cOi9-6XM4EqjCjIQLbj_D__1YPE");
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
	var texture_bg4
	var texture_bg5
	function create_chs(data_array){
		//texture
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
					texture_bg3.repeat.set(-1, -3);
					texture_bg4 = textureLoader.load( 'img/gd4.png' ); //left
					texture_bg4.wrapS = THREE.RepeatWrapping;
					texture_bg4.wrapT = THREE.RepeatWrapping;
					texture_bg4.repeat.set(-1, 1);
					texture_bg5 = textureLoader.load( 'img/gd3.png' ); //left
					texture_bg5.wrapS = THREE.RepeatWrapping;
					texture_bg5.wrapT = THREE.RepeatWrapping;
					texture_bg5.repeat.set(-0.8, 0.8);
					texture_bg5.offset.y = 0.1;
				faceMaterial_obj[0] = 
				    new THREE.MeshBasicMaterial( { map: texture_bg2,
										            side: THREE.DoubleSide } )
		//cubes
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
				texture0_obj[i][2] = textureLoader.load( 'img/ch-'+pad(i, 2)+'.png' ); //left
				texture0_obj[i][2].wrapS = THREE.RepeatWrapping;
				texture0_obj[i][2].wrapT = THREE.RepeatWrapping;
				texture0_obj[i][2].repeat.set(-1, -3);
				materials_obj[i] = Array(7)
				faceMaterial_obj[i] = Array(7)
				faceMaterial_obj[i][0] = [
				// white
				    new THREE.MeshBasicMaterial( {color: 0xffffff} ), 
				    new THREE.MeshBasicMaterial( { map : texture0_obj[i][0],
				    							  color: 0xffffff} ),//side
				    new THREE.MeshBasicMaterial( {color: 0xffffff} ),
				    new THREE.MeshBasicMaterial( { map : texture0_obj[i][1]} ),
				    new THREE.MeshBasicMaterial( {color: 0xffffff} ),
				    new THREE.MeshBasicMaterial( {color: 0xffffff} ) //front
				];
				if(i==1){
								console.log(faceMaterial_obj[1][0])}
				faceMaterial_obj[i][1] = [
				//black
				    new THREE.MeshBasicMaterial( {color: 0x000000} ), //side
				    new THREE.MeshBasicMaterial( { map : texture0_obj[i][1]} ),
				    new THREE.MeshBasicMaterial( {color: 0x000000} ),
				    new THREE.MeshBasicMaterial( { map : texture0_obj[i][0],
				    							  color: 0xffffff } ),
				    new THREE.MeshBasicMaterial( {color: 0x000000} ),
				    new THREE.MeshBasicMaterial( {color: 0x000000} ) //front
				];
				faceMaterial_obj[i][2] = [
				//blue
				    new THREE.MeshBasicMaterial( {color: 0x2453ff} ), //side
				    new THREE.MeshBasicMaterial( { map : texture0_obj[i][0],
				    							  color: 0x2453ff } ),
				    new THREE.MeshBasicMaterial( {color: 0x2453ff} ),
				    new THREE.MeshBasicMaterial( { map : texture0_obj[i][1]} ),
				    new THREE.MeshBasicMaterial( {color: 0x2453ff} ),
				    new THREE.MeshBasicMaterial( {color: 0x2453ff} ) //front
				];
				faceMaterial_obj[i][3] = [
				// gray
				    new THREE.MeshBasicMaterial( {color: 0xe6e6e6} ), //side
				    new THREE.MeshBasicMaterial( { map : texture0_obj[i][0],
										          color: 0xe6e6e6} ),
				    new THREE.MeshBasicMaterial( {color: 0xe6e6e6} ),
				    new THREE.MeshBasicMaterial( { map : texture0_obj[i][1]} ),
				    new THREE.MeshBasicMaterial( {color: 0xe6e6e6} ),
				    new THREE.MeshBasicMaterial( {color: 0xe6e6e6} ) //front
				];
				faceMaterial_obj[i][4] = [
				// gray*****
				    new THREE.MeshBasicMaterial( {color: 0xe6e6e6} ), //side
				    new THREE.MeshBasicMaterial( { map : texture0_obj[i][0],
										          color: 0xe6e6e6} ),
				    new THREE.MeshBasicMaterial( {color: 0xe6e6e6} ),
				    new THREE.MeshBasicMaterial( { map : texture0_obj[i][1]} ),
				    new THREE.MeshBasicMaterial( {color: 0xe6e6e6} ),
				    new THREE.MeshBasicMaterial( {color: 0xe6e6e6} ) //front
				];
				faceMaterial_obj[i][5] = [
				// gray
				    new THREE.MeshBasicMaterial( {color: 0xcccccc} ), //side
				    new THREE.MeshBasicMaterial( { map : texture0_obj[i][0],
										          color: 0xcccccc} ),
				    new THREE.MeshBasicMaterial( {color: 0xcccccc} ),
				    new THREE.MeshBasicMaterial( { map : texture0_obj[i][1]} ),
				    new THREE.MeshBasicMaterial( {color: 0xcccccc} ),
				    new THREE.MeshBasicMaterial( {color: 0xcccccc} ) //front
				];
				faceMaterial_obj[i][6] = [
				//yellow
				    new THREE.MeshBasicMaterial( {color: 0xff2400} ), //side
				    new THREE.MeshBasicMaterial( {color: 0xff2400} ),
				    new THREE.MeshBasicMaterial( {color: 0xff2400} ),
				    new THREE.MeshBasicMaterial( {color: 0xff2400} ),
				    new THREE.MeshBasicMaterial( { map : texture0_obj[i][2],
										          color: 0xff2400} ),
				    new THREE.MeshBasicMaterial( { map : texture0_obj[i][2],
										          color: 0xff2400} ) //front
				];
				faceMaterial_obj[i][7] = [
				//red
				    new THREE.MeshBasicMaterial( {color: 0xffe600} ), //side
				    new THREE.MeshBasicMaterial( {color: 0xffe600} ),
				    new THREE.MeshBasicMaterial( {color: 0xffe600} ),
				    new THREE.MeshBasicMaterial( {color: 0xffe600} ),
				    new THREE.MeshBasicMaterial( { map : texture0_obj[i][2],
										          color: 0xffe600} ),
				    new THREE.MeshBasicMaterial( { map : texture0_obj[i][2],
										          color: 0xffe600} ) //front
				];
				faceMaterial_obj[i][8] = [
				// gray******
				    new THREE.MeshBasicMaterial( {color: 0xa0a0a0} ), //side
				    new THREE.MeshBasicMaterial( { map : texture0_obj[i][0],
										          color: 0xa0a0a0} ),
				    new THREE.MeshBasicMaterial( {color: 0xa0a0a0} ),
				    new THREE.MeshBasicMaterial( { map : texture0_obj[i][1]} ),
				    new THREE.MeshBasicMaterial( {color: 0xa0a0a0} ),
				    new THREE.MeshBasicMaterial( {color: 0xa0a0a0} ) //front
				];
				faceMaterial_obj[i][9] = [
				// gray******
				    new THREE.MeshBasicMaterial( {color: 0x999999} ), //side
				    new THREE.MeshBasicMaterial( { map : texture0_obj[i][0],
										          color: 0x999999} ),
				    new THREE.MeshBasicMaterial( {color: 0x999999} ),
				    new THREE.MeshBasicMaterial( { map : texture0_obj[i][1]} ),
				    new THREE.MeshBasicMaterial( {color: 0x999999} ),
				    new THREE.MeshBasicMaterial( {color: 0x999999} ) //front
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

		//arrow
				texture0_obj[28]  = Array(3)
				texture0_obj[28] = textureLoader.load( 'img/arrow.png' ); //left
				texture0_obj[28].wrapS = THREE.RepeatWrapping;
				texture0_obj[28].wrapT = THREE.RepeatWrapping;
				texture0_obj[28].repeat.set(1, -3);
				faceMaterial_obj[28]  = Array(7)
		faceMaterial_obj[28][6] = [
		    new THREE.MeshBasicMaterial( {color: 0xff2400} ), //side
		    new THREE.MeshBasicMaterial( {color: 0xff2400} ),
		    new THREE.MeshBasicMaterial( {color: 0xff2400} ),
		    new THREE.MeshBasicMaterial( {color: 0xff2400} ),
		    new THREE.MeshBasicMaterial( { map : texture0_obj[28],
								          color: 0xff2400} ),
		    new THREE.MeshBasicMaterial( { map : texture0_obj[28],
								          color: 0xff2400} ) //front
		];
		faceMaterial_obj[28][7] = [
		    new THREE.MeshBasicMaterial( {color: 0xffe600} ), //side
		    new THREE.MeshBasicMaterial( {color: 0xffe600} ),
		    new THREE.MeshBasicMaterial( {color: 0xffe600} ),
		    new THREE.MeshBasicMaterial( {color: 0xffe600} ),
		    new THREE.MeshBasicMaterial( { map : texture0_obj[28],
								          color: 0xffe600} ),
		    new THREE.MeshBasicMaterial( { map : texture0_obj[28],
								          color: 0xffe600} ) //front
		];
				texture0_obj[29]  = Array(3)
				texture0_obj[29] = textureLoader.load( 'img/arrow.png' ); //left
				texture0_obj[29].wrapS = THREE.RepeatWrapping;
				texture0_obj[29].wrapT = THREE.RepeatWrapping;
				texture0_obj[29].repeat.set(-1, -3);
				faceMaterial_obj[29]  = Array(7)
		faceMaterial_obj[29][6] = [
		    new THREE.MeshBasicMaterial( {color: 0xff2400} ), //side
		    new THREE.MeshBasicMaterial( {color: 0xff2400} ),
		    new THREE.MeshBasicMaterial( {color: 0xff2400} ),
		    new THREE.MeshBasicMaterial( {color: 0xff2400} ),
		    new THREE.MeshBasicMaterial( { map : texture0_obj[29],
								          color: 0xff2400} ),
		    new THREE.MeshBasicMaterial( { map : texture0_obj[29],
								          color: 0xff2400} ) //front
		];
		faceMaterial_obj[29][7] = [
		    new THREE.MeshBasicMaterial( {color: 0xffe600} ), //side
		    new THREE.MeshBasicMaterial( {color: 0xffe600} ),
		    new THREE.MeshBasicMaterial( {color: 0xffe600} ),
		    new THREE.MeshBasicMaterial( {color: 0xffe600} ),
		    new THREE.MeshBasicMaterial( { map : texture0_obj[29],
								          color: 0xffe600} ),
		    new THREE.MeshBasicMaterial( { map : texture0_obj[29],
								          color: 0xffe600} ) //front
		];

		//arrow-end

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
													map: texture0_obj[b][a][0]
										            // ,alphaMap : texture_bg4
										            // alphaMap : texture0_obj[b][a][2],
										            // transparent : true,
										            // depthWrite  : false ,
										            // side: THREE.DoubleSide
										        } 
										        )
				if(a==0&b==30){
            		create_objects(data_array)
            	}
			}
		}
	}



	function create_objects(data_array){
		//texture
		geometry = new THREE.BoxBufferGeometry(unit_obj, unit_obj, unit_obj);
		geometry_long = new THREE.BoxBufferGeometry(unit_obj, unit_obj*3, unit_obj);
        for (var j = data_array[0].length-1; j >= 0; j--) {
				get_obj_position(j)
		}
	}
	function get_obj_position(j){
		pivot_wrapper[j] = new THREE.Group();
		pivot_wrapper_cube[j] = new THREE.Group();
		if(j<5){ pivot_wrapper_sky[j] = new THREE.Group(); }
		if(j==0){ side_pivot_wrapper[0] = new THREE.Group(); }
		mainpivot.add( pivot_wrapper[j] );
		mainpivot.add( pivot_wrapper_cube[j] );
		if(j<5){ mainpivot.add( pivot_wrapper_sky[j] ); }
		if(j==0){ mainpivot.add( side_pivot_wrapper[0] ); }
		pivot_wrapper[j].position.set(0, -0.5*getheight(unit_obj*Math.abs( pivot_wrapper.length/2 - j ),unit_obj*radius), unit_obj*j-unit_obj*data_array[0].length/2)
		pivot_wrapper_cube[j].position.set(0, -0.5*getheight(unit_obj*Math.abs( pivot_wrapper.length/2 - j ),unit_obj*radius), unit_obj*j-unit_obj*data_array[0].length/2)
		if(j<5){ pivot_wrapper_sky[j].position.set(0, -0.5*getheight(unit_obj*Math.abs( pivot_wrapper.length/2 - j ),unit_obj*radius), unit_obj*j-unit_obj*data_array[0].length/2) }
		if(j==0){ side_pivot_wrapper[0].position.set(0, -0.5*getheight(unit_obj*Math.abs( pivot_wrapper.length/2 + 1),unit_obj*radius), unit_obj*(data_array[0].length/2+1)) }
		



		plane_op_1 = new THREE.Mesh( new THREE.PlaneGeometry(unit_obj*100,unit_obj*100), new THREE.MeshBasicMaterial( {color: 0xffffff, transparent: true, opacity :0.1, side: THREE.DoubleSide} ));
		plane_op_2 = new THREE.Mesh( new THREE.PlaneGeometry(unit_obj*100,unit_obj*100), new THREE.MeshBasicMaterial( {color: 0xffffff, transparent: true, opacity :0.1, side: THREE.DoubleSide} ));
		plane_op_3 = new THREE.Mesh( new THREE.PlaneGeometry(unit_obj*100,unit_obj*100), new THREE.MeshBasicMaterial( {color: 0xffffff, transparent: true, opacity :0.1, side: THREE.DoubleSide} ));
		plane_op_4 = new THREE.Mesh( new THREE.PlaneGeometry(unit_obj*100,unit_obj*100), new THREE.MeshBasicMaterial( {color: 0xffffff, transparent: true, opacity :0.1, side: THREE.DoubleSide} ));
		mainpivot.add( plane_op_1 );
		mainpivot.add( plane_op_2 );
		mainpivot.add( plane_op_3 );
		mainpivot.add( plane_op_4 );
		//ground
        for (var k = (ground_data_array.length)*4-1; k >= 0; k--) {
			pivot_single[k] = new THREE.Group();
			
			if(ground_data_array[k%ground_data_array.length][j] === '.'){
			}else if(ground_data_array[k%ground_data_array.length][j] === '*'){
					var planelet = new THREE.Mesh( new THREE.PlaneGeometry(unit_obj*2.5,unit_obj*5), new THREE.MeshBasicMaterial( {map:texture_bg5,side: THREE.DoubleSide} ));
					// planelet.rotation.z = degtorad(90)
					// planelet.rotation.y = degtorad(90)
					planelet.position.set(0, unit_obj*(radius+2), 0);
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
					var planelet = new THREE.Mesh( new THREE.PlaneGeometry(unit_obj,unit_obj*1.5), faceMaterial_obj[0]);
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
		//rest
        for (var k = data_array.length-1; k >= 0; k--) {
			pivot_single_cube[k] = new THREE.Group();
			//sky
			if(k<36 && j < 5){
				pivot_single_sky[k] = new THREE.Group();
				if(sky_data_array[k][j] === '_'){}else{
					var sel_sky = new THREE.Mesh( geometry,faceMaterial_obj[ch_to_tex(sky_data_array[k][j])][2]);
					sel_sky.position.set(0, unit_obj*(radius-10), 0);
					sel_sky.rotation.y = degtorad(90)
					pivot_single_sky[k].add(sel_sky);
						 if(k<10){
						 	pivot_single_sky[k].rotation.z = degtorad(3.5)*k
						 	sky_initpos_array.push(degtorad(3.5)*k)
						 }
					else if(k<18){
						pivot_single_sky[k].rotation.z = degtorad(3.5)*k + degtorad(3.5)
						sky_initpos_array.push(degtorad(3.5)*k + degtorad(3.5))
					}
					else if(k<28){
						pivot_single_sky[k].rotation.z = degtorad(3.5)*k + degtorad(180)
						sky_initpos_array.push(degtorad(3.5)*k + degtorad(180))
					}
					else if(k<36 && j>1){
						pivot_single_sky[k].rotation.z = degtorad(3.5)*k + degtorad(180+3.5)
						sky_initpos_array.push(degtorad(3.5)*k + degtorad(180+3.5))
					}
					pivot_wrapper_sky[j].add(pivot_single_sky[k])
				}
			}
			//side
			if(j==0){
				if(pivot_array[k] === '_'){}else{
				side_pivot_single[k] = new THREE.Group();
				if(k<129){
										var sel_cube_1 = new THREE.Mesh( geometry_long,faceMaterial_obj[ch_to_tex(pivot_array[k])][6]);
										var sel_cube_2 = new THREE.Mesh( geometry_long,faceMaterial_obj[ch_to_tex(pivot_array[k])][6]);
									}else{
										var sel_cube_1 = new THREE.Mesh( geometry_long,faceMaterial_obj[ch_to_tex(pivot_array[k])][7]);
										var sel_cube_2 = new THREE.Mesh( geometry_long,faceMaterial_obj[ch_to_tex(pivot_array[k])][7]);

									}
						floor =10
						sel_cube_1.position.set(0, unit_obj*(radius-floor), 0);
						side_pivot_single[k].add(sel_cube_1);
						sel_cube_2.position.set(0, unit_obj*(radius-floor), unit_obj*data_array[0].length);
						sel_cube_2.rotation.y = degtorad(90)
						side_pivot_single[k].add(sel_cube_2);
						side_pivot_single[k].rotation.z = degtorad(2.25)*k
						side_pivot_wrapper[0].add(side_pivot_single[k])
						side_pivot_wrapper[0].scale.set( 0.85, 0.85, 0.85 );
				}
			}
			//cube
			if(data_array[k][j] === '_'){}else{
				if(data_array[k][j] === '*'||data_array[k][j] === '.'||data_array[k][j].split('<').length > 1){
				}else{
						floor = (17-j%17)*0.5
						if(data_array[k][j].split('.').length == 3){
							floor = 0
						}
						var link
						var title
						if(data_array[k][j].split('/').length > 1){
							link = data_array[k][j]
							title = data_array[k][j-1]
							group_array[parseInt(Math.floor(k/8)*3)+parseInt(Math.floor(j/17))][0].push(link)
							group_array[parseInt(Math.floor(k/8)*3)+parseInt(Math.floor((j)/17))][0].push(title.split('<')[1].split('>')[0].replace(/\-/g, '<br>'))
						}else {
								if(data_array[k][j].split('.').length == 3){
									var sel_cube = new THREE.Mesh( geometry_long,faceMaterial_obj[ch_to_tex(data_array[k][j].split('.')[0])][6]);
									sel_cube.name = ch_to_tex(data_array[k][j].split('.')[0])+'|'+6
								}else if(data_array[k][j].split('.').length == 2){
									var sel_cube = new THREE.Mesh( geometry,faceMaterial_obj[ch_to_tex(data_array[k][j].split('.')[1])][0]);
									sel_cube.name = ch_to_tex(data_array[k][j].split('.')[1])+'|'+0
									
									EventsControls.attach(sel_cube);
								}else{
									// if(Math.random()<0.1){
									// var sel_cube = new THREE.Mesh( geometry,faceMaterial_obj[ch_to_tex(data_array[k][j].split('.')[0])][1]);
									// sel_cube.name = ch_to_tex(data_array[k][j].split('.')[0])
									// }
									// else 
										if(floor < 2.5){
									var sel_cube = new THREE.Mesh( geometry,faceMaterial_obj[ch_to_tex(data_array[k][j].split('.')[0])][0]);
									sel_cube.name = ch_to_tex(data_array[k][j].split('.')[0])+'|'+0
									EventsControls.attach(sel_cube);
									}
									// else if(floor < 2.5){
									// var sel_cube = new THREE.Mesh( geometry,faceMaterial_obj[ch_to_tex(data_array[k][j].split('.')[0])][3]);
									// sel_cube.name = ch_to_tex(data_array[k][j].split('.')[0])+'|'+3
									// EventsControls.attach(sel_cube);
									// }
									else if(floor < 3){
									var sel_cube = new THREE.Mesh( geometry,faceMaterial_obj[ch_to_tex(data_array[k][j].split('.')[0])][4]);
									sel_cube.name = ch_to_tex(data_array[k][j].split('.')[0])+'|'+4
									EventsControls.attach(sel_cube);
									}
									else if(floor < 3.25){
									var sel_cube = new THREE.Mesh( geometry,faceMaterial_obj[ch_to_tex(data_array[k][j].split('.')[0])][8]);
									sel_cube.name = ch_to_tex(data_array[k][j].split('.')[0])+'|'+8
									EventsControls.attach(sel_cube);
									}
									// else if(floor < 4){
									// var sel_cube = new THREE.Mesh( geometry,faceMaterial_obj[ch_to_tex(data_array[k][j].split('.')[0])][8]);
									// sel_cube.name = ch_to_tex(data_array[k][j].split('.')[0])+'|'+8
									// EventsControls.attach(sel_cube);
									// }
									else if(floor < 3.5){
									var sel_cube = new THREE.Mesh( geometry,faceMaterial_obj[ch_to_tex(data_array[k][j].split('.')[0])][9]);
									sel_cube.name = ch_to_tex(data_array[k][j].split('.')[0])+'|'+9
									EventsControls.attach(sel_cube);
									}else{
									var sel_cube = new THREE.Mesh( geometry,faceMaterial_obj[ch_to_tex(data_array[k][j].split('.')[0])][1]);
									sel_cube.name = ch_to_tex(data_array[k][j].split('.')[0])+'|'+1
									EventsControls.attach(sel_cube);
									}
								}
								sel_cube.position.set(0, unit_obj*(radius-floor), 0);
								sel_cube.rotation.y = degtorad(90)
								pivot_single_cube[k].add(sel_cube);
								pivot_single_cube[k].rotation.z = degtorad(2.25)*k
								pivot_wrapper_cube[j].add(pivot_single_cube[k])
								


								
								// console.log(group_array)
								group_array[parseInt(Math.floor(k/8)*3)+parseInt(Math.floor(j/17))][1].push(sel_cube)
								sel_cube.group = parseInt(Math.floor(k/8)*3)+parseInt(Math.floor(j/17));
								sel_cube.ch = ch_to_tex(data_array[k][j].split('.')[0])
							// 20*3
						}
				}
			}



			$(document).mousemove(function( event ) {
				mX = event.pageX
				mY = event.pageY
			});
        	if(k == 0 && j == 0){
        		animate()
				document.addEventListener('keydown',press)
				function press(e){
					$('.cursor_popup').fadeOut(300)

					key_pressed = true
						window.cancelAnimationFrame(ani_frame);
					animate()
					if (e.keyCode === 38 /* up */ || e.keyCode === 87 /* w */ || e.keyCode === 90 /* z */){
					up = true
					$('.popup').fadeOut(300)
					}
					if (e.keyCode === 39 /* right */ || e.keyCode === 68 /* d */){
					right = true
					$('.popup').fadeOut(300)
					}
					if (e.keyCode === 40 /* down */ || e.keyCode === 83 /* s */){
					down = true
					$('.popup').fadeOut(300)
					}
					if (e.keyCode === 37 /* left */ || e.keyCode === 65 /* a */ || e.keyCode === 81 /* q */){
					left = true
					$('.popup').fadeOut(300)
					}
				}
				document.addEventListener('keyup',release)
				function release(e){
					
					if (e.keyCode === 38 /* up */ || e.keyCode === 87 /* w */ || e.keyCode === 90 /* z */){
					up = false
					$('.popup').fadeOut(300)
					}
					if (e.keyCode === 39 /* right */ || e.keyCode === 68 /* d */){
					right = false
					$('.popup').fadeOut(300)
					}
					if (e.keyCode === 40 /* down */ || e.keyCode === 83 /* s */){
					down = false
					$('.popup').fadeOut(300)
					}
					if (e.keyCode === 37 /* left */ || e.keyCode === 65 /* a */ || e.keyCode === 81 /* q */){
					left = false
					$('.popup').fadeOut(300)
					}
					if( up || right || down || left ){}else{key_pressed = false}
				}

				var camerapivot = new THREE.Group();
				scene.add( camerapivot );

				camera.position.set(0, -1*unit_obj*(radius-3), 0);
				camera.rotation.y = Math.PI/2

				camera.rotateOnWorldAxis(Axis, THREE.Math.degToRad(-15));
				init_rot_y = camera.rotation.y


				mouse.x = ( event.clientX / renderer.domElement.clientWidth ) * 2 - 1;
				mouse.y = - ( event.clientY / renderer.domElement.clientHeight ) * 2 + 1;

				camera.getWorldDirection( dir )
        	}
        }
		return false
	}

	EventsControls = new EventsControls( camera, renderer.domElement );
	var hover_mataerial_array = []
	var mouseovered_group = -1
	var timeout;
	EventsControls.attachEvent( 'mouseOver', function () {
		if(mouseovered_group !== this.event.object.group){
			this.container.style.cursor = 'pointer';
			clearTimeout(timeout);
			if(mouseovered_group>-1){
				for (var i = group_array[mouseovered_group][1].length - 1; i >= 0; i--) {
					group_array[mouseovered_group][1][i].material = faceMaterial_obj[group_array[mouseovered_group][1][i].name.split('|')[0]][group_array[mouseovered_group][1][i].name.split('|')[1]]
				}
			}
			mouseovered_group = this.event.object.group
			for (var i = group_array[mouseovered_group][1].length - 1; i >= 0; i--) {
				group_array[mouseovered_group][1][i].material = faceMaterial_obj[group_array[mouseovered_group][1][i].name.split('|')[0]][2]
			}
			renderer.render( scene, camera );
			// timeout = setTimeout(function(){
			// 	$('.cursor_popup').fadeOut(300)
			// 	$('.cursor_popup').html('')
			// 	this.event.object.group = []
			// 	for (var i = group_array[mouseovered_group][1].length - 1; i >= 0; i--) {
			// 		group_array[mouseovered_group][1][i].material = faceMaterial_obj[group_array[mouseovered_group][1][i].name.split('|')[0]][group_array[mouseovered_group][1][i].name.split('|')[1]]
			// 	}
			// }, 2000);
			// 		$('.cursor_popup').fadeIn(300)
					
			// $('.cursor_popup').html(group_array[mouseovered_group][0][1])
			// $('.cursor_popup').css({'left':mX+'px'})
			// $('.cursor_popup').css({'top':mY+'px'})
		}
	});

	EventsControls.attachEvent( 'mouseOut', function () {
		this.container.style.cursor = 'auto';
		if(mouseovered_group !== this.event.object.group){
		}
	});
	// EventsControls.attachEvent( 'onclick', function () {
 //    	window.open(group_array[this.event.object.group][0][0],"my_window", "width=400, height=400");
	// });


	function getheight(b,c){
		return (c - Math.sqrt((c*c)+(b*b)))*1.1
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
		else if(ch.toLowerCase() === 'm'){return 13}
		else if(ch.toLowerCase() === 'n'){return 14}
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
		else if(ch.toLowerCase() === '↓'){return 28}
		else if(ch.toLowerCase() === '↑'){return 29}
		else{return 26}
	}
	function ch_to_col(ch){
			 if(ch.toLowerCase() === 'w'){return 0 }
		else if(ch.toLowerCase() === 'b'){return 1 }
	}
	var menuon=false
	$('.menu').click(function(){
		if(!menuon){
		menuon=true
		$('.des').show()
		$(this).addClass('close')
	}else{
		menuon=false
			$('.des').hide()
			$(this).removeClass('close')
		}
	})

// var scene = new THREE.Scene(); // initialising the scene
// scene.background = new THREE.Color( 0xff0000 );
		
			function pivotsky_move(){
				// if(Math.round(Math.random())== 1){
				skymove_a = skymove_a + degtorad(2.5)
					for (var i = pivot_wrapper_sky.length - 1; i >= 0; i--) {
						pivot_wrapper_sky[i].rotation.z = value+skymove_a
					}
				// }else{
				skymove_b++
				for (var i = pivot_wrapper_sky.length - 1; i >= 0; i--) {
						var selectedvalue_sky = (i + counter + skymove_b)%data_array[0].length
							if(selectedvalue_sky < (-1*data_array[0].length/2	- degreeoffset)	){
								selectedvalue_sky = selectedvalue_sky + data_array[0].length
							}
							if(selectedvalue_sky > (data_array[0].length/2	- degreeoffset)	){
								selectedvalue_sky = selectedvalue_sky - data_array[0].length
							}

						result_sky = unit_obj*selectedvalue_sky
						pivot_wrapper_sky[i].position.z = result_sky
						pivot_wrapper_sky[i].position.y= -0.5*getheight( Math.abs(result_sky),unit_obj*(radius-1))

					
				}
				renderer.render( scene, camera );
				setTimeout(function(){
					pivotsky_move()
				}, 1000)
			}
		function animate() {
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
			if(start){
				pivotsky_move()
				start= false
					 		mainpivot.rotation.y = 1*degtorad(changed_dir)
					 		camera.rotation.y = init_rot_y
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
				if(i == 0){side_pivot_wrapper[0].rotation.z = value}
				if(i < 5){pivot_wrapper_sky[i].rotation.z = value+skymove_a}

				var selectedvalue = (i + counter)%data_array[0].length
				var selectedvalue_sky = (i + counter + skymove_b)%data_array[0].length
					degreeoffset = new_dir/(90/(data_array[0].length/2))
				// -90~90
				// 90~
				if(selectedvalue < (-1*data_array[0].length/2	- degreeoffset)	){
					selectedvalue = selectedvalue + data_array[0].length
				}
				if(selectedvalue > (data_array[0].length/2	- degreeoffset)	){
					selectedvalue = selectedvalue - data_array[0].length
				}

				if(selectedvalue_sky < (-1*data_array[0].length/2	- degreeoffset)	){
					selectedvalue_sky = selectedvalue_sky + data_array[0].length
				}
				if(selectedvalue_sky > (data_array[0].length/2	- degreeoffset)	){
					selectedvalue_sky = selectedvalue_sky - data_array[0].length
				}
				result = unit_obj*selectedvalue
				result_sky = unit_obj*selectedvalue_sky
				pivot_wrapper[i].position.z = result
				pivot_wrapper[i].position.y= -0.5*getheight( Math.abs(result),unit_obj*(radius-1))
				// var op = Math.abs((data_array[0].length/2)+selectedvalue)/25
				// pivot_wrapper_cube[i].children.forEach(function(pChild) {
				//   	pChild.children.forEach(function(zChild) {
				// 	  	zChild.material[0].opacity = op
				// 	  	zChild.material[1].opacity = op
				// 	  	zChild.material[2].opacity = op
				// 	  	zChild.material[3].opacity = op
				// 	  	zChild.material[4].opacity = op
				// 	  	zChild.material[5].opacity = op
				// 	});
				// });
				pivot_wrapper_cube[i].position.z = result
				pivot_wrapper_cube[i].position.y= -0.5*getheight( Math.abs(result),unit_obj*(radius-1))
				if(i < 5){ pivot_wrapper_sky[i].position.z = result_sky }
				if(i < 5){ pivot_wrapper_sky[i].position.y= -0.5*getheight( Math.abs(result_sky),unit_obj*(radius-1)) }

				if(i == 0){
					result = (-1*data_array[0].length/2 - degreeoffset+15)*unit_obj
					side_pivot_wrapper[0].position.z = result
					side_pivot_wrapper[0].position.y = -0.5*getheight( Math.abs(result),unit_obj*(radius-1))

						var result_1 = (-1*data_array[0].length/2 - degreeoffset+3)*unit_obj
						plane_op_1.position.z = result_1
						plane_op_1.position.y= -0.5*getheight( Math.abs(result_1),unit_obj*(radius-1))

						var result_2 = (-1*data_array[0].length/2 - degreeoffset+6)*unit_obj
						plane_op_2.position.z = result_2
						plane_op_2.position.y= -0.5*getheight( Math.abs(result_2),unit_obj*(radius-1))

						var result_3 = (-1*data_array[0].length/2 - degreeoffset+9)*unit_obj
						plane_op_3.position.z = result_3
						plane_op_3.position.y= -0.5*getheight( Math.abs(result_3),unit_obj*(radius-1))

						var result_4 = (-1*data_array[0].length/2 - degreeoffset+12)*unit_obj
						plane_op_4.position.z = result_4
						plane_op_4.position.y= -0.5*getheight( Math.abs(result_4),unit_obj*(radius-1))
				}
				// console.log(degreeoffset)
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