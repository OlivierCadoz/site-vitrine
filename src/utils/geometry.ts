import { BoxGeometry, MeshBasicMaterial, MeshStandardMaterial, Mesh } from "three";
import { TextGeometry } from "three/addons/geometries/TextGeometry.js";
import { FontLoader } from "three/addons/loaders/FontLoader.js";

const createCube = () => {
  const cubeGeometry = new BoxGeometry(1, 1, 1);
  const material = new MeshBasicMaterial({ color: 0x00ff00 });
  return new Mesh(cubeGeometry, material);
};

const createText = async (text: string) => {
  const loader = new FontLoader();
  const font = await loader.loadAsync("../../public/fonts/helvetiker.typeface.json");
  const textGeometry = new TextGeometry(text, {
    font,
    size: 3,
    depth: 1,
    curveSegments: 5,
  });
  const textMaterial = new MeshStandardMaterial({
    color: 0x00ffff,
    emissive: 0x00ffff,
    emissiveIntensity: 0.5,
  });
  textGeometry.center();
  return new Mesh(textGeometry, textMaterial);
};

export { createCube, createText };
