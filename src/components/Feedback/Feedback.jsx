import React from 'react';
import css from './Feedback.module.css';

const Feedback = ({ leaveFeedback, options }) => {
  return (
    <div>
      <div className={css.buttonWrapper}>
        {options.map(option => (
          <button
            key={option}
            onClick={() => {
              leaveFeedback(option);
            }}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Feedback;
