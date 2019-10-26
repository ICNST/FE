import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import styled from 'styled-components';

// Context
import { useDataContext } from '../contexts/DataContext';

// Components
import RegisterAdmin from './RegisterAdmin';

export default function Admin() {
  const { data, dispatchData } = useDataContext();
  const [newCountry, setNewCountry] = useState('');

  useEffect(() => {
    axiosWithAuth()
      .get('/countries')
      .then(res => {
        // console.log(res.data);
        dispatchData({ type: 'SET_COUNTRIES', payload: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }, [data.countries]);

  const handleChange = e => setNewCountry(e.target.value);

  const handleClick = e => {
    e.preventDefault();
    // console.log(newCountry);
    axiosWithAuth()
      .post('/countries', { country: newCountry })
      .then(res => {
        console.log(res);
        dispatchData({ type: 'ADD_COUNTRY', payload: res.data.added });
        setNewCountry('');
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleDelete = id => {
    // console.log(id);
    axiosWithAuth()
      .delete(`/countries/${id}`)
      .then(res => {
        console.log(res);
        dispatchData({ type: 'DELETE_COUNTRY', payload: id });
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div>
      <h2>Admin Page</h2>
      <AdminWrapper>
        <CountriesWrapper>
          <h3>Countries:</h3>
          <Countries>
            {data.countries &&
              data.countries.map(el => (
                <Country key={el.id}>
                  <Link to={`/country/${el.id}`}>
                    <h3>{el.country}</h3>
                  </Link>
                  <button onClick={() => handleDelete(el.id)}>
                    <span role='img' aria-label='delete country'>
                      ✖️
                    </span>
                  </button>
                </Country>
              ))}
            <AddCountry>
              <button onClick={handleClick}>
                <span role='img' aria-label='add country'>
                  ➕
                </span>
              </button>
              <input
                type='text'
                placeholder='Add a new country'
                value={newCountry}
                onChange={handleChange}
              />
            </AddCountry>
          </Countries>
        </CountriesWrapper>
        <RegisterAdmin />
      </AdminWrapper>
    </div>
  );
}

const AdminWrapper = styled.div`
  width: 95%;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: 850px) {
    flex-direction: column;
  }
`;

const CountriesWrapper = styled.div`
  width: 90%;
  max-width: 500px;
`;

const Countries = styled.div`
  box-shadow: 1px 2px 3px #000;
  display: flex;
  flex-direction: column;
`;

const Country = styled.div`
  border: 1px solid silver;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  height: 50px;
  :hover {
    background: #0d71ba;
    a {
      color: white;
    }
  }

  a {
    text-decoration: none;
    color: black;
  }

  button {
    cursor: pointer;
    padding: 5px 10px;
    border: none;

    :hover {
      background: #83c441;
      color: white;
    }
  }
`;

const AddCountry = styled.div`
  border: 1px solid silver;
  display: flex;
  align-items: center;
  padding: 10px;
  height: 50px;

  input {
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    border: none;
    margin: 18.72px 0px;
  }

  button {
    cursor: pointer;
    background: none;
    border: none;
  }
`;
