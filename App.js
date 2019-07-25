import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import ListFilm from './components/ListFilm';
import { createAppContainer } from 'react-navigation';
import AppNavigator from './Appnavigator';
// You can import from local files

// or any pure javascript modules available in npm
const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return (
      <AppContainer>
        <ScrollView style={{ paddingLeft: 10, paddingRight: 16 }}>
          <View>
            <View>
              <Text style={styles.title}> IMMMMMM DIIII</Text>
            </View>
            <ListFilm />
          </View>
        </ScrollView>
      </AppContainer>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    height: 70,
    backgroundColor: 'darkblue',
    overflow: 'visible',
    color: 'white',
    fontSize: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 6
  }
});
