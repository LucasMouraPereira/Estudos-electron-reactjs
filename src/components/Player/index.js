import React from "react";
import Actor from "../Actor";
import useKeyPress from "../../hooks/useKeyPress";
import useWalk from "../../hooks/useWalk";
const Player = ({ skin }) => {
  const ChangeCharacters = require(`../../assets/png/sprites/${skin}.png`);
  const { dir, step, walk, position} = useWalk(3);
  const data = {
    h: 32,
    w: 32,
  };

  useKeyPress((e) => {
    walk(e.key.replace("Arrow", "").toLowerCase());

    e.preventDefault();
  })
  return (
    <Actor 
        image={ChangeCharacters.default} 
        data={data}
        step={step}
        dir={dir}
        position={position}
    />
  );
};

export default Player;
