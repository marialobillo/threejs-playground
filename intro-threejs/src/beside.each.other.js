import * as THREE from 'three';

import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'

let camera, scene, renderer;
let tractor = null;
let raycaster = new THREE.Raycaster();
let mouse = new THREE.Vector2();


const init = async () => {
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


  // const tractorFBX = await loadFBX('./../public/models/car.fbx');
  // console.log(tractorFBX);
  // scene.add(tractorFBX.scene);

  // fbx loader
  // let fbxLoader = new FBXLoader()
  // fbxLoader.load(
  //     './../public/models/car.fbx',
  //     (object) => {
  //         tractor = object
  //         scene.add(tractor)
  //     },
  //     (xhr) => {
  //         console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
  //     },
  //     (error) => {
  //         console.log(error)
  //     }
  // )
  let car1 = await loadFBXObject('./../public/models/car.fbx');
  let car2 = await loadFBXObject('./../public/models/car.fbx');
  let car3 = await loadFBXObject('./../public/models/car.fbx');
  let car4 = await loadFBXObject('./../public/models/car.fbx');
  

  let lengthCar = 9;
  let widthCar = 2.5;
  let heightCar = 1.65;

  car4.position.x = - 10;
  car4.position.y = 1.65;

  car1.translateOnAxis(new THREE.Vector3(1, 0, 0), -(lengthCar + 1.1));
  car2.translateOnAxis(new THREE.Vector3(1, 0, 0), -4.66);
  car3.translateOnAxis(new THREE.Vector3(1, 0, 0), 2);
  car4.translateOnAxis(new THREE.Vector3(0, 1, 1), 1.65);

  //let position = car1.position.copy(car2.matrixWorld.getPosition());

  console.log('position', car2.position.x);

  
}

const onMouseMove = (event) => {
  event.preventDefault();
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = (event.clientY / window.innerHeight) * 2 + 1;

  //scene.rotation.x = mouse.x * 2;
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
}


window.addEventListener("mousemove", onMouseMove, false);
await init();
animate();


