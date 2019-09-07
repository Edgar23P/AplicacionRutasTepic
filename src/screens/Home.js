import React, {Component} from 'react';
import {View,Text} from 'react-native';
import MapView,{PROVIDER_GOOGLE} from 'react-native-maps';
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
      <MapView
      provider = {PROVIDER_GOOGLE}
      initialRegion={{
        latitude: 21.500502,
        longitude:  -104.889608,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      
    />
    </View>
    );
  }
}

export default Home;
