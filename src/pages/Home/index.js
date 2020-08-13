import React from 'react';

import { Layout, IlustracionWrapper, Ilustracion, Distriandamios } from './styles';

import Logotipo from '../../assets/tipografia.svg';

import Divider from '../../components/Divider';
import Navbar from '../../components/Navbar';
import Button from '../../components/Button';
import Footer from '../../components/Footer';
import Cards from '../../components/Cards';
import Asesorados from '../../components/Asesorados';
import Recomendaciones from '../../components/Recomendaciones';

import Andamio from '../../assets/andamio.svg'

const Home = () => {
  return (
    <Layout>
      <Navbar />
      <Distriandamios src={Logotipo} alt="Logotipo de Distriandamios"/>
      <IlustracionWrapper>
        <Ilustracion src={Andamio} alt="Ilustración de un andamio con personal de trabajo"></Ilustracion>
      </IlustracionWrapper>
      <Button />
      <Divider />
      <Cards />
      <Divider />
      <Asesorados />
      <Divider />
      <Recomendaciones />
      <Footer />
    </Layout>
  );
};

export default Home;