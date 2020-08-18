import React from 'react';

import MontajeYDesmontaje from '../../assets/team-distrtiandamios.jpg';
import { CardWrapper, Andamio, Description, Type, LinkCard } from './styles';

export const CardMontajeYDesmontaje = () => {

  return(
    <LinkCard href="https://wa.link/b411ju">
      <CardWrapper>
        <Andamio src={MontajeYDesmontaje} alt="MontajeYDesmontaje"></Andamio>
        <Description>
          <Type>Montaje y Desmontaje</Type>
        </Description>
      </CardWrapper>
    </LinkCard>
  );
}

export default CardMontajeYDesmontaje;