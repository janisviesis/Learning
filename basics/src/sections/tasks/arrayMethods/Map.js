import React from "react";

const Map = () => {
  const numbers = [1, 4, 9];
  // Calculate roots from given numbers using map method and Math (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)
  const roots = [];
  return (
    <div style={{ marginLeft: 8 }}>
      <h4>Map</h4>
      <p>
        Roots from numbers
        <code>{JSON.stringify(numbers)}</code>
        are
        <code>{JSON.stringify(roots)}</code>
      </p>
    </div>
  );
};

export default Map;
