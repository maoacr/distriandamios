import React from 'react';
import { Layout, Data, Titulo, Descripcion, FotoContainer,Foto } from './styles';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

import Team from '../../assets/ teamDistriandamios.jpg';

const AboutUs = () => {
    return(
        <Layout>
            <Navbar />
            <Titulo>Nuestro equipo</Titulo>
            <FotoContainer>                      
                <Foto src={Team} alt="Equipo distriandamios" />
            </FotoContainer>    
            <Data>
                <Descripcion>
                <strong>Distriandamios S.A.S.</strong> <br/><br/>Somos una empresa con años de experiencia en la fabricación, venta y alquiler de andamios de alta calidad certificados, así como tubulares y accesorios complementarios para su uso, contamos con altos índices de calidad tanto en nuestros equipos como en nuestros servicios, además brindamos asesoría en estructuras y seguridad para su proyecto, cumplimos las expectativas del mejor servicio a nuestros clientes tanto en la Capital como a nivel nacional.
                </Descripcion>
            </Data>
            <Footer />
        </Layout>
    );
};

export default AboutUs;