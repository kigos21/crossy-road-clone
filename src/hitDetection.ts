import * as THREE from "three";
import { metadata as rows } from "./map";
import { player, position } from "./player";

export function hitTest() {
  const row = rows[position.currentRow - 1];
  if (!row) return;

  if (row.type === "car") {
    const playerBoundingBox = new THREE.Box3();
    playerBoundingBox.setFromObject(player);

    row.vehicles!.forEach(({ ref }: any) => {
      if (!ref) throw Error("Vehicle reference is missing");

      const vehicleBoundingBox = new THREE.Box3();
      vehicleBoundingBox.setFromObject(ref);

      if (playerBoundingBox.intersectsBox(vehicleBoundingBox)) {
        window.alert("Game over!");
        window.location.reload();
      }
    });
  }
}
