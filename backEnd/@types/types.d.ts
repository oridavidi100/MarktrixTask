export declare namespace Data {
  interface Gender {
    name: string;
    gender: string;
    probability: number;
    count: number;
  }
  interface Location {
    name: string;
    country: Country[];
  }
  interface Country {
    country_id: string;
    probability: number;
  }
  interface Result {
    probabilityLocation: string;
    probabilityGender: string;
  }
}
