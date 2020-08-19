import React from 'react';

import servicios from '../../assets/servicios.png';
import { CardWrapper, Andamio, Description, Type, LinkCard } from './styles';

export const CardPlataforma = () => {

  return(
    <LinkCard href="https://wa.link/wylc52">
      <CardWrapper>
        <Andamio src={servicios} alt="Tornillo nivelador"></Andamio>
        <Description>
          <Type>Plataforma metálica</Type>
        </Description>
      </CardWrapper>
    </LinkCard>
  );
}

export default CardPlataforma;