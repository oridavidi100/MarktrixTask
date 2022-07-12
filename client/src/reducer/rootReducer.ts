import { Data } from '../@types/types';

const initalState: Data.InitalState = {
  searchHistory: [],
};

const rootreducer = (state = initalState, action: Data.Action) => {
  switch (action.type) {
    case 'ADD_SEARCH':
      if (action.payload.name === state.searchHistory[0]?.name) {
        return state;
      } else {
        return {
          ...state,
          searchHistory: [action.payload, ...state.searchHistory],
        };
      }
    default:
      return state;
  }
};

export default rootreducer;
