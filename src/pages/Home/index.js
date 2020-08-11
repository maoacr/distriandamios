import React from 'react';

import { Layout } from './styles';

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
      <img src={Andamio} alt="Ilustración de un andamio con personal de trabajo"></img>
      <Button />
      <Cards />
      <Asesorados />
      <Recomendaciones />
      <Footer />
    </Layout>
  );
};

export default Home;