import React from 'react';

import { Layout, Titulo, Subtitulo, SectionsDescription, SecondSubtitulo} from './styles';

import CardSeccion80cm from '../../components/CardSeccion80cm';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CardSeccion1m from '../../components/CardSeccion1m';
import CardSeccion150cm from '../../components/CardSeccion150cm';
import Divider from '../../components/Divider';
import CardTornillo from '../../components/CardTornillo';
import CardRodachinas from '../../components/CardRodachinas';
import CardPlataforma from '../../components/CardPlataforma';
import CardEscaleraInterna from '../../components/CardEscaleraInterna';
import CardParales from '../../components/CardParales';
import CardAsesoria from '../../components/CardAsesoria';
import CardMontajeYDesmontaje from '../../components/CardMontajeYDesmontaje';
import CardTransporte from '../../components/CardTransporte';


const PageProductsAndServices = () => {
  return(
    <Layout>
      <Navbar />
      <Subtitulo>Venta y Alquiler de </Subtitulo>
      <Titulo>Secciones de andamio convencional</Titulo>
      <SectionsDescription>Todas las secciones de andamio tubular tienen una altura de 1.50 metros<br/><br/>Su área varia deacuerdo a la sección<br/><br/>Solicita la sección que necesites de manera fácil y rápida haciendo click sobre la medida que más se acomode a tus necesidades</SectionsDescription>
      <CardSeccion80cm />
      <CardSeccion1m />
      <CardSeccion150cm />
      <Divider />
      <SecondSubtitulo>Venta y Alquiler de </SecondSubtitulo>
      <Titulo>Partes</Titulo>
      <SectionsDescription>No hay limites para construir la plataforma perfecta para tus proyectos, aquí podras encontrar la pieza que necesitas para lograr llegar tan  alto como te lo propongas.<br/><br/>Basta un click sobre la pieza de tu interes y te comunicaremos con un asesor que se encargará de atender tu solicitud y despejarte todas las dudas que puedas tener.</SectionsDescription>
      <CardTornillo />
      <CardRodachinas />
      <CardPlataforma />
      <CardEscaleraInterna />
      <CardParales />
      <Divider />
      <Titulo>Servicios</Titulo>
      <SectionsDescription>Tenemos diferentes servicios a tu disposición, para que puedas contar con nuestro respaldo a traves de ellos.<br /><br/> Pudes solicitar una cotización de servicio o comunicarte con un asesor para recibir más información al respeecto, haciendo click en el respectivo servicio</SectionsDescription>
      <CardAsesoria />
      <CardMontajeYDesmontaje />
      <CardTransporte />
      <Footer />
    </Layout>
  );
}

export default PageProductsAndServices;