import * as THREE from "three";
import { maxTileIndex, minTileIndex } from "./constants";
import { metadata } from "./map";

export const player = Player();

function Player() {
  const player = new THREE.Group();

  const body = new THREE.Mesh(
    new THREE.BoxGeometry(15, 15, 20), // Width: 15, Height: 15, Depth: 20
    new THREE.MeshLambertMaterial({ color: "white" })
  );

  const comb = new THREE.Mesh(
    new THREE.BoxGeometry(5, 5, 4),
    new THREE.MeshLambertMaterial({ color: "red" })
  );

  body.position.z = 10;
  player.add(body);

  comb.position.z = 22;
  player.add(comb);

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
  const isValidMove = endsUpInValidPosition(
    {
      rowIndex: position.currentRow,
      tileIndex: position.currentTile,
    },
    [...movesQueue, direction]
  );

  if (!isValidMove) return;

  movesQueue.push(direction);
}

export function stepCompleted() {
  const direction = movesQueue.shift();

  if (direction === "forward") position.currentRow += 1;
  if (direction === "backward") position.currentRow -= 1;
  if (direction === "left") position.currentTile -= 1;
  if (direction === "right") position.currentTile += 1;
}

export function calculateFinalPosition(currentPosition: any, moves: any) {
  return moves.reduce((position: any, direction: any) => {
    if (direction === "forward")
      return {
        rowIndex: position.rowIndex + 1,
        tileIndex: position.tileIndex,
      };
    if (direction === "backward")
      return {
        rowIndex: position.rowIndex - 1,
        tileIndex: position.tileIndex,
      };
    if (direction === "left")
      return {
        rowIndex: position.rowIndex,
        tileIndex: position.tileIndex - 1,
      };
    if (direction === "right")
      return {
        rowIndex: position.rowIndex,
        tileIndex: position.tileIndex + 1,
      };
    return position;
  }, currentPosition);
}

export function endsUpInValidPosition(currentPosition: any, moves: any) {
  // Calculate where the player would end up after the move
  const finalPosition = calculateFinalPosition(currentPosition, moves);

  // Detect if we hit the edge of the board
  if (
    finalPosition.rowIndex === -1 ||
    finalPosition.tileIndex === minTileIndex - 1 ||
    finalPosition.tileIndex === maxTileIndex + 1
  ) {
    // Invalid move, ignore move command
    return false;
  }

  // Detect if we hit a tree
  const finalRow = metadata[finalPosition.rowIndex - 1];
  if (
    finalRow &&
    finalRow.type === "forest" &&
    finalRow.trees!.some((tree) => tree.tileIndex === finalPosition.tileIndex)
  ) {
    // Invalid move, ignore move command
    return false;
  }

  return true;
}
