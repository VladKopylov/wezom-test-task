import React from "react";
import { NATIONALITIES } from "../../../constants/nationalities";

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

  return (
    <div className="tile-container">
      <img src={largeAvatar} alt="image" className="tile-img" />
      <div className="tile-info">
        <div className="tile-main-info">
          <span>{fullName}</span>
          <span className="user-age">({birthday.age})</span>
        </div>
        <div className="tile-extra-info">
          <div>{email}</div>
          <div>{phone}</div>
          <div className="d-column">
            <b>{location.country}</b>
            <span>
              {location.street.number} {location.street.name}
            </span>
            <span>
              {location.city}, {location.postcode}
            </span>
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
