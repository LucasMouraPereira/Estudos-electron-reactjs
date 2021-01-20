import styled from "styled-components";

export const GameOptions = styled.aside`
  width: 100%;
  max-width: 80px;
  height: 650px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background: var(--color-yellow-1);
  border-style: double;
  border-radius: 3px;
`;

export const WrapperIcon = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 5px;
  p {
    font-size: 10px;
    text-align: center;
    font-family: 'CarroisGothicSc', sans-serif;
    margin-right: 5px;
  } 
  div {
    button {
      background: var(--color-yellow-1);
      border-style: none;
      cursor: context-menu;
      img {
        width: 25px;
        height: 35px;
      }
    }
  }
`;
