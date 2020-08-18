import React from 'react';
import { Layout, Data, Titulo, Descripcion, FotoContainer,Foto, Buttons, ButtonServicio, ButtonDocs, Link } from './styles';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Divider from '../../components/Divider';

import Team from '../../assets/team-distrtiandamios.jpg';
import Documentacion from '../../assets/manual-de-uso-escalera-extension.pdf';

const PageEscaleraExtension = () => {
  return(
    <Layout>
        <Navbar />
        <Titulo>Escalera de extensión</Titulo>
        <FotoContainer>                         
            <Foto src={Team} alt="Equipo distriandamios" />
        </FotoContainer>    
        <Data>
            <Descripcion>
                Escaleras de extensión desde 2 metros hasta 12 metros.<br/><br/>
                Fabricadas en fibra de vidrio y aluminio.<br/><br/>
                Desplegada la extensión, alcanza una altura de hasta 12.
            </Descripcion>
        </Data>
        <Divider />
        <Buttons>
            <Link href="https://wa.link/qs13ci"><ButtonServicio>Contactar asesor</ButtonServicio></Link>
            <Link href={Documentacion} download><ButtonDocs>Documentación</ButtonDocs></Link>
        </Buttons>
        <Footer />
    </Layout>
);
}

export default PageEscaleraExtension;