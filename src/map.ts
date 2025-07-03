import * as THREE from "three";
import { Car } from "./car";
import { Grass } from "./grass";
import { Road } from "./road";
import { Tree } from "./tree";

export const metadata = [
  {
    type: "car",
    direction: false,
    speed: 100,
    vehicles: [
      { initialTileIndex: -4, color: 0xbdb638 },
      { initialTileIndex: -1, color: 0x78b14b },
      { initialTileIndex: 4, color: 0xa52523 },
    ],
  },
  {
    type: "forest",
    trees: [
      { tileIndex: -5, height: 50 },
      { tileIndex: 0, height: 30 },
      { tileIndex: 3, height: 50 },
    ],
  },
  {
    type: "car",
    direction: true,
    speed: 200,
    vehicles: [
      { initialTileIndex: -4, color: 0x78b14b },
      { initialTileIndex: 0, color: 0xbdb638 },
      { initialTileIndex: 5, color: 0xbdb638 },
    ],
  },
  {
    type: "car",
    direction: true,
    speed: 220,
    vehicles: [
      { initialTileIndex: -6, color: 0xff6b35 },
      { initialTileIndex: 2, color: 0x4ecdc4 },
      { initialTileIndex: 8, color: 0xf7dc6f },
    ],
  },
  {
    type: "forest",
    trees: [
      { tileIndex: -8, height: 30 },
      { tileIndex: -3, height: 50 },
      { tileIndex: 2, height: 30 },
    ],
  },
  {
    type: "forest",
    trees: [
      { tileIndex: -6, height: 65 },
      { tileIndex: -1, height: 25 },
      { tileIndex: 4, height: 40 },
      { tileIndex: 9, height: 55 },
    ],
  },
  {
    type: "forest",
    trees: [
      { tileIndex: -9, height: 35 },
      { tileIndex: 0, height: 45 },
      { tileIndex: 6, height: 60 },
    ],
  },
  {
    type: "car",
    direction: false,
    speed: 150,
    vehicles: [
      { initialTileIndex: -6, color: 0xff4444 },
      { initialTileIndex: -2, color: 0x4444ff },
      { initialTileIndex: 3, color: 0x44ff44 },
      { initialTileIndex: 7, color: 0xffaa00 },
    ],
  },
  {
    type: "forest",
    trees: [
      { tileIndex: -7, height: 40 },
      { tileIndex: -1, height: 55 },
      { tileIndex: 4, height: 35 },
      { tileIndex: 8, height: 45 },
    ],
  },
  {
    type: "car",
    direction: true,
    speed: 300,
    vehicles: [
      { initialTileIndex: -8, color: 0xe74c3c },
      { initialTileIndex: -3, color: 0x9b59b6 },
    ],
  },
  {
    type: "car",
    direction: true,
    speed: 280,
    vehicles: [
      { initialTileIndex: -5, color: 0x9966cc },
      { initialTileIndex: 1, color: 0xcc6699 },
      { initialTileIndex: 6, color: 0x66cc99 },
      { initialTileIndex: 10, color: 0xff9f43 },
    ],
  },
  {
    type: "car",
    direction: false,
    speed: 90,
    vehicles: [
      { initialTileIndex: -7, color: 0x58d68d },
      { initialTileIndex: 0, color: 0xf39c12 },
      { initialTileIndex: 5, color: 0x85c1e9 },
    ],
  },
  {
    type: "forest",
    trees: [
      { tileIndex: -6, height: 60 },
      { tileIndex: 1, height: 25 },
      { tileIndex: 5, height: 40 },
    ],
  },
  {
    type: "car",
    direction: false,
    speed: 320,
    vehicles: [
      { initialTileIndex: -4, color: 0x1abc9c },
      { initialTileIndex: 3, color: 0xe67e22 },
      { initialTileIndex: 8, color: 0x8e44ad },
    ],
  },
  {
    type: "car",
    direction: false,
    speed: 160,
    vehicles: [
      { initialTileIndex: -9, color: 0x34495e },
      { initialTileIndex: -5, color: 0xf1c40f },
      { initialTileIndex: -1, color: 0x16a085 },
      { initialTileIndex: 4, color: 0xd35400 },
      { initialTileIndex: 9, color: 0x7d3c98 },
    ],
  },
  {
    type: "forest",
    trees: [
      { tileIndex: -8, height: 70 },
      { tileIndex: -2, height: 30 },
      { tileIndex: 3, height: 50 },
      { tileIndex: 7, height: 40 },
    ],
  },
  {
    type: "forest",
    trees: [
      { tileIndex: -5, height: 35 },
      { tileIndex: 1, height: 65 },
      { tileIndex: 6, height: 45 },
    ],
  },
  {
    type: "car",
    direction: true,
    speed: 240,
    vehicles: [
      { initialTileIndex: -6, color: 0xec7063 },
      { initialTileIndex: 2, color: 0x52be80 },
      { initialTileIndex: 7, color: 0x5dade2 },
    ],
  },
  {
    type: "car",
    direction: false,
    speed: 120,
    vehicles: [
      { initialTileIndex: -3, color: 0x00ffff },
      { initialTileIndex: 2, color: 0xff00ff },
      { initialTileIndex: 8, color: 0xffff00 },
    ],
  },
  {
    type: "forest",
    trees: [
      { tileIndex: -9, height: 50 },
      { tileIndex: -4, height: 30 },
      { tileIndex: 0, height: 45 },
      { tileIndex: 6, height: 35 },
    ],
  },
  {
    type: "car",
    direction: true,
    speed: 350,
    vehicles: [
      { initialTileIndex: -8, color: 0xa569bd },
      { initialTileIndex: -2, color: 0x48c9b0 },
    ],
  },
  {
    type: "car",
    direction: true,
    speed: 270,
    vehicles: [
      { initialTileIndex: -7, color: 0x8b4513 },
      { initialTileIndex: -1, color: 0x2f4f4f },
      { initialTileIndex: 4, color: 0x800080 },
      { initialTileIndex: 9, color: 0x008080 },
    ],
  },
  {
    type: "car",
    direction: false,
    speed: 180,
    vehicles: [
      { initialTileIndex: -5, color: 0xf7dc6f },
      { initialTileIndex: 1, color: 0xbb8fce },
      { initialTileIndex: 6, color: 0x7fb3d3 },
    ],
  },
  {
    type: "forest",
    trees: [
      { tileIndex: -7, height: 55 },
      { tileIndex: 0, height: 25 },
      { tileIndex: 5, height: 65 },
      { tileIndex: 9, height: 40 },
    ],
  },
  {
    type: "forest",
    trees: [
      { tileIndex: -4, height: 45 },
      { tileIndex: 2, height: 70 },
      { tileIndex: 8, height: 30 },
    ],
  },
  {
    type: "forest",
    trees: [
      { tileIndex: -8, height: 35 },
      { tileIndex: -3, height: 60 },
      { tileIndex: 1, height: 50 },
      { tileIndex: 7, height: 25 },
    ],
  },
  {
    type: "car",
    direction: true,
    speed: 400,
    vehicles: [
      { initialTileIndex: -9, color: 0xff5733 },
      { initialTileIndex: 0, color: 0x33ff57 },
    ],
  },
  {
    type: "car",
    direction: false,
    speed: 140,
    vehicles: [
      { initialTileIndex: -6, color: 0x3357ff },
      { initialTileIndex: -1, color: 0xff3357 },
      { initialTileIndex: 4, color: 0x57ff33 },
      { initialTileIndex: 8, color: 0x5733ff },
    ],
  },
  {
    type: "forest",
    trees: [
      { tileIndex: -5, height: 55 },
      { tileIndex: 2, height: 40 },
      { tileIndex: 7, height: 30 },
    ],
  },
  {
    type: "car",
    direction: true,
    speed: 260,
    vehicles: [
      { initialTileIndex: -7, color: 0xfd79a8 },
      { initialTileIndex: 0, color: 0x00cec9 },
      { initialTileIndex: 5, color: 0xfdcb6e },
      { initialTileIndex: 10, color: 0x6c5ce7 },
    ],
  },
  {
    type: "car",
    direction: true,
    speed: 290,
    vehicles: [
      { initialTileIndex: -4, color: 0xe17055 },
      { initialTileIndex: 3, color: 0x74b9ff },
      { initialTileIndex: 8, color: 0xa29bfe },
    ],
  },
  {
    type: "forest",
    trees: [
      { tileIndex: -6, height: 40 },
      { tileIndex: 1, height: 60 },
      { tileIndex: 6, height: 35 },
      { tileIndex: 10, height: 50 },
    ],
  },
  {
    type: "car",
    direction: false,
    speed: 380,
    vehicles: [
      { initialTileIndex: -8, color: 0x00b894 },
      { initialTileIndex: -2, color: 0xe84393 },
    ],
  },
];

export const map = new THREE.Group();

const grass = Grass(0);
map.add(grass);

metadata.forEach((rowData, index) => {
  const rowIndex = index + 1;

  if (rowData.type === "forest") {
    const row = Grass(rowIndex);

    rowData.trees!.forEach(({ tileIndex, height }) => {
      const tree = Tree({ tileIndex, height });
      row.add(tree);
    });

    map.add(row);
  }

  if (rowData.type === "car") {
    const row = Road(rowIndex);

    rowData.vehicles!.forEach((vehicle: any) => {
      const car = Car({
        initialTileIndex: vehicle.initialTileIndex,
        direction: rowData.direction!,
        color: vehicle.color,
      });

      vehicle.ref = car;
      row.add(car);
    });

    map.add(row);
  }
});
