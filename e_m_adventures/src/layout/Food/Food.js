import React from 'react';

import HeaderSmall from '../../components/Header/HeaderSmall/HeaderSmall';
import FoodContent from '../../components/Food/FoodContent/FoodContent';
import Footer from '../../components/Footer/Footer';

const Food = (props) => {
  return (
    <div className={'layoutGrid'}>
      <HeaderSmall />
      <FoodContent />
      <Footer />
    </div>
  );
};

export default Food;
