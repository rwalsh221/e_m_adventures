import React from 'react';

// import x from '../../assets/img/accommodation'

export const getAccommodationHeroImage = (accomId) => {
  const imageImports = require.context(
    `../../assets/img/accommodation/${accomId}/hero/hero.jpeg`,
    true,
    /\.(jpg|jpeg)$/
  );
  //   const heroImage = imageImports
  //     .keys()
  //     .map((elem) => (
  //       <img alt="hero" key={elem} src={imageImports(elem).default} />
  //     ));
  //   return heroImage;
};

// export const getAccommodationAdditionalImages = () => {
//   const templates = require.context(
//     '../../../../../public/img/accommodation/acc0001',
//     true,
//     /\.(jpg|jpeg)$/
//   );
//   console.log(templates.keys());
//   console.log(templates('./1.jpg').default);
//   const images = templates
//     .keys()
//     .map((elem) => <img key={elem} src={templates(elem).default} />);

//   console.log(images);
//   console.log(
//     `img/accommodation/${imageProps.accomId}/${imageProps.imageName}.jpg`
//   );
// };
