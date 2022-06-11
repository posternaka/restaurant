import {SET_TEXT} from '../actions/actionTypes';
const initialState = 0;

export default function setText(state = initialState, action) {
    switch (action.type) {
        case SET_TEXT: {
            return action.payload;
        }
    
        default: {
            return state;
        }
    }
}