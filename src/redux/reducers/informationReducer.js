import {SET_RES} from '../actions/actionTypes';
const initialState = 0;

export default function anySet(state = initialState, action) {
    switch (action.type) {
        case SET_RES: {
            return action.payload;
        }
    
        default: {
            return state;
        }
    }
}