import categories from 'constants/categories';
import React, {useCallback} from 'react';
import {View, FlatList} from 'react-native';
import PropTypes from 'prop-types';

import {ScenesNames} from '../navigation';
import CategoryElement from './CategoryElement';
import styles from './styles';

const Separator = () => <View style={styles.separator} />;

function CategoriesList(props) {
  const {navigation} = props;
  const onSelection = useCallback(
    selectedCategory =>
      navigation.navigate(ScenesNames.ElementsList, {selectedCategory}),
    [navigation],
  );

  const renderCategory = useCallback(
    item => (
      <CategoryElement listItem={item} onCategorySelection={onSelection} />
    ),
    [onSelection],
  );

  return (
    <View style={styles.container}>
      <FlatList
        ItemSeparatorComponent={Separator}
        data={categories}
        renderItem={renderCategory}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

CategoriesList.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default CategoriesList;
