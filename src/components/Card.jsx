import React from "react";
import LoadingSpinner from './LoadingSpinner';

const Card = ({ dog, updateDog, loading }) => {
  if (loading) {
    return <LoadingSpinner />
  }

  return (
    <div className="card" onClick={() => updateDog(dog.breed.id)}>
      <img src={dog.image} alt="dog" />
      <p>{dog.breed.name}</p>
      <p>{dog.breed.height.metric}cm</p>
      <p>{dog.breed.weight.metric}kg</p>
      <p>{dog.breed.temperament}</p>
    </div>
  );
};

export default Card;
