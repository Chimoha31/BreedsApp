import React, { useEffect, useState } from 'react'
import Card from './components/Card'
import getDog from './components/helpers/getDog'
import Select from './components/Select'

const initialDog = {
  image: "https://thehappypuppysite.com/wp-content/uploads/2020/04/Morkie-Temperament-HP-long_.jpg",
  breed: {
    id: "1",
    name: "Morkie",
  }
}


const App = () => {
  const [dog, setDog] = useState(initialDog);

  useEffect(() => {
    updateDog();
  }, []);

  const updateDog = (breedId) => {
    getDog(breedId).then((newDog) => {
      setDog(newDog);
    });
  }

  return (
    <div className="app">
      <Select updateDog={updateDog} />
      <Card dog={dog} />
    </div>
  )
}

export default App


