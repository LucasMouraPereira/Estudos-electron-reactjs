import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Creators as worldActions } from "../../store/ducks/world";
import globalData from "../../data/mocks/globalData";

import Inventory from "../../containers/Inventory"
import WorldContainer from "../../containers/World";

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
    <div>
      <S.GameOptions>
        {data.aside.map((asideItem) => (
          <>
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
          </>
        ))}
        <Inventory 
          title={titleRef.current}
          info={dataRef.current}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      </S.GameOptions>

      <div>
        <WorldContainer renderLanguage={setLanguage} />
      </div>

      <footer></footer>
    </div>
  );
};

export default WorldScreen;
