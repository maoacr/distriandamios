import React from 'react';

import Escaleras from '../../assets/escalera.jpg';
import { CardWrapper, Andamio, Description, Type, LinkCard } from './styles';

export const CardMontajeYDesmontaje = () => {

  return(
    <LinkCard href="https://wa.link/b411ju">
      <CardWrapper>
        <Andamio src={Escaleras} alt="Escaleras"></Andamio>
        <Description>
          <Type>Montaje y Desmontaje</Type>
        </Description>
      </CardWrapper>
    </LinkCard>
  );
}

export default CardMontajeYDesmontaje;