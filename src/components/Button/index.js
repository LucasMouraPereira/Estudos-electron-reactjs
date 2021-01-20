import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

const Button = ({ text, type, value, onClick, customButton }) => (
  <S.WrapperButton customButton={customButton}>
    <button 
      type={type} 
      value={value} 
      onClick={onClick}
    >
      {text}
    </button>
  </S.WrapperButton>
);

Button.propTypes = {
    text: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
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