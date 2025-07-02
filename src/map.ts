import * as THREE from "three";
import { Grass } from "./grass";
import { Tree } from "./tree";

export const metadata = [
  {
    type: "forest",
    trees: [
      { tileIndex: -3, height: 50 },
      { tileIndex: 2, height: 30 },
      { tileIndex: 5, height: 50 },
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

    rowData.trees.forEach(({ tileIndex, height }) => {
      const tree = Tree({ tileIndex, height });
      row.add(tree);
    });

    map.add(row);
  }
});
