import * as THREE from 'three';

let camera, scene, renderer;

const init = () => {
  // Create a scene
  scene = new THREE.Scene();
  scene.background = new THREE.Color('#00a8ff');

  // Create a camera
  camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);

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


const animate = () => {
  requestAnimationFrame( animate );
  renderer.render( scene, camera );
}

init();
animate();