import * as THREE from "three";

/**
 * The main player object instance for the crossy road game.
 * This is a Three.js Group containing the player's visual representation.
 */
export const player = Player();

/**
 * Creates and returns a player object for the crossy road game.
 * The player is represented as a white rectangular body positioned above the ground.
 *
 * @returns {THREE.Group} A Three.js Group containing the player's mesh components
 */
function Player() {
  // Create a group to hold all player components
  const player = new THREE.Group();

  // Create the main body of the player as a white rectangular box
  const body = new THREE.Mesh(
    new THREE.BoxGeometry(15, 15, 20), // Width: 15, Height: 15, Depth: 20
    new THREE.MeshLambertMaterial({ color: "white" })
  );

  // Position the body 10 units above the ground (z-axis)
  body.position.z = 10;

  // Add the body to the player group
  player.add(body);

  return player;
}
