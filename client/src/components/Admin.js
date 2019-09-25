import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import styled, { ThemeProvider } from 'styled-components';

// Context
import { useDataContext } from '../contexts/DataContext';

// Components
import RegisterAdmin from './RegisterAdmin';

export default function Admin() {
  const { data, dispatchData } = useDataContext();
  const [newCountry, setNewCountry] = useState('');

  useEffect(() => {
    // axiosWithAuth()
    //   .get()
    //   .then(res => console.log(res))
    //   .catch(err => console.log(err));
  }, []);

  const handleChange = e => setNewCountry(e.target.value);

  const handleClick = e => {
    e.preventDefault();
    console.log(newCountry);
  };

  return (
    <div>
      <h2>Admin Page</h2>
      <AdminWrapper>
        <CountriesWrapper>
          <h3>Countries:</h3>
          <Countries>
            {data.countries.map(el => (
              <Country>
                <Link key={el} to={`/country/${el.split(' ').join('-')}`}>
                  <h3>{el}</h3>
                </Link>
                <button>✖️</button>
              </Country>
            ))}
            <AddCountry>
              <button onClick={handleClick}>➕</button>
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
`;

const CountriesWrapper = styled.div`
  width: 60%;
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
