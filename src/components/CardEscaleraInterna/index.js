import React from 'react';

import AndamioConvencional from '../../assets/andamio-convencional.jpg';
import { CardWrapper, Andamio, Description, Family, Type, LinkCard } from './styles';

export const CardEscaleraInterna = () => {

  return(
    <LinkCard href="/andamio-convencional">
      <CardWrapper>
        <Andamio src={AndamioConvencional} alt="Andamio convencional"></Andamio>
        <Description>
          <Type>Escalera interna</Type>
          <Family>para andamio</Family>
        </Description>
      </CardWrapper>
    </LinkCard>
  );
}

export default CardEscaleraInterna;