import { useState } from "react";

const Search = ({ 
  consumeAPI,
  setIsValidSearch
  }) => {

    const [ userSearch, setUserSearch ] = useState('');
    const [ error, setError ] = useState( false );

    const handleSubmit = e => {

      e.preventDefault();

      // Valide the form
      if ( userSearch.trim() === '' || Number( userSearch ) <= 0 || Number ( userSearch ) > 126 ) { 
        setError( true );
        return;
      } 

      setError( false );
      setUserSearch('');
      consumeAPI( userSearch );
      setIsValidSearch( true );
    }

  return (
    <form
      className ='form'
      onSubmit={ handleSubmit }>
      <div className={`form__field ${error ? 'error': ''}`}>
        <input 
          value = { userSearch }
          onChange = { e => { setUserSearch( e.target.value ) } }
          type = "number" 
          className='search-field'
          placeholder="Escribe el id de la ubicación ( 1 - 126 )"
        />
      </div>
      <input type="submit" value="Buscar" className="btn"/>
    </form>
  )
}

export default Search
