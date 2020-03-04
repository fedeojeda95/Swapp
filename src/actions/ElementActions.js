import ElementsController from '../controllers/ElementsController';

const getElementRequest = type => ({
  type: `${type}_REQUEST`,
});

const getElementError = (type, error) => ({
  type: `${type}_ERROR`,
  error,
});

const getElementSuccess = (type, elements) => ({
  type: `${type}_SUCCESS`,
  data: elements,
});

export const elementReset = (type, elements) => ({
  type: `${type}_RESET`,
  data: elements,
});

const createElements = (elementsResponse, searchText) => ({
  nextPage: elementsResponse.next,
  elements: elementsResponse.results,
  searchText,
});

export default (
  selectedCategory,
  searchText,
  currentPage = 1,
) => async dispatch => {
  const {apiName: type} = selectedCategory;
  dispatch(getElementRequest(type));
  try {
    const elementsResponse = await ElementsController.fetchElements(
      type,
      searchText,
      currentPage,
    );
    const elements = createElements(elementsResponse, searchText);

    dispatch(getElementSuccess(type, elements));
  } catch (error) {
    dispatch(getElementError(type, error.message));
  }
};
