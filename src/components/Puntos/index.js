import React from 'react';

import PuntoFontibon from '../../components/CardPuntoFontibon';
import PuntoPrado from '../../components/CardPuntoPrado';
import PuntoOlaya from '../../components/CardPuntoOlaya';

import { PuntosWrapper, Titulo } from './styles';

const Puntos = () => {
  return(
    <PuntosWrapper>
      <Titulo>Puntos de atención</Titulo>
      <PuntoFontibon />
      <PuntoPrado />
      <PuntoOlaya />
    </PuntosWrapper>
  );
};

export default Puntos;