import React from 'react';

import AndamioConvencional from '../../assets/andamio-convencional.jpg';
import { CardWrapper, Andamio, Description, Family, Type } from './styles';

export const CardAndamioConvencional = () => {

  return(
    <a href="/andamioconvencional">
      <CardWrapper>
        <Andamio src={AndamioConvencional} alt="Andamio convencional"></Andamio>
        <Description>
          <Family>Andamio</Family>
          <Type>Convencional</Type>
        </Description>
      </CardWrapper>
    </a>
  );
}

export default CardAndamioConvencional;