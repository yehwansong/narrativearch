      



window.onload = function(e){
    document.getElementById("whiteforremove2").style.display = "none";
                var aspect = window.innerWidth / window.innerHeight;
				
				
				
                         if(aspect >2.2){
	var posright = window.innerWidth - window.innerHeight*1.1 
    document.getElementById("photo").style.right = posright + 'px'; }
				
                         if(aspect <1.3376){ 
k=(1.3376-aspect)*26.4726
    var scalek = 0.582*window.innerHeight
    var scalek2 = 0.307273;
    var skewk = 136-k;
    document.getElementById("photo").style.height = scalek + "px";
    document.getElementById("photo").style.transform = "skewY(" + skewk + "deg)";
    document.getElementById("photo").style.transform += "translateY(-50%)"
    document.getElementById("photo").style.transform += "scaleX(" + scalek2 + ")"
    document.getElementById("photo").style.webkitTransform = "skewY(" + skewk + "deg)";
    document.getElementById("photo").style.webkitTransform += "translateY(-50%)"
    document.getElementById("photo").style.webkitTransform += "scaleX(" + scalek2 + ")"
}
}









      var camera, scene, renderer;
            var frustumSize = 77.6;

            init();
            function init() {
                    var rotWorldMatrix;
                    function rotateAroundWorldAxis(object, axis, radians) {
                    rotWorldMatrix = new THREE.Matrix4();
                    rotWorldMatrix.makeRotationAxis(axis.normalize(), radians);
                    rotWorldMatrix.multiply(object.matrix);                // pre-multiply
                    object.matrix = rotWorldMatrix;
                    object.rotation.setFromRotationMatrix(object.matrix);
                    }


                var aspect = window.innerWidth / window.innerHeight;
                var width = window.innerWidth/10;
                var height = window.innerHeight/10;
                if(aspect >1.3376 && aspect <2.2){
                camera = new THREE.OrthographicCamera( frustumSize * aspect / - 2, frustumSize * aspect / 2, frustumSize / 2, frustumSize / - 2, -1000, 2000 );
                 }
                else if(aspect <1.3376){
                camera = new THREE.OrthographicCamera( frustumSize * 1.3376 / - 2, frustumSize * 1.3376 / 2, frustumSize / 2, frustumSize / - 2, -1000, 2000 );
                }
                else{
                camera = new THREE.OrthographicCamera( frustumSize * 2.2 / - 2, frustumSize * 2.2 / 2, frustumSize / 2, frustumSize / - 2, -1000, 2000 );
                }
                camera.position.y = -60;
                camera.position.x = 0;
                camera.position.z = 20;
                scene = new THREE.Scene();
                var geometry, material, mesh;
                camera.lookAt(new THREE.Vector3(0,0.7,0));


////////////////////////////////////////////////////////////////////////////////////////////////////
                var w = (window.innerWidth)/10;
                var h = (776)/10;
                var hk = (776*0.615)/10;
                var hk2 =23.862;


                var anshape = new THREE.Shape();
                anshape.moveTo( 0,hk2 );
                anshape.lineTo( h*0.62, hk2 );
                anshape.lineTo( h*0.62, -hk2 );

                var sqshape = new THREE.Shape();
                sqshape.moveTo( 0,hk2 );
                sqshape.lineTo( h*0.62, hk2 );
                sqshape.lineTo( h*0.62, -hk2 );
                sqshape.lineTo( 0, -hk2 );
                sqshape.lineTo( 0, hk2 );

                var shape = new THREE.Shape();
                shape.moveTo( 0,hk2 );
                shape.lineTo( h*0.62, hk2 );



var anlinepoints = anshape.getPoints( 3 );
var sqlinepoints = sqshape.getPoints( 4 );
var linepoints = shape.getPoints( 2 );

var path = new THREE.Path();
var angeometry = path.createGeometry( anlinepoints );
var sqgeometry = path.createGeometry( sqlinepoints );
var geometry = path.createGeometry( linepoints );
var basicmaterial = new THREE.LineBasicMaterial( { color : 0x000000, linewidth: 2, transparency: true } );
var basicmaterial2 = new THREE.LineBasicMaterial( { color : 0xffffff, linewidth: 7, transparency: true } );

var sqline1 = new THREE.Line( sqgeometry, basicmaterial );
var line2 = new THREE.Line( geometry, basicmaterial );
var line3 = new THREE.Line( geometry, basicmaterial );
var line4 = new THREE.Line( geometry, basicmaterial);
var line5 = new THREE.Line( geometry, basicmaterial );
var line6 = new THREE.Line( geometry, basicmaterial );
var line7 = new THREE.Line( geometry, basicmaterial );
var line8 = new THREE.Line( geometry, basicmaterial );
var line9 = new THREE.Line( geometry, basicmaterial );
var line10 = new THREE.Line( geometry, basicmaterial );
var anline11 = new THREE.Line( angeometry,basicmaterial );
var anline12 = new THREE.Line( angeometry, basicmaterial);
var anline13 = new THREE.Line( angeometry, basicmaterial );
var anline14 = new THREE.Line( angeometry, basicmaterial );
var lastsqline15 = new THREE.Line( sqgeometry, basicmaterial);


var stlines = new THREE.Group();
stlines.add( sqline1 );
stlines.add( line2 );
stlines.add( line3 );
stlines.add( line4 );
stlines.add( line5 );
stlines.add( line6 );
stlines.add( line7 );
stlines.add( line8 );
stlines.add( line9 );
stlines.add( line10 );
stlines.add( anline11 );
stlines.add( anline12 );
stlines.add( anline13 );
stlines.add( anline14 );
stlines.add( lastsqline15 );
stlines.name = "stlines";
lastsqline15.name = "lastsqline15";
scene.add(stlines)

var xAxis = new THREE.Vector3(1,0,0);
var yAxis = new THREE.Vector3(0,1,0);
var zAxis = new THREE.Vector3(0,0,1);


rotateAroundWorldAxis(sqline1, xAxis, 90/180*Math.PI); 
rotateAroundWorldAxis(line2, xAxis, 90/180*Math.PI); 
rotateAroundWorldAxis(line3, xAxis, 90/180*Math.PI); 
rotateAroundWorldAxis(line4, xAxis, 90/180*Math.PI); 
rotateAroundWorldAxis(line5, xAxis, 90/180*Math.PI); 
rotateAroundWorldAxis(line6, xAxis, 90/180*Math.PI); 
rotateAroundWorldAxis(line7, xAxis, 90/180*Math.PI); 
rotateAroundWorldAxis(line8, xAxis, 90/180*Math.PI); 
rotateAroundWorldAxis(line9, xAxis, 90/180*Math.PI); 
rotateAroundWorldAxis(line10, xAxis, 90/180*Math.PI); 
rotateAroundWorldAxis(anline11, xAxis, 90/180*Math.PI); 
rotateAroundWorldAxis(anline12, xAxis, 90/180*Math.PI); 
rotateAroundWorldAxis(anline13, xAxis, 90/180*Math.PI); 
rotateAroundWorldAxis(anline14, xAxis, 90/180*Math.PI); 
rotateAroundWorldAxis(lastsqline15, xAxis, 90/180*Math.PI); 


rotateAroundWorldAxis(sqline1, zAxis, 0/180*Math.PI); 
rotateAroundWorldAxis(line2, zAxis, 18/180*Math.PI); 
rotateAroundWorldAxis(line3, zAxis, 36/180*Math.PI); 
rotateAroundWorldAxis(line4, zAxis, 54/180*Math.PI); 
rotateAroundWorldAxis(line5, zAxis, 72/180*Math.PI); 
rotateAroundWorldAxis(line6, zAxis, 90/180*Math.PI); 
rotateAroundWorldAxis(line7, zAxis, 108/180*Math.PI); 
rotateAroundWorldAxis(line8, zAxis, 126/180*Math.PI); 
rotateAroundWorldAxis(line9, zAxis, 144/180*Math.PI); 
rotateAroundWorldAxis(line10, zAxis, 162/180*Math.PI); 
rotateAroundWorldAxis(anline11, zAxis, 180/180*Math.PI); 
rotateAroundWorldAxis(anline12, zAxis, 198/180*Math.PI); 
rotateAroundWorldAxis(anline13, zAxis, 216/180*Math.PI); 
rotateAroundWorldAxis(anline14, zAxis, 234/180*Math.PI); 
rotateAroundWorldAxis(lastsqline15, zAxis, 252/180*Math.PI);

//02//////////////////////////////////////////////////////////////////////////////////////////////////


var curve = new THREE.EllipseCurve(
    0, 0,             // ax, aY
    h*0.62, h*0.62,            // xRadius, yRadius
    0, 18/180*Math.PI, // aStartAngle, aEndAngle
    false            // aClockwise
);

var longcurve = new THREE.EllipseCurve(
    0, 0,             // ax, aY
    h*0.62, h*0.62,            // xRadius, yRadius
    0, 108/180*Math.PI, // aStartAngle, aEndAngle
    false            // aClockwise
);

var curvepoints = curve.getSpacedPoints( 1 );
var longcurvepoints = longcurve.getSpacedPoints( 6 );
var geometry = new THREE.BufferGeometry().setFromPoints( curvepoints );
var longgeometry = new THREE.BufferGeometry().setFromPoints( longcurvepoints );
var material = new THREE.LineBasicMaterial( { color : 0x000000, linewidth: 5  } );
var topline = new THREE.Line( longgeometry, material );
var topline8 = new THREE.Line( geometry, material );
var topline9 = new THREE.Line( geometry, material );
var topline10 = new THREE.Line( geometry, material );
var topline11 = new THREE.Line( geometry, material );
var topline12 = new THREE.Line( geometry, material );
var topline13 = new THREE.Line( geometry, material);
var topline14 = new THREE.Line( geometry, material );
var topline15 = new THREE.Line( geometry, material );
var bottomline12 = new THREE.Line( geometry, material );
var bottomline13 = new THREE.Line( geometry, material);
var bottomline14 = new THREE.Line( geometry, material );
var bottomline15 = new THREE.Line( geometry, material );


var toplines = new THREE.Group();
var bottomlines = new THREE.Group();
toplines.name = "toplines"
bottomlines.name = "bottomlines"
toplines.add( topline );
toplines.add( topline8 );
toplines.add( topline9 );
toplines.add( topline10 );
toplines.add( topline11 );
toplines.add( topline12 );
toplines.add( topline13 );
toplines.add( topline14 );
toplines.add( topline15 );

bottomlines.add( bottomline12 );
bottomlines.add( bottomline13 );
bottomlines.add( bottomline14 );
bottomlines.add( bottomline15 );

toplines.position.z = hk2;
topline8.rotation.z = 108/180*Math.PI
topline9.rotation.z = 126/180*Math.PI
topline10.rotation.z = 144/180*Math.PI
topline11.rotation.z = 162/180*Math.PI
topline12.rotation.z = 180/180*Math.PI
topline13.rotation.z = 198/180*Math.PI
topline14.rotation.z = 216/180*Math.PI
topline15.rotation.z = 234/180*Math.PI

bottomlines.position.z = -hk2;
bottomline12.rotation.z = 180/180*Math.PI
bottomline13.rotation.z = 198/180*Math.PI
bottomline14.rotation.z = 216/180*Math.PI
bottomline15.rotation.z = 234/180*Math.PI

var curvelines = new THREE.Group();


curvelines.add( toplines );
curvelines.add( bottomlines );
curvelines.name = "curvelines";

scene.add( curvelines );
//03//////////////////////////////////////////////////////////////////////////////////////////////////
var planegeometry = new THREE.PlaneGeometry( 0.619*h, 0.943*hk, 1 );
var circlegeometry = new THREE.CircleBufferGeometry( h*0.62,10, 0, Math.PI );
var material = new THREE.MeshBasicMaterial( { color: 0xe5e5e5, transparency: true } );
var circle = new THREE.Mesh( circlegeometry, material );
scene.add( circle );
circle.name = "circle";
var circle2 = new THREE.Mesh( circlegeometry, material );
circle2.name = "circle2";
scene.add( circle2 );
var plane = new THREE.Mesh( planegeometry, material );
plane.name = "plane";
scene.add( plane );
var plane2 = new THREE.Mesh( planegeometry, material );
plane2.name = "plane2";
scene.add( plane2 );

                circle.position.y = 45.7;
                circle.position.x = 0;
                circle.position.z = hk/2-15;

                circle2.position.y = 45.7;
                circle2.position.x = 0;
                circle2.position.z = -hk/2-15;
                circle2.rotation.z = 72/180*Math.PI;

                plane.rotation.x = 72/180*Math.PI;
                plane.position.y = 30.7;
                plane.position.x = h*0.31;
                plane.position.z = -10;
                plane2.rotation.x = 72/180*Math.PI;
                plane2.scale.x = 2
                plane2.position.y = 30.7;
                plane2.position.x = 0;
                plane2.position.z = -10;

var planeleftgroup = new THREE.Group();
var planerightgroup = new THREE.Group();
var planegroup = new THREE.Group();
                var g = h/9
                var g2 = g/2
                var g3 = h/27
                var w2 = w/2

//                 var leftver = new THREE.Shape();
//                 leftver.moveTo( 6*g3,0 );
//                 leftver.lineTo( 6*g3, -4*g3 );

// var planepointleftver = leftver.getPoints( 2 );
// var planegeometryleftver = path.createGeometry( planepointleftver );
// var planeleftver = new THREE.Line( planegeometryleftver, basicmaterial2 );
// planeleftver.position.y=-7*g3;

                var lefthor = new THREE.Shape();
                lefthor.moveTo( 0, 0 );
                lefthor.lineTo( 30*g3, 0 );
var planepointlefthor = lefthor.getPoints( 10 );
var planegeometrylefthor = path.createGeometry( planepointlefthor );
var planelefthor3 = new THREE.Line( planegeometrylefthor, basicmaterial2 );
var planelefthor4 = new THREE.Line( planegeometrylefthor, basicmaterial2 );
planelefthor3.position.y = -24.2*g3
planelefthor3.scale.x = 0.4
planelefthor3.name = "planelefthor3"


                var leftver = new THREE.Shape();
                leftver.moveTo( 1.5*g3, 0 );
                leftver.lineTo( 1.5*g3, -4.5*g3  );
var planepointleftver= leftver.getPoints( 10 );
var planegeometryleftver = path.createGeometry( planepointleftver );
var planeleftver2 = new THREE.Line( planegeometryleftver, basicmaterial2 );
var planeleftver3 = new THREE.Line( planegeometryleftver, basicmaterial2 );
planeleftver2.position.y = -15.5*g3
planeleftver2.position.x = 10.5*g3
planeleftver2.scale.y=5
planeleftver2.name = "planeleftver2"


                var rightver = new THREE.Shape();
                rightver.moveTo( 0,0 );
                rightver.lineTo( 0, -4*g3 );
var planepointrightver = rightver.getPoints( 2 );
var planegeometryrightver = path.createGeometry( planepointrightver );
var planerightver = new THREE.Line( planegeometryrightver, basicmaterial2 );
var planerightver2 = new THREE.Line( planegeometryrightver, basicmaterial2 );
var planerightver3 = new THREE.Line( planegeometryrightver, basicmaterial2 );
var planerightver4 = new THREE.Line( planegeometryrightver, basicmaterial2 );
planerightver.position.x=-3*g3;
planerightver2.position.x=-6*g3;
planerightver3.position.x=-9*g3;

planerightver.name= "planerightver"
planerightver2.name ="planerightver2"
planerightver3.name ="planerightver3"
planerightver4.name ="planerightver4"
if(aspect <1.53125) {planerightver3.scale.y = 5.75}else{planerightver3.scale.y=6.75;}

if(aspect <2.2){
planerightver4.scale.y=0;}else{
planerightver4.scale.y=6.75;}

planerightver4.name = "planerightver4"





                var righthor = new THREE.Shape();
                righthor.moveTo( 0, 0 );
                righthor.lineTo( -20*g3, 0 );
var planepointrighthor = righthor.getPoints( 10 );
var planegeometryrighthor = path.createGeometry( planepointrighthor );
var planerighthor = new THREE.Line( planegeometryrighthor, basicmaterial2 );
planerighthor.position.y = -4*g3
// planerighthor4.position.y = -22.5*g3
planerightgroup.name = "planerightgroup";
planerighthor.name = "planerighthor";


planeleftver3.position.x = -1.5*g3
planeleftver3.position.y = -20.5*g3+frustumSize / 2;
planeleftver3.scale.y=1.5;
planeleftver3.name = "planeleftver3";
planelefthor4.position.y = -23*g3+frustumSize / 2;
planelefthor4.name = "planelefthor4";





// planeleftgroup.add( planeleftver ); 
planeleftgroup.add( planelefthor3 ); 
planeleftgroup.add( planeleftver2 ); 


planerightgroup.add( planerightver );   
planerightgroup.add( planerightver2  );  
planerightgroup.add( planerightver3  );  
planerightgroup.add( planerightver4  );  
planerightgroup.add( planerighthor  ); 


if(aspect <2.2){
planerightgroup.position.x=frustumSize * aspect / 2;
planerightgroup.position.y=frustumSize / 2;
planerightgroup.name = "planerightgroup";}
else{
planerightgroup.position.x=frustumSize * 2.2 / 2;
planerightgroup.position.y=frustumSize / 2;
planerightgroup.name = "planerightgroup";}

if(aspect <2.2){
planeleftgroup.position.x=-frustumSize * aspect / 2;
planeleftgroup.position.y=frustumSize / 2;
planeleftgroup.name = "planeleftgroup";}
else{
planeleftgroup.position.x=-frustumSize * 2.2 / 2;
planeleftgroup.position.y=frustumSize / 2;
planeleftgroup.name = "planeleftgroup";}


planegroup.add( planelefthor4  ); 
planegroup.add( planeleftver3  ); 
planegroup.add( planerightgroup  ); 
planegroup.add( planeleftgroup  ); 
                planegroup.rotation.x = 72/180*Math.PI;
                planegroup.position.y = 120;
                planegroup.position.z = -39.3;

scene.add( planegroup );     
planegroup.name = "planegroup";

if(aspect < 1.3376){planegroup.scale.set(0,0,0)}else{planegroup.scale.set(1,1,1)}
//////////////////////////////////////////////////////////////////////////////////////////////////////////
                var titlebox = document.getElementById("titlebox")
                var datebox = document.getElementsByClassName("datebox")
                var yearbox = document.getElementsByClassName("yearbox")
                var placebox = document.getElementsByClassName("placebox")

                var planelefthor3 = scene.getObjectByName( "planelefthor3" );
                var planeleftver = scene.getObjectByName( "planeleftver" );
                var planeleftver2 = scene.getObjectByName( "planeleftver2" );
                
                var planeleftver3 = scene.getObjectByName( "planeleftver3" );
                var planerightver6 = scene.getObjectByName( "planerightver6" );
                titlebox.onmouseover = function(){
                planerightver6.scale.y=0
                planeleftver3.scale.y=0}
                titlebox.onmouseout = function(){
                planerightver6.scale.y=1.25
                planeleftver3.scale.y=1}
                var planerightver5 = scene.getObjectByName( "planerightver5" );


                var planerightver = scene.getObjectByName( "planerightver" );
                var planerightver2 = scene.getObjectByName( "planerightver2" );
                var planerightver3 = scene.getObjectByName( "planerightver3" );
                for(var i = 0, length = yearbox.length; i < length; i++) {
                yearbox[i].onmouseover = function(){
                var aspect = window.innerWidth / window.innerHeight;
                if(aspect >1.7){ 
                planerightver3.scale.y=0
                planerightver2.scale.y=0}
                }; 
                yearbox[i].onmouseout = function(){
                var aspect = window.innerWidth / window.innerHeight;
                if(aspect >1.7){ 
                if(aspect <1.53125) {planerightver3.scale.y = 5.75}else{planerightver3.scale.y=6.75;}
                planerightver2.scale.y=1}
                }}
                for(var i = 0, length = datebox.length; i < length; i++) {
                datebox[i].onmouseover = function(){
                var aspect = window.innerWidth / window.innerHeight;
                if(aspect >1.49375){ 
                planerightver.scale.y=0
                planerightver2.scale.y=0}
                }; 
                datebox[i].onmouseout = function(){
                var aspect = window.innerWidth / window.innerHeight;
                if(aspect >1.49375){ 
                planerightver.scale.y=1
                planerightver2.scale.y=1}
                }}
                for(var i = 0, length = placebox.length; i < length; i++) {
                placebox[i].onmouseover = function(){
                planerightver.scale.y=0}; 
                placebox[i].onmouseout = function(){
                planerightver.scale.y=1}
                }





//RENDER//////////////////////////////////////////////////////////////////////////////////////////////////
                
                
                renderer = new THREE.CanvasRenderer();
                renderer.setPixelRatio( window.devicePixelRatio );
                if(aspect >2.2){ 
                renderer.setSize( window.innerHeight*2.2, window.innerHeight );
                }else{
                renderer.setSize( window.innerWidth, window.innerHeight );}
                renderer.setClearColorHex( 0xe5e5e5, 1 );
                document.getElementById("graph").appendChild( renderer.domElement );

                // events
                window.addEventListener( 'resize', onWindowResize, false );
            }

            
            function setupAttributes( geometry ) {
                // TODO: Bring back quads
                var vectors = [
                    new THREE.Vector3( 1, 0, 0 ),
                    new THREE.Vector3( 0, 1, 0 ),
                    new THREE.Vector3( 0, 0, 1 )
                ];
                var position = geometry.attributes.position;
                var centers = new Float32Array( position.count * 3 );
                for ( var i = 0, l = position.count; i < l; i ++ ) {
                    vectors[ i % 3 ].toArray( centers, i * 3 );
                }
                geometry.addAttribute( 'center', new THREE.BufferAttribute( centers, 3 ) );
            }


