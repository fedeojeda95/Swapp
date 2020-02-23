import React, { memo } from 'react';
import { View, Image, StyleSheet, TextInput } from 'react-native';
import PropTypes from 'prop-types';

import debounce from 'lodash.debounce';

import search from 'assets/searchIcon/search.png';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(37, 38, 38)',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 5,
  },
  textInput: {
    color: 'yellow',
    margin: 15,
    fontSize: 18,
    fontWeight: 'bold',
    width: '85%',
    height: '100%',
  },
  searchImage: {
    width: '15%',
    height: '60%',
    marginLeft: 10,
  },
});

const SearchBar = memo(({ onTextChanged }) => {
  const onSearchTextChanged = debounce((newText) => {
    onTextChanged(newText);
  }, 1000);

  return (
    <View style={styles.container}>
      <Image style={styles.searchImage} source={search} resizeMode="contain" />
      <TextInput
        style={styles.textInput}
        onChangeText={onSearchTextChanged}
        placeholder="Search here..."
        placeholderTextColor="rgb(95, 97, 97)"
      />
    </View>
  );
});

SearchBar.propTypes = {
  onTextChanged: PropTypes.func.isRequired,
};

export default SearchBar;
