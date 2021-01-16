import styled from 'styled-components';

export const Dialog = styled.div`
    position: relative;
    border-radius: 15px;
    width: 100%;
    max-width: 300px;
    height: auto;
    background-color: var(--color-yellow-1);
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 7px 5px;
    font-family: 'MedievalSharp', sans-serif;
    font-size: 16px;
    line-height: 21px;
    box-shadow: 5px 5px 2px 1px rgba(0, 0, 0, 0.5);
    :after {
        content: "";
        position: absolute;
        width: 0;
        height: 0;

        border-left: 10px solid transparent;
        border-right: 40px solid transparent;
        border-top: 20px solid var(--color-yellow-1);

        bottom: -20px;
        left: 70%;
    }
`;