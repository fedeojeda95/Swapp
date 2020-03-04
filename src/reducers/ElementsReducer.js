import createReducer from './createReducer';

const initialState = {
  nextPage: null,
  elements: [],
};

const elementsSuccess = (state, action) => {
  const {elements: currentElements} = state;
  const {
    data: {elements: elementsToAdd},
  } = action;

  const oldElements = [...currentElements];
  const newElements = oldElements.concat(elementsToAdd);
  return {
    nextPage: action.data.nextPage,
    elements: newElements,
  };
};

const resetElements = () => initialState;

const createElementsReducer = type => {
  const actionHandlers = {
    [`${type}_SUCCESS`]: elementsSuccess,
    [`${type}_RESET`]: resetElements,
  };

  return createReducer(initialState, actionHandlers);
};

export default type => createElementsReducer(type);
