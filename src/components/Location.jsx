const Location = ({ location }) => {

  const { name, dimension, type, residents } = location;

  return (
    <div>
      <div className="location">
        <div>
          <h2>Nombre: </h2>
          <p> { name }</p>
        </div>

        <div>
          <h2>Tipo: </h2>
          <p>{ type }</p>
        </div>

        <div>
          <h2>Dimensión: </h2>
          <p>{ dimension }</p>
        </div>

        <div>
          <h2>Población: </h2>
          <p>{ residents?.length }</p>
        </div>
      </div>
    </div>
  )
}

export default Location