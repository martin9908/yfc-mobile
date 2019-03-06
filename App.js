const WEBVIEW_REF = "WEBVIEW_REF";
import React, { Component } from 'react';
import { WebView, NetInfo, View, Text, Image, BackHandler } from 'react-native';
import * as firebase from 'firebase';
import { Container, Button } from 'native-base';
import { styles } from './app/constants/app_styles';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      homeURL: 'https://yfc-management.000webhostapp.com/'
    };
  }

  componentWillMount(){
    const firebaseConfig = {
      apiKey: "AIzaSyD2641vhTud-qFfi6mmu4Nku-QXLYtHm8Q",
      authDomain: "yfcmanagement-4be36.firebaseapp.com",
      databaseURL: "https://yfcmanagement-4be36.firebaseio.com/",
      projectId: "yfcmanagement-4be36",
      storageBucket: "yfcmanagement-4be36.appspot.com",
      messagingSenderId: "750026638096"

    };

    firebase.initializeApp(firebaseConfig);
    firebase.messaging().getToken()
    .then(fcmToken => {
      if (fcmToken) {
        // user has a device token
      } else {
        // user doesn't have a device token yet
      }
    });
    // firebase.messaging().getToken()
    // .then(fcmToken => {
    //   if (fcmToken) {
    //     // user has a device token
    //     console.log(fcmToken);
    //   } else {
    //     // user doesn't have a device token yet
    //   }
    // });
    console.disableYellowBox = true;
  }
  componentDidMount(){
    BackHandler.addEventListener('hardwareBackPress', this.backHandler);
  }
  componentWillUnmount(){
    BackHandler.removeEventListener('hardwareBackPress', this.backHandler);
  }

  backHandler = () => {
      if(this.state.backButtonEnabled) {
          this.refs[WEBVIEW_REF].goBack();
          return true;
      }
  }

  render(){
    return (
      <WebView
        ref={WEBVIEW_REF}
        source={{uri: this.state.homeURL}}
        style={{marginTop: 20, flex:1}}
        onError={() => {console.log("Error");}}
        renderError={(errorDomain, errorCode, errorDesc) => (
          <Container style={styles.containerStyle}>
            <Image resizeMode="contain" source={require('./assets/no_connection.png')} style={styles.imageStyle}/>
            <Text style={styles.textStyle}>
              {errorDesc}
            </Text>
          </Container>
        )}
      />
    );
  }
}
