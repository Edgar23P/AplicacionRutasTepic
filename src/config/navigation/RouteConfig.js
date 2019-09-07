/* eslint-disable eol-last */
/* eslint-disable comma-dangle */
import {createAppContainer} from 'react-navigation';
import Home from '../../screens/Home';
import {createStackNavigator} from 'react-navigation-stack';

const RouteConfig = createStackNavigator({
  home: {
    screen: Home,
  },
});

const Contenedor = createAppContainer(RouteConfig);
export default Contenedor;
