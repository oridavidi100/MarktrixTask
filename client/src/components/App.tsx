import React, { useEffect } from 'react';
import Form from './Form';
import SearchHistory from './SearchHistory';
import { useDispatch } from 'react-redux';

function App() {
  return (
    <div className="App">
      <div className="title">Name app</div>
      <Form />
      <SearchHistory />
    </div>
  );
}

export default App;
