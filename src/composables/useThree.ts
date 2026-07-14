import { Scene, PerspectiveCamera, WebGLRenderer } from "three";
import { createCube, createText } from "@/utils/geometry";
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

export async function useThree(titleElement: HTMLElement, title: string) {
  // SCENE
  const scene = new Scene();

  // CAMERA
  const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 10;

  // RENDERER
  const renderer = new WebGLRenderer({ antialias: true, alpha: true });
  renderer.setClearColor(0x000000, 0);
  renderer.setSize(window.innerWidth, window.innerHeight);
  titleElement.appendChild(renderer.domElement);

  // CONTROLS and LOADER
  new OrbitControls( camera, renderer.domElement );
  new GLTFLoader();

  // 3D CUBE
  const cube = createCube();
  cube.position.set(0, 3, -5);
  scene.add(cube);

  //3D TEXT
  const text = await createText(title);
  text.position.set(0, 0, -10);
  scene.add(text);

  // ANIMATION
  function animate(time: number) {
    cube.rotation.x = time / 2000;
    cube.rotation.y = time / 1000;
    renderer.render(scene, camera);
  }
  renderer.setAnimationLoop(animate);
}
