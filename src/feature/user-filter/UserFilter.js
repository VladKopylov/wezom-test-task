import React, { useState } from "react";
import { Checkbox, Input } from "antd";
import { Select } from "../../ui/select/Select";

import { nationalitiesData } from "../../constants/nationalities";
import { gender } from "../../constants/gender";

import "./style.scss";

const { Search } = Input;

const UserFilter = ({
  setGenderFilter,
  setNationalityFilter,
  setNameFilter,
  setClearFilter,
}) => {
  const [genderValue, setGender] = useState(null);
  const [natValue, setNat] = useState([]);
  const [nameValue, setName] = useState("");

  const handleChangeGender = (value) => {
    setGenderFilter(value);
    setGender(value);
  };

  const handleChangeNationality = (value) => {
    setNationalityFilter(value);
    setNat(value);
  };

  const handleSearch = (value) => {
    setNameFilter(value);
    setName(value);
  };

  const handleChangeName = (e) => {
    const { value } = e.target;

    setNameFilter(value);
    setName(value);
  };

  const handleClear = () => {
    setClearFilter();
    setGender(null);
    setNat([]);
    setName("");
  };

  return (
    <form>
      <div className="first-div">
        <div className="ant-col ant-col-xs-24 ant-col-lg-11">
          <Search
            placeholder="Search by full name"
            onSearch={handleSearch}
            onChange={handleChangeName}
            value={nameValue}
          />
        </div>
        <div className="ant-col ant-col-xs-24 ant-col-sm-10 ant-col-lg-4">
          <Select
            data={gender}
            placeholder="Gender"
            handleChange={handleChangeGender}
            value={genderValue}
            allowClear
          />
        </div>
        <div className="ant-col ant-col-xs-24 ant-col-sm-10 ant-col-lg-5">
          <Select
            data={nationalitiesData}
            placeholder="Nationality"
            mode="multiple"
            handleChange={handleChangeNationality}
            value={natValue}
            allowClear
          />
        </div>
        <div>
          <Checkbox>I am creator</Checkbox>
        </div>
      </div>
      <div className="second-div" onClick={handleClear}>
        Clear all
      </div>
    </form>
  );
};

export { UserFilter };
