import React from "react";

const Filter = () => {
  const fruits = ["apple", "banana", "grapes", "mango", "orange", "avocado"];
  // Filter out fruits with length at least 6
  const result = [];
  return (
    <div style={{ marginLeft: 8 }}>
      <h4>Filter</h4>
      <p>Filtered fruits:</p>
      <ul>
        {result.map((fruit) => (
          <li key={fruit}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
};

export default Filter;
