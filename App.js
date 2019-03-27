const WEBVIEW_REF = "WEBVIEW_REF";
import React, { Component } from 'react';
import { WebView, Text, Image, } from 'react-native';
import { Container, } from 'native-base';
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
    
    console.disableYellowBox = true;
  }

  // componentDidMount(){
  //   BackHandler.addEventListener('hardwareBackPress', this.backHandler);
  // }
  // componentWillUnmount(){
  //   BackHandler.removeEventListener('hardwareBackPress', this.backHandler);
  // }

  // backHandler = () => {
  //     if(this.state.backButtonEnabled) {
  //         this.refs[WEBVIEW_REF].goBack();
  //         return true;
  //     }
  // }

  render(){
    return (
      <WebView
        ref={WEBVIEW_REF}
        source={{uri: this.state.homeURL}}
        style={{marginTop: 20, flex:1}}
        onError={() => {console.log("Error");}}
        userAgent={"Mozilla/5.0 (Linux; Android 8.0.0; SM-G950F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.110 Mobile Safari/537.36"}
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
