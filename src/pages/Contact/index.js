import React from 'react';
import { Layout, IlustracionWrapper, Ilustracion, Distriandamios  } from './styles';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Button from '../../components/Button';
import Divider from '../../components/Divider';
import Redes from '../../components/Redes';
import Puntos from '../../components/Puntos';

import ContactUs from '../../assets/contactUs.svg';

import Contactanos from '../../assets/contactanos.svg';

const Contact = () => {
    return(
        <Layout>
            <Navbar />
            <Distriandamios src={Contactanos} alt="Logotipo de Distriandamios"/>
            <IlustracionWrapper>
                <Ilustracion src={ContactUs} alt="Ilustración de un andamio con personal de trabajo"></Ilustracion>
            </IlustracionWrapper>
            <Button />
            <Divider />
            <Redes />
            <Divider />
            <Puntos />
            <Divider />
            <Footer />
        </Layout>
    );
};

export default Contact;