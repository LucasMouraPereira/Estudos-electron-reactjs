import styled from 'styled-components';

export const Container = styled.div`
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.4);
    transition: opacity 400ms ease-in;
    z-index: 999;
`;

export const ModalContent = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    width: 90%;
    max-width: 100%;
    height: 650px;
    max-height: 100%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    background-color: var(--color-white-1);

    border-radius: 4px;
    padding: 10px;
    box-sizing: border-box;
`;

export const ModalHeader = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding-bottom: 15px;
`;

export const Title = styled.h3`
    font-size: 16px;
    line-height: 32px;
`;

export const ModalBody = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;

export const ModalFooter = styled.div``;
