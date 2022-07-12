import axios from 'axios';
import React, { useRef, useState } from 'react';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';
import { setEvents } from '../reducer/actions/action';

import { useDispatch, useSelector } from 'react-redux';
import { Data } from '../@types/types';

export default function Form() {
  const notyf = new Notyf();

  const dispatch = useDispatch();
  const history = useSelector((state: Data.InitalState) => state.searchHistory);

  const inputName = useRef<HTMLInputElement>(null);

  const [location, setLocation] = useState<string>('');
  const [gender, setGender] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const name = inputName.current?.value as string;
    try {
      const response = await axios.get(
        `http://localhost:5000/api?name=${name}`
      );
      setLocation(response.data.probabilityLocation);
      setGender(response.data.probabilityGender);
      dispatch(setEvents(name, response.data));
    } catch (err: any) {
      notyf.error(err.response.data.error);
    }
  };
  return (
    <div>
      <form onSubmit={e => handleSubmit(e)} className="form">
        <div className="input-group mb-3">
          <input
            className="form-control"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            type="text"
            placeholder="please enter your name"
            name="name"
            ref={inputName}
          />
          <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="submit">
              Search
            </button>
          </div>
        </div>
      </form>
      <div className="results">
        <p>
          The most likely Gender of this name: <span> {gender}</span>
        </p>
        <p>
          The most likely Nationality of this name: <span>{location}</span>
        </p>
      </div>
    </div>
  );
}
