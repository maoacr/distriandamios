import React from 'react';

import Escaleras from '../../assets/escalera.jpg';
import { CardWrapper, Andamio, Description, Type, LinkCard } from './styles';

export const CardTransporte = () => {

  return(
    <LinkCard href="https://wa.link/xjnnyg">
      <CardWrapper>
        <Andamio src={Escaleras} alt="Escaleras"></Andamio>
        <Description>
          <Type>Transporte</Type>
        </Description>
      </CardWrapper>
    </LinkCard>
  );
}

export default CardTransporte;