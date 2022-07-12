import { Data } from '../@types/types';

const initalState: Data.InitalState = {
  searchHistory: [],
};

const rootreducer = (state = initalState, action: Data.Action) => {
  switch (action.type) {
    case 'ADD_SEARCH':
      return {
        ...state,
        searchHistory: [...state.searchHistory, action.payload],
      };
    default:
      return state;
  }
};

export default rootreducer;