//windowresize/////////////////////////////////////////////////////////////////////////////////////////////////
            function onWindowResize() {
                var planeleftgroup = scene.getObjectByName( "planeleftgroup" );
                var planerightgroup = scene.getObjectByName( "planerightgroup" )
                var planerightver3 = scene.getObjectByName( "planerightver3" )
                var planeleftver3 = scene.getObjectByName( "planeleftver3" )
                var planerightver4 = scene.getObjectByName( "planerightver4" )
                var planegroup = scene.getObjectByName( "planegroup" )
                var aspect = window.innerWidth / window.innerHeight;
                var g3 = window.innerHeight/270

                planerightgroup.position.y=frustumSize / 2;
                planeleftgroup.position.y=frustumSize / 2;

                if(aspect <1.53125) {planerightver3.scale.y = 5.75}else{planerightver3.scale.y=6.75;}
                if(aspect >1.3376 && aspect <2.2){planegroup.scale.set(1,1,1)
                planerightver4.scale.y=0;

                var scalek = 0.582*window.innerHeight
                document.getElementById("photo2").style.height = scalek + "px";
                document.getElementById("photo").style.height = scalek + "px";
                document.getElementById("photo").style.right = window.innerWidth/2 + 'px';

                planerightgroup.position.x=frustumSize * aspect / 2;
                planeleftgroup.position.x=-frustumSize * aspect / 2;
                

                camera.left   = - frustumSize * aspect / 2;
                camera.right  =   frustumSize * aspect / 2;
                camera.top    =   frustumSize / 2;
                camera.bottom = - frustumSize / 2;
                camera.updateProjectionMatrix();
                renderer.setSize( window.innerWidth, window.innerHeight );
                renderer.render( scene, camera );
                }



                else if(aspect >2.2){planegroup.scale.set(1,1,1)
                planerightver4.scale.y=6.75;

            	var posright = window.innerWidth - window.innerHeight*1.1 

                var scalek = 0.582*window.innerHeight
                document.getElementById("photo").style.right = posright + 'px'; 
                document.getElementById("photo2").style.height = scalek + "px";
                document.getElementById("photo").style.height = scalek + "px";

                planerightgroup.position.x=frustumSize * 2.2 / 2;
                planeleftgroup.position.x=-frustumSize * 2.2 / 2;

                camera.left   = - frustumSize * 2.2 / 2;
                camera.right  =   frustumSize * 2.2 / 2;
                camera.top    =   frustumSize / 2;
                camera.bottom = - frustumSize / 2;
                camera.updateProjectionMatrix();
                renderer.setSize( window.innerHeight*2.2, window.innerHeight );
                renderer.render( scene, camera );
                }



                else{planegroup.scale.set(0,0,0)
                planerightver4.scale.y=0;
                

                k=(1.3376-aspect)*26.4726

                if (window.clicknumber == 15){
                var scalek2 = 0.307273;
                var skewk = 136-k;
                }
                if (window.clicknumber == 14){
                var scalek2 = 0.586495;
                var skewk = 156.7-k;
                }
                if (window.clicknumber == 13){
                var scalek2 = 0.807874;
                var skewk = 167.2-k;
                }
                if (window.clicknumber == 12){
                var scalek2 = 0.949388;
                var skewk = 174.1-k;
                }
                if (window.clicknumber == 11){
                var scale2k = 1;
                var skewk = 180-k;
                }
                if (window.clicknumber == 10){
                var scalek2 =0.949388;
                var skewk = 185.9-k;
                }
                if (window.clicknumber == 9){
                var scalek2 = 0.807874;
                var skewk = 192.8-k;
                }
                if (window.clicknumber == 8){
                var scalek2 = 0.586495;
                var skewk = 203.3-k;}
                document.getElementById("photo").style.transform = "skewY(" + skewk + "deg)";
                document.getElementById("photo").style.transform += "translateY(-50%)"
                document.getElementById("photo").style.transform += "scaleX(" + scalek2 + ")"
                document.getElementById("photo").style.webkitTransform = "skewY(" + skewk + "deg)";
                document.getElementById("photo").style.webkitTransform += "translateY(-50%)"
                document.getElementById("photo").style.webkitTransform += "scaleX(" + scalek2 + ")"
                document.getElementById("photo2").style.height = scalek + "px";
                document.getElementById("photo").style.height = scalek + "px";
                document.getElementById("photo").style.right = window.innerWidth/2 + 'px';

                planerightgroup.position.x=frustumSize * aspect / 2;
                planeleftgroup.position.x=-frustumSize * aspect / 2;

                renderer.setSize( window.innerWidth, window.innerHeight );
                renderer.render( scene, camera );


            }


            }
                renderer.render( scene, camera );



