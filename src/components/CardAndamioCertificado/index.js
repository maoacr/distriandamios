import React from 'react';

import AndamioCertificado from '../../assets/andamio-certificado.jpg';
import { CardWrapper, Andamio, Description, Family, Type, LinkCard } from './styles';

export const CardAndamioCertificado = () => {

  return(
    <LinkCard href="/andamio-certificado">
      <CardWrapper>
        <Andamio src={AndamioCertificado} alt="Andamio certificado"></Andamio>
        <Description>
          <Family>Andamio</Family>
          <Type>Certificado</Type>
        </Description>
      </CardWrapper>
    </LinkCard>
  );
}

export default CardAndamioCertificado;