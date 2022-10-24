import React from 'react';
import { Link } from 'react-router-dom';

import emptyCart from '../assets/img/empty-cart.png';

export const CartEmpty: React.FC = () => (
  <div className="container container--cart">
    <div className="cart cart--empty">
      <h2>
        Кошик порожній <span>😕</span>
      </h2>
      <p>
        Найімовірніше, ви не замовляли ще піцу.
        <br />
        Щоб замовити піцу, перейдіть на головну сторінку.
      </p>
      <img src={emptyCart} alt="Empty cart" />
      <Link to="/React-Pizza_V2" className="button button--black">
        <span>Повернутися назад</span>
      </Link>
    </div>
  </div>
);
