import { Scene, AmbientLight } from "../node_modules/three/build/three.module.js";

//Scene Setting
const scene = new Scene();

//Camera
import { camera } from "./flat_waffle_files/camera.js"

//Renderer
import { renderer } from "./flat_waffle_files/renderer.js"

//Add renderer to body
document.body.appendChild( renderer.domElement );

//Geometry + Material + Mesh
import { cube } from "./flat_waffle_files/geometry.js"

//Lights
const ambientLight = new AmbientLight( '#ffffcc', 1 );

//Scene Setting
scene.add( cube );
scene.add( ambientLight );

//Animation function
function animate() {
	requestAnimationFrame( animate );

	cube.rotation.x += 0.005;
	cube.rotation.y += 0.005;

	renderer.render( scene, camera );
};

animate();

////
//
// Window dimensions
//
////
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

////
//
// Window resizing listener / Responsiveness
//
////
window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})