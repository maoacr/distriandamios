import React from 'react';

import CardAndamioConvencional from '../../components/CardAndamioConvencional';
import CardAndamioCertificado from '../../components/CardAndamioCertificado';
import CardAndamioColgante from '../../components/CardAndamioColgante';
import CardSeccionesYPartes from '../../components/CardSeccionesYPartes';
import CardServicios from '../../components/CardServicios';

import { CardsContainer } from './styles'

export const Cards = () => {
  return(
    <CardsContainer>
      <CardAndamioConvencional />
      <CardAndamioCertificado />
      <CardAndamioColgante />
      <CardSeccionesYPartes />
      <CardServicios />
    </CardsContainer>
  );
}

export default Cards;