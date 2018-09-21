import { combineReducers } from 'redux';

import {
  USER_DATA,
  INFO_USER,
  INFO_EVENT,
  INFO_AREA,
  INFO_CHAPTER,
  INFO_SECTOR,
  INFO_PAYMENT,
  INFO_ATTENDANCE,
} from '../actions' //import the actions types constant that we defined in our actions

let dataState = { data: '', loading: true};

const dataReducer = (state = dataState, action) => {
  switch (action.type) {
    case USER_DATA:
      state = Object.assign({}, state, { user_data: action.data, login_done: true });
      return state;
    case INFO_USER:
      state = Object.assign({}, state, { info_user: action.data, user_done: true });
      return state;
    case INFO_EVENT:
      state = Object.assign({}, state, { info_event: action.data, event_done: true });
      return state;
    case INFO_AREA:
      state = Object.assign({}, state, { info_area: action.data, area_done: true });
      return state;
    case INFO_CHAPTER:
      state = Object.assign({}, state, { info_chapter: action.data, chapter_done: true });
      return state;
    case INFO_SECTOR:
      state = Object.assign({}, state, { info_sector: action.data, sector_done: true });
      return state;
    case INFO_PAYMENT:
      state = Object.assign({}, state, { info_payment: action.data, payment_done: true });
      return state;
    case INFO_ATTENDANCE:
      state = Object.assign({}, state, { info_attendance: action.data, attendance_done: true });
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
