import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import styled, { ThemeProvider } from 'styled-components';

// Context
import { DataContext } from '../contexts/DataContext';

// Components
import RegisterAdmin from './RegisterAdmin';

export default function Admin() {
  const { data, dispatchData } = useContext(DataContext);

  useEffect(() => {
    // axiosWithAuth()
    //   .get()
    //   .then(res => console.log(res))
    //   .catch(err => console.log(err));
  }, []);

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
                <button>X</button>
              </Country>
            ))}
            <AddCountry>
              <button>➕</button>
              <input placeholder='Add a new country' />
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
  align-items: flex-start;
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
