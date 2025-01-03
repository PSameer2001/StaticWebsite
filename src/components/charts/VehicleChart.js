import React from "react";
import PieChartDisplay from "./PieChart";

const VehicleChart = () => {
  const data = [
    { id: 0, value: 20, label: "CAR" },
    { id: 1, value: 40, label: "BIKE AND SCOOTER" },
    { id: 2, value: 10, label: "TRUCK" },
    { id: 3, value: 20, label: "AUTO" },
    { id: 4, value: 10, label: "TRACTOR" }
  ];
  return (
    <>
      <div className="bg-white p-4 rounded-lg">
        <h3 className="text-gray-600 text-sm font-medium mb-4">
          Vehicle Type <span className="text-gray-400 mx-1">›</span> App
          Registered Users Count Sub Tradewise
        </h3>
        <PieChartDisplay data={data} width={400} height={200} />
      </div>
    </>
  );
};

export default VehicleChart;
