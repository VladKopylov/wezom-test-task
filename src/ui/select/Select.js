import React, { useState, useEffect } from "react";
import { Select as AntSelect } from "antd";

const { Option } = AntSelect;

const Select = ({
  mode = false,
  data,
  placeholder,
  handleChange,
  width = "100%",
  value,
  allowClear = false,
}) => {
  const [children, setChildren] = useState([]);

  useEffect(() => {
    if (data.length) {
      const mapped = data.map((item) => (
        <Option key={item.id} value={item.label}>
          {item.value}
        </Option>
      ));

      setChildren(mapped);
    }
  }, []);

  return (
    <AntSelect
      mode={mode}
      placeholder={placeholder}
      style={{ width }}
      value={value}
      onChange={handleChange}
      allowClear={allowClear}
      maxTagCount={2}
    >
      {children}
    </AntSelect>
  );
};

export { Select };
