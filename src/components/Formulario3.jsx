import { useState } from "react";

import Titulo from "./Titulo";
//import GridIzquierdo from "./GridIzquierdo";

const Formulario3 = () => {
  const [datos, setDatos] = useState({
    username: "",
    email: "",
    movil: "",
  });

  const manejarCambioInput = (e) => {
    /*
    console.log(e.target);
    console.log(e.target.name, e.target.value);
    */

    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  const manejarEnvioFormulario = (e) => {
    e.preventDefault(); // Evita que se recargue la página al enviar el formulario
    console.log("Datos del formulario:", datos);
  };

  return (
    <div className="row justify-content-md-center">
      <Titulo />

      <div className="col-md-7 py-5 px-">
        <h2 className="text-center mb-3">Registrar Empleados</h2>
        <form onSubmit={manejarEnvioFormulario} method="POST">
          <div className="mb-3">
            <label className="form-label">Nombre del Alumno</label>
            <input
              type="text"
              name="username"
              className="form-control"
              onChange={manejarCambioInput}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email del Alumno</label>
            <input
              type="email"
              name="email"
              className="form-control"
              onChange={manejarCambioInput}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Télefono del Alumno</label>
            <input
              type="number"
              name="movil"
              className="form-control"
              onChange={manejarCambioInput}
            />
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default Formulario3;
