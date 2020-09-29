import React from "react";
import { Tooltip, Button } from "antd";
import { ReloadOutlined } from "@ant-design/icons";

import { ToggleViewMode } from "../../ui/toggle-view-mode/ToggleViewMode";

const DisplaySwitcher = ({ fetchUsers, setMode, displayMode }) => {
  return (
    <div className="display-switcher">
      <Tooltip title="Обновить информацию">
        <Button
          type="dashed"
          shape="circle"
          icon={<ReloadOutlined />}
          onClick={fetchUsers}
        />
      </Tooltip>
      <ToggleViewMode onClick={setMode} displayMode={displayMode} />
    </div>
  );
};

export { DisplaySwitcher };
