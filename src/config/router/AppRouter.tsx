import { Route, Routes } from "react-router-dom";
import { AuthRoutes } from "./AuthRoutes";
import { JournalRoutes } from './JournalRoutes';
import { PrivateRoutes } from './PrivateRoutes';
import React from 'react';

// TODO: tipado

// Tipo del componente
export const AppRouter: React.FC = () => {
  return (
    <Routes>
      {/* Login */}
      <Route path="/auth/*" element={<AuthRoutes />} />

      {/* Rutas Protegidas */}
      <Route path="/*" element={
        <PrivateRoutes>
          <JournalRoutes />
        </PrivateRoutes>
      } />
    </Routes>
  );
}
