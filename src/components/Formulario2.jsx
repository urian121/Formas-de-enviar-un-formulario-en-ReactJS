import { useRef } from "react";

import Titulo from "./Titulo";

/**
 * Enviar este formulario al servidor, usando eUsando referencias en React
 */

const Formulario1 = () => {
  // Creamos referencias para cada campo del formulario
  const usernameRef = useRef();
  const emailRef = useRef();
  const movilRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Obtenemos los valores de los campos del formulario a través de las referencias
    const username = usernameRef.current.value;
    const email = emailRef.current.value;
    const movil = movilRef.current.value;
    console.log(username, email, movil);

    // Obtenemos los valores de los campos del formulario a través de las referencias
    /*
    const formData = {
      username: usernameRef.current.value,
      email: emailRef.current.value,
      movil: movilRef.current.value,
    };
    console.log(formData);
    */
  };

  return (
    <div className="row justify-content-md-center">
      <Titulo />

      <div className="col-md-7 py-5 px-">
        <h2 className="text-center mb-3">Registrar Empleados</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Nombre del Alumno</label>
            <input
              type="text"
              name="username"
              className="form-control"
              ref={usernameRef} // Referencia para el campo de nombre
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email del Alumno</label>
            <input
              type="email"
              name="email"
              className="form-control"
              ref={emailRef} // Referencia para el campo de email
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Télefono del Alumno</label>
            <input
              type="number"
              name="movil"
              className="form-control"
              ref={movilRef} // Referencia para el campo de teléfono
            />
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default Formulario1;
