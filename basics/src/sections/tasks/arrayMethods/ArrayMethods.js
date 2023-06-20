import React from "react";
import Map from "./Map";
import Filter from "./Filter";
import Reduce from "./Reduce";

const ArrayMethods = () => {
  return (
    <div style={{ marginLeft: 8 }}>
      <h3>Array Methods</h3>
      <Map />
      <Filter />
      <Reduce />
    </div>
  );
};

export default ArrayMethods;
