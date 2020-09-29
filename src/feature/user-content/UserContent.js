import React from "react";
import { Table } from "./Table";
import { TileList } from "./tile/TileList";

const UserContent = ({ users, displayMode }) => {
  if (displayMode === "tile") {
    return <TileList users={users} />;
  }

  if (displayMode === "table") {
    return <Table users={users} />;
  }
};

export { UserContent };
