import React, { useState } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { WorldPrefix, CreditsPrefix } from "../../routers/endpoints";
import Button from "../../components/Button";
import Modal from "../../components/Modal";

import * as S from "./styled";

const remote = window.require("electron").remote;

const Initial = ({ title, buttons, renderLanguage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const history = useHistory();
  const customButton = {
    button: {
      fontFamily: "CarroisGothicSc",
      fontWeight: "bold",
      background: "var(--color-yellow-2)",
      color: "var(--color-white-1)",
      borderRadius: "5px",
      borderStyle: "ridge",
      borderWidth: "3px",
      borderColor: "var(--color-red-1)",
      ":hover": {
        color: "var(--color-red-1)",
      },
    },
  };
  const path = {
    1: WorldPrefix,
    2: CreditsPrefix,
  };
  const routeChange = (id) => {
    if (id !== "5" && id !== "3") {
      history.push(path[id], { from: "InitialScreen" });
      
    }
  };
  const exitWin = (id) => {
    if (id === "5") {
      remote.app.exit();
    }
  };
  const openSettings = (id) => {
    if (id === "3") {
      setIsOpen(!isOpen);
    }
  };
  return (
    <S.InitialConatiner>
      <h1>{title}</h1>
      {buttons?.map((button) => {
        return (
          <div key={button?.id}>
            <Button
              text={button?.text}
              customButton={customButton}
              onClick={() => {
                routeChange([button?.id]);
                exitWin(button?.id);
                openSettings(button?.id);
              }}
            />
          </div>
        );
      })}
      <Modal
        title="Settings"
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        content={<div>Lucas</div>}
        text="Return to outset"
      />
    </S.InitialConatiner>
  );
};

Initial.propTypes = {
  title: PropTypes.string.isRequired,
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default Initial;
