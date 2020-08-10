import React from 'react';

import AndamioConvencional from '../../assets/andamio-convencional.jpg';
import { CardWrapper, Andamio, Description, Family, Type, LinkCard } from './styles';

export const CardAndamioConvencional = () => {

  return(
    <LinkCard href="/andamio-convencional">
      <CardWrapper>
        <Andamio src={AndamioConvencional} alt="Andamio convencional"></Andamio>
        <Description>
          <Family>Andamio</Family>
          <Type>Convencional</Type>
        </Description>
      </CardWrapper>
    </LinkCard>
  );
}

export default CardAndamioConvencional;