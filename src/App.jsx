import { Route, Routes } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { lazy, Suspense } from 'react';
const Header = lazy(() => import('./modules/Header/Header'));
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage/ContactsPage'));

export function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
      </Suspense>
    </>
  );
}
