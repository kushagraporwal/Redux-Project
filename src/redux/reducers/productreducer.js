import { ActionTypes } from "../contants/action-type";

const initialstate= {

    products:[],
};

export const productreducer = (state= initialstate, {type, payload}) =>{

    switch(type) {

        case ActionTypes.SET_PRODUCTS:
            return {...state, products: payload};
        default:
            return state;
    }
};