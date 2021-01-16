import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
    width: 800px;
    height: 600px;
    display: flex;
    ${({ bg }) =>
      bg &&
      css`
        background-image: url(${bg});
        background-position: center;
        background-size: cover;
    `}
`;