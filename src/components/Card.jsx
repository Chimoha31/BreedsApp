import React from "react";
import LoadingSpinner from "./LoadingSpinner";
import "./Card.scss";

const Card = ({ dog, updateDog, loading }) => {
  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="card bounce" onClick={() => updateDog(dog.breed.id)}>
      <div className="breed_img">
        <img src={dog.image} alt="dog" />
      </div>
      <div className="breed_information">
        <dl>
          {/* Breed name */}
            <h2>【{dog.breed.name}】</h2>
          {/* Temperament */}
          <dt>Temperament</dt>
          <dd>{dog.breed.temperament}</dd>
          {/* Height */}
          <dt>Height(adult)</dt>
          <dd>{dog.breed.height.metric}cm</dd>
          {/* Weight */}
          <dt>Weight(adult)</dt>
          <dd>{dog.breed.weight.metric}kg</dd>
          {/* Lifespan */}
          <dt>Lifespan</dt>
          <dd>{dog.breed.life_span}</dd>
        </dl>
      </div>
    </div>
  );
};

export default Card;
