import React, { useEffect, useState, useRef } from "react";

import PropTypes from "prop-types";

import * as S from "./styled";

const NarrativeBox = ({ dialog }) => {
  const characters = [];
  useEffect(() => {
    const renderDialog = () => {
      dialog.forEach((line, index) => {
        if (index < dialog.length - 1) {
          line.string += " ";
        }
        line.string.split("").forEach((character) => {
          const dialogText = document.getElementById("dialogText");
          const span = document.createElement("span");
          span.textContent = character;
          dialogText.appendChild(span);
          characters.push({
            span: span,
            isSpace: character === " ",
            delayAfter: line.speed,
            classes: line.classes || [],
          });
        });
        revealOnCharacter(characters);
      });
    };

    const revealOnCharacter = (list) => {
      const next = list.splice(0, 1)[0];
      next?.span?.classList.add("revealed");
      next?.classes?.forEach((c) => {
        next?.span?.classList.add(c);
      });
      const delay = next?.isSpace ? 0 : next?.delayAfter;
      if (list.length > 0) {
        setTimeout(() => {
          revealOnCharacter(list);
        }, delay);
      }
    };
    renderDialog();
    revealOnCharacter(characters);
  }, [characters, dialog]);

  return (
    <S.WrapperText>
      {dialog && (
        <S.Text id="dialogText"></S.Text>
      )}
    </S.WrapperText>
  );
};

NarrativeBox.propTypes = {
  dialog: PropTypes.arrayOf(
    PropTypes.shape({
      string: PropTypes.string.isRequired,
      speed: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default NarrativeBox;
