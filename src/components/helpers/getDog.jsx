const getDog = async (breedId) => {
  const url =
    breedId === undefined || breedId === 0
      ? "https://api.TheDogAPI.com/v1/images/search"
      : "https://api.TheDogAPI.com/v1/images/search?breed_ids=" + breedId;

  const res = await fetch(url);
  const [data] = await res.json();

  // console.log(data);
  console.log(data.breeds[0]);

  if (!data.breeds[0]) {
    data.breeds[0] = {
      id: 0,
      name: "No data",
      height: "",
      weight: "",
      temperament: "",
    };
  }

  const dog = {
    image: data.url,
    breed: data.breeds[0],
  };

  return dog;
};

export default getDog;
