//Import React
import React, { Component } from 'react';

//Import React-Native
import {
  AsyncStorage,
} from 'react-native';

//Import React Native Router Flux
import {
  Router,
  Stack,
  Scene,
} from 'react-native-router-flux';

//Import Scenes
import Login from './components/login/index';
import Loading from './components/login/loading';
import Index from './components/mainscreen/webview';

//Import Redux
import { connect } from 'react-redux';
import { getUserData } from './actions';

//Create a dedicated class that will manage the tabBar icon
class Routes extends Component {
  componentWillMount(){
    AsyncStorage.getItem("user_details").then((value)=>{
      console.log(value);
    })
  }
  
  render() {
    return (
      <Router hideNavBar>
        <Stack hideNavBar key="root">
          <Scene key="login" component={Login} title="login" initial />
          <Scene key="loading" component={Loading} title="loading"/>
          <Scene key="index" component={Index} title="Home" />
        </Stack>
      </Router>
    );
  }
}

//Connect everything
export default connect(null, { getUserData })(Routes);
