import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Film from './screens/film';
import Films from './screens/films';

const AppNavigator = createStackNavigator({
  Films: {
    screen: Films
  },
  Film: {
    screen: Film
  }
});

export default AppNavigator;
