import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    height: 140,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  title: {
    color: 'yellow',
    margin: 15,
    fontSize: 24,
    fontWeight: 'bold',
  },
});

const ElementRow = ({ item }) => (
  <View style={styles.container}>
    <Text style={styles.title}> {item.name} </Text>
  </View>
);

ElementRow.propTypes = {
  item: PropTypes.object.isRequired,
};

export default ElementRow;
