import React from 'react';

import { Layout, Data, Titulo, Descripcion, FotoContainer,Foto, Buttons, ButtonServicio, ButtonDocs, Link } from './styles';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Divider from '../../components/Divider';

import Team from '../../assets/team-distrtiandamios.jpg';
import Documentacion from '../../assets/manual-de-uso-escalera-tijera.pdf';

const PageEscaleraTijera = () => {
  return(
    <Layout>
        <Navbar />
        <Titulo>Escalera tipo tijera</Titulo>
        <FotoContainer>                         
            <Foto src={Team} alt="Equipo distriandamios" />
        </FotoContainer>    
        <Data>
            <Descripcion>
                Escaleras de tipo tijeras desde los 2 pasos hasta 14 pasos.<br/><br/>
                Fabricadas en fibra de vidrio y aluminio con altura máxima de 4 metros.
            </Descripcion>
        </Data>
        <Divider />
        <Buttons>
            <Link href="https://wa.link/6u1cfa"><ButtonServicio>Contactar asesor</ButtonServicio></Link>
            <Link href={Documentacion} download><ButtonDocs>Documentación</ButtonDocs></Link>
        </Buttons>
        <Footer />
    </Layout>
);
}

export default PageEscaleraTijera;