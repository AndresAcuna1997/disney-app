import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from './router';
import { AuthProvider } from './context/auth/AuthProvider';
import { ContentProvider } from './context/content/ContentProvider';

export const DisneyApp = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ContentProvider>
          <AppRouter />
        </ContentProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};