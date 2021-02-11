import styled, { css } from 'styled-components';

export const WrapperSprite = styled.div`
    position: absolute;
    top: ${({ top }) => `${top}px`};
    left: ${({ left }) => `${left}px`};
    height: ${({ height }) => `${height}px` || "32px"};
    width: ${({ width }) => `${width}px` || "32px"};
    ${({ bgImage }) =>
        bgImage &&
        css`
            background-image: url(${bgImage});
            background-repeat: no-repeat;
            background-position: 
                ${({ positionX, positionY }) => `${-positionX}px ${-positionY}px` || "0px 0px" };
        
    `}
`;