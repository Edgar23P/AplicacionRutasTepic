/* eslint-disable eol-last */
/* eslint-disable comma-dangle */
import Home from '../../screens/Home';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

const RouteConfig = createStackNavigator({
  Home: {screen: Home},
});
const AppContainer = createAppContainer(RouteConfig);

export default AppContainer;
