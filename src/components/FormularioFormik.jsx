import { useFormik, Form, Formik, Field } from "formik";
import Titulo from "./Titulo";

function FormularioFormik() {
  const handleSubmit = (values) => {
    console.log(values);
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      movil: "",
    },
    onSubmit: handleSubmit,
  });

  return (
    <div className="row justify-content-md-center">
      <Titulo />

      <div className="col-md-7 py-5 px-">
        <h2 className="text-center mb-3">Registrar Empleados</h2>
        <Formik
          initialValues={formik.initialValues}
          onSubmit={formik.handleSubmit}>
          <Form>
            <div className="mb-3">
              <label className="form-label">Nombre del Alumno</label>
              <Field type="text" name="username" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Email del Alumno</label>
              <Field type="email" name="email" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Télefono del Alumno</label>
              <Field type="number" name="movil" className="form-control" />
            </div>
            <button type="submit">Enviar</button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default FormularioFormik;
