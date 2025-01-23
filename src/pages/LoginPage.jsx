import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/AutoContex";
import axios from "axios";


const LoginPage = () => {
  const navigate = useNavigate();
  //const { register, login } = useAuth();
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });
  const [showModal, setShowModal] = useState(false);

  const [registerData, setRegisterData] = useState({
    nombre: "",
    identificacion: "",
    correo: "",
  });





 /*  const handleLogin = async () => {
    const result = await login(credentials);
    if (result.success) {
      navigate("/marvel");
    } else {
      setErrorMessage(result.message);
    }
  }; */


 /*  const handleRegister = async () => {
    const result = await register(newUser);
    if (result.success) {
      setShowModal(false);
      alert("Usuario registrado exitosamente");
    } else {
      alert(result.message);
    }
  }; */

 const onLogin = () => {
    navigate("/marvel");
  };
 
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);




  const handleRegister = async () => {
    try {
      const response = await axios.post("http://localhost:8080/api/usuarios",registerData);
      console.log("Respuesta del servidor:", response.data); // Validar en consola
      alert("Registro exitoso");
      closeModal();
    } catch (error) {
      console.error("Error al registrar:", error);
      alert("Hubo un error al registrar.");
    }
  };



/*   const handleLogin = async () => {
    const testData = {
      username: "andres mateus",
      password: "101025214",
    }; */

 /*    try {
      const response = await axios.get("http://localhost:8080/api/usuarios", {
        params: {
          username: testData.username,
          password: testData.password,
        },
      });

      console.log("Respuesta del servidor:", response.data);

      // Validación de credenciales con datos quemados
      if (
        response.data.nombre === testData.username &&
        response.data.identificacion === testData.password
      ) {
        alert("Inicio de sesión exitoso");
        navigate("/marvel");
      } else {
        alert("Credenciales incorrectas");
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      alert("Hubo un error al intentar iniciar sesión.");
    }
  }; */

  return (
    <div id="login">
      <h3 className="text-center text-white pt-5">Marvel Comic</h3>
      <div className="container">
        <div
          id="login-row"
          className="row justify-content-center align-items-center"
        >
          <div id="login-column" className="col-md-6">
            <div id="login-box" className="col-md-12">
              <form id="login-form" className="form" action="" method="post">
                <h3 className="text-center text-info">Login</h3>
                <div className="form-group">
                  <label htmlFor="username" className="text-info">
                    Nombre:
                  </label>
                  <br />
                  <input
                    type="text"
                    name="username"
                    id="username"
                    className="form-control"
                    //value={credentials.username}
                /*     onChange={(e) =>
                      setCredentials({ ...credentials, username: e.target.value })
                    } */
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password" className="text-info">
                    Identificacion:
                  </label>
                  <br />
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="form-control"
                    //value={credentials.password}
                 /*    onChange={(e) =>
                      setCredentials({ ...credentials, password: e.target.value })
                    } */
                  />
                </div>
     {/*            {errorMessage && <p className="text-danger">{errorMessage}</p>} */}
                <div className="form-group">
                  <br />
                  <button
                    className="btn btn-info btn-md"
                    //onClick={onLogin}
                    //onClick={handleLogin}
                    type="button"
                  >
                    Login
                  </button>
                </div>
                <div id="register-link" className="text-right">
                  <button
                    className="btn btn-link"
                    type="button"
                    onClick={openModal}
                  >
                    Registro
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="modal fade show" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Formulario de Registro</h5>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="register-username">Nombre:</label>
                    <input
                      type="text"
                      id="register-username"
                      className="form-control"
                      value={registerData.nombre}
                       onChange={(e) =>
                        setRegisterData({ ...registerData, nombre: e.target.value })
                      } 
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="register-password">Identificacion:</label>
                    <input
                      type="password"
                      id="register-password"
                      className="form-control"
                     value={registerData.identificacion}
                      onChange={(e) =>
                        setRegisterData({ ...registerData, identificacion: e.target.value })
                      } 
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="register-email">Correo:</label>
                    <input
                      type="email"
                      id="register-email"
                      className="form-control"
                      value={registerData.correo}
                       onChange={(e) =>
                        setRegisterData({ ...registerData, correo: e.target.value })
                      } 
                    />
                  </div>
                  <button 
                  type="button" 
                  className="btn btn-primary btn-block"
                  onClick={handleRegister}
               
                  >
                  Registrar
                  </button>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={closeModal}
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
