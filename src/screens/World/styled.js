import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
`;

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

export const WrapperGame = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Header = styled.header`
  width: 100%;
  max-width: 1920px;
  display: flex;
  flex-direction: row;
  background: var(--color-yellow-1);
  border-style: double;
  border-radius: 3px;
  padding: 8px;
`;

export const WrapperStatus = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-style: double;
  border-radius: 3px;
  background-color: var(--color-grey-1);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin-right: 20px;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const ImagePlay = styled.img`
  height: 95px;  
`;

export const WrapperInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 10px;
  width: max-content;
  h4 {
    font-family: 'MedievalSharp', sans-serif;
    font-weight: bold;
    line-height: 24px;

  }
`;

export const WrapperBar = styled.div`
  display: flex;
  flex-direction: row;
  padding: 5px;
  justify-content: center;
  align-items: center;
  svg {
    margin-right: 5px;
  }
`;

export const WrapperHeader = styled.div`
  width: 100%;
  max-width: 892px;
  display: flex;
`;

export const WrapperWorld = styled.div`
  width: 100%;
  display: flex;
`;

export const SlotPlayer = styled.div`
  width: 65px;
  height: 65px;
  margin: 5px 5px;
  border-style: double;
  border-radius: 3px;
  background-color: var(--color-yellow-3);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  img {
    width: auto;
    height: -webkit-fill-available;
  }
`;

export const WrapperLevel = styled.div`
  div{
    display: flex;
    flex-direction: row;
  }
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

export const Footer = styled.footer`
  width: 100%;
  height: 128px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background: var(--color-yellow-1);
  border-style: double;
  border-radius: 3px;
`;

export const WrapperFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    margin-top: 5px;
    font-family: 'CarroisGothicSc', sans-serif;
    font-size: 16px;
  }
`;

export const Slot = styled.div`
  width: 100px;
  height: 80px;
  margin-top: 5px;
  border-style: double;
  border-radius: 3px;
  background-color: var(--color-grey-1);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  cursor: pointer;
`;
