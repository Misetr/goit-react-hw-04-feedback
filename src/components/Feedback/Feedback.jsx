import React from 'react';
import PropTypes from 'prop-types';

export const Feedback = ({ increment, options }) => {
  return (
    <>
      {options.map(item => {
        return (
          <button
            type="button"
            name={item}
            onClick={e => increment(e)}
            key={item}
          >
            {item}
          </button>
        );
      })}
    </>
  );
};

Feedback.propTypes = {
  increment: PropTypes.func,
  options: PropTypes.array,
};
