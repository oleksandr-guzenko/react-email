import {
    PREV_PAGE,
    NEXT_PAGE
  } from '../actions/types';
  
  const initialState = {
    pageIndex: 0,
  };
  
const reducer = function(state = initialState, action)  {
    switch (action.type) {
      case PREV_PAGE: 
        return {
            ...state,
            pageIndex: state.pageIndex - 1
        }

      case NEXT_PAGE: 
        return {
            ...state,
            pageIndex: state.pageIndex + 1
        }

      default:
        return state;
    }
  }

export default reducer;