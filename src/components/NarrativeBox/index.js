import React from 'react';

import PropTypes from 'prop-types';

import * as S from './styled';

const NarrativeBox = ({ text }) => {
    return(
        <div>Oi! eu sou o Lucas</div>
    )
}

NarrativeBox.propTypes = {
    dialog: PropTypes.string.isRequired,
};

export default NarrativeBox;