import React, { Fragment } from "react";
import Form from 'react-bootstrap/Form';

const SearchBreeds = () => {
  const fetchDogBreeds = async () => {
    const res = await fetch("https://api.thedogapi.com/v1/breeds");
    const data = await res.json();
    console.log(data);
  }
  fetchDogBreeds();


  return (
    <Fragment>
      <Form.Select aria-label="Default select example">
        <option>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Form.Select>
    </Fragment>
  );
};

export default SearchBreeds;
