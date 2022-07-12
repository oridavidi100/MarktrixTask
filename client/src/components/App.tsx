import React, { useEffect } from 'react';
import Form from './Form';
import SearchHistory from './SearchHistory';
import { useDispatch } from 'react-redux';

function App() {
  return (
    <div className="App">
      <h1 className="title">Genderize and nationalize app</h1>
      <Form />
      <SearchHistory />
    </div>
  );
}

export default App;
