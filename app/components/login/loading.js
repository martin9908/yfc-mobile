import React, { Component } from 'react';
import { ActivityIndicator, Image,} from 'react-native';
import { Container, Body, } from 'native-base';
import { LinearGradient } from 'expo';
import { styles } from '../../constants/styles';

import { Actions } from 'react-native-router-flux';

export default class Loading extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount(){
    Actions.push("drawer");
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
