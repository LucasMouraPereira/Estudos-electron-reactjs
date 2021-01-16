import styled from 'styled-components';

export const WrapperButton = styled.div`
    width: 100%;
    height: 100%;
    cursor: pointer;
    button {
        padding: 8px 20px;
    }
    ${({ customButton }) => (customButton)};
`;