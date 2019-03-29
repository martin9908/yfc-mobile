import React, { Component } from 'react';
import { View } from 'react-native';
import { Root, StyleProvider } from "native-base";
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
    // const firebaseConfig = {
    //   apiKey: "AIzaSyD2641vhTud-qFfi6mmu4Nku-QXLYtHm8Q",
    //   authDomain: "yfcmanagement-4be36.firebaseapp.com",
    //   databaseURL: "https://yfcmanagement-4be36.firebaseio.com/",
    //   projectId: "yfcmanagement-4be36",
    //   storageBucket: "yfcmanagement-4be36.appspot.com",
    //   messagingSenderId: "750026638096"
    // };
    
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({ loading: false });
    console.disableYellowBox = true;
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
