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

const baseURL = "http://yfc-management.hostingerapp.com/api/v2/";

export function lgoin(loginData){
  return (dispatch) => {
    //users?user_name=1001&password=admin123&fcm=fhbW1eh2XQA:APA91bGzUdgx2h0YORnfULscecdurTkN7CSWEJYOrjyGCz4awDinvTXMQl8N1WikrzL0EaU8MUGorVVxzZCGUGDREBATavJx1o
    const requestUser = baseURL + "users?user_name=" + loginData.username + "&password=" + loginData.password + "&fcm=" + loginData.fcm;

    console.log(requestUser)

    //Make API Call
    axios.get(requestUser)
    .then(response => {
      // console.log(response.data);
      if(response.data.code != undefined){
        alert("Invalid Username and/or Password!");
      }
      else {
        AsyncStorage.setItem('user_data', JSON.stringify(response.data));
        dispatch({type: USER_DATA, data: response.data});
        Actions.push("loading");
      }
    })
    .catch(error => {
      console.log(error);
      alert("Invalid Username/Password");
    });
  }
}
