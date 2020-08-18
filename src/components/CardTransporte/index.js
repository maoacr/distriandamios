import React from 'react';

import Transporte from '../../assets/transporte.jpg';
import { CardWrapper, Andamio, Description, Type, LinkCard } from './styles';

export const CardTransporte = () => {

  return(
    <LinkCard href="https://wa.link/xjnnyg">
      <CardWrapper>
        <Andamio src={Transporte} alt="Transporte"></Andamio>
        <Description>
          <Type>Transporte</Type>
        </Description>
      </CardWrapper>
    </LinkCard>
  );
}

export default CardTransporte;