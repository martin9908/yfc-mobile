import React, { Component } from 'react';
import { View, AsyncStorage } from 'react-native';
import { Root, StyleProvider } from "native-base";
import NotificationPopup from 'react-native-push-notification-popup';
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
        apiKey: "AIzaSyD2641vhTud-qFfi6mmu4Nku-QXLYtHm8Q",
        appId: "1:750026638096:android:d535ee459b36f495",
        authDomain: "alert-tempo-91506.firebaseapp.com",
        databaseURL: "https://alert-tempo-91506.firebaseio.com",
        projectId: "yfcmanagement-4be36",
        storageBucket: "alert-tempo-91506.appspot.com",
        messagingSenderId: "750026638096"

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
            alert("User Now Has Permission")
          })
          .catch(error => {
            console.log(error)
            alert("Error", error)
            // User has rejected permissions
          });
      }
    });

    this.notificationListener = firebase.notifications().onNotification((notification) => {
        // Process your notification as required
        if(notification != undefined){
          const {
            body,
            notificationId,
            data,
          } = notification;

          this.createMessagesList(body, notificationId, data);    
        }
    });

    this.notificationOpenedListener = firebase.notifications().onNotificationOpened((notificationOpen: NotificationOpen) => {
        const notification: Notification = notificationOpen.notification;

        const {
          body,
          notificationId,
          data,
        } = notification;

        this.createMessagesList(body, notificationId, data);
    });

    firebase.notifications().getInitialNotification()
      .then((notificationOpen: NotificationOpen) => {
        
        const notification: Notification = notificationOpen.notification;

        const {
          body,
          notificationId,
          data,
        } = notification;

        this.createMessagesList(body, notificationId, data);
      });
  }

  createMessagesList(body, notificationId, data){
    let message = {
      "id"    : notificationId,
      "title" : data.article_title,
      "body"  : body,
      "read"  : false
    }

    this.popup.show({
      onPress: function() {console.log(message)},
      appIconSource: require('./assets/icon.png'),
      appTitle: 'YFC Events Management',
      timeText: 'Now',
      title: message.body,
      body: message.title,
    });
  }

  componentWillUnmount() {
    this.notificationListener();
    this.notificationOpenedListener();
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
          <NotificationPopup ref={ref => this.popup = ref} />
          <Provider store={store}>
            <Routes/>
          </Provider>
        </Root>
        </StyleProvider>
      );
    }
  }
}
