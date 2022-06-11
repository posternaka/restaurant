import {SET_DEC} from './actionTypes';

export const initialItemDec = (dec) => {
    return {
        type: SET_DEC,
        payload: dec - 1
    }
}
