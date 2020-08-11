import React from 'react';

import Escaleras from '../../assets/escalera.jpg';
import { CardWrapper, Andamio, Description, Type, LinkCard } from './styles';

export const Cardservicios = () => {

  return(
    <LinkCard href="/escaleras">
      <CardWrapper>
        <Andamio src={Escaleras} alt="Escaleras"></Andamio>
        <Description>
          <Type>Escaleras</Type>
        </Description>
      </CardWrapper>
    </LinkCard>
  );
}

export default Cardservicios;