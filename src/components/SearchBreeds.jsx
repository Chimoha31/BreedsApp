import React, { Fragment } from "react";

const SearchBreeds = ({ dogName, selectHandler }) => {
  const handleChange = (e) => {
    selectHandler(e.target.value);
  };

  return (
    <Fragment>
      <form>
        <select onChange={handleChange}>
          <option>Open this select menu</option>
          {dogName.map((option) => (
            <option value={option.name} key={option.id}>
              {option.name}
            </option>
          ))}
        </select>
      </form>
    </Fragment>
  );
};

export default SearchBreeds;
