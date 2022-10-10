import {
    PREV_PAGE,
    NEXT_PAGE,
    SET_DATA,
    CLEAR_DATA
  } from '../actions/types';
  
  const initialState = {
    pageIndex: 0,
    data: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      freeTime: '',
      errors: {}
    }
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

      case SET_DATA: 
        return {
            ...state,
            data: {...state.data, ...action.payload}
        }

      case CLEAR_DATA: 
        return {
            ...state,
            data: {
              firstName: '',
              lastName: '',
              email: '',
              phone: '',
              freeTime: '',
              errors: {}
            },
            pageIndex: 0
        }

      default:
        return state;
    }
  }

export default reducer;