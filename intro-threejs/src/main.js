import * as THREE from 'three';

// Create a scene
const scene = new THREE.Scene();

// Create a sphere
const geometry = new THREE.SphereGeometry( 15, 32, 16 ); 
const material = new THREE.MeshStandardMaterial( { color: 0x003430 } ); 

// Create a Mesh
const mesh = new THREE.Mesh( geometry, material );

// Add the sphere to the scene
scene.add( mesh );

// Sizes
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
};

// Create a directional light
const light = new THREE.PointLight( 0xff0000, 1, 100 );
light.position.set( 0, 50, 50 );
scene.add( light );


// Create a camera
const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 100);
camera.position.z = 20;
scene.add( camera );

// Renderer
const canvas = document.querySelector('.webgl');
const renderer = new THREE.WebGLRenderer({ canvas });

// Render the scene
renderer.setSize(sizes.width , sizes.height);
renderer.render( scene, camera );


// Resize
window.addEventListener('resize', () => {
  // Update sizes
  console.log('resize');
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;
});
