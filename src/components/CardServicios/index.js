import React from 'react';

import servicios from '../../assets/servicios.png';
import { CardWrapper, Andamio, Description, Family, Type, LinkCard } from './styles';

export const Cardservicios = () => {

  return(
    <LinkCard href="/servicios">
      <CardWrapper>
        <Andamio src={servicios} alt="Andamio convencional"></Andamio>
        <Description>
          <Type>Servicios</Type>
        </Description>
      </CardWrapper>
    </LinkCard>
  );
}

export default Cardservicios;