import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const onLogin = () => {
    navigate("/marvel");
  };

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

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
                    Username:
                  </label>
                  <br />
                  <input
                    type="text"
                    name="username"
                    id="username"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password" className="text-info">
                    Password:
                  </label>
                  <br />
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <br />
                  <button
                    className="btn btn-info btn-md"
                    onClick={onLogin}
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
                <button type="button" className="close" onClick={closeModal}>
                  &times;
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="register-username">Username:</label>
                    <input
                      type="text"
                      id="register-username"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="register-password">Password:</label>
                    <input
                      type="password"
                      id="register-password"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="register-email">Email:</label>
                    <input
                      type="email"
                      id="register-email"
                      className="form-control"
                    />
                  </div>
                  <button type="button" className="btn btn-primary btn-block">
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
