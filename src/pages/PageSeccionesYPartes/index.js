import React from 'react';

import { Layout, Titulo, Subtitulo } from './styles';

import Navbar from '../../components/Navbar';

const PageSeccionesYPartes = () => {
  return(
    <Layout>
      <Navbar />
      <Subtitulo>Venta y Alquiler de </Subtitulo>
      <Titulo>Secciones</Titulo>
    </Layout>
  );
}

export default PageSeccionesYPartes;