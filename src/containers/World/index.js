import React from "react";
import Player from "../../components/Player";
import * as S from "./styled";

const World = () => {
  return (
    <S.WrapperWorld>
      <Player 
        skin="mainCharacter"
      />
    </S.WrapperWorld>
  );
};

export default World;
