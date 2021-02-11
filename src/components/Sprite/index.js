import React from "react";
import * as S from "./styled";

const Sprite = ({ image, data, position }) => {
    const { y, x, h, w } = data;
    return(
        <S.WrapperSprite 
            height={h}
            width={w}
            top={position.y}
            left={position.x}
            positionX={x}
            positionY={y}
            bgImage={image}
        />
    );
}

export default Sprite;