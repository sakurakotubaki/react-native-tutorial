import React from 'react';
import { Image } from 'react-native';

const CatImage = () => {
  return (
    <Image
      source={require('../assets/cat.png')}
      style={{width: 200, height: 200}}
    />
  );
};

export default CatImage;