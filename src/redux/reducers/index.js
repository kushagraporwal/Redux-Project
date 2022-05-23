import { combineReducers } from "redux";
import { productreducer, selectedproductreducer } from "./productreducer";

const reducers= combineReducers({

    allproducts: productreducer,
    product: selectedproductreducer
});

export default reducers;