import React from 'react';
import { Image } from 'react-native';

interface Props {
  width: number;
  height: number;
}

const Logo = ({ width, height }: Props) => {
  return <Image
    source={require('../../../assets/logo.png')}
    style={{
      width,
      height
    }}
  />
};

export default Logo;
