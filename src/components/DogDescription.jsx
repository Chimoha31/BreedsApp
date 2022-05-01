// import React, { Fragment, useEffect, useState } from "react";

// const DogDescription = ({dogName, eachDogName}) => {
//   const [dogImages, setDogImages] = useState("");

//   const getDogByBreed = async (name) => {
//     const data = await fetch(
//       `https://api.TheDogAPI.com/v1/images/search?include_breed=1&breed_id=${name}`
//     );
//     const [breed] = await data.json();
//     setDogImages(breed.url);
//     console.log(breed.url);
//     console.log(dogImages);
//   };

//   useEffect(() => {
//     getDogByBreed(dogImages);
//   }, []);

//   return (
//     <div>
//       <h1>{eachDogName}</h1>
//       {dogName.map((dogimg) => (
//         <img src={dogimg.image.url} alt="dog" />
//       ))}
//     </div>
//   );
// };

// export default DogDescription;
