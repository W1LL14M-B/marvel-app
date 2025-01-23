
import { createContext, useState, useContext } from "react";
import axios from "axios";



const AuthContext = createContext(undefined);

export const AuthProvider = ({children}) => {
    const [ isAuthenticated, setIsAuthenticated] = useState (false);
 
    const login = () => setIsAuthenticated(true) ;
   const logout = () => setIsAuthenticated(false);

   const validateService = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/usuarios", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre: "andres mateus",
          identificacion: "101025214",
          correo: "andres.mateus@gmail.com",
        }),
      });

      if (!response.ok) {
        throw new Error("Error validating service: " + response.statusText);
      }

      const data = await response.json();
      console.log("Service validation successful:", data);
    } catch (error) {
      console.error("Error validating service:", error);
    }
  };


/*    const login = async (credentials) => {
    try {
      const response = await axios.post("http://localhost:8080/api/usuarios/login", credentials);
      if (response.data.success) {
        setIsAuthenticated(true);
        return { success: true };
      } else {
        return { success: false, message: response.data.message || "Usuario no registrado" };
      }
    } catch (error) {
      return { success: false, message: error.response?.data?.message || "Error en el servidor" };
    }
  }; */


/*   const register = async (user) => {
    try {
      const response = await axios.post("http://localhost:8080/api/usuarios", user);
      return { success: true, data: response.data };
    } catch (error) {
      return { success: false, message: error.response?.data?.message || "Error al registrar usuario" };
    }
  }; */

 /*  const logout = () => setIsAuthenticated(false); */

return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, validateService }}>
    {children}
  </AuthContext.Provider>


)

}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
      throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
  };