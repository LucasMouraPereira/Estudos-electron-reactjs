import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from "../../components/Button";
import TextBox from "../../components/TextBox";

const World = () => {
    const history = useHistory();
    return(
        <div>
            <Button text="return" onClick={() => history.goBack()}/>
            <TextBox />
        </div>
    )
}

export default World;