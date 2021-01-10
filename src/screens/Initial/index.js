/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Creators as initialActions } from "../../store/ducks/initial";

import InitialContainer from '../../containers/Initial';

const InitialScreen = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.initial);
    const requestScreen = async () => {
        dispatch(await initialActions.requestInitial());
    };
    useEffect(() => {
        requestScreen();
    },[]);
    return(
        <div>
            <InitialContainer title={data.mock.title} buttons={data.mock.buttons}/>
        </div>
    );
}

export default InitialScreen;