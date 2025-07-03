import * as THREE from "three";
import { animatePlayer, animateVehicles } from "./animation";
import { Camera } from "./camera";
import "./collectUserInput";
import { hitTest } from "./hitDetection";
import { map } from "./map";
import { player } from "./player";
import { Renderer } from "./renderer";
import "./style.css";

const scene = new THREE.Scene();
scene.add(player);
scene.add(map);

const ambientLight = new THREE.AmbientLight();
scene.add(ambientLight);

const dirLight = new THREE.DirectionalLight();
dirLight.position.set(-100, -100, 200);
scene.add(dirLight);

const camera = Camera();
player.add(camera);

const renderer = Renderer();
renderer.setAnimationLoop(animate);

function animate() {
  animateVehicles();
  animatePlayer();
  hitTest();

  renderer.render(scene, camera);
}
