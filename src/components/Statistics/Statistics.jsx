import React from 'react';

const Statistics = ({ good, neuntal, bad, total, positiveFeedback }) => {
  return (
    <div>
      {/* <p className="title">Statistics</p> */}
      <div className="text-wrapper">
        <div>Good:{good}</div>
        <div>Neutral:{neuntal}</div>
        <div>Bad:{bad}</div>
        <div>Total:{total}</div>
        <div>Positive feedback:{positiveFeedback}%</div>
      </div>
    </div>
  );
};

export default Statistics;
