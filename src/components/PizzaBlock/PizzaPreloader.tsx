import React from 'react';
import ContentLoader from 'react-content-loader';

export const PizzaPreloader: React.FC = () => (
  <ContentLoader
    speed={2}
    width={315}
    height={530}
    viewBox="0 0 315 530"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    <circle cx="140" cy="125" r="125" />
    <rect x="0" y="268" rx="5" ry="5" width="280" height="24" />
    <rect x="0" y="312" rx="5" ry="5" width="280" height="84" />
    <rect x="0" y="412" rx="5" ry="5" width="120" height="44" />
    <rect x="140" y="412" rx="22" ry="22" width="140" height="44" />
  </ContentLoader>
);
