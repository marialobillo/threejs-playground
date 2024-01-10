import * as THREE from 'three';

let camera, scene, renderer;
let cube = null;
let sphere = null;

const init = () => {
  // Create a scene
  scene = new THREE.Scene();
  scene.background = new THREE.Color('#00a8ff');

  // Create a camera
  camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
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
}

const createCube = () => {
  const geometry = new THREE.BoxGeometry(1, 1, 1)
  const material = new THREE.MeshBasicMaterial({ 
    color: '#8e44ad',
   })
  cube = new THREE.Mesh(geometry, material);
  cube.position.x = -2;
  scene.add(cube);
}

const createSphere = () => {
  const geometry = new THREE.SphereGeometry(0.75, 50, 50)
  const material = new THREE.MeshBasicMaterial({ 
    color: '#f1c40f',
   })
  sphere = new THREE.Mesh(geometry, material);
  sphere.position.x = 2;
  scene.add(sphere);
}


const animate = () => {
  requestAnimationFrame( animate );
  renderer.render( scene, camera );

  if(cube != null){
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
  }
}

init();
createCube();
createSphere();
animate();


