import * as THREE from "three";

export const player = Player();

function Player() {
  const player = new THREE.Group();

  const body = new THREE.Mesh(
    new THREE.BoxGeometry(15, 15, 20), // Width: 15, Height: 15, Depth: 20
    new THREE.MeshLambertMaterial({ color: "white" })
  );

  body.position.z = 10;
  player.add(body);

  return player;
}

export const position = {
  currentRow: 0,
  currentTile: 0,
};

export const movesQueue: ("forward" | "backward" | "left" | "right")[] = [];

export function queueMove(
  direction: "forward" | "backward" | "left" | "right"
) {
  movesQueue.push(direction);
}

export function stepCompleted() {
  const direction = movesQueue.shift();

  if (direction === "forward") position.currentRow += 1;
  if (direction === "backward") position.currentRow -= 1;
  if (direction === "left") position.currentTile -= 1;
  if (direction === "right") position.currentTile += 1;
}