//MOUSEMOVE//////////////////////////////////////////////////////////////////////////////////////////////////


						
document.onmousemove = function(event) {myFunction(event)};

function myFunction(e) {
    var rot = 2.8*(e.clientY-25*window.innerHeight/27)/window.innerHeight;
	var clips = 0.1*(e.clientY-0.3257*window.innerHeight)+ "px"
var stlines = scene.getObjectByName( "stlines" );
var curvelines = scene.getObjectByName( "curvelines" );

var circle = scene.getObjectByName( "circle" );
var plane = scene.getObjectByName( "plane" );
var plane2 = scene.getObjectByName( "plane2" );
var circle2 = scene.getObjectByName( "circle2" );
var lastsqline15 = scene.getObjectByName( "lastsqline15" );
                        // lastsqline15.rotation.y = 108/180*Math.PI
                        // lastsqline15.rotation.z = rot/180*Math.PI
                        curvelines.rotation.x = rot/180*Math.PI
                        stlines.rotation.x = rot/180*Math.PI
                        circle.rotation.x = rot/180*Math.PI
                        circle2.rotation.x = rot/180*Math.PI
                        plane.rotation.x = 72/180*Math.PI+rot/180*Math.PI;
                        plane2.rotation.x = 72/180*Math.PI+rot/180*Math.PI;
                renderer.render( scene, camera );
var aspect = window.innerWidth / window.innerHeight;
    var scalek = 0.582*window.innerHeight-3*rot
if(aspect >1.3376){
/*console.log(rot)*/
	if (window.clicknumber == 15){
    var scalek2 = 0.307273;
    var skewk = 136-1.5*rot;
	}
	if (window.clicknumber == 14){
    var scalek2 = 0.586495;
    var skewk = 156.7-rot;
	}
	if (window.clicknumber == 13){
    var scalek2 = 0.807874;
    var skewk = 167.2-0.63*rot;
	}
	if (window.clicknumber == 12){
    var scalek2 = 0.949388;
    var skewk = 174.1-0.3*rot;
	}
	if (window.clicknumber == 11){
    var scale2k = 1;
    var skewk = 180;
	}
	if (window.clicknumber == 10){
    var scalek2 =0.949388;
    var skewk = 185.9+0.3*rot;
	}
	if (window.clicknumber == 9){
    var scalek2 = 0.807874;
    var skewk = 192.8+0.63*rot;
	}
	if (window.clicknumber == 8){
    var scalek2 = 0.586495;
    var skewk = 203.3+rot;
	}
}else{var k=(1.3376-aspect)*26.4726
/*console.log(rot)*/
    if (window.clicknumber == 15){
    var scalek2 = 0.307273;
    var skewk = 136-1.5*rot-k;
    }
    if (window.clicknumber == 14){
    var scalek2 = 0.586495;
    var skewk = 156.7-rot-k;
    }
    if (window.clicknumber == 13){
    var scalek2 = 0.807874;
    var skewk = 167.2-0.63*rot-k;
    }
    if (window.clicknumber == 12){
    var scalek2 = 0.949388;
    var skewk = 174.1-0.3*rot-k;
    }
    if (window.clicknumber == 11){
    var scale2k = 1;
    var skewk = 180-k;
    }
    if (window.clicknumber == 10){
    var scalek2 =0.949388;
    var skewk = 185.9+0.3*rot-k;
    }
    if (window.clicknumber == 9){
    var scalek2 = 0.807874;
    var skewk = 192.8+0.63*rot-k;
    }
    if (window.clicknumber == 8){
    var scalek2 = 0.586495;
    var skewk = 203.3+rot-k;}}
    document.getElementById("photo2").style.height = scalek + "px";
    document.getElementById("photo").style.height = scalek + "px";
    document.getElementById("photo").style.transform = "skewY(" + skewk + "deg)";
    document.getElementById("photo").style.transform += "translateY(-50%)"
    document.getElementById("photo").style.transform += "scaleX(" + scalek2 + ")"
    document.getElementById("photo").style.webkitTransform = "skewY(" + skewk + "deg)";
    document.getElementById("photo").style.webkitTransform += "translateY(-50%)"
    document.getElementById("photo").style.webkitTransform += "scaleX(" + scalek2 + ")"
		
            
}

    var participantsname = document.getElementsByClassName("underline");
    for(var i = 0, length = participantsname.length; i < length; i++) {
            participantsname[i].onmouseover = function(){
            this.style.fontSize="2.1vh";


            participantsname[i].style.backgroundPosition = "center center";}; 

            participantsname[i].onmouseout = function(){
            this.style.fontSize="2vh";
            this.style.marginTop="0vh";}; 
        }

    // var supervisorsname = document.getElementsByClassName("supervisorsname");
    // for(var i = 0, length = supervisorsname.length; i < length; i++) {
    //         supervisorsname[i].onmouseover = function(){
    //         var image = this.getElementsByClassName('dot')[0];
    //         this.style.fontSize="2.2vh";
    //         image.style.visibility = "visible"
    //         // console.log(this)
    //     }; 

    //         supervisorsname[i].onmouseout = function(){
    //         var image = this.getElementsByClassName('dot')[0];
    //         image.style.visibility = "hidden";
    //         this.style.fontSize="2vh";}; 
    //     }

    var dis_tag = document.getElementsByClassName("dis_tag");
    if(window.innerHeight<1024){
    for(var i = 0, length = dis_tag.length; i < length-4; i++) {
            dis_tag[i].onmouseover = function(){
            this.style.fontSize="2.1vh";}; 

            dis_tag[i].onmouseout = function(){
            this.style.fontSize="2vh";}; 
        }
    }else{
    for(var i = 0, length = dis_tag.length; i < length; i++) {
            dis_tag[i].onmouseover = function(){
            this.style.fontSize="22.528px";}; 

            dis_tag[i].onmouseout = function(){
            this.style.fontSize="20.48px";}; 
        }
    }
