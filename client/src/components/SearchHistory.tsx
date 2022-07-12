import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Data } from '../@types/types';

export default function SearchHistory() {
  const history = useSelector((state: Data.InitalState) => state.searchHistory);
  return (
    <div className="searchHistoryDiv">
      <h4 className="searchHistoryTitle">Search history</h4>
      <hr />
      <div className="historyList">
        {history &&
          history.map(search => {
            return (
              <div
                key={Math.floor(Math.random() * 120000)}
                className="searchRes"
              >
                <p>Name : {search.name}</p>
                <p>Most likely gender : {search.gender}</p>
                <p>Most likely location : {search.loaction}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}
