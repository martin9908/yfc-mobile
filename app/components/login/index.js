import React, { Component } from 'react';
import { Image, AsyncStorage, } from 'react-native';
import { Container, Body, Button, Text, Item, Icon, Input  } from 'native-base';
import { LinearGradient } from 'expo';
import { styles } from '../../constants/styles';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ReduxActions from '../../actions';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: null,
      password: null,
      isLoggedIn: false,
      EmailColor: '#96a6b9',
      PasswordColor: '#96a6b9',
      isEmailDisabled: false,
      isPasswordDisabled: false,
    };
  }

  componentDidMount() {
    // AsyncStorage.clear();
    try {
      AsyncStorage.getItem("user_data").then((value) => {
        if(value != null){
          let user = JSON.parse(value);
          this.setState({
            username: user.User_Number,
            password: user.password
          })
        }
      }).done();
    } catch (error) {
      // Error retrieving data
      console.log('Async Fetch Error: ' + error);
    }
  }

  onFocus = (TextBox) => {
    if (TextBox == 'Username') {
      this.setState({EmailColor: '#313d4b'});
    }
    else {
      this.setState({PasswordColor: '#313d4b'});
    }
  }

  onLoginPressed = () => {
    let loginData = {
      "username": this.state.username,
      "password": this.state.password,
      "fcm": null
    }
    if(this.state.username != null && this.state.password != null){
      this.setState({isLoggedIn: true});
      this.props.lgoin(loginData);
    }
  }


  render() {
    return (
      <Container>
        <Body>
          <LinearGradient
            colors={['#90EE90', '#32CD32', '#008000']}
            style={{ padding: 15, alignItems: 'center', borderRadius: 5, height: '100%' }}>
            <Image resizeMode="contain" source={require('../../../assets/icon-white.png')} style={styles.imageStyle}/>
            <Item rounded style={styles.textInputStyle}>
              <Icon active style={styles.textInputArea} type="FontAwesome" name='user' />
              <Input
                disabled={this.state.isEmailDisabled}
                style={{color: this.state.EmailColor}}
                placeholder="USER ID"
                value={this.state.username}
                onChangeText={(text) => this.setState({username: text})}
                onFocus = {() => this.onFocus('Email')}
                placeholderTextColor='#96a6b9'
                autoCapitalize = 'none'/>
            </Item>
            <Item rounded style={styles.textInputStyle}>
              <Icon active style={styles.textInputArea} type="MaterialIcons" name='lock' />
              <Input
                disabled={this.state.isPasswordDisabled}
                style={{color: this.state.PasswordColor}}
                placeholder="PASSWORD"
                onChangeText={(text) => this.setState({password: text})}
                onFocus = {() => this.onFocus('Username')}
                value={this.state.password}
                placeholderTextColor='#96a6b9'
                secureTextEntry={true}
                autoCapitalize = 'none'/>
            </Item>
            <Button
              style={styles.buttonStyle}
              onPress={this.onLoginPressed}
              color='#ffffff'
              rounded
            >
              <Text>LOGIN</Text>
            </Button>
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
        user_data: state.dataReducer.user_data,
    }
}

// Doing this merges our actions into the component’s props,
// while wrapping them in dispatch() so that they immediately dispatch an Action.
// Just by doing this, we will have access to the actions defined in out actions file (action/home.js)
function mapDispatchToProps(dispatch) {
    return bindActionCreators(ReduxActions, dispatch);
}

//Connect everything
export default connect(mapStateToProps, mapDispatchToProps)(Login);
