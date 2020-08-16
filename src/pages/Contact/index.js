import React from 'react';
import { Layout, IlustracionWrapper, Ilustracion, Distriandamios, LastSection, GuardarContacto, Enunciado, Correo } from './styles';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Button from '../../components/Button';
import Divider from '../../components/Divider';
import Redes from '../../components/Redes';
import Puntos from '../../components/Puntos';

import ContactUs from '../../assets/contactUs.svg';

import Contactanos from '../../assets/contactanos.svg';

const ContactFile = '../../assets/'

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
            <LastSection>
                <Enunciado>Si tienes solicitudes, dudas o inquietudes, puedes escribirnos o llamarnos aquí:</Enunciado>
                <Correo href="mailto:distriandamios@gmail.com" >distriandamios@gmail.com</Correo>
                <h2><strong>PBX :</strong> 786 84 95</h2>
                <Enunciado>Guarda un contácto en tu teléfono con todos nuestros datos como dirección, página web y PBX en un solo click</Enunciado>
                <a href={ContactFile} download="Distriandamios SAS"><GuardarContacto>Guardar Contacto</GuardarContacto></a>
            </LastSection>
            <Footer />
        </Layout>
    );
};

export default Contact;