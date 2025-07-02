import * as THREE from "three";
import { maxTileIndex, minTileIndex, tileSize } from "./constants";
import { metadata } from "./map";

const clock = new THREE.Clock();

export function animateVehicles() {
  const delta = clock.getDelta();

  // Animate cars;
  metadata.forEach((rowData) => {
    if (rowData.type === "car") {
      const beginningOfRow = (minTileIndex - 2) * tileSize; // why?
      const endOfRow = (maxTileIndex + 2) * tileSize; // why?

      rowData.vehicles!.forEach(({ ref }: any) => {
        if (!ref) throw Error("Vehicle reference is missing");

        if (rowData.direction) {
          ref.position.x =
            ref.position.x > endOfRow
              ? beginningOfRow
              : ref.position.x + rowData.speed * delta;
        } else {
          ref.position.x =
            ref.position.x < beginningOfRow
              ? endOfRow
              : ref.position.x - rowData.speed! * delta;
        }
      });
    }
  });
}
