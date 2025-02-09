import React from "react";

import AppRouter from "./router/AppRouter";
import { AuthProvider } from "./hooks/AutoContex";

const HeroesApp = () => {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
};

export default HeroesApp;