//CLICKANI//////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////

var id1;
var id2;
var id3;
clicknumber = 15



    var stlines = scene.getObjectByName( "stlines" );
    var curvelines = scene.getObjectByName( "curvelines" );
    var circle = scene.getObjectByName( "circle" );
    var circle2 = scene.getObjectByName( "circle2" );
    var tag_2009 = document.getElementById("tag_2009")
    var tag_2010 = document.getElementById("tag_2010")
    var tag_2011 = document.getElementById("tag_2011")
    var tag_2012 = document.getElementById("tag_2012")
    var tag_2013 = document.getElementById("tag_2013")
    var tag_2014 = document.getElementById("tag_2014")
    var tag_2015 = document.getElementById("tag_2015")
    var tag_2016 = document.getElementById("tag_2016")
    var stlines = scene.getObjectByName( "stlines" );
    var curvelines = scene.getObjectByName( "curvelines" );
    var lastsqline15 = scene.getObjectByName( "lastsqline15" );
    var toplines = curvelines.children[0];
    var bottomlines = curvelines.children[1];




tag_2009.addEventListener("click", function(){ 
clicknumber = 8; 
click(preclick2);
                        for(var i = 8, length = stlines.length; i < 14; i++) {
                            var objects = stlines.children[ i ]
                            objects.scale.set(1,1,1)
                        }
                        for(var i = 0, length = bottomlines.length; i < 4; i++) {
                            var objects = bottomlines.children[ i ]
                            objects.scale.set(1,1,1)
                        }
                        for(var i = 2, length = toplines.length; i < 9; i++) {
                            var objects = toplines.children[ i ]
                            objects.scale.set(1,1,1)
                        }
    lastsqline15.scale.set(0,0,0)

    window.curvelines.rotation.x = -1.44/180*Math.PI
    window.stlines.rotation.x =-1.44/180*Math.PI
    window.circle.rotation.x =-1.44/180*Math.PI
    window.circle2.rotation.x =-1.44/180*Math.PI
})
tag_2010.addEventListener("click", function(){ 
clicknumber = 15; 
click(preclick2);
                        for(var i = 13, length = stlines.length; i < 14; i++) {
                            var objects = stlines.children[ i ]
                            objects.scale.set(0,0,0)
                        }
                        for(var i = 8, length = stlines.length; i < 13; i++) {
                            var objects = stlines.children[ i ]
                            objects.scale.set(1,1,1)
                        }

                        for(var i = 3, length = bottomlines.length; i < 4; i++) {
                            var objects = bottomlines.children[ i ]
                            objects.scale.set(0,0,0)
                        }
                        for(var i = 0, length = bottomlines.length; i < 3; i++) {
                            var objects = bottomlines.children[ i ]
                            objects.scale.set(1,1,1)
                        }
                        for(var i = 2, length = toplines.length; i < 8; i++) {
                            var objects = toplines.children[ i ]
                            objects.scale.set(1,1,1)
                        }
                        for(var i = 8, length = toplines.length; i < 9; i++) {
                            var objects = toplines.children[ i ]
                            objects.scale.set(0,0,0)
                        }
    lastsqline15.scale.set(0,0,0)

    window.curvelines.rotation.x = -1.53/180*Math.PI
    window.stlines.rotation.x =-1.53/180*Math.PI
    window.circle.rotation.x =-1.53/180*Math.PI
    window.circle2.rotation.x =-1.53/180*Math.PI
})
tag_2011.addEventListener("click", function(){ 
clicknumber = 14; 
click(preclick2);

                        for(var i = 13, length = stlines.length; i < 14; i++) {
                            var objects = stlines.children[ i ]
                            objects.scale.set(0,0,0)
                        }
                        for(var i = 8, length = stlines.length; i < 13; i++) {
                            var objects = stlines.children[ i ]
                            objects.scale.set(1,1,1)
                        }

                        for(var i = 2, length = bottomlines.length; i < 4; i++) {
                            var objects = bottomlines.children[ i ]
                            objects.scale.set(0,0,0)
                        }
                        for(var i = 0, length = bottomlines.length; i < 2; i++) {
                            var objects = bottomlines.children[ i ]
                            objects.scale.set(1,1,1)
                        }
                        for(var i = 2, length = toplines.length; i < 7; i++) {
                            var objects = toplines.children[ i ]
                            objects.scale.set(1,1,1)
                        }
                        for(var i = 7, length = toplines.length; i < 9; i++) {
                            var objects = toplines.children[ i ]
                            objects.scale.set(0,0,0)
                        }
    lastsqline15.scale.set(0,0,0)
    
    window.curvelines.rotation.x = -1.64/180*Math.PI
    window.stlines.rotation.x =-1.64/180*Math.PI
    window.circle.rotation.x =-1.64/180*Math.PI
    window.circle2.rotation.x =-1.64/180*Math.PI
})

