import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

const TextBox = ({ dialog }) => {
    return (
        <S.Dialog>{dialog}</S.Dialog>
    );
}

TextBox.propTypes = {
    dialog: PropTypes.string.isRequired,
};

export default TextBox;