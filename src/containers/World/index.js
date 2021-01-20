import React from "react";
import { useHistory } from "react-router-dom";
import Button from "../../components/Button";


const World = () => {
  const history = useHistory();
  
  return (
    <div>
      <Button text="return" onClick={() => history.goBack()} />
    </div>
  );
};

export default World;
