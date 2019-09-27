import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import styled from 'styled-components';

// Context
import { useDataContext } from '../contexts/DataContext';

// Components
import RegisterAdmin from './RegisterAdmin';

export default function Admin() {
  const { data, dispatchData } = useDataContext();
  const [newCountry, setNewCountry] = useState('');

  useEffect(() => {
    const countryList = data.childrenData.map(obj => obj.country);
    const uniqueCountries = new Set(countryList);
    const countries = [...uniqueCountries];
    dispatchData({ type: 'SET_COUNTRIES', payload: countries });
  }, []);

  const handleChange = e => setNewCountry(e.target.value);

  const handleClick = e => {
    e.preventDefault();
    // console.log(newCountry);
    // axiosWithAuth()
    //   .post()
    //   .then(res => {console.log(res)})
    //   .catch(err => {console.log(err)});
    dispatchData({ type: 'ADD_COUNTRY', payload: newCountry });
    setNewCountry('');
  };

  const handleDelete = id => {
    dispatchData({ type: 'DELETE_COUNTRY', payload: id });
  };

  if (!data.hasData) {
    return <Redirect to='/login' />;
  }

  return (
    <div>
      <h2>Admin Page</h2>
      <AdminWrapper>
        <CountriesWrapper>
          <h3>Countries:</h3>
          <Countries>
            {data.countries &&
              data.countries.map(el => (
                <Country key={el}>
                  <Link to={`/country/${el.split(' ').join('-')}`}>
                    <h3>{el}</h3>
                  </Link>
                  <button onClick={() => handleDelete(el)}>
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
