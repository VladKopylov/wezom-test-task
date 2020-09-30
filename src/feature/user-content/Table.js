import React, { createRef, useState, useEffect } from "react";
import { Table as AntTable } from "antd";

import { NATIONALITIES } from "../../constants/nationalities";
import { CopyToClipboard } from "../../ui/copy-to-clipboard/CopyToClipboard";

import "./style.scss";

const Table = ({ users = [] }) => {
  const [phoneRef, setPhoneRefs] = useState([]);
  const [emailRef, setEmailRefs] = useState([]);
  const [locRef, setLocRefs] = useState([]);

  useEffect(() => {
    setPhoneRefs(setRefs);
    setEmailRefs(setRefs);
    setLocRefs(setRefs);
  }, [users.length]);

  const setRefs = (el) => {
    return Array(users.length)
      .fill()
      .map((_, i) => el[i] || createRef());
  };

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
      sorter: (a, b) => {
        if (a.fullName > b.fullName) return 1;
        if (a.fullName < b.fullName) return -1;
        return 0;
      },
      sortDirections: ["descend", "ascend"],
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
      render: (data, _, index) => {
        return (
          <div className="d-flex">
            <CopyToClipboard element={phoneRef[index]} />
            <div className="ml-8" key={index} ref={phoneRef[index]}>
              {data}
            </div>
          </div>
        );
      },
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      render: (data, _, index) => {
        return (
          <div className="d-flex">
            <CopyToClipboard element={emailRef[index]} />
            <div className="ml-8" key={index} ref={emailRef[index]}>
              {data}
            </div>
          </div>
        );
      },
    },
    {
      title: "Location",
      dataIndex: "location",
      render: (data, _, index) => {
        return (
          <div className="d-flex">
            <CopyToClipboard element={locRef[index]} />
            <div className="d-column ml-8" ref={locRef[index]}>
              <b>{data.country}</b>
              <span>
                {data.street.number} {data.street.name}
              </span>
              <span>
                {data.city}, {data.state}
              </span>
              <span>{data.postcode}</span>
            </div>
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

  return <AntTable dataSource={users} columns={columns} pagination={false} />;
};

export { Table };
