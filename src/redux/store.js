import {combineReducers, compose, createStore} from "redux";
import photoReducer from "./photoReducer";


let reducers = combineReducers({
    photoReducer
});

const store = createStore(reducers, compose);

export default store;