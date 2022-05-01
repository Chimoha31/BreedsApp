import React, { Fragment, useEffect, useState } from "react";
// import DogDescription from "./DogDescription";

const SearchBreeds = () => {
  const [dogName, setDogName] = useState([]);
  // const [eachDogName, setEachDogName] = useState("");
  const [selected, setSelected] = useState(false);

  const fetchDogBreeds = async () => {
    const res = await fetch("https://api.thedogapi.com/v1/breeds");
    const dogData = await res.json();
    setDogName(dogData);
    console.log(dogData);
  };

  useEffect(() => {
    fetchDogBreeds();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // setEachDogName(e.target.value);
  };
  
  const handleChange = (e) => {
    setSelected(true);
  }

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <select onChange={handleChange}>
          <option>Open this select menu</option>
          {dogName.map((option) => (
            <option key={option.id} >{option.name}</option>
          ))}
        </select>
      </form>
      <div>
        <img src="" alt="dog" />
      </div>
      {/* <DogDescription dogName={dogName} eachDogName={eachDogName} /> */}
      {selected ? dogName.map((aaa) => (
        <img src={aaa.image.url} alt="dog" /> 
      )): ""}
    </Fragment>
  );
};

export default SearchBreeds;
