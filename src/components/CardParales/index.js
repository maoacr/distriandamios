import React from 'react';

import servicios from '../../assets/servicios.png';
import { CardWrapper, Andamio, Description, Type, LinkCard } from './styles';

export const CardParales = () => {

  return(
    <LinkCard href="https://wa.link/h00btf">
      <CardWrapper>
        <Andamio src={servicios} alt="Andamio convencional"></Andamio>
        <Description>
          <Type>Parales metálicos</Type>
        </Description>
      </CardWrapper>
    </LinkCard>
  );
}

export default CardParales;