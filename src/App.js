import React, { Fragment, useState, useEffect } from 'react';
import DogDescription from './components/DogDescription';

import Header from './components/Header';
import SearchBreeds from './components/SearchBreeds';

const App = () => {
  const [dogName, setDogName] = useState([]);
  const [eachDogName, setEachDogName] = useState(null);

  const fetchDogBreeds = async () => {
    const res = await fetch("https://api.thedogapi.com/v1/breeds");
    const dogData = await res.json();
    setDogName(dogData);
    console.log(dogData);
  };

  useEffect(() => {
    fetchDogBreeds();
  }, []);

  const selectHandler = (breed) => {
    setEachDogName(breed);
  }

  return (
    <Fragment>
      {console.log(eachDogName)}
      <Header />
      <SearchBreeds dogName={dogName} selectHandler={selectHandler} eachDogName={eachDogName} />
      <DogDescription eachDogName={eachDogName} />
    </Fragment>
  )
}

export default App