tag_2012.addEventListener("click", function(){ 
clicknumber = 13; 
click(preclick2);
                        for(var i = 12, length = stlines.length; i < 14; i++) {
                            var objects = stlines.children[ i ]
                            objects.scale.set(0,0,0)
                        }
                        for(var i = 8, length = stlines.length; i < 12; i++) {
                            var objects = stlines.children[ i ]
                            objects.scale.set(1,1,1)
                        }

                        for(var i = 1, length = bottomlines.length; i < 4; i++) {
                            var objects = bottomlines.children[ i ]
                            objects.scale.set(0,0,0)
                        }
                        for(var i = 0, length = bottomlines.length; i < 1; i++) {
                            var objects = bottomlines.children[ i ]
                            objects.scale.set(1,1,1)
                        }
                        for(var i = 2, length = toplines.length; i < 6; i++) {
                            var objects = toplines.children[ i ]
                            objects.scale.set(1,1,1)
                        }
                        for(var i = 6, length = toplines.length; i < 9; i++) {
                            var objects = toplines.children[ i ]
                            objects.scale.set(0,0,0)
                        }
    lastsqline15.scale.set(0,0,0)
    
    
    window.curvelines.rotation.x = -1.79/180*Math.PI
    window.stlines.rotation.x =-1.79/180*Math.PI
    window.circle.rotation.x =-1.79/180*Math.PI
    window.circle2.rotation.x =-1.79/180*Math.PI
})

