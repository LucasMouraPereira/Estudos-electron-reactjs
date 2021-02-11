import { useState } from "react";

const useWalk = (maxSteps) => {
  const [position, setPosition] = useState({x: 0, y: 0});
  const [dir, setDir] = useState(0);
  const [step, setStep] = useState(0);
  const directions = {
    s: 0,
    down: 0,
    a: 1,
    left: 1,
    d: 2,
    right: 2,
    w: 3,
    up: 3,
  };

  const stepSize = 16;

  const modifier = {
    s: { x: 0, y: stepSize },
    down: { x: 0, y: stepSize },
    a: { x: -stepSize, y: 0 },
    left: { x: -stepSize, y: 0 },
    d: { x: stepSize, y: 0 },
    right: { x: stepSize, y: 0 },
    w: { x: 0, y: -stepSize },
    up: { x: 0, y: -stepSize },
  }

  const walk = (dir) => {
    setDir(prev => {
      if(directions[dir] === prev) move(dir)
      return directions[dir];
    });
    setStep((prev) => (prev < maxSteps - 1 ? prev + 1 : 0));
  };

  const move = (dir) => {
    setPosition(prev => ({
      x: prev.x + modifier[dir].x,
      y: prev.y + modifier[dir].y,
    }))
  }

  return {
      walk,
      dir,
      step,
      position,
  }
};

export default useWalk;
