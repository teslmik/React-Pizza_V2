import axios from 'axios';
import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Preloader } from '../components';

const FullPizza: React.FC = () => {
  const [pizza, setPizza] = React.useState<{
    imageUrl: string;
    title: string;
    price: number;
  }>();
  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(`https://631604a05b85ba9b11ed85ad.mockapi.io/items/${id}`);
        setPizza(data);
      } catch (error) {
        alert("Помилка при завантаженні...");
        navigate('/React-Pizza_V2');
      }
    }

    fetchPizza();
  }, [id, navigate]);

  if (!pizza) {
    return <Preloader />;
  }

  return (
    <div className="container full-pizza">
      <div className="full-pizza__body">
        <img src={pizza.imageUrl} alt="" />
        <div>
          <h2>{pizza.title}</h2>
          <h4>{pizza.price} ₴</h4>
        </div>
      </div>
      <Link to="/React-Pizza_V2" className="button button--black">
        <span>Повернутися назад</span>
      </Link>
    </div>
  );
};

export default FullPizza;
