import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import styled, { ThemeProvider } from 'styled-components';

import {
  Form,
  Button,
  Input,
  theme,
  Countries,
  Country,
  AddCountry
} from "../styled-components/index";
// Context
import { DataContext } from '../contexts/DataContext';

// Components
import RegisterAdmin from './RegisterAdmin';

export default function Admin() {
  const { data, dispatchData } = useContext(DataContext);

  // console.log(data);

  useEffect(() => {
    // axiosWithAuth()
    //   .get()
    //   .then(res => console.log(res))
    //   .catch(err => console.log(err));
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div>
        <h2>Admin Page</h2>
        <Countries>
          {data.countries.map(el => (
            <Country>
              <Link key={el} to={`/country/${el.split(" ").join("-")}`}>
                <h3>{el}</h3>
              </Link>
              <button>X</button>
            </Country>
          ))}
          <AddCountry>
            <button>➕</button>
            <Input placeholder="Add a new country" />
          </AddCountry>
        </Countries>
        <RegisterAdmin />
      </div>
    </ThemeProvider>
  );
}
