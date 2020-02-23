import React, { useCallback } from 'react';
import { TouchableHighlight, View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const CategoryElement = ({ listItem, onCategorySelection }) => {
  const { item } = listItem;

  const categorySelected = useCallback(() => {
    onCategorySelection(item);
  }, [item, onCategorySelection]);

  return (
    <TouchableHighlight style={styles.categoryContainer} onPress={categorySelected}>
      <View>
        <Image style={styles.categoryImage} resizeMode="cover" source={item.image} />
        <Text style={styles.categoryText}>{item.name}</Text>
      </View>
    </TouchableHighlight>
  );
};

CategoryElement.propTypes = {
  listItem: PropTypes.object.isRequired,
  onCategorySelection: PropTypes.func.isRequired,
};

export default CategoryElement;
