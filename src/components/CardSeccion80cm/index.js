import React from 'react';

import SeccionesYPartes from '../../assets/seccionesYPartes.png';
import { CardWrapper, Andamio, Description, Family, Type, LinkCard } from './styles';

export const CardSeccion80cm = () => {

  return(
    <LinkCard href="https://wa.link/48m8xg">
      <CardWrapper>
        <Andamio src={SeccionesYPartes} alt="Andamio convencional"></Andamio>
        <Description>
          <Family>Sección de andamio </Family>
          <Type>0.8 mts X 1.5 mts</Type>
        </Description>
      </CardWrapper>
    </LinkCard>
  );
}

export default CardSeccion80cm;