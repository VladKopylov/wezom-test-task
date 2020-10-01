import React, { useState } from "react";
import { UnorderedListOutlined, AppstoreOutlined } from "@ant-design/icons";
import { Tooltip, Button } from "antd";

const ToggleViewMode = ({ displayMode, onClick }) => {
  const [selectedBtn, setSelected] = useState(displayMode);

  const handleClick = (e) => {
    const { name } = e.currentTarget;

    setSelected(name);
    onClick(name);
    localStorage.setItem("displayMode", name);
  };

  return (
    <div>
      <Tooltip title="Table view">
        <Button
          type={selectedBtn === "table" ? "primary" : "outlined"}
          icon={<UnorderedListOutlined />}
          name="table"
          onClick={handleClick}
        />
      </Tooltip>
      <Tooltip title="Tile view">
        <Button
          type={selectedBtn === "tile" ? "primary" : "outlined"}
          icon={<AppstoreOutlined />}
          name="tile"
          onClick={handleClick}
        />
      </Tooltip>
    </div>
  );
};

export { ToggleViewMode };
