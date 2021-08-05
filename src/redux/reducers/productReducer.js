import { ActionTypes } from '../constants/action-types';

//creating initial state
const initialState = {
    products: [
        {
            id: 1,
            name: 'Nikhil',
            category: 'Programmer',
        },
    ],
};

export const productReducer = (state =initialState, {type,payload}) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTs:
            return state;
        default:
            return state;
    }

}