import axios from 'axios';
import { useState, useEffect } from "react"

const Character = ({ 
  residentURL
}) => {

  const [ resident, setResident ] = useState({})

  useEffect( () => {

    axios.get( residentURL )
      .then( resp => {
        setResident( resp.data )
      } );

  }, [] );  

  const { image, name, species, origin, status, episode } = resident;

  return (
    <div className="character">
      <div className="characterBox">
        <img src={ image } alt="Character image" className="character__img" />
      </div>

      <div className="character__info">
        <h3>{ name }</h3>

        <div>
          <p className='character__feature'>Raza</p>
          <p>{ species }</p>
        </div>

        <div>
          <p className='character__feature'>Origen</p>
          <p>{ origin?.name }</p>
        </div>

        <div>
          <p className='character__feature'>Aparición en episodios</p>
          <p>{ episode?.length }</p>
        </div>

        <div className="character__state">
          <div className={`character__circle ${ status === 'Alive' ? 'alive' : status === 'Dead' ? 'dead' : 'unknown'}`}></div>
          <p>{ status }</p>
        </div>

      </div>

    </div>
  )
}

export default Character