import * as THREE from "three";
import { tileSize } from "./constants";

type CarData = {
  initialTileIndex: number;
  direction: boolean;
  color: number;
};

export function Car({ initialTileIndex, direction, color }: CarData) {
  const car = new THREE.Group();

  car.position.x = initialTileIndex * tileSize;
  if (!direction) car.rotation.z = Math.PI;

  const main = new THREE.Mesh(
    new THREE.BoxGeometry(60, 30, 15),
    new THREE.MeshLambertMaterial({ color })
  );

  main.position.z = 12;
  car.add(main);

  const cabin = new THREE.Mesh(
    new THREE.BoxGeometry(33, 24, 12),
    new THREE.MeshLambertMaterial({ color: "white" })
  );

  cabin.position.x = -6;
  cabin.position.z = 25.5;
  car.add(cabin);

  const frontWheel = new THREE.Mesh(
    new THREE.BoxGeometry(12, 33, 12),
    new THREE.MeshLambertMaterial({ color: 0x333333 })
  );

  frontWheel.position.x = 18;
  frontWheel.position.z = 6;
  car.add(frontWheel);

  const backWheel = new THREE.Mesh(
    new THREE.BoxGeometry(12, 33, 12),
    new THREE.MeshLambertMaterial({ color: 0x333333 })
  );

  backWheel.position.x = -18;
  backWheel.position.z = 6;
  car.add(backWheel);

  return car;
}
