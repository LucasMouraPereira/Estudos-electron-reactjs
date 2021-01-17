import React, { useRef } from "react";
import PropTypes from "prop-types";

import Button from "../Button";

import useOutsideClick from "../../hooks/useOutSideClick";

import * as S from "./styled";

const Modal = ({ setIsOpen, isOpen, title, content, text }) => {
  const wrapperRef = useRef(null);
  useOutsideClick(wrapperRef, () => setIsOpen(false));
  return (
    isOpen && (
      <S.Container>
        <S.ModalContent ref={wrapperRef}>
          <S.ModalHeader>
            <S.Title>{title}</S.Title>
          </S.ModalHeader>
          <S.ModalBody>{content}</S.ModalBody>
          <S.ModalFooter>
            <Button 
              onClick={() => setIsOpen(false)}
              text={text}
            >
            </Button>
          </S.ModalFooter>
        </S.ModalContent>
      </S.Container>
    )
  );
};

Modal.propTypes = {
  title: PropTypes.string,
  content: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  setIsOpen: PropTypes.func,
  isOpen: PropTypes.bool,
  text: PropTypes.string,
};

Modal.defaultProps = {
  title: "",
  setIsOpen: () => {},
  isOpen: false,
};

export default Modal;