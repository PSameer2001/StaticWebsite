import React from 'react';

const StatCard = ({ title, value, average, period, isHighlighted }) => {
  return (
    <div className={`p-6 rounded-lg ${isHighlighted ? 'bg-blue-50' : 'bg-white'}`}>
      <h3 className="text-gray-600 text-base font-medium">{title}</h3>
      <div className="mt-1">
        <span className="text-md font-semibold text-gray-900">{value}</span>
      </div>
      <div className="mt-2 text-sm">
        <span className="text-gray-500">Last {period} Days</span><br />
        <span className=" text-green-600">Avg: {average}</span>
      </div>
    </div>
  );
};

export default StatCard;