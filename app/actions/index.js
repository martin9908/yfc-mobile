export const USER_DATA = 'USER_DATA';

//import required modules
import axios from 'axios';
import { AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';

const baseURL = "http://localhost:3000/api/";

export function getUserData(loginData){
  return (dispatch) => {
    const requestUser = baseURL + "info_users?filterfilter[where][User_Number]=" + loginData.username + "&filter[where][password]=" + loginData.password;

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
