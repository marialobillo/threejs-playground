import * as THREE from 'three';

import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'

let camera, scene, renderer;
let chair1 = null;
let chair2 = null;
let chair3 = null;
let chair4 = null;
let mouse = new THREE.Vector2();


const init = async () => {
  // Create a scene
  scene = new THREE.Scene();
  scene.background = new THREE.Color('#00a8ff');

  // Create a camera
  camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 100);
  camera.position.z = 6;
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


  
  chair1 = await loadFBXObject('./../public/models/furniture/Bar_chair_2.fbx');
  chair2 = await loadFBXObject('./../public/models/furniture/Bar_chair_2.fbx');
  chair3 = await loadFBXObject('./../public/models/furniture/Bar_chair_2.fbx');
  chair4 = await loadFBXObject('./../public/models/furniture/Bar_chair_2.fbx');

  chair1.position.set(0,-2, 1);
  chair2.position.set(0,-2, -1);
  chair3.position.set(1,-2, 0);
  chair4.position.set(-1,-2, 0);

  //chair1.scale.set(0.01, 0.01, 0.01);
  let table = await loadFBXObject('./../public/models/furniture/Wood_Table_74.fbx');

  table.scale.set(0.04, 0.04, 0.04);
  table.position.set(0, -2, 0);
  table.rotation.y = THREE.MathUtils.degToRad(-40);

  const side = 1.3;
  chair1.position.set(side, -2, -side);
  chair2.position.set(-side, -2, -side);
  chair3.position.set(side, -2, side);
  chair4.position.set(-side, -2, side);

}

const onMouseMove = (event) => {
  event.preventDefault();
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = (event.clientY / window.innerHeight) * 2 + 1;

  scene.rotation.x = mouse.x * 2;
  //scene.rotation.y = mouse.y * 2;
  //camera.position.x += 0.02;
};

const loadFBXObject = async (url) => {
  const loader = new FBXLoader();
  const object = await loader.loadAsync(url);
  scene.add(object);
  return object;
}


const animate = () => {
  requestAnimationFrame( animate );
  renderer.render( scene, camera );

  // if(chair1 !== null){
  //   //chair1.rotation.x += 0.01;
  //   chair1.rotation.y += 0.01;
  // }

  // if(chair2 !== null){
  //   //chair1.rotation.x += 0.01;
  //   chair2.rotation.y += 0.01;
  // }

  // if(chair3 !== null){
  //   //chair1.rotation.x += 0.01;
  //   chair3.rotation.y += 0.01;
  // }

  // if(chair4 !== null){
  //   //chair1.rotation.x += 0.01;
  //   chair4.rotation.y += 0.01;
  // }
}


window.addEventListener("mousemove", onMouseMove, false);
await init();
animate();


