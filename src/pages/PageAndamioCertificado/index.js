import React from 'react';
import { Layout, Data, Titulo, Descripcion, FotoContainer,Foto, Buttons, ButtonServicio, ButtonDocs, Link } from './styles';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Divider from '../../components/Divider';

import Team from '../../assets/team-distrtiandamios.jpg';
import Documentacion from '../../assets/manual-de-uso-andamio-certificado.pdf';

const PageAndamioCertificado = () => {
  return(
    <Layout>
        <Navbar />
        <Titulo>Andamio Certificado</Titulo>
        <FotoContainer>                         
            <Foto src={Team} alt="Equipo distriandamios" />
        </FotoContainer>    
        <Data>
            <Descripcion>
            Los Andamios Certificados son las estructuras más eficientes para el trabajo en alturas disminuyendo al máximo el riesgo.<br/><br/>Nuestros andamios pueden soportar grandes cantidades de presión y peso, cumpliendo todas las normas técnicas de seguridad.<br/><br/>Andamio multidireccional por piezas, conformado por secuencias de módulos, que permiten ser armados de una manera fácil y rápida, ofreciendo los más altos niveles de seguridad para realizar trabajos en alturas.<br/><br/><br/><br/>Este sistema de andamio multidireccional llamado ring lock es el sistema más seguro y efectivo para trabajos tales como:<br/><br/><br/><br/>1. Mantenimientos de edificios<br/><br/>2. Pintura de extintores<br/><br/>3. Obras civiles<br/><br/>4. Mantenimientos industriales u montajes de escenario
            </Descripcion>
        </Data>
        <Divider />
        <Buttons>
            <Link href="https://wa.link/95xy1d"><ButtonServicio>Contactar asesor</ButtonServicio></Link>
            <Link href={Documentacion} download><ButtonDocs>Documentación</ButtonDocs></Link>
        </Buttons>
        <Footer />
    </Layout>
);
}

export default PageAndamioCertificado;