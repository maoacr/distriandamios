import React from 'react';

import { Carousel, Container, Aliado } from './styles'

import AliadoUno from '../../assets/AliadoUno.jpeg';
import AliadoDos from '../../assets/AliadoDos.jpeg';
import AliadoTres from '../../assets/AliadoTres.jpeg';
import AliadoCuatro from '../../assets/AliadoCuatro.jpeg';

const Asesorados = () => {
  return(
    <>
      <h3>Hemos asesorado compañias increibles !</h3>
      <Container>
        <Carousel>
          <Aliado src={AliadoUno} alt=""/>
          <Aliado src={AliadoDos} alt=""/>
          <Aliado src={AliadoTres} alt=""/>
          <Aliado src={AliadoCuatro} alt=""/>
        </Carousel>
      </Container>
    </>
  );
};

export default Asesorados;