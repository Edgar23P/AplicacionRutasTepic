import React, {Component} from 'react';
import {View,Text} from 'react-native';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prueba: '',
    };
  }
  render(){
    return(
      <View>
        <Text>Hola Mundo</Text>
      </View>
    );
  }
}

export default Home;
