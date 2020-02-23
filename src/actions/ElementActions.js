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

const createElements = elementsResponse => ({
  nextPage: elementsResponse.next,
  elements: elementsResponse.results,
});

export default (selectedCategory, currentPage = 1) => async (dispatch) => {
  const { apiName: type } = selectedCategory;
  dispatch(getElementRequest(type));
  try {
    const elementsResponse = await ElementsController.fetchElements(type, currentPage);
    const elements = createElements(elementsResponse);

    dispatch(getElementSuccess(type, elements));
  } catch (error) {
    dispatch(getElementError(type, error.message));
  }
};
