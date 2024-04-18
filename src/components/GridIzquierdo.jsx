import PropTypes from "prop-types";

function GridIzquierdo({ data }) {
  console.log("La data es:", data);

  // Desestructura los datos del formulario
  const { username, email, movil } = data;

  return (
    <>
      <div
        className="col-md-5 px-3"
        style={{ borderRight: "1px solid #7366ff" }}>
        {/* Renderiza los datos solo si hay datos disponibles */}
        {data && (
          <>
            <div className="justify-content-md-start">
              <h2>
                Datos del Alumno <hr />
              </h2>
              <p className="text-start">
                <i className="bi bi-person"></i> &nbsp; &nbsp; Alumno:
                {username}
              </p>
              <p className="text-start">
                <i className="bi bi-telephone"></i> &nbsp; &nbsp; Email:
                {email}
              </p>
              <p className="text-start">
                <i className="bi bi-person-arms-up"></i> &nbsp; &nbsp; Teléfono:
                {movil}
              </p>
            </div>
          </>
        )}
      </div>
    </>
  );
}

// Define la validación de tipo para la prop 'data'
GridIzquierdo.propTypes = {
  data: PropTypes.object, // No es obligatorio, ya que puedes enviar null
};

export default GridIzquierdo;
