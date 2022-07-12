import { Data } from '../../@types/types';

export const setEvents = (lastSearch: Data.LastSearch) => {
  return { type: 'ADD_SEARCH', payload: lastSearch };
};
