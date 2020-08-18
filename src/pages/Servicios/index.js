import React from 'react';

import Navbar from '../../components/Navbar';
import Asesoria from '../../components/CardAsesoria';
import MontajeYDesmontaje from '../../components/CardMontajeYDesmontaje';
import Transporte from '../../components/CardTransporte';
import Footer from '../../components/Footer';

import { Layout, Titulo, Descripcion } from './styles';

const Servicios = () => {
    return(
        <Layout>
            <Navbar />
            <Titulo>Servicios</Titulo>
            <Descripcion>Tenemos diferentes servicios a tu disposición, para que puedas contar con nuestro respaldo a traves de ellos.<br /><br/> Pudes solicitar una cotización de servicio o comunicarte con un asesor para recibir más información al respeecto, haciendo click en el respectivo servicio</Descripcion>
            <Asesoria />
            <MontajeYDesmontaje />
            <Transporte />
            <Footer />
        </Layout>
    )
}

export default Servicios;