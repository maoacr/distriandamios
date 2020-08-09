import React from 'react';

import { Layout } from './styles';

import Navbar from '../../components/Navbar';
import Button from '../../components/Button';
import Footer from '../../components/Footer';

import Andamio from '../../assets/andamio.svg'

const Home = () => {
  return (
    <Layout>
      <Navbar />
      <img src={Andamio}></img>
      <Button />
      <Footer />
    </Layout>
  );
};

export default Home;