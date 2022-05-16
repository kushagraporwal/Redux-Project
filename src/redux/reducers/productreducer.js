import { ActionTypes } from "../contants/action-type";

const initialstate= {

    products:[
        {
            id: 1,
            title: "Dipesh", 
            category: "Programmer"
        },
    ],
};

export const productreducer = (state, {type, payload}) =>{

    switch(type) {

        case ActionTypes.SET_PRODUCTS:
            return state;
        default:
            return state;
    }
};