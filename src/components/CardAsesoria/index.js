import React from 'react';

import Asesoria from '../../assets/asesoria.jpg';

import { CardWrapper, Andamio, Description, Type, LinkCard } from './styles';

export const CardAsesoria = () => {

  return(
    <LinkCard href="https://wa.link/ljf0jd">
      <CardWrapper>
        <Andamio src={Asesoria} alt="Asesoria"></Andamio>
        <Description>
          <Type>Asesoria</Type>
        </Description>
      </CardWrapper>
    </LinkCard>
  );
}

export default CardAsesoria;