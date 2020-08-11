import React from 'react';

import { Carousel, Container, Aliado, Titulo } from './styles'

import AliadoUno from '../../assets/AliadoUno.jpeg';
import AliadoDos from '../../assets/AliadoDos.jpeg';
import AliadoTres from '../../assets/AliadoTres.jpeg';
import AliadoCuatro from '../../assets/AliadoCuatro.jpeg';

const Asesorados = () => {
  return(
    <>
      <Titulo>Hemos asesorado compañias increibles !</Titulo>
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