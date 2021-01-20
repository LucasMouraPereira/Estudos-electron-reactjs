/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Creators as initialActions } from "../../store/ducks/initial";
import globalData from "../../data/mocks/globalData";
import InitialContainer from '../../containers/Initial';

import * as S from './styled';

const InitialScreen = () => {
    const dispatch = useDispatch();
    const [language, setLanguage] = useState(globalData.languages[1]);
    const data = useSelector(state => state.initial);
    const requestScreen = async (language) => {
        dispatch(await initialActions.requestInitial(language));
    };
    useEffect(() => {
        requestScreen(language);
    },[]);
    return(
        <S.Wrapper bg={data.background}>
            <InitialContainer title={data.mock.title} buttons={data.mock.buttons} renderLanguage={setLanguage} />
        </S.Wrapper>
    );
}

export default InitialScreen;