import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Creators as worldActions } from "../../store/ducks/world";
import globalData from "../../data/mocks/globalData";

import Inventory from "../../containers/Inventory";
import LifeBar from "../../components/LifeBar";
import ManaBar from "../../components/ManaBar";
import Heart from "../../components/Heart";
import Portion from "../../components/Portion";

import playPhoto from "../../assets/png/main/mainFront.png";
// import WorldContainer from "../../containers/World";

import Button from "../../components/Button";
import * as S from "./styled";

const WorldScreen = () => {
  const dispatch = useDispatch();
  const [language, setLanguage] = useState(globalData.languages[1]);
  const [isOpen, setIsOpen] = useState(false);
  const titleRef = useRef("");
  const dataRef = useRef({});
  const data = useSelector((state) => state.world);

  const requestScreen = async (language) => {
    dispatch(await worldActions.requestWorld(language));
  };

  useEffect(() => {
    requestScreen(language);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <S.Container>
        <S.GameOptions>
          {data.aside.map((asideItem, index) => (
            <div key={index}>
              <S.WrapperIcon>
                <Button
                  text={<img src={asideItem.icon} alt={asideItem.title} />}
                  onClick={() => {
                    titleRef.current = asideItem.title;
                    dataRef.current = asideItem.data;
                    setIsOpen(!isOpen);
                  }}
                />
                <p>{asideItem.title}</p>
              </S.WrapperIcon>
            </div>
          ))}
          <Inventory
            title={titleRef.current}
            info={dataRef.current}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        </S.GameOptions>
        <S.WrapperGame>
          <S.Header>
            <S.WrapperStatus>
              <S.ImagePlay src={playPhoto} alt="perfil play" />
            </S.WrapperStatus>
            {data.header.map((info) => (
              <S.WrapperStatus>
                <S.WrapperInfo>
                  <h4>{info.title}</h4>
                  <div>{info.xpBar}</div>
                  <span>{info.value}</span>
                </S.WrapperInfo>
              </S.WrapperStatus>
            ))}
            <S.WrapperStatus>
              <S.WrapperBar>
                <Heart />
                <LifeBar />
              </S.WrapperBar>
              <S.WrapperBar>
                <Portion />
                <ManaBar />
              </S.WrapperBar>
            </S.WrapperStatus>
          </S.Header>
          <div>{/* <WorldContainer renderLanguage={setLanguage} /> */}</div>
        </S.WrapperGame>
      </S.Container>
      <S.Footer>
        {data.footer.map((footerInfo, index) => (
          <S.WrapperFooter key={index}>
            <h3>{footerInfo.type}</h3>
            <S.Slot>{footerInfo.slot}</S.Slot>
          </S.WrapperFooter>
        ))}
      </S.Footer>
    </>
  );
};

export default WorldScreen;
