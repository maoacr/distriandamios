import React from 'react';

import AndamioColgante from '../../assets/andamio-colgante.jpg';
import { CardWrapper, Andamio, Description, Family, Type, LinkCard } from './styles';

export const CardAndamioColgante = () => {

  return(
    <LinkCard href="/andamio-colgante">
      <CardWrapper>
        <Andamio src={AndamioColgante} alt="Andamio colgante"></Andamio>
        <Description>
          <Family>Andamio</Family>
          <Type>Colgante</Type>
        </Description>
      </CardWrapper>
    </LinkCard>
  );
}

export default CardAndamioColgante;