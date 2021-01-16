import styled from 'styled-components';

export const InitialConatiner = styled.div`
    width: 50%;
    height: 60%;
    margin: auto 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    h1 {
        width: 100%;
        max-width: 200px;
        text-align: center;
        font-size: 32px;
        line-height: 36px;
        font-family: 'Vitoriana', sans-serif;
        color: var(--color-yellow-1);
        text-shadow: 3px 3px var(--color-black-1);
    }
`;