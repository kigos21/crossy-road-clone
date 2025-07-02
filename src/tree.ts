import * as THREE from "three";
import { tileSize } from "./constants";

type TreeData = {
  tileIndex: number;
  height: number;
};

export function Tree({ tileIndex, height }: TreeData) {
  const tree = new THREE.Group();
  tree.position.x = tileIndex * tileSize;

  const trunk = new THREE.Mesh(
    new THREE.BoxGeometry(15, 15, 20),
    new THREE.MeshLambertMaterial({ color: 0x4d2926 })
  );

  trunk.position.z = 10;
  tree.add(trunk);

  const crown = new THREE.Mesh(
    new THREE.BoxGeometry(30, 30, height),
    new THREE.MeshLambertMaterial({ color: 0x7aa21d })
  );

  crown.position.z = height / 2 + 20;
  tree.add(crown);

  return tree;
}
