import React from "react";

const Reduce = () => {
  const array = [15, 16, 17, 18, 19];
  // Calculate sum of given array elements using reduce method
  const sum = 0;
  return (
    <div style={{ marginLeft: 8 }}>
      <h4>Reduce</h4>
      <p>
        The sum of array <code>{JSON.stringify(array)}</code> elements is <code>{sum}</code>
      </p>
    </div>
  );
};

export default Reduce;
