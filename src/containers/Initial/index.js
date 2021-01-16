import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { WorldPrefix, CreditsPrefix } from '../../routers/endpoints'

import Button from '../../components/Button';

import * as S from './styled';

//const Electron = require("electron");

const Initial = ({ title, buttons }) => {
    const history = useHistory();
    const customButton ={
        button: {
            fontFamily: 'CarroisGothicSc',
            fontWeight: 'bold',
            background: 'var(--color-yellow-2)',
            color: 'var(--color-white-1)',
            borderRadius: '5px',
            borderStyle: 'ridge',
            borderWidth: '3px',
            borderColor: 'var(--color-red-1)',
            ':hover': {
                color: 'var(--color-red-1)',
            }
        }
    };

    const path = {
        "1": WorldPrefix,
        "3": CreditsPrefix,
    }

    const routeChange = (id) => {
        if(id !== "4"){
            history.push(path[id], { from: "InitialScreen" });
        }

        // Electron.app.quit();
    }

    return(
        <S.InitialConatiner >
            <h1>{title}</h1>
            {buttons?.map((button)  => {
              return (
                <div key={button?.id}>
                    <Button 
                        text={button?.text}
                        customButton={customButton}
                        onClick={() => (routeChange([button?.id]))} 
                    />
                </div>
              );
            })}
        </S.InitialConatiner>
    );
}

Initial.propTypes = {
    title: PropTypes.string.isRequired,
    buttons: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
        }).isRequired,
    ).isRequired
};

export default Initial;