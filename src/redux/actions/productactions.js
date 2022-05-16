import { ActionTypes } from "../contants/action-type";
export const setproducts= (product) =>{

    return{

        type: ActionTypes.SET_PRODUCTS,
        payload: product
    };
};

export const selectedproducts= (products) =>{

    return{

        type: ActionTypes.SELECTED_PRODUCTS,
        payload: products
    };
};
