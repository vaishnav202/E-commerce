import React from 'react';
import ProductSlider from '../components/slider/ProductSlider';
import ProductCardList from '../components/cards/ProductCardList';
import AboutComp from '../components/about/AboutComp';
import Rating from '../components/rating/Rating';

const HomePage = () => {
  return (
    <div>
      <ProductSlider />
      <AboutComp/>
      <ProductCardList />
      
      <Rating/>
    </div>
  );
};

export default HomePage;