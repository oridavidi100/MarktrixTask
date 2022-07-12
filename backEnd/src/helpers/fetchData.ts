import axios from 'axios';
import { Data } from '../../@types/types';
import countries from '../helpers/countries.json';

export const getData = (name: string): Promise<void | Data.Result> => {
  const responseGender = axios.get(`https://api.genderize.io?name=${name}`);
  const responseLocation = axios.get(`https://api.nationalize.io?name=${name}`);

  return Promise.all([responseLocation, responseGender])
    .then(values => {
      const location: Data.Location = values[0].data;
      const gender: Data.Gender = values[1].data;
      if (location.country.length === 0 || gender.gender === null) {
        new Error();
      }

      return {
        probabilityLocation: getCountry(location.country[0].country_id),
        probabilityGender: gender.gender,
      };
    })
    .catch(err => {
      return err;
    });
};

const getCountry = (id: string) => {
  const countryName = countries.filter(country => {
    return country.code === id;
  });
  return countryName[0].name;
};
