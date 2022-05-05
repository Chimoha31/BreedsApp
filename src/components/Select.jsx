import React, { useEffect, useState } from "react";
import getBreeds from "./helpers/getBreeds";

const initialBreeds = [
  {
    id: 1,
    name: "Morkie",
  },
  {
    id: 2,
    name: "Toy Poodle",
  },
];

const Select = ({updateDog}) => {
  const [breeds, setBreeds] = useState(initialBreeds);
  const [error, setError] = useState(null);

  useEffect(() => {
    updateBreeds();
  }, []);

  const updateBreeds = () => {
    getBreeds().then((newBreeds) => {
      setBreeds(newBreeds);
    });
  };

  return (
    <select onChange={(e) => updateDog(e.target.value)}>
      {breeds.map((breed) => (
        <option value={breed.id} key={breed.id}>
          {breed.name}
        </option>
      ))}
    </select>
  );
};

export default Select;