tag_2013.addEventListener("click", function(){ 
clicknumber = 12; 
click(preclick2);
                        for(var i = 11, length = stlines.length; i < 14; i++) {
                            var objects = stlines.children[ i ]
                            objects.scale.set(0,0,0)
                        }
                        for(var i = 8, length = stlines.length; i < 11; i++) {
                            var objects = stlines.children[ i ]
                            objects.scale.set(1,1,1)
                        }

                        for(var i = 0, length = bottomlines.length; i < 4; i++) {
                            var objects = bottomlines.children[ i ]
                            objects.scale.set(0,0,0)
                        }
                        for(var i = 2, length = toplines.length; i < 5; i++) {
                            var objects = toplines.children[ i ]
                            objects.scale.set(1,1,1)
                        }
                        for(var i = 5, length = toplines.length; i < 9; i++) {
                            var objects = toplines.children[ i ]
                            objects.scale.set(0,0,0)
                        }
    lastsqline15.scale.set(0,0,0)
    
    window.curvelines.rotation.x = -1.96/180*Math.PI
    window.stlines.rotation.x =-1.96/180*Math.PI
    window.circle.rotation.x =-1.96/180*Math.PI
    window.circle2.rotation.x =-1.96/180*Math.PI
})
tag_2014.addEventListener("click", function(){ 
clicknumber = 11; 
click(preclick2);
                        for(var i = 10, length = stlines.length; i < 14; i++) {
                            var objects = stlines.children[ i ]
                            objects.scale.set(0,0,0)
                        }
                        for(var i = 8, length = stlines.length; i < 10; i++) {
                            var objects = stlines.children[ i ]
                            objects.scale.set(1,1,1)
                        }

                        for(var i = 0, length = bottomlines.length; i < 4; i++) {
                            var objects = bottomlines.children[ i ]
                            objects.scale.set(0,0,0)
                        }
                        for(var i = 2, length = toplines.length; i < 4; i++) {
                            var objects = toplines.children[ i ]
                            objects.scale.set(1,1,1)
                        }
                        for(var i = 4, length = toplines.length; i < 9; i++) {
                            var objects = toplines.children[ i ]
                            objects.scale.set(0,0,0)
                        }
    lastsqline15.scale.set(0,0,0)
    
    window.curvelines.rotation.x = -2.14/180*Math.PI
    window.stlines.rotation.x =-2.14/180*Math.PI
    window.circle.rotation.x =-2.14/180*Math.PI
    window.circle2.rotation.x =-2.14/180*Math.PI
})

tag_2015.addEventListener("click", function(){ 
clicknumber = 10; 
click(preclick2);
                        for(var i = 9, length = stlines.length; i < 14; i++) {
                            var objects = stlines.children[ i ]
                            objects.scale.set(0,0,0)
                        }
                        for(var i = 8, length = stlines.length; i < 9; i++) {
                            var objects = stlines.children[ i ]
                            objects.scale.set(1,1,1)
                        }

                        for(var i = 0, length = bottomlines.length; i < 4; i++) {
                            var objects = bottomlines.children[ i ]
                            objects.scale.set(0,0,0)
                        }
                        for(var i = 2, length = toplines.length; i < 3; i++) {
                            var objects = toplines.children[ i ]
                            objects.scale.set(1,1,1)
                        }
                        for(var i = 3, length = toplines.length; i < 9; i++) {
                            var objects = toplines.children[ i ]
                            objects.scale.set(0,0,0)
                        }
    lastsqline15.scale.set(0,0,0)
    
    window.curvelines.rotation.x = -2.34/180*Math.PI
    window.stlines.rotation.x =-2.34/180*Math.PI
    window.circle.rotation.x =-2.34/180*Math.PI
    window.circle2.rotation.x =-2.34/180*Math.PI
})

tag_2016.addEventListener("click", function(){ 
clicknumber = 9; 
click(preclick2);
                        for(var i = 8, length = stlines.length; i < 14; i++) {
                            var objects = stlines.children[ i ]
                            objects.scale.set(0,0,0)
                        }
                        for(var i = 0, length = bottomlines.length; i < 4; i++) {
                            var objects = bottomlines.children[ i ]
                            objects.scale.set(0,0,0)
                        }
                        for(var i = 2, length = toplines.length; i < 9; i++) {
                            var objects = toplines.children[ i ]
                            objects.scale.set(0,0,0)
                        }
    lastsqline15.scale.set(0,0,0)
    
    window.curvelines.rotation.x = -2.49/180*Math.PI
    window.stlines.rotation.x =-2.49/180*Math.PI
    window.circle.rotation.x =-2.49/180*Math.PI
    window.circle2.rotation.x =-2.49/180*Math.PI
})

////////////////////////////////////////////////////////////////////////////////////////////////////
function click(callback){
                        if (window.clicknumber > 8){window.clicknumber -= 1}




                        else{window.clicknumber += 7;
                        var lastsqline15 = scene.getObjectByName( "lastsqline15" );
                        lastsqline15.rotation.y = -72/180*Math.PI
                        var plane2 = scene.getObjectByName( "plane2" );
                                                    plane2.scale.x = 2
                                                    plane2.position.y =30.7;
                        var stlines = scene.getObjectByName( "stlines" );
                        for(var i = 8, length = stlines.length; i < 14; i++) {
                            var objects = stlines.children[ i ]
                            // objects.material.opacity = 1
                            objects.scale.set(1,1,1)
                        }
                        var curvelines = scene.getObjectByName( "curvelines" );
                        var toplines = curvelines.children[0];
                        var bottomlines = curvelines.children[1];
                        for(var i = 0, length = toplines.length; i < 9; i++) {
                            var objects = toplines.children[ i ]
                            // objects.material.opacity = 1
                            objects.scale.set(1,1,1)
                        }
                        for(var i = 0, length = bottomlines.length; i < 4; i++) {
                            var objects = bottomlines.children[ i ]
                            // objects.material.opacity = 1
                            objects.scale.set(1,1,1)
                        }
                        }
                        callback(animate);
                }
////////////////////////////////////////////////////////////////////////////////////////////////////

function animate() {
                id1 = requestAnimationFrame( animate );

                    var stlines = scene.getObjectByName( "stlines" );
                    var curvelines = scene.getObjectByName( "curvelines" );
                    var circle = scene.getObjectByName( "circle" );
                    var plane = scene.getObjectByName( "plane" );
                    var plane2 = scene.getObjectByName( "plane2" );
                    var circle2 = scene.getObjectByName( "circle2" );

                    if(window.clicknumber == 8){
                      document.getElementById("graybox").style.transform = "scaleY(1)"
                      document.getElementById("graybox").style.transformOrigin = "100% 100%"}
                    if(window.clicknumber == 9){
                      document.getElementById("graybox").style.transform = "scaleY(0.4)"
                      document.getElementById("graybox").style.transformOrigin = "100% 100%"}
                    if(window.clicknumber == 10){
                      document.getElementById("graybox").style.transform = "scaleY(0.3)"
                      document.getElementById("graybox").style.transformOrigin = "100% 100%"}
                    if(window.clicknumber == 11){
                      document.getElementById("graybox").style.transform = "scaleY(0)"
                      document.getElementById("graybox").style.transformOrigin = "100% 100%"}
                    if(window.clicknumber == 12){
                      document.getElementById("graybox").style.transform = "scaleY(0)"
                      document.getElementById("graybox").style.transformOrigin = "100% 100%"}
                    if(window.clicknumber == 13){
                      document.getElementById("graybox").style.transform = "scaleY(0)"
                      document.getElementById("graybox").style.transformOrigin = "100% 100%"}
                    if(window.clicknumber == 14){
                      document.getElementById("graybox").style.transform = "scaleY(0)"
                      document.getElementById("graybox").style.transformOrigin = "100% 100%"}
                    if(window.clicknumber == 15){
                      document.getElementById("graybox").style.transform = "scaleY(0)"
                      document.getElementById("graybox").style.transformOrigin = "100% 100%"}
                    if (stlines.rotation.z > -9/180*Math.PI) {
                        stlines.rotation.z -= 0.9/180*Math.PI
                        curvelines.rotation.z -= 0.9/180*Math.PI
                        curvelines.rotation.x = 0
                        stlines.rotation.x =0
                        circle.rotation.x =0
                        circle2.rotation.x =0

                }else {animate2(); cancelAnimationFrame( id1 );}

                renderer.render( scene, camera );
                    }
