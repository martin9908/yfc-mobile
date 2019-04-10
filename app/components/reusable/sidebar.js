import React, { Component } from 'react';
import { Image, TouchableOpacity, AsyncStorage, StatusBar} from 'react-native';
import {
  Text,
  Content,
  Container,
  Body,
  Header,
  Icon,
  List,
  ListItem,
  Form,
  Picker,
  Left,
} from 'native-base';
import { styles } from '../../constants/styles';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ReduxActions from '../../actions/index';
import { Actions } from 'react-native-router-flux';

class Sidebar extends Component {
  state = {
    account_id: '',
    email: '',
    selectedBranch: '',
    store_branches: '',
  };

  onLogoutPress = () => {
      AsyncStorage.clear();
      Actions.push("login");
  }

  onDashboardPress = () => {
    Actions.push("drawer");
  }
  
  render() {
    return (
      <Content style={styles.sidebarContent} scrollEnabled={false}>
        <Header style={styles.sidebarHeader}>
          <Text>YFC Management System</Text>
        </Header>
        <Container style={styles.sidebarContainer}>
          <List style={styles.sidebarListStyle}>
            <ListItem style={styles.sidebarListItemStyle}>
              <TouchableOpacity style={styles.touchableItemsStyle} onPress={this.onDashboardPress}>
                <Icon active style={styles.touchableItemsStyle} type="FontAwesome" name='dashboard'/>
                <Text style={styles.touchableItemsStyle}>Dashboard</Text>
              </TouchableOpacity>   
            </ListItem>
            <ListItem>
              <TouchableOpacity style={styles.listIconStyle} onPress={this.onLogoutPress}>
                <Icon active style={styles.touchableItemsStyle} type="FontAwesome" name='sign-out'/>
                <Text style={styles.touchableItemsStyle}>LOG OUT</Text>
              </TouchableOpacity>
            </ListItem>
          </List>
          <Left>
            <Text note> Version 2.0</Text>
          </Left>
        </Container>
      </Content>
    );
  }
}

// The function takes data from the app current state,
// and insert/links it into the props of our component.
// This function makes Redux know that this component needs to be passed a piece of the state
function mapStateToProps(state, props) {
    return {
      api_token: state.dataReducer.api_token,
      base_url: state.dataReducer.base_url,
      head_office: state.dataReducer.head_office,
      store_branches: state.dataReducer.store_branches,
    }
}

// Doing this merges our actions into the component’s props,
// while wrapping them in dispatch() so that they immediately dispatch an Action.
// Just by doing this, we will have access to the actions defined in out actions file (action/home.js)
function mapDispatchToProps(dispatch) {
    return bindActionCreators(ReduxActions, dispatch);
}

//Connect everything
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
