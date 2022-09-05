import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Loader } from 'components';
import { Header } from 'modules';
import { fetchRefreshCurrentUser } from 'redux/auth/auth-operations';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage/ContactsPage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRefreshCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Header />

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Suspense>
    </>
  );
}
