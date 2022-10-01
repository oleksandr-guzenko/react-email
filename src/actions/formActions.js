import { 
    NEXT_PAGE,
    PREV_PAGE
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