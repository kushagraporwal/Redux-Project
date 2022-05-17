import { combineReducers } from "redux";
import { productreducer } from "./productreducer";

const reducers= combineReducers({

    allproducts: productreducer,
});

export default reducers;