import * as THREE from 'three';

// Create a scene
const scene = new THREE.Scene();

// Create a sphere
const geometry = new THREE.SphereGeometry( 3, 64, 64);
const material = new THREE.MeshStandardMaterial( {
  color: 0xffff83,

});
// Create a Mesh
const mesh = new THREE.Mesh( geometry, material );

// Add the sphere to the scene
scene.add( mesh );

// Create a directional light
const camera = new THREE.PerspectiveCamera( 50, 800, 600 );
scene.add( camera );

// Renderer
const canvas = document.querySelector('.webgl');
const renderer = new THREE.WebGLRenderer({ canvas});

// Render the scene
renderer.setSize( 800, 600 );
renderer.render( scene, camera );
