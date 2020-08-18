import React from 'react';

import Escaleras from '../../assets/escalera.jpg';
import { CardWrapper, Andamio, Description, Type, LinkCard } from './styles';

export const CardEscaleraExtension = () => {

  return(
    <LinkCard href="/escalera-extension">
      <CardWrapper>
        <Andamio src={Escaleras} alt="Escaleras"></Andamio>
        <Description>
          <Type>Escalera de Extensión</Type>
        </Description>
      </CardWrapper>
    </LinkCard>
  );
}

export default CardEscaleraExtension;