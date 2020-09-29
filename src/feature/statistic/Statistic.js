import React, { useState, useEffect } from "react";

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
      setMsg("Мужчины доминируют");
    }

    if (female > male && female > indeterminate) {
      setMsg("Женщины доминируют");
    }

    if (indeterminate > male && indeterminate > female) {
      setMsg("Неопределившиеся доминируют");
    }

    setMaleCount(male);
    setFemaleCount(female);
    setIndeterminateCount(indeterminate);
  }, [users]);

  return (
    <div className="statistic-container">
      <h3>Статистика</h3>
      <div className="statistic-content">
        <div className="space-between">
          <div className="count-data">
            <span>Кол-во пользователей</span>
            <span>{users.length}</span>
          </div>
          <div className="count-data">
            <span>Мужчины</span>
            <span>{maleCount}</span>
          </div>
          <div className="count-data">
            <span>Женщины</span>
            <span>{femaleCount}</span>
          </div>
          <div className="count-data">
            <span>Неопределившиеся</span>
            <span>{indeterminateCount}</span>
          </div>
        </div>
        <div className="text-center">{statisticMsg}</div>
      </div>
    </div>
  );
};

export { Statistic };
