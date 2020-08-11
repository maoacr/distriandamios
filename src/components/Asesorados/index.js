import React from 'react';

import { Carousel, Container, Aliado } from './styles'

import AliadoUno from '../../assets/logo.svg';

const Asesorados = () => {
  return(
    <>
      <h3>Hemos asesorado compañias increibles !</h3>
      <Container>
        <Carousel>
          <Aliado src={AliadoUno} alt=""/>
          <Aliado src={AliadoUno} alt=""/>
          <Aliado src={AliadoUno} alt=""/>
          <Aliado src={AliadoUno} alt=""/>
          <Aliado src={AliadoUno} alt=""/>
          <Aliado src={AliadoUno} alt=""/>
        </Carousel>
      </Container>
    </>
  );
};

export default Asesorados;