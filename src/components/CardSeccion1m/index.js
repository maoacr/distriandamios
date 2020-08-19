import React from 'react';

import SeccionesYPartes from '../../assets/seccionesYPartes.png';
import { CardWrapper, Andamio, Description, Family, Type, LinkCard } from './styles';

export const CardSeccion1m = () => {

  return(
    <LinkCard href="https://wa.link/zxzk0q">
      <CardWrapper>
        <Andamio src={SeccionesYPartes} alt="Andamio convencional"></Andamio>
        <Description>
          <Family>Sección de andamio </Family>
          <Type>1 mts X 1.5 mts</Type>
        </Description>
      </CardWrapper>
    </LinkCard>
  );
}

export default CardSeccion1m;