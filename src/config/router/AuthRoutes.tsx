import { Navigate, Route, Routes } from 'react-router-dom';
import { Login } from '../../app/modules/auth/pages/Login';
import React from 'react';

// TODO: tipado

export const AuthRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};
