import axios from "axios";
import { useState, useEffect } from "react";

import Search from "./components/Search"
import Location from "./components/Location"
import Character from "./components/Character"
import Alert from "./components/Alert"

import heroImage from './img/hero.png'
import lettering from './img/rickAndMortyLetters.png'

const App = () => {

  const [ location, setLocation ] = useState({});
  const [ message, setMessage ] = useState('');
  const [ isValidSearch, setIsValidSearch ] = useState( false );

  useEffect( () => {
    setMessage('Ingresa una ubicación')
  }, [] )

  // FUNCTION TO CONSUME API
  const consumeAPI = idSearch => {

    setLocation({})

    axios.get( `https://rickandmortyapi.com/api/location/${ idSearch }` )
      .then( answer => setLocation( answer.data ) )
      .catch( () => {
        setMessage('No fue posible realizar la búsqueda');
        setLocation({})
      });
  }

  const showCharacters = () => {
    if ( isValidSearch ) {
      return  (
        <>
          <Location 
            location = { location }  
          />

          <div className="characters-grid">
            {
              location.residents?.map( ( residentURL, index ) => (
                <Character 
                  residentURL = { residentURL }
                  key = { index }
                />
              ))
            }
          </div>
        </>
      )
    } else {
      return ( <Alert message={ message } /> )
    }
  }

  return (
    <div>
      <div className="hero">
        <img src={ heroImage } alt="Rick and Morty" className="hero__img" />
        <img src={ lettering } alt="Rick and Morty lettering" className="hero__letters"/>
        <Search 
          consumeAPI = { consumeAPI }
          setIsValidSearch = { setIsValidSearch }
        />      
      </div>

      <div className="container">
        {showCharacters()}
      </div>

    </div>
  )
}

export default App