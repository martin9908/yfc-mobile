import React, { Component } from 'react';
import { View, AsyncStorage } from 'react-native';
import { Root, StyleProvider } from "native-base";
import firebase, { Notification, NotificationOpen } from 'react-native-firebase';
import { Font, AppLoading } from "expo";

import { Provider } from 'react-redux';

import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/material';

import store from './app/store'; //Import the store
import Routes from './app/routes'; //Import the Routes file

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      homeURL: 'https://yfc-management.000webhostapp.com/',
      loading: false,
    };
  }

  async componentWillMount(){
    if (!firebase.apps.length) {
      const firebaseConfig = {
        apiKey: "AIzaSyCCYzwBIARHT3bgGMPxl1mUBhnL_GS5smA",
        appId: "1:996744259272:ios:d47f258a1130d351",
        authDomain: "alert-tempo-91506.firebaseapp.com",
        databaseURL: "https://alert-tempo-91506.firebaseio.com",
        projectId: "alert-tempo-91506",
        storageBucket: "alert-tempo-91506.appspot.com",
        messagingSenderId: "996744259272"

      };
      firebase.initializeApp(firebaseConfig);
    } else {
      firebase.app();
    }
    
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({ loading: false });
    console.disableYellowBox = true;
  }

  async componentDidMount() {
    firebase.messaging().hasPermission()
    .then(enabled => {
      if (enabled) {
        firebase.messaging().getToken().then((token) => {
          console.log("LOG:", token)
          AsyncStorage.setItem("fcmToken", token);
        })
        // user has permissions
      } else {
        firebase.messaging().requestPermission()
          .then(() => {
            console.log("User Now Has Permission")
          })
          .catch(error => {
            console.log(error)
            alert("Error", error)
            // User has rejected permissions
          });
      }
    });
  }

  render() {
    if (this.state.loading) {
      console.log(this.state.loading)
      return (
        <View>
          <AppLoading />
        </View>
      )
    } else {
      return (
        <StyleProvider style={getTheme(material)}>
        <Root>
          <Provider store={store}>
            <Routes/>
          </Provider>
        </Root>
        </StyleProvider>
      );
    }
  }
}
