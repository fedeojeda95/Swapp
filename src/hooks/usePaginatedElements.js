import { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import usePrevious from 'hooks/usePrevious';
import fetchElements from 'actions/ElementActions';
import getCurrentCategoryElements from 'selectors/ElementsSelectors';

export default function usePaginatedElements(category, searchText) {
  const shouldFetchNextPage = useRef(false);
  const [page, setPage] = useState(1);

  const previousSearchText = usePrevious(searchText);
  console.log("previo" + previousSearchText);
  console.log("nuevo" + searchText);
  if (searchText !== previousSearchText) {
    console.log("distinto!!");
  }

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchElements(category, page, searchText));
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
    getCurrentCategoryElements(category.apiName, state));

  const isFirstLoad = currentElements.length === 0;

  return {
    nextPage,
    currentElements,
    onListMovement,
    isFirstLoad,
  };
}
