import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';

import { useSelector } from 'react-redux';
import { darkTheme, lightTheme } from '../services/theme';
import { ThemeProvider } from '@mui/material/styles';
import { selectTheme } from 'redux/theme/themeSlice';
import { useAuthenticationQuery } from 'redux/userAuth/authApi';
const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'));
const AddContactsPage = lazy(() => import('../pages/AddContacts'));

export const App = () => {
  const theme = useSelector(selectTheme);
  useAuthenticationQuery();
  return (
    <ThemeProvider theme={theme.darkTheme ? darkTheme : lightTheme}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
            }
          />
          <Route
            path="/addContacts"
            element={
              <PrivateRoute
                redirectTo="/login"
                component={<AddContactsPage />}
              />
            }
          />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};
