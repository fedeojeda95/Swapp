import React, { useCallback } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
} from 'react-native';
import PropType from 'prop-types';

import { ScenesNames } from '../navigation';
import styles from './styles';

function Home(props) {
  const { navigation } = props;
  const navigateToCategoriesList = useCallback(() =>
    navigation.navigate(ScenesNames.CategoriesList), [navigation]);

  const title = (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>
        Swapp
      </Text>
      <Text style={styles.subtitle}>
        Star wars information app
      </Text>
    </View>
  );

  const startButton = (
    <TouchableHighlight
      style={styles.buttonContainer}
      onPress={navigateToCategoriesList}
    >
      <Text style={styles.button}>
        START
      </Text>
    </TouchableHighlight>
  );

  return (
    <View style={styles.container}>
      {title}
      {startButton}
    </View>
  );
}

Home.propTypes = {
  navigation: PropType.object.isRequired,
};

export default Home;
