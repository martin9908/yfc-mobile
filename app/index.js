//Import React
import React, { Component } from 'react';

//Import React-Native
import {
  View,
  AsyncStorage,
  Text
} from 'react-native';

//Import React Native Router Flux
import {
  Router,
  Stack,
  // Drawer,
  Scene,
  // Tabs
} from 'react-native-router-flux';

//Import Scenes
import Login from './components/login/index';
import Loading from './components/login/loading';

//Import Constants
// import { styles } from './constants/styles';
// import colors from './constants/colors';

//Import Redux
import { connect } from 'react-redux';
import { getUserData } from './actions';

//Create a dedicated class that will manage the tabBar icon
class TabIcon extends Component {
  render() {
    var color = this.props.focused ? colors.redorange : colors.bluegrey;

    return (
      <View style={{flex:1, flexDirection:'column', alignItems:'center', alignSelf:'center', justifyContent: 'center'}}>
        <Text style={{color: color, fontSize: 12, fontFamily: 'Lato'}}>{this.props.title}</Text>
      </View>
    );
  }
}

class Main extends Component {
  render() {
    return (
      <Router hideNavBar={true}>
        <Stack hideNavBar={true} key="root">
          <Scene key="login" component={Login} title="login" hideNavBar={true} initial />
          <Scene key="loading" component={Loading} title="loading" hideNavBar={true}/>
        </Stack>
      </Router>
    );
  }
}

//Connect everything
export default connect(null, { getUserData })(Main);
