import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loadable from 'react-loadable';

import Home from './pages/Home';
import MainLayout from './layouts/MainLayout';

import './scss/app.scss'
import { Preloader } from './components';

// const Cart = React.lazy(() => import(/* webpackChunkName: "Cart" */ './pages/Cart')); //----или как ниже!
const Cart = Loadable({
  loader: () => import(/* webpackChunkName: "Cart" */ './pages/Cart'),
  loading: () => <Preloader />,
});

const FullPizza = React.lazy(() => import(/* webpackChunkName: "FullPizza" */ './pages/FullPizza'));
const NotFound = React.lazy(() => import(/* webpackChunkName: "NotFound" */ './pages/NotFound'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="React-Pizza_V2" element={<Home />} />
        <Route path="React-Pizza_V2/cart" element={<Cart />}/>
        <Route path="React-Pizza_V2/pizza/:id" element={
            <Suspense fallback={<Preloader />}>
              <FullPizza />
            </Suspense>
          }
        />
        <Route path="*" element={
            <Suspense fallback={<Preloader />}>
              <NotFound />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