function animate2() {
                id2 = requestAnimationFrame( animate2 );
                    var stlines = scene.getObjectByName( "stlines" );
                    var curvelines = scene.getObjectByName( "curvelines" );
                    var lastsqline15 = scene.getObjectByName( "lastsqline15" );
                    var plane2 = scene.getObjectByName( "plane2" );
                    var toplines = curvelines.children[0];
                    var bottomlines = curvelines.children[1];

                    if (window.clicknumber > 7 && window.clicknumber < 14){
                        for(var i = window.clicknumber, length = stlines.length; i < 14; i++) {
                            var objectkkk = stlines.children[ i ]
                            objectkkk.scale.set(0,0,0)
                        }
                    }

                    if (window.clicknumber > 10 && window.clicknumber < 15){
                        for(var i = window.clicknumber-11, length = bottomlines.length; i < 4; i++) {
                            var objectkk2 = bottomlines.children[ i ]
                            objectkk2.scale.set(0,0,0)
                        }
                    }

                    if (window.clicknumber > 7 && window.clicknumber < 15){
                        for(var i = window.clicknumber-6, length = toplines.length; i < 9; i++) {
                            var objectkk = toplines.children[ i ]
                            objectkk.scale.set(0,0,0)
                        }
                    }


                        // lastsqline15.material.opacity = 1
                        stlines.rotation.z += 2.7/180*Math.PI
                        curvelines.rotation.z += 2.7/180*Math.PI

                    if (stlines.rotation.z >= 0/180*Math.PI) {animate3(photoanimate2); cancelAnimationFrame( id2 ); }
                        lastsqline15.rotation.y = (15-window.clicknumber)*(18/180*Math.PI)-72/180*Math.PI
                renderer.render( scene, camera );
            
}

