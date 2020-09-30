import React, { useState, useEffect } from "react";

import { NationalStatistic } from "./NationalStatistic";

import "./style.scss";

const Statistic = ({ users }) => {
  const [maleCount, setMaleCount] = useState(0);
  const [femaleCount, setFemaleCount] = useState(0);
  const [indeterminateCount, setIndeterminateCount] = useState(0);
  const [statisticMsg, setMsg] = useState("");

  useEffect(() => {
    const male = users.filter((el) => el.gender === "male").length;
    const female = users.filter((el) => el.gender === "female").length;
    const indeterminate = users.filter((el) => el.gender === "indeterminate")
      .length;

    if (male > female && male > indeterminate) {
      setMsg("Men predominate");
    }

    if (female > male && female > indeterminate) {
      setMsg("Women predominate");
    }

    if (indeterminate > male && indeterminate > female) {
      setMsg("Indeterminate predominate");
    }

    setMaleCount(male);
    setFemaleCount(female);
    setIndeterminateCount(indeterminate);
  }, [users]);

  return (
    <div className="statistic-container">
      <h3>Statistic</h3>
      <div className="statistic-content">
        <div className="space-between">
          <div className="count-data">
            <span>Collection size</span>
            <span>{users.length}</span>
          </div>
          <div className="count-data">
            <span>Males</span>
            <span>{maleCount}</span>
          </div>
          <div className="count-data">
            <span>Females</span>
            <span>{femaleCount}</span>
          </div>
          <div className="count-data">
            <span>Indeterminate</span>
            <span>{indeterminateCount}</span>
          </div>
        </div>
        <div className="text-center">{statisticMsg}</div>
      </div>
      <NationalStatistic users={users} />
    </div>
  );
};

export { Statistic };
