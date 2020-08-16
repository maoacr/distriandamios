import React from 'react';

import Fontibon from '../../assets/fontibon.png';
import Whatsapp from '../../assets/whatsapp.png';

import { LinkCard, CardWrapper, Description, Barrio, Direccion, Map, ButtonMap, ButtonWrite, WhatsappIcon, LinkMap, LinkWrite, Extencion, Pbx } from './styles';

const Go = 'https://goo.gl/maps/PZ8eNjKs8ozL4hJ7A';
const Escribir = 'https://wa.link/do03ok'
const CardPuntoFontibon = () => {
  return(
    <LinkCard href={Go}>
      <CardWrapper>
          <Map src={Fontibon} alt="Ir a sede Fontibón con Google maps" />
          <LinkMap href={Go}><ButtonMap>Llévame allí</ButtonMap></LinkMap>
          <LinkWrite href={Escribir}><ButtonWrite>Whatsapp</ButtonWrite></LinkWrite>
          <Description>
            <Barrio>Fontibón</Barrio>
            <Direccion>Calle 18 # 107 - 24</Direccion>
            <small>Bogotá D.C</small>
            <Pbx><strong>PBX :</strong> 786 84 95</Pbx>
            <Extencion><strong>Ext.</strong> 2001</Extencion>
            <a><WhatsappIcon src={Whatsapp} alt="Link de whatsapp punto de venta restrepo"/></a>
          </Description>
      </CardWrapper>
    </LinkCard>
  );
};

export default CardPuntoFontibon;