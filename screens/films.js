import React, { Component } from 'react';
import { Image, View, Text, StyleSheet, TouchableOpacity } from 'react-native';

class Films extends Component {
  constructor(props) {
    super(props);
    this.state = {
      films: [
        {
          title: 'phim 1',
          links:
            'https://m.media-amazon.com/images/M/MV5BMTkzMTY0MjE5MV5BMl5BanBnXkFtZTcwODMxNDY3Mw@@._V1_SY1000_CR0,0,1526,1000_AL_.jpg'
        },
        {
          title: 'phim 2',
          links:
            'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,704,1000_AL_.jpg'
        },
        {
          title: 'phim3',
          links:
            'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg'
        },
      ],
    };
  }

  render() {
    const { films } = this.state;
    return (
      <View style={styles.filmbox}>
        {films.map(film => (
          <TouchableOpacity key={film.title}>
            <Text>{film.title}</Text>
            <Image
              style={styles.imagebox}
              source={{
                uri: film.links
              }}
            />
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  filmbox: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    // paddingTop: Constants.statusBarHeight,
    paddingLeft: 16,
    paddingRight: 16,
    borderRadius: 4,
    shadowOffset: { width: 0, height: 0 },
  },
  imagebox: {
    width: 100,
    height: 100,
    borderRadius: 4,
  },
});

export default Films;
