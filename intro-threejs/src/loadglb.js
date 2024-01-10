import * as THREE from 'three';

import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

let camera, scene, renderer;
let cube = null;
let textureBox = null;


const init = async () => {
  // Create a scene
  scene = new THREE.Scene();
  scene.background = new THREE.Color('#00a8ff');

  // Create a camera
  camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
  camera.position.z = 10;
  camera.position.x = 0;

  // Create a renderer
  const canvas = document.querySelector('.webgl');
  renderer = new THREE.WebGLRenderer({ canvas });
  //document.body.appendChild( renderer.domElement );

  // Sizes
  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
  };

  renderer.setSize(sizes.width , sizes.height);

  const birdGLB = await loadGLB('./../public/models/bird_orange.glb');
  console.log(birdGLB);
  scene.add(birdGLB.scene);


}


const loadGLB = async (url) => {
  const loader = new GLTFLoader();
  const glb = await loader.loadAsync(url);
  return glb;
}

const createCube = () => {
  const geometry = new THREE.BoxGeometry(1, 1, 1)
  const material = new THREE.MeshBasicMaterial({ 
    map: textureBox,
   })
  cube = new THREE.Mesh(geometry, material);
  cube.position.x = -2;
  scene.add(cube);
}


const animate = () => {
  requestAnimationFrame( animate );
  renderer.render( scene, camera );

  if(cube) {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
  }
}

init();

createCube();
animate();


