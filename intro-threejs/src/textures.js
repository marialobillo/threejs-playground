import * as THREE from 'three';

let camera, scene, renderer;
let cube = null;
let textureBox = null;


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

const loadTexture = async () => {
  const loader = new THREE.TextureLoader();
  textureBox = await loader.loadAsync('./../public/textures/box_texture.jpeg');
  
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
await loadTexture();
createCube();
animate();


