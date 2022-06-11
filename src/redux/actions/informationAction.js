import {SET_INC} from './actionTypes';

export const initialItemInc = (inc) => {
    return {
        type: SET_INC,
        payload: inc
    }
}