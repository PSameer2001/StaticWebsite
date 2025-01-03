import React from "react";
import PieChartDisplay from "./PieChart";

const VehicleChart = () => {

 const data = {
  labels: ['CAR', 'BIKE AND SCOOTER', 'TRUCK', 'AUTO', 'TRACTOR'],
  datasets: [
    {
      data: [20, 40, 10, 20, 10],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

  return (
    <>
        <div className="bg-white p-4">
          <h3 className="text-gray-600 text-sm font-medium mb-4">
            Vehicle Type <span className="text-gray-400 mx-1">›</span> App
            Registered Users Count Sub Tradewise
          </h3>
          <PieChartDisplay data={data} />
        </div>
    </>
  );
};

export default VehicleChart;
