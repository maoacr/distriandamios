import React from 'react';

import { Layout } from './styles';

import Navbar from '../../components/Navbar';
import Button from '../../components/Button';



const Home = () => {
  return (
    <Layout>
      <Navbar />
      <Button />
    </Layout>
  );
};

export default Home;