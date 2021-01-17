import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from "../../components/Button";
import Narrative from "../../components/NarrativeBox";

const World = () => {
    const history = useHistory();
    return(
        <div>
            <Button text="return" onClick={() => history.goBack()}/>
            <Narrative />
        </div>
    )
}

export default World;