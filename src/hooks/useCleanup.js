import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { elementReset } from 'actions/ElementActions';

export default function useCleanup(selectedCategory) {
  const dispatch = useDispatch();

  useEffect(() =>
    () => {
      const resetElementsAction = elementReset(selectedCategory.apiName);
      dispatch(resetElementsAction);
    }, [selectedCategory, dispatch]);
}
