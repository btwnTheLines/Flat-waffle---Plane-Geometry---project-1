import { PerspectiveCamera } from "../node_modules/three/build/three.module.js";

//Camera Setting
const camera = new PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.z = 20;

export{ camera };