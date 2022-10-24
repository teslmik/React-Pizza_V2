import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loadable from 'react-loadable';

import Home from './pages/Home';
import MainLayout from './layouts/MainLayout';

import './scss/app.scss'

// const Cart = React.lazy(() => import(/* webpackChunkName: "Cart" */ './pages/Cart')); //----или как ниже!
const Cart = Loadable({
  loader: () => import(/* webpackChunkName: "Cart" */ './pages/Cart'),
  loading: () => <div className='container'>Завантаження кошика...</div>,
});

const FullPizza = React.lazy(() => import(/* webpackChunkName: "FullPizza" */ './pages/FullPizza'));
const NotFound = React.lazy(() => import(/* webpackChunkName: "NotFound" */ './pages/NotFound'));

function App() {
  return (
    <Routes>
      <Route path="/React-Pizza_V2" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route path="/cart" element={<Cart />}/>
        <Route path="/pizza/:id" element={
            <Suspense fallback={<div className='container'>Завантаження піци...</div>}>
              <FullPizza />
            </Suspense>
          }
        />
        <Route path="*" element={
            <Suspense fallback={<div className='container'>Завантаження сторінки...</div>}>
              <NotFound />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
