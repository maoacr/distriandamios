import React from 'react';

import Navbar from '../../components/Navbar';
import Asesoria from '../../components/CardAsesoria';
import MontajeYDesmontaje from '../../components/CardMontajeYDesmontaje';
import Transporte from '../../components/CardTransporte';
import Footer from '../../components/Footer';
import Divider from '../../components/Divider';

import { Layout, Titulo, Descripcion, MaxWidth, FotoContainer, Foto } from './styles';

import Services from '../../assets/services.jpg';

const Servicios = () => {
    return(
        <Layout>
            <Navbar />
            <Titulo>Servicios</Titulo>
            <FotoContainer>                      
                <Foto src={Services} alt="Servicios" />
            </FotoContainer>   
            <MaxWidth>
                <Descripcion>Tenemos diferentes servicios a tu disposición, para que puedas contar con nuestro respaldo a traves de ellos.<br /><br/> Pudes solicitar una cotización de servicio o comunicarte con un asesor para recibir más información al respeecto, haciendo click en el respectivo servicio</Descripcion>
            </MaxWidth>
            <Divider />
            <Asesoria />
            <MontajeYDesmontaje />
            <Transporte />
            <Footer />
        </Layout>
    )
}

export default Servicios;