import {useEffect, useState, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import usePrevious from 'hooks/usePrevious';
import fetchElements, {elementReset} from 'actions/ElementActions';
import getCurrentCategoryElements from 'selectors/ElementsSelectors';

function useOnChange(element, onClear) {
  const [alreadyChanged, setAlreadyChanged] = useState(null);
  const previousElement = usePrevious(element);

  const elementIsDifferent = element !== previousElement;
  const elementWasAlreadyChecked = alreadyChanged !== element;

  // We call the callback only if the element is different, and hasn't been checked before.
  // This avoid possible unncesary re-renders when calling several times the callback.
  if (elementIsDifferent && elementWasAlreadyChecked) {
    onClear();
    setAlreadyChanged(element);
  }
}

export default function usePaginatedElements(category, searchText) {
  const shouldFetchNextPage = useRef(false);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  useOnChange(searchText, () => {
    const resetElementsAction = elementReset(category.apiName);
    dispatch(resetElementsAction);
    setPage(1);
  });

  useEffect(() => {
    dispatch(fetchElements(category, searchText, page));
  }, [page, category, dispatch, searchText]);

  const onListMovement = () => {
    shouldFetchNextPage.current = true;
  };

  const nextPage = () => {
    if (shouldFetchNextPage.current) {
      setPage(page + 1);
      shouldFetchNextPage.current = false;
    }
  };

  const currentElements = useSelector(state =>
    getCurrentCategoryElements(category.apiName, state),
  );

  const isFirstLoad = currentElements.length === 0;

  return {
    nextPage,
    currentElements,
    onListMovement,
    isFirstLoad,
  };
}
