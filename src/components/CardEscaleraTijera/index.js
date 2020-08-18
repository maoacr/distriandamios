import React from 'react';

import Escaleras from '../../assets/escalera.jpg';
import { CardWrapper, Andamio, Description, Type, LinkCard } from './styles';

export const CardEscaleraTijera = () => {

  return(
    <LinkCard href="/escalera-tijera">
      <CardWrapper>
        <Andamio src={Escaleras} alt="Escaleras"></Andamio>
        <Description>
          <Type>Escalera tipo Tijera</Type>
        </Description>
      </CardWrapper>
    </LinkCard>
  );
}

export default CardEscaleraTijera;