import React, { useEffect, useState } from 'react'
import Card from './components/Card'
import getDog from './components/helpers/getDog'
import Select from './components/Select'

const initialDog = {
  image: "",
  breed: {
    id: 0,
    name: "",
    height: "",
    weight: "",
    temperament: ""
  }
}

const App = () => {
  const [dog, setDog] = useState(initialDog);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    updateDog();
  }, []);

  const updateDog = (breedId) => {
    setLoading(true);
    getDog(breedId).then((newDog) => {
      setDog(newDog);
      setLoading(false);
    });
  }

  return (
    <div className="app">
      <Select updateDog={updateDog} />
      
      <Card dog={dog} updateDog={updateDog} loading={loading} />
    </div>
  )
}

export default App


