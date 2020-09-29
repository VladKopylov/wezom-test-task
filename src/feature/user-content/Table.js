import React from "react";
import { Table as AntTable } from "antd";

import { NATIONALITIES } from "../../constants/nationalities";

import "./style.scss";

const Table = ({ users = [] }) => {
  const columns = [
    {
      title: "Avatar",
      dataIndex: "avatar",
      key: "avatar",
      render: (imageUrl) => {
        return <img alt="image" src={imageUrl} className="rounded-image" />;
      },
    },
    {
      title: "Full name",
      dataIndex: "fullName",
      key: "fullName",
      sorter: (a, b) =>{
        if (a.fullName > b.fullName) return 1
        if (a.fullName < b.fullName) return -1
        return 0
      } ,
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: "Birthday",
      dataIndex: "birthday",
      render: (data) => {
        return (
          <div className="d-column">
            <span>{data.birth}</span>
            <span>{data.age}</span>
          </div>
        );
      },
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Location",
      dataIndex: "location",
      render: (data) => {
        return (
          <div className="d-column">
            <b>{data.country}</b>
            <span>
              {data.street.number} {data.street.name}
            </span>
            <span>
              {data.city}, {data.state}
            </span>
            <span>{data.postcode}</span>
          </div>
        );
      },
    },
    {
      title: "Nationality",
      dataIndex: "nationality",
      render: (data) => {
        const { name, color } = NATIONALITIES[data];
        return (
          <span className="nat-wrapper" style={{ color }}>
            {name}
          </span>
        );
      },
    },
  ];

  return (
    <AntTable
      dataSource={users}
      columns={columns}
      pagination={false}
    />
  );
};

export { Table };
