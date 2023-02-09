import { PlaneGeometry, MeshPhongMaterial, Mesh } from "../node_modules/three/build/three.module.js";

import {
    colorMap,
    normalMap,
    aoMap,
    heightMap
} from "./textures.js";

//Geometry + Material + Mesh + texture
const geometry = new PlaneGeometry( 10, 10, 1000, 1000 );

var material = new MeshPhongMaterial({
    map: colorMap,
    normalMap: normalMap,
    aoMap: aoMap,
    displacementMap: heightMap
});

var cube = new Mesh( geometry, material );

export { cube };