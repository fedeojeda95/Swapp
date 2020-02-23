import React, {useState, useCallback} from 'react';
import {View, FlatList, ActivityIndicator} from 'react-native';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';

import styles from './styles';

import ElementRow from './ElementRow';
import SearchBar from './components/SearchBar';

import useCleanup from 'hooks/useCleanup';
import usePaginatedElements from 'hooks/usePaginatedElements';
import {fullStatusSelector} from 'selectors/StatusSelectors';

const Separator = () => <View style={styles.separator} />;

function LoadingFooter({isLoading}) {
  return (
    isLoading && (
      <View style={styles.loadingFooter}>
        <ActivityIndicator size="small" color="yellow" />
      </View>
    )
  );
}

LoadingFooter.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

function ElementsList(props) {
  const {route} = props;
  const {
    params: {selectedCategory},
  } = route;

  const [searchText, setSearchText] = useState('');

  const getElementsStatus = useSelector(state =>
    fullStatusSelector(selectedCategory.apiName, state),
  );

  const {
    onListMovement,
    nextPage,
    currentElements,
    isFirstLoad,
  } = usePaginatedElements(selectedCategory, searchText);

  useCleanup(selectedCategory);

  const renderHeader = useCallback(
    () => !isFirstLoad && <SearchBar onTextChanged={setSearchText} />,
    [isFirstLoad],
  );

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        refreshing={getElementsStatus.isLoading}
        data={currentElements}
        // Rendering
        ListHeaderComponent={renderHeader}
        ItemSeparatorComponent={Separator}
        renderItem={ElementRow}
        keyExtractor={item => item.name}
        // Pagination
        onEndReachedThreshold={0}
        onMomentumScrollBegin={onListMovement}
        onEndReached={nextPage}
      />
    </View>
  );
}

ElementsList.propTypes = {
  route: PropTypes.object.isRequired,
};

export default ElementsList;
