import React from 'react';
import PropTypes from 'prop-types';

export const Statistics = ({ good, neutral, bad, total, positive }) => {
  return (
    <>
      <p>
        Good: <span>{good}</span>
      </p>
      <p>
        Neutral: <span>{neutral}</span>
      </p>
      <p>
        Bad: <span>{bad}</span>
      </p>
      <p>
        Total: <span>{total()}</span>
      </p>
      <p>
        Positive feedback: <span>{positive()}%</span>
      </p>
    </>
  );
};

export const Notification = ({ message }) => {
  return (
    <>
      <h2>{message}</h2>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.func,
  positive: PropTypes.func,
};

Notification.propTypes = {
  message: PropTypes.string,
};
