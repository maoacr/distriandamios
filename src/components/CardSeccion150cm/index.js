import React from 'react';

import SeccionesYPartes from '../../assets/seccionesYPartes.png';
import { CardWrapper, Andamio, Description, Family, Type, LinkCard } from './styles';

export const CardSeccion150cm = () => {

  return(
    <LinkCard href="https://wa.link/5zyffg">
      <CardWrapper>
        <Andamio src={SeccionesYPartes} alt="Andamio convencional"></Andamio>
        <Description>
          <Family>Sección de andamio </Family>
          <Type>1.5 mts X 1.5 mts</Type>
        </Description>
      </CardWrapper>
    </LinkCard>
  );
}

export default CardSeccion150cm;