import React from 'react';
import { Layout, Data, Titulo, Descripcion, FotoContainer,Foto, Buttons, ButtonServicio, ButtonDocs, Link, Subtitulo, Subcategoria } from './styles';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Divider from '../../components/Divider';

import Team from '../../assets/team-distrtiandamios.jpg';
import Documentacion from '../../assets/manual-de-uso-andamio-colgante.pdf';

const PageAndamioColgante = () => {
  return(
    <Layout>
        <Navbar />
        <Titulo>Andamio Colgante</Titulo>
        <Subtitulo> Manual y Eléctrico</Subtitulo>
        <FotoContainer>                         
            <Foto src={Team} alt="Equipo distriandamios" />
        </FotoContainer>    
        <Data>
            <Descripcion>
                Equipos auxiliares suspendidos de cables o sirgas, que se desplazan verticalmente por las fachadas mediante un mecanismo de elevación y descenso ; se utilizan para la realización de numerosos trabajos en altura de cerramientos de fachadas de edificios, revocados, etc., así como reparaciones diversas en trabajos de rehabilitación de edificios y limpieza.
            </Descripcion>
            <Subcategoria>Mecanismo manual</Subcategoria>
            <Descripcion>
                El andamio colgante manual de Distriandamios es un sistema de elevación formado por una plataforma suspendida la cual se encuentra dotada de accesorios que permitan realizar ascenso y descenso de manera segura.
            </Descripcion>
            <Subcategoria>Mecanismo eléctrico</Subcategoria>
            <Descripcion>
            Es un sistema modular, conformado por estructuras de alta resistencia, de gran ventaja gracias a su sistema de motores eléctricos que permite el ascenso y descenso a través de un cómodo control de mando automatizado.
            </Descripcion>
        </Data>
        <Divider />
        <Buttons>
            <Link href="https://wa.link/ul8um9"><ButtonServicio>Contactar asesor</ButtonServicio></Link>
            <Link href={Documentacion} download><ButtonDocs>Documentación</ButtonDocs></Link>
        </Buttons>
        <Footer />
    </Layout>
);
}

export default PageAndamioColgante;