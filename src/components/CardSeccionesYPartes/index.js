import React from 'react';

import SeccionesYPartes from '../../assets/seccionesYPartes.png';
import { CardWrapper, Andamio, Description, Family, Type, LinkCard } from './styles';

export const CardSeccionesYPartes = () => {

  return(
    <LinkCard href="/secciones-y-partes">
      <CardWrapper>
        <Andamio src={SeccionesYPartes} alt="Andamio convencional"></Andamio>
        <Description>
          <Family>Venta y alquiler de</Family>
          <Type>Secciones y Partes</Type>
        </Description>
      </CardWrapper>
    </LinkCard>
  );
}

export default CardSeccionesYPartes;