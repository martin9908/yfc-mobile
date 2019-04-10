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
  Drawer,
} from 'react-native-router-flux';

//Import Scenes
import MenuIcon from '../assets/menu.png';
import Login from './components/login/index';
import Loading from './components/login/loading';
import Index from './components/mainscreen/webview';
import Sidebar from './components/reusable/sidebar';

//Import Redux
import { connect } from 'react-redux';
import { getUserData } from './actions';

//Create a dedicated class that will manage the tabBar icon
class Routes extends Component {
  constructor() {
    super();
    this.state = {
      hasData: false
    };
  }

  componentWillMount(){
    AsyncStorage.getItem("user_data").then((value)=>{
      this.setState({
        hasData: true
      })
    })
  }
  
  render() {
    return (
      <Router hideNavBar navigationBarStyle={{ backgroundColor: 'green', }}>
        <Stack hideNavBar key="root">
          <Scene key="login" component={Login} title="login"/>
          <Scene key="loading" component={Loading} title="loading" />
          <Drawer
            key="drawer"
            contentComponent={Sidebar}
            drawerImage={MenuIcon}
            drawerWidth={280}
          >
          {/*
              Wrapper Scene needed to fix a bug where the tabs would
              reload as a modal ontop of itself
            */}
            <Scene key="mainPage" panHandlers={null}>
              <Scene key="index" component={Index} title="Youth For Christ" />
            </Scene>
          </Drawer>
        </Stack>
      </Router>
    );
  }
}

//Connect everything
export default connect(null, { getUserData })(Routes);
