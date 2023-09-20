import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import SharedLayout from '../components/SharedLayout';

const HomePage = lazy(() => import('../pages/MainPage'));
const CataloguePage = lazy(() => import('../pages/CataloguePage'));
const FavouritesPage = lazy(() => import('../pages/FavouritesPage'));

export const App = () => {

  return (
    <>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<HomePage />} />
            <Route
              path="/catalog"
              element={<CataloguePage />} />
            <Route
              path="/favorites"
              element={<FavouritesPage />} />
            <Route path="*" element={<HomePage />} />
          </Route>
        </Routes>
        <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
};