function animate3(callback) {
                    var stlines = scene.getObjectByName( "stlines" );
                    var curvelines = scene.getObjectByName( "curvelines" );
                    var lastsqline15 = scene.getObjectByName( "lastsqline15" );
                    var plane2 = scene.getObjectByName( "plane2" );

                    lastsqline15.scale.x = 1 
                    lastsqline15.scale.y = 1 
                    stlines.rotation.z = 0;
                    curvelines.rotation.z = 0;
                    if(window.clicknumber == 8){    plane2.scale.x = 1.17
                                                    plane2.position.y = 0.1*window.innerHeight
                                                    circle2.rotation.z = 0/180*Math.PI;}
                    if(window.clicknumber == 9){    plane2.scale.x = 1.62
                                                    plane2.position.y = 0.1*window.innerHeight
                                                    circle2.rotation.z = 0/180*Math.PI;}
                    if(window.clicknumber == 10){   plane2.scale.x = 1.89
                                                    plane2.position.y = 0.1*window.innerHeight
                                                    circle2.rotation.z = 0/180*Math.PI;}
                    if(window.clicknumber == 11){   plane2.scale.x = 2
                                                    plane2.position.y = 30.7
                                                    circle2.rotation.z = 0/180*Math.PI;}
                    if(window.clicknumber == 12){   plane2.scale.x = 2
                                                    plane2.position.y = 30.7
                                                    circle2.rotation.z = 18/180*Math.PI;}
                    if(window.clicknumber == 13){  plane2.scale.x = 2
                                                    plane2.position.y = 30.7
                                                    circle2.rotation.z = 36/180*Math.PI;}
                    if(window.clicknumber == 14){  plane2.scale.x = 2
                                                    plane2.position.y = 30.7
                                                    circle2.rotation.z = 54/180*Math.PI;}
                    if(window.clicknumber == 15){   plane2.scale.x = 2
                                                    plane2.position.y = 30.7
                                                    circle2.rotation.z = 72/180*Math.PI;}
                    renderer.render( scene, camera );
                    callback(click2);
            
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function reverseclick(callback){
                        if (window.clicknumber < 15){window.clicknumber += 1}
                        else{window.clicknumber -= 7;
                        var lastsqline15 = scene.getObjectByName( "lastsqline15" );
                        var plane2 = scene.getObjectByName( "plane2" );
                        var stlines = scene.getObjectByName( "stlines" );

                        lastsqline15.rotation.y = -72/180*Math.PI
                                                    plane2.scale.x = 2
                                                    plane2.position.y =30.7;
                        for(var i = 7, length = stlines.length; i < 15; i++) {
                            var objects = stlines.children[ i ]
                            // objects.material.opacity = 0
                            objects.scale.set(0,0,0)
                        }

                        var curvelines = scene.getObjectByName( "curvelines" );
                        var toplines = curvelines.children[0];
                        var bottomlines = curvelines.children[1];
                        for(var i = 1, length = toplines.length; i < 9; i++) {
                            var objects = toplines.children[ i ]
                            // objects.material.opacity = 0
                            objects.scale.set(0,0,0)
                        }
                        for(var i = 0, length = bottomlines.length; i < 4; i++) {
                            var objects = bottomlines.children[ i ]
                            // objects.material.opacity = 0
                            objects.scale.set(0,0,0)
                        }
                    }
                        callback(reverseanimate);
                }
function reverseanimate() {
                reverseid1 = requestAnimationFrame( reverseanimate );
                    var stlines = scene.getObjectByName( "stlines" );
                    var curvelines = scene.getObjectByName( "curvelines" );
                    var circle = scene.getObjectByName( "circle" );
                    var plane = scene.getObjectByName( "plane" );
                    var circle2 = scene.getObjectByName( "circle2" );
                    if (stlines.rotation.z < 9/180*Math.PI) {
                        stlines.rotation.z += 0.9/180*Math.PI
                        curvelines.rotation.z += 0.9/180*Math.PI


                        curvelines.rotation.x = 0
                        stlines.rotation.x =0
                        circle.rotation.x =0
                        circle2.rotation.x =0
                        plane.rotation.x = 72/180*Math.PI
                    }else {reverseanimate2(); cancelAnimationFrame( reverseid1 );}

                renderer.render( scene, camera );
                    }
function reverseanimate2() {
                reverseid2 = requestAnimationFrame( reverseanimate2 );
                    var stlines = scene.getObjectByName( "stlines" );
                    var curvelines = scene.getObjectByName( "curvelines" );
                    var lastsqline15 = scene.getObjectByName( "lastsqline15" );
                    var toplines = curvelines.children[0];
                    var bottomlines = curvelines.children[1];
                        stlines.rotation.z -= 2.7/180*Math.PI
                        curvelines.rotation.z -= 2.7/180*Math.PI

                    if (window.clicknumber > 7 && window.clicknumber < 15){
                        var objectkkk = stlines.children[ window.clicknumber-1 ];
                        objectkkk.scale.set(1,1,1)}
                        if (window.clicknumber > 7 && window.clicknumber < 16){
                        if (window.clicknumber > 11){
                    var objectkk = bottomlines.children[ window.clicknumber-12 ];
                        objectkk.scale.set(1,1,1)}
                    var objectkk2 = toplines.children[ window.clicknumber-7 ];
                        toplines.children[ 0 ].scale.set(1,1,1)
                        objectkk2.scale.set(1,1,1)
                    }
                    if (stlines.rotation.z <= 0/180*Math.PI) {
                        animate3(photoanimate2);
                        cancelAnimationFrame( reverseid2 );
                        lastsqline15.rotation.y = (15-window.clicknumber)*(18/180*Math.PI)-72/180*Math.PI}
                renderer.render( scene, camera );
            
}




function photoanimate2(callback) {

    var scalek = 0.582*window.innerHeight
    document.getElementById("photo2").style.height = scalek + "px";
    document.getElementById("photo").style.height = scalek + "px";
var aspect = window.innerWidth / window.innerHeight;
if(aspect >1.3376){
            if (window.clicknumber == 14)
                {
                document.getElementById("photo").style.transform = "skewY(156.7deg)";
                document.getElementById("photo").style.transform += "translateY(-50%)"
                document.getElementById("photo").style.transform += "scaleX(0.58869)"
                document.getElementById("photo").style.webkitTransform = "skewY(156.7deg)";
                document.getElementById("photo").style.webkitTransform += "translateY(-50%)"
                document.getElementById("photo").style.webkitTransform += "scaleX(0.58869)"
                document.getElementById("photo").style.msTransform = "skewY(156.7deg)";
                document.getElementById("photo").style.msTransform += "scaleX(0.58869)"
                document.getElementById("photo").style.msTransform += "translateY(-50%)"

                var elements = document.getElementsByClassName("yearchange");
                for(var i = 0, length = elements.length; i < length; i++) {
                      elements[i].style.display = 'none'}
                var elements = document.getElementsByClassName("y10");
                for(var i = 0, length = elements.length; i < length; i++) {
                      elements[i].style.display = 'block'}
                }

            if (window.clicknumber == 13)
                {
            document.getElementById("photo").style.transform = "skewY(167.2deg)";
                document.getElementById("photo").style.transform += "translateY(-50%)"
                document.getElementById("photo").style.transform += "scaleX(0.80959)"
                document.getElementById("photo").style.msTransform = "skewY(167.2deg)";
                document.getElementById("photo").style.msTransform += "translateY(-50%)"
                document.getElementById("photo").style.msTransform += "scaleX(0.80959)"
                document.getElementById("photo").style.webkitTransform = "skewY(167.2deg)";
                document.getElementById("photo").style.webkitTransform += "scaleX(0.80959)"
                document.getElementById("photo").style.webkitTransform += "translateY(-50%)"
                var elements = document.getElementsByClassName("yearchange");
                for(var i = 0, length = elements.length; i < length; i++) {
                      elements[i].style.display = 'none'}
                var elements = document.getElementsByClassName("y11");
                for(var i = 0, length = elements.length; i < length; i++) {
                      elements[i].style.display = 'block'}
                }
            if (window.clicknumber == 12)
                {
            document.getElementById("photo").style.transform = "skewY(174.1deg)";
                document.getElementById("photo").style.transform += "translateY(-50%)"
                document.getElementById("photo").style.transform += "scaleX(0.95142)"
                document.getElementById("photo").style.webkitTransform = "skewY(174.1deg)";
                document.getElementById("photo").style.webkitTransform += "translateY(-50%)"
                document.getElementById("photo").style.webkitTransform += "scaleX(0.95142)"
                document.getElementById("photo").style.msTransform = "skewY(174.1deg)";
                document.getElementById("photo").style.msTransform += "translateY(-50%)"
                document.getElementById("photo").style.msTransform += "scaleX(0.95142)"
                var elements = document.getElementsByClassName("yearchange");
                for(var i = 0, length = elements.length; i < length; i++) {
                      elements[i].style.display = 'none'}
                var elements = document.getElementsByClassName("y12");
                for(var i = 0, length = elements.length; i < length; i++) {
                      elements[i].style.display = 'block'}
                }
            if (window.clicknumber == 11)
                {
           document.getElementById("photo").style.transform = "skewY(180deg)";
                document.getElementById("photo").style.transform += "translateY(-50%)"
                document.getElementById("photo").style.webkitTransform = "skewY(180deg)";
                document.getElementById("photo").style.webkitTransform += "translateY(-50%)"
                document.getElementById("photo").style.msTransform = "skewY(180deg)";
                document.getElementById("photo").style.msTransform += "translateY(-50%)"
                var elements = document.getElementsByClassName("yearchange");
                for(var i = 0, length = elements.length; i < length; i++) {
                      elements[i].style.display = 'none'}
                var elements = document.getElementsByClassName("y13");
                for(var i = 0, length = elements.length; i < length; i++) {
                      elements[i].style.display = 'block'}
                }
            if (window.clicknumber == 10)
                {
            document.getElementById("photo").style.transform = "skewY(185.9deg)";
                document.getElementById("photo").style.transform += "scaleX(0.949388)"
                document.getElementById("photo").style.transform += "translateY(-50%)"
                document.getElementById("photo").style.webkitTransform = "skewY(185.9deg)";
                document.getElementById("photo").style.webkitTransform += "translateY(-50%)"
                document.getElementById("photo").style.webkitTransform += "scaleX(0.949388)"
                document.getElementById("photo").style.msTransform = "skewY(185.9deg)";
                document.getElementById("photo").style.msTransform += "translateY(-50%)"
                document.getElementById("photo").style.msTransform += "scaleX(0.949388)"
                var elements = document.getElementsByClassName("yearchange");
                for(var i = 0, length = elements.length; i < length; i++) {
                      elements[i].style.display = 'none'}
                var elements = document.getElementsByClassName("y14");
                for(var i = 0, length = elements.length; i < length; i++) {
                      elements[i].style.display = 'block'}
                }
            if (window.clicknumber == 9)
                {
            document.getElementById("photo").style.transform = "skewY(192.8deg)";
                document.getElementById("photo").style.transform += "scaleX(0.807874)"
                document.getElementById("photo").style.transform += "translateY(-50%)"
                document.getElementById("photo").style.webkitTransform = "skewY(192.8deg)";
                document.getElementById("photo").style.webkitTransform += "translateY(-50%)"
                document.getElementById("photo").style.webkitTransform += "scaleX(0.807874)"
                document.getElementById("photo").style.msTransform = "skewY(192.8deg)";
                document.getElementById("photo").style.msTransform += "translateY(-50%)"
                document.getElementById("photo").style.msTransform += "scaleX(0.807874)"
                var elements = document.getElementsByClassName("yearchange");
                for(var i = 0, length = elements.length; i < length; i++) {
                      elements[i].style.display = 'none'}
                var elements = document.getElementsByClassName("y15");
                for(var i = 0, length = elements.length; i < length; i++) {
                      elements[i].style.display = 'block'}
                }
            if (window.clicknumber == 8)
                {
            document.getElementById("photo").style.transform = "skewY(203.3deg)";
                document.getElementById("photo").style.transform += "scaleX(0.586495)"
                document.getElementById("photo").style.transform += "translateY(-50%)"
                document.getElementById("photo").style.webkitTransform = "skewY(203.3deg)";
                document.getElementById("photo").style.webkitTransform += "translateY(-50%)"
                document.getElementById("photo").style.webkitTransform += "scaleX(0.586495)"
                document.getElementById("photo").style.msTransform = "skewY(203.3deg)";
                document.getElementById("photo").style.msTransform += "translateY(-50%)"
                document.getElementById("photo").style.msTransform += "scaleX(0.586495)"
                var elements = document.getElementsByClassName("yearchange");
                for(var i = 0, length = elements.length; i < length; i++) {
                      elements[i].style.display = 'none'}
                var elements = document.getElementsByClassName("y16");
                for(var i = 0, length = elements.length; i < length; i++) {
                      elements[i].style.display = 'block'}
                }

            if (window.clicknumber == 15)
                {
                document.getElementById("photo").style.transform = "skewY(136deg)";
                document.getElementById("photo").style.transform += "scaleX(0.307273)"
                document.getElementById("photo").style.transform += "translateY(-50%)"
                document.getElementById("photo").style.webkitTransform = "skewY(136deg)";
                document.getElementById("photo").style.webkitTransform += "translateY(-50%)"
                document.getElementById("photo").style.webkitTransform += "scaleX(0.307273)"
                document.getElementById("photo").style.msTransform = "skewY(136deg)";
                document.getElementById("photo").style.msTransform += "translateY(-50%)"
                document.getElementById("photo").style.msTransform += "scaleX(0.307273)"
                var elements = document.getElementsByClassName("yearchange");
                for(var i = 0, length = elements.length; i < length; i++) {
                      elements[i].style.display = 'none'}
                var elements = document.getElementsByClassName("y09");
                for(var i = 0, length = elements.length; i < length; i++) {
                      elements[i].style.display = 'block'} 
                }

            }



                document.getElementById("photo").style.opacity = "1";
                document.getElementById("photo2").style.opacity = "1";

	
    callback();
	}


