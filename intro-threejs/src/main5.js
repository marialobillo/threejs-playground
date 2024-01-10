import * as THREE from "three";


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const teal = new THREE.MeshStandardMaterial({ color: "#3498db" });
const pink = new THREE.MeshStandardMaterial({ color: "#9b59b6" });

const createSquare = (x, y, material) => {
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const square = new THREE.Mesh(geometry, material);
  square.position.set(x, y, 0);
  square.rotation.z = THREE.MathUtils.degToRad(15);
  scene.add(square);
  return square;
};

const square1 = createSquare(-2, 0, teal.clone());
const square2 = createSquare(2, 0, teal.clone());

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

const onMouseMove = (event) => {
  event.preventDefault();
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  camera.position.x = mouse.x * 3;
  square1.position.x = mouse.x * -3;
};

window.addEventListener("mousemove", onMouseMove, false);



const pointLight = new THREE.PointLight(0xffffff, 1, 100);
pointLight.position.set(0, 0, 10);
scene.add(pointLight);

const ambientLight = new THREE.AmbientLight(0x404040);
scene.add(ambientLight);


const onWindowResize = () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
};

window.addEventListener("resize", onWindowResize, false);


function animate() {
  requestAnimationFrame(animate);

  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObjects([square1, square2]);

  square1.material = teal.clone();
  square2.material = teal.clone();

  for (const intersect of intersects) {
    intersect.object.material = pink.clone();
  }

  // square1.rotation.z += 0.01;
  // square2.rotation.z += 0.01;

  renderer.render(scene, camera);
}

animate();



