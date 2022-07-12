import { Data } from '../../@types/types';

export const setEvents = (name: string, response: Data.Response) => {
  const lastSearch: Data.LastSearch = {
    name: name,
    gender: response.probabilityGender,
    loaction: response.probabilityLocation,
  };
  return { type: 'ADD_SEARCH', payload: lastSearch };
};

export const setState = (searchHistory: any) => {
  const history = JSON.parse(searchHistory);
  return { type: 'SET_STATE', payload: history };
};
