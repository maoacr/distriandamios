import React from 'react';

import Escaleras from '../../assets/escalera.jpg';
import { CardWrapper, Andamio, Description, Type, LinkCard } from './styles';

export const CardAsesoria = () => {

  return(
    <LinkCard href="https://wa.link/ljf0jd">
      <CardWrapper>
        <Andamio src={Escaleras} alt="Escaleras"></Andamio>
        <Description>
          <Type>Asesoria</Type>
        </Description>
      </CardWrapper>
    </LinkCard>
  );
}

export default CardAsesoria;