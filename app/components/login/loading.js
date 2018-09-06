import axios from 'axios';
import React, { Component } from 'react';
import { ActivityIndicator, Image, AsyncStorage,} from 'react-native';
import { Container, Body, } from 'native-base';
import { LinearGradient } from 'expo';
import { styles } from '../../constants/styles';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ReduxActions from '../../actions';
import { Actions } from 'react-native-router-flux';

class Loading extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getAllArea();
    this.props.getAllUsers();
    this.props.getAllEvents();
    this.props.getAllSector();
    this.props.getAllChapter();
    this.props.getAllPayments();
    this.props.getAllAttendance();
  }

  render() {
        return (
          <Container>
            <Body>
              <LinearGradient
                colors={['#90EE90', '#32CD32', '#008000']}
                style={{ padding: 15, alignItems: 'center', borderRadius: 5, height: '100%' }}>
                <Image resizeMode="contain" source={require('../../../assets/icon-white.png')} style={styles.loadingStyle}/>
                <ActivityIndicator size='large'color="#ffffff"/>
              </LinearGradient>
            </Body>
          </Container>
        );
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
export default connect(mapStateToProps, mapDispatchToProps)(Loading);
