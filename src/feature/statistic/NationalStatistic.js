import React, { useEffect, useState, useReducer } from "react";

import { NATIONALITIES } from "../../constants/nationalities";
import { splitChunksArr } from "../../utils/split-chunks-array";
import { reducer } from "./natReducer";

const NationalStatistic = ({ users }) => {
  const [state, dispatch] = useReducer(reducer);
  const [filteredNatData, setNatData] = useState([]);

  useEffect(() => {
    dispatch({ type: "reset" });

    users.forEach((el) => {
      dispatch({ type: el.nationality });
    });
  }, [users]);

  useEffect(() => {
    if (state) {
      const filteredData = Object.entries(state)
        .sort((a, b) => (a[1] > b[1] ? -1 : 1))
        .filter((el) => el[1]);

      setNatData(splitChunksArr(5, filteredData));
    }
  }, [state]);

  if (filteredNatData.length) {
    return (
      <div className="nat-statistic-container">
        <h3 className="nat-title">Nationalities</h3>
        <>
          {filteredNatData.map((item) => (
            <div className="nat-statistic-row">
              {item.map((el) => (
                <div className="nat-statistic-item">
                  <b>{NATIONALITIES[el[0]].name}:</b>
                  <div>{el[1]} contact(s)</div>
                </div>
              ))}
            </div>
          ))}
        </>
      </div>
    );
  }

  return null;
};

export { NationalStatistic };
