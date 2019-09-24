import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import styled from "styled-components";

// Context
import { DataContext } from "../contexts/DataContext";

// Components
import RegisterAdmin from "./RegisterAdmin";

export default function Admin() {
  const { data, dispatchData } = useContext(DataContext);

  console.log(data);

  useEffect(() => {
    // axiosWithAuth()
    //   .get()
    //   .then(res => console.log(res))
    //   .catch(err => console.log(err));
  }, []);

  return (
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
          <input placeholder="Add a new country" />
        </AddCountry>
      </Countries>
      <RegisterAdmin />
    </div>
  );
}

const Countries = styled.div`
  width: 90%;
  max-width: 800px;
  margin: 0 auto;
  box-shadow: 1px 2px 3px #000;
`;

const Country = styled.div`
  border: 1px solid silver;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;

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
