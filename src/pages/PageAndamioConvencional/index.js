import React from 'react';
import { Layout, Data, Titulo, Descripcion, FotoContainer,Foto, Buttons, ButtonServicio, ButtonDocs, Link } from './styles';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Divider from '../../components/Divider';

import Team from '../../assets/team-distrtiandamios.jpg';
import Documentacion from '../../assets/manual-de-uso-andamio-convencional.pdf';

const PageAndamioConvencional = () => {
  return(
    <Layout>
        <Navbar />
        <Titulo>Andamio Convencional</Titulo>
        <FotoContainer>                         
            <Foto src={Team} alt="Equipo distriandamios" />
        </FotoContainer>    
        <Data>
            <Descripcion>
            Equipo metálico tubular para trabajar en altura. <br/><br/>Nuestro equipo está fabricado con los más altos índices de calidad y la más alta seguridad cumpliendo con la normatividad técnica para trabajos de construcción.<br/><br/><br/><br/>Según la NTC -1641 la clasificación de los equipos es:
            <br/><br/>Andamios diseñados y construidos para soportar cargas no mayores de 500kg/m² destinados para trabajos de construcción con almacenamientos de pesos medianos y ligeros sobre la plataforma en adición a peso del operario.
            </Descripcion>
        </Data>
        <Divider />
        <Buttons>
            <Link href="https://wa.link/ff89ed"><ButtonServicio>Contactar asesor</ButtonServicio></Link>
            <Link href={Documentacion} download><ButtonDocs>Documentación</ButtonDocs></Link>
        </Buttons>
        <Footer />
    </Layout>
);
}

export default PageAndamioConvencional;