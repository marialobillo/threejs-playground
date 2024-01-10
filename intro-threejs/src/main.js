import * as THREE from 'three';

const scene = new THREE.Scene();

// Create a sphere
const geometry = new THREE.SphereGeometry( 3, 64, 64);
const material = new THREE.MeshStandardMaterial( {
  color: 0xffff83,

});

const mesh = new THREE.Mesh( geometry, material );

scene.add( mesh );

// Create a directional light
const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 1000 );