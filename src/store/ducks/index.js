import { combineReducers } from "redux";
import initial from "./initial";
import world from "./world";

const Reducers = combineReducers({
    initial,
    world,
});

export default Reducers;  