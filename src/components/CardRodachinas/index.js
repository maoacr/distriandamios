import React from 'react';

import servicios from '../../assets/servicios.png';
import { CardWrapper, Andamio, Description, Type, LinkCard } from './styles';

export const CardRodachinas = () => {

  return(
    <LinkCard href="https://wa.link/ky26ee">
      <CardWrapper>
        <Andamio src={servicios} alt="Tornillo nivelador"></Andamio>
        <Description>
          <Type>Rodachinas</Type>
        </Description>
      </CardWrapper>
    </LinkCard>
  );
}

export default CardRodachinas;