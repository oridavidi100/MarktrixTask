export declare namespace Data {
  interface LastSearch {
    name: string;
    loaction: string;
    gender: string;
  }
  interface InitalState {
    searchHistory: LastSearch[] | [];
  }
  interface Action {
    type: string;
    payload: any;
  }
}
