import React from "react";

export const years = () => {
    const arrOfYears = [];
    for (let i = 1959; i <= 2050; i++) {
      arrOfYears.push(i);
    }
    return arrOfYears.map((year, index) => (
      <option key={index} value={year}>
        {year}
      </option>
    ));
  };

