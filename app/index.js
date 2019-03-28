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
  Tabs
} from 'react-native-router-flux';

//Import Scenes
import Login from './components/login/index';
import Loading from './components/login/loading';
import Events from './components/mainscreen/events';
import Index from './components/mainscreen/index';
import Locations from './components/mainscreen/locations';
import Payments from './components/mainscreen/payments';
import Users from './components/mainscreen/users';

//Import Constants
import { styles } from './constants/styles';
import colors from './constants/colors';

//Import Redux
import { connect } from 'react-redux';
import { getUserData } from './actions';

//Create a dedicated class that will manage the tabBar icon
class TabIcon extends Component {
  render() {
    var color = this.props.focused ? colors.redorange : colors.bluegrey;

    return (
      <View style={{flex:1, flexDirection:'column', alignItems:'center', alignSelf:'center', justifyContent: 'center'}}>
        <Text style={{color: color, fontSize: 12}}>{this.props.title}</Text>
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
          {/*
              Wrapper Scene needed to fix a bug where the tabs would
              reload as a modal ontop of itself
            */}
            <Scene hideNavBar panHandlers={null}>
              <Tabs
                key="mainPage"
                swipeEnabled={false}
                showLabel={true}
              >
                <Stack
                  key="Dashboard"
                  tabBarLabel="Dashboard"
                  inactiveBackgroundColor="#FFF"
                  activeBackgroundColor="#DDD"
                  icon={TabIcon}
                  navigationBarStyle={{ backgroundColor: 'green' }}
                  titleStyle={{ color: 'white', alignSelf: 'center' }}
                >
                  <Scene key="index" component={Index} duration={0} title="Home" icon={TabIcon}/>
                </Stack>
                <Scene key="events" component={Events} duration={0} title="Events" icon={TabIcon}/>
                <Scene key="users" component={Users} duration={0} title="Users" icon={TabIcon}/>
                <Scene key="payments" component={Payments} duration={0} title="Payments" icon={TabIcon}/>
                <Scene key="locations" component={Locations} duration={0} title="Locations" icon={TabIcon}/>
                </Tabs>
            </Scene>
        </Stack>
      </Router>
    );
  }
}

//Connect everything
export default connect(null, { getUserData })(Main);
