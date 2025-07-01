import * as THREE from "three";
import { Camera } from "./Camera";
import { player } from "./Player";
import { Renderer } from "./Renderer";

const scene = new THREE.Scene();
scene.add(player);

const camera = Camera();
player.add(camera);

const renderer = Renderer();
renderer.render(scene, camera);
