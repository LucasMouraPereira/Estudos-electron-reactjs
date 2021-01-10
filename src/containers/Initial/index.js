import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../components/Button';

const Initial = ({ title, buttons }) => {
    return(
        <div>
            <h1>{title}</h1>
            {buttons?.map((button)  => {
              return (
                <div key={button?.id}>
                    <Button text={button?.text}/>
                </div>
              );
            })}
        </div>
    );
}

Initial.propTypes = {
    title: PropTypes.string.isRequired,
    buttons: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            redirect: PropTypes.string.isRequired,
        }).isRequired,
    ).isRequired
};

export default Initial;