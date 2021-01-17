import React from 'react';

import PropTypes from 'prop-types';

import * as S from './styled';

const NarrativeBox = ({ text }) => {
    return(
        <S.WrapperText>
            <S.Text>{ text }</S.Text>
        </S.WrapperText>
    )
}

NarrativeBox.propTypes = {
    text: PropTypes.string.isRequired,
};

export default NarrativeBox;