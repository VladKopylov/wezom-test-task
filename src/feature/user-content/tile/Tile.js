import React from "react";
import { NATIONALITIES } from "../../../constants/nationalities";
import { CopyToClipboard } from "../../../ui/copy-to-clipboard/CopyToClipboard";

const Tile = ({ user }) => {
  const {
    birthday,
    fullName,
    largeAvatar,
    email,
    phone,
    location,
    nationality,
  } = user;
  const nat = NATIONALITIES[nationality];
  const emailProperty = React.useRef();
  const phoneProperty = React.useRef();
  const locProperty = React.useRef();

  return (
    <div className="tile-container">
      <img src={largeAvatar} alt="image" className="tile-img" />
      <div className="tile-info">
        <div className="tile-main-info">
          <span>{fullName}</span>
          <span className="user-age">({birthday.age})</span>
        </div>
        <div className="tile-extra-info">
          <div className="d-flex">
            <CopyToClipboard element={emailProperty} />
            <div className="ml-8" ref={emailProperty}>{email}</div>
          </div>
          <div className="d-flex">
            <CopyToClipboard element={phoneProperty} />
            <div className="ml-8" ref={phoneProperty}>{phone}</div>
          </div>
          <div className="d-flex">
            <CopyToClipboard element={locProperty} />
            <div ref={locProperty} className="d-column ml-8">
              <b>{location.country}</b>
              <span>
                {location.street.number} {location.street.name}
              </span>
              <span>
                {location.city}, {location.postcode}
              </span>
            </div>
          </div>
        </div>
        <div className="tile-nat-block">
          <span
            className="tile-nat-text"
            style={{
              color: nat.color,
              borderColor: nat.color,
            }}
          >
            {nat.name}
          </span>
        </div>
      </div>
    </div>
  );
};

export { Tile };
