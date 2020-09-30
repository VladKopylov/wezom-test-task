import React, { useEffect, useState } from "react";
import { Tooltip } from "antd";
import { CopyTwoTone, CheckCircleTwoTone } from "@ant-design/icons";

import "./style.scss";

const CopyToClipboard = ({ element }) => {
  const [isCopied, setCopied] = useState(false);

  useEffect(() => {
    let timeout;

    if (isCopied) {
      timeout = setTimeout(() => setCopied(false), 3000);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [isCopied]);

  const onCopy = () => {
    setCopied(true);
    navigator.clipboard.writeText(element.current.innerText);
  };

  return (
    <>
      {isCopied ? (
        <Tooltip placement="top" title="Copied">
          <CheckCircleTwoTone
            className="checkmark-icon"
            twoToneColor="#52c41a"
          />
        </Tooltip>
      ) : (
        <Tooltip placement="top" title="Copy">
          <CopyTwoTone className="copy-icon" onClick={onCopy} />
        </Tooltip>
      )}
    </>
  );
};

export { CopyToClipboard };
