export const USER_DATA       = 'USER_DATA';
export const INFO_USER       = 'INFO_USER';
export const INFO_EVENT      = 'INFO_EVENT';
export const INFO_AREA       = 'INFO_AREA';
export const INFO_CHAPTER    = 'INFO_CHAPTER';
export const INFO_SECTOR     = 'INFO_SECTOR';
export const INFO_PAYMENT    = 'INFO_PAYMENT';
export const INFO_ATTENDANCE = 'INFO_ATTENDANCE';

//import required modules
import axios from 'axios';
import { AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';

const baseURL = "http://localhost:3000/api/";

export function getUserData(loginData){
  return (dispatch) => {
    const requestUser = baseURL + "info_users?filter[where][User_Number]=" + loginData.username + "&[where][password]=" + loginData.password;

    //Make API Call
    axios.get(requestUser)
    .then(response => {
      // console.log(response.data);
      AsyncStorage.setItem('user_data', JSON.stringify(response.data[0]))
      dispatch({type: USER_DATA, data:response.data[0]});
    })
    .catch(error => {
      console.log(error);
      alert("Invalid Username/Password");
    });
  }
}

export function getAllUsers(){
  return (dispatch) => {
    const requestUsers = baseURL + "info_users";

    axios.get(requestUsers)
    .then(response => {
      // console.log(response.data);
      AsyncStorage.setItem('info_user', JSON.stringify(response.data))
      dispatch({type: INFO_USER, data:response.data});
    })
    .catch(error => {
      console.log("info_user" + error);
      alert(error);
    })
  }
}

export function getAllEvents(){
  return (dispatch) => {
    const requestEvents = baseURL + "reservation_venues"

    axios.get(requestEvents)
    .then(response => {
      AsyncStorage.setItem('info_events', JSON.stringify(response.data))
      dispatch({type: INFO_EVENT, data:response.data})
    })
    .catch(error => {
      console.log("reservation_venue" + error);
      alert(error);
    })
  }
}

export function getAllArea(){
  return (dispatch) => {
    const requestAreas = baseURL + "info_areas"

    axios.get(requestAreas)
    .then(response => {
      AsyncStorage.setItem('info_area', JSON.stringify(response.data))
      dispatch({type: INFO_AREA, data:response.data})
    })
    .catch(error => {
      console.log(requestAreas);
      console.log("info_area" + error);
      alert(error);
    })
  }
}

export function getAllChapter(){
  return (dispatch) => {
    const requestChapters = baseURL + "info_chapters"

    axios.get(requestChapters)
    .then(response => {
      AsyncStorage.setItem('info_chapter', JSON.stringify(response.data))
      dispatch({type: INFO_CHAPTER, data:response.data})
    })
    .catch(error => {
      console.log("info_chapter" + error);
      alert(error);
    })
  }
}

export function getAllSector(){
  return (dispatch) => {
    const requestSectors = baseURL + "info_sectors"

    axios.get(requestSectors)
    .then(response => {
      AsyncStorage.setItem('info_sector', JSON.stringify(response.data))
      dispatch({type: INFO_SECTOR, data:response.data})
    })
    .catch(error => {
      console.log("info_sector" + error);
      alert(error);
    })
  }
}

export function getAllPayments(){
  return (dispatch) => {
    const requestPayments = baseURL + "info_payments"

    axios.get(requestPayments)
    .then(response => {
      AsyncStorage.setItem('info_payment', JSON.stringify(response.data))
      dispatch({type: INFO_PAYMENT, data:response.data})
    })
    .catch(error => {
      console.log("info_payment" + error);
      alert(error);
    })
  }
}

export function getAllAttendance(){
  return (dispatch) => {
    const requestAttendances = baseURL + "info_attendances"

    axios.get(requestAttendances)
    .then(response => {
      AsyncStorage.setItem('info_attendance', JSON.stringify(response.data))
      dispatch({type: INFO_ATTENDANCE, data:response.data})
    })
    .catch(error => {
      console.log("info_attendance" + error);
      alert(error);
    })
  }
}

export function addUser(){
  return (dispatch) => {

  }
}
