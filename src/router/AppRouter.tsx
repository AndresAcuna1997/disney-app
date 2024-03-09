import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage, HomePage } from '../pages';
import { ProtectedRoute } from '.';


export const AppRouter = () => {

  return (
    <>
      <Routes>
        <Route path="/login" element={ <LoginPage /> } />
        <Route path="/"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          } />

        <Route path="*" element={ <Navigate to="/" /> } />
      </Routes >
    </>
  );
};