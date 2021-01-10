import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text, type, value, onClick, customButton }) => (
  <div customButton={customButton}>
    <button 
      type={type} 
      value={value} 
      onClick={onClick}
    >
      {text}
    </button>
  </div>
);

Button.propTypes = {
    text: PropTypes.string.isRequired,
    type: PropTypes.string,
    value: PropTypes.string,
    onClick: PropTypes.func,
    customButton: PropTypes.object,
};

Button.defaultProps = {
    type: 'button',
    value: '',
    onClick: () => {return;},
    customButton: {}
}

export default Button;