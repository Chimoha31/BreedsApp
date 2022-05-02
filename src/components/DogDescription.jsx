import React, { Fragment, useEffect, useState } from "react";

const DogDescription = ({ dogName, eachDogName }) => {
  const [dogImages, setDogImages] = useState(null);
  const [dogDesc, setDogDesc] = useState(null);

  const getDogByBreed = async () => {
    const data = await fetch(
      `https://api.TheDogAPI.com/v1/images/search?include_breed=1&breed_id=`
    );
    const [breed] = await data.json();
    setDogImages(breed.url);
    // setDogDesc(breed.breeds[0].name);
    // console.log(breed.url);
    console.log(dogDesc);
  };

  useEffect(() => {
    getDogByBreed(dogImages);
  }, []);

  return (
    <div>
      {console.log(dogDesc)}
      <img src={dogImages} alt="dog" width="300px" height="300px" />
      <h1>{dogDesc}</h1>
    </div>
  );
};

export default DogDescription;
