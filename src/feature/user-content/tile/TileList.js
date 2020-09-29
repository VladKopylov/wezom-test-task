import React from "react";
import { Tile } from "./Tile";

import "./style.scss";

const TileList = ({ users = [] }) => {
  return (
    <div className="tile-list-container">
      {users.map((item, index) => (
        <Tile user={item} key={index} />
      ))}
    </div>
  );
};

export { TileList };
