import * as THREE from "three";
import { maxTileIndex, minTileIndex, tileSize } from "./constants";
import { metadata } from "./map";
import { movesQueue, player, position, stepCompleted } from "./player";

const clock = new THREE.Clock();
const moveClock = new THREE.Clock();

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

export function animatePlayer() {
  if (movesQueue.length === 0) return;

  if (!moveClock.running) moveClock.start();

  const stepTime = 0.2;
  const progress = Math.min(1, moveClock.getElapsedTime() / stepTime);

  setPosition(progress);

  // Once a step has ended
  if (progress >= 1) {
    stepCompleted();
    moveClock.stop();
  }
}

function setPosition(progress: number) {
  const startX = position.currentTile * tileSize;
  const startY = position.currentRow * tileSize;
  let endX = startX;
  let endY = startY;

  if (movesQueue[0] === "left") endX -= tileSize;
  if (movesQueue[0] === "right") endX += tileSize;
  if (movesQueue[0] === "forward") endY += tileSize;
  if (movesQueue[0] === "backward") endY -= tileSize;

  player.position.x = THREE.MathUtils.lerp(startX, endX, progress);
  player.position.y = THREE.MathUtils.lerp(startY, endY, progress);
  player.children[0].position.z = Math.sin(progress * Math.PI) * 8 + 10;
}
