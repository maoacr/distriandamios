import React from 'react';
import { Layout, Data, Titulo, Descripcion, FotoContainer,Foto } from './styles';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

import Team from '../../assets/team-distrtiandamios.jpg';

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
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                </Descripcion>
            </Data>
            <Footer />
        </Layout>
    );
};

export default AboutUs;