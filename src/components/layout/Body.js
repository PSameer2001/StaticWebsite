import React from "react";
import StatGrid from "../stats/StatGrid";
import MapChart from "../charts/MapChart";
import VehicleChart from "../charts/VehicleChart";

const Body = () => {
  return (
    <>
      <StatGrid />
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-2">
        <MapChart />
        <VehicleChart />
      </div>
    </>
  );
};

export default Body;
