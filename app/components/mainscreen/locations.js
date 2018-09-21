// Import React
import React, { Component } from 'react';
//Import Styles
import { styles } from '../../constants/styles';
//Import components from React-native
import {
  StatusBar,
  AsyncStorage,
  View
} from 'react-native';
//Import components from native-base
import {
  Container,
  Drawer,
  Header,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
  Form,
  Picker,
  Footer,
  FooterTab
} from 'native-base';
//Import cards
// import Sales from '../cards/Sales';
// import Invoices from '../cards/Invoices';

//Import Redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ReduxActions from '../../actions';
//Import Navigation
import { Actions } from 'react-native-router-flux';

class Locations extends Component {

  componentDidMount(){

  }

  // openDrawer = () => {
  //   Actions.drawerOpen();
  // }

  render(){
    return(
      <Text>Locations</Text>
    )
  }
}
// The function takes data from the app current state,
// and insert/links it into the props of our component.
// This function makes Redux know that this component needs to be passed a piece of the state
function mapStateToProps(state, props) {
  return {

  }
}
// Doing this merges our actions into the component’s props,
// while wrapping them in dispatch() so that they immediately dispatch an Action.
// Just by doing this, we will have access to the actions defined in out actions file (action/home.js)
function mapDispatchToProps(dispatch) {
    return bindActionCreators(ReduxActions, dispatch);
}
//Connect everything
export default connect(mapStateToProps, mapDispatchToProps)(Locations);
