import { combineReducers } from 'redux';

import {
  USER_DATA,
} from '../actions' //import the actions types constant that we defined in our actions

let dataState = { data: '', loading: true};

const dataReducer = (state = dataState, action) => {
  switch (action.type) {
    case USER_DATA:
      state = Object.assign({}, state, { user_data: action.data, loading: false });
      return state;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  dataReducer
})

function cloneObject(object){
    return JSON.parse(JSON.stringify(object));
}

export default rootReducer;
