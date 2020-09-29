import React, { useState, useEffect } from "react";
import { Spin, Pagination } from "antd";

import { UserFilter } from "../feature/user-filter/UserFilter";
import { UserContent } from "../feature/user-content/UserContent";
import { Statistic } from "../feature/statistic/Statistic";
import { DisplaySwitcher } from "../feature/display-switcher/DisplaySwitcher";

import "./style.scss";

const Main = ({
  users,
  fetchUsers,
  setGenderFilter,
  setNationalityFilter,
  setNameFilter,
  setClearFilter,
}) => {
  const [currentPage, setPage] = useState(1);
  const [userData, setUserData] = useState([]);
  const [displayMode, setMode] = useState(
    localStorage.getItem("displayMode") || "table"
  );

  const PAGE_SIZE = displayMode === "table" ? 10 : 5;

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    handleChangePaginator(1);
  }, [users.data, displayMode]);

  const handleChangePaginator = (page) => {
    const from = PAGE_SIZE * (page - 1);
    const to = PAGE_SIZE * page;
    const data = users.data.slice(from, to);

    setPage(page);
    setUserData(data);
  };

  return (
    <Spin spinning={users.isLoading} tip="Loading...">
      <div className="main-container">
        <div className="w-91">
          <DisplaySwitcher
            displayMode={displayMode}
            fetchUsers={fetchUsers}
            setMode={setMode}
          />
          <div className="box p-15 mb-20">
            <UserFilter
              setGenderFilter={setGenderFilter}
              setNationalityFilter={setNationalityFilter}
              setNameFilter={setNameFilter}
              setClearFilter={setClearFilter}
            />
          </div>
          <div className="box">
            <UserContent displayMode={displayMode} users={userData} />
          </div>
          <div className="box">
            <Statistic users={users.data} />
          </div>
          <div className="box p-15">
            <Pagination
              current={currentPage}
              onChange={handleChangePaginator}
              pageSize={PAGE_SIZE}
              total={users.data.length}
            />
          </div>
        </div>
      </div>
    </Spin>
  );
};

export { Main };
