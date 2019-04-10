const WEBVIEW_REF = "WEBVIEW_REF";
import React, { Component } from 'react';
import { WebView, Text, Image, } from 'react-native';
import { Container, } from 'native-base';
import { styles } from '../../constants/app_styles';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ReduxActions from '../../actions';
import { Actions,  } from 'react-native-router-flux';

class Index extends Component {
    constructor(props) {
      super(props);

      this.state = {
          homeURL: 'http://yfc-management.hostingerapp.com'
      };
    }

    componentDidMount(){
      this.setState({
        homeURL: 'http://192.168.1.2/yfc-managment/pages/database/login.php?username=' + this.props.user_data[0].User_Number + '&password=' + this.props.user_data[0].password,
      })
    }

    render(){
        return (
          <WebView
            ref={WEBVIEW_REF}
            source={{uri: this.state.homeURL}}
            style={{flex:1}}
            onError={() => {console.log("Error");}}
            userAgent={"Mozilla/5.0 (Linux; Android 8.0.0; SM-G950F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.110 Mobile Safari/537.36"}
            renderError={(errorDomain, errorCode, errorDesc) => (
              <Container style={styles.containerStyle}>
                <Image resizeMode="contain" source={require('../../../assets/no_connection.png')} style={styles.imageStyle}/>
                <Text style={styles.textStyle}>
                  {errorDesc}
                </Text>
              </Container>
            )}
          />
        );
    }
}

function mapStateToProps(state, props) {
  return {
    user_data: state.dataReducer.user_data,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ReduxActions, dispatch);
}

//Connect everything
export default connect(mapStateToProps, mapDispatchToProps)(Index);