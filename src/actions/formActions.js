import { 
    NEXT_PAGE,
    PREV_PAGE,
    SET_DATA,
    CLEAR_DATA
} from './types';

export const prevPage = () => dispatch => {
    dispatch({
        type: PREV_PAGE,
        payload: null
    });
}

export const nextPage = () => dispatch => {
    dispatch({
        type: NEXT_PAGE,
        payload: null
    });
}

export const setData = (data) => dispatch => {
    dispatch({
        type: SET_DATA,
        payload: data
    });
}

export const clearData = () => dispatch => {
    dispatch({
        type: CLEAR_DATA,
        payload: null
    });
}