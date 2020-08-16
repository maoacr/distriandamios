import React from 'react';

import Olaya from '../../assets/olaya.png';
import Whatsapp from '../../assets/whatsapp.png';

import { LinkCard, CardWrapper, Description, Barrio, Direccion, Map, ButtonMap, ButtonWrite, WhatsappIcon, LinkMap, LinkWrite, Extencion, Pbx } from './styles';

const Go = 'https://goo.gl/maps/qEGEJY2yodAqLgKi8';
const Escribir = 'https://wa.link/03iv0v'
const CardPuntoOlaya = () => {
  return(
    <LinkCard href={Go}>
      <CardWrapper>
          <Map src={Olaya} alt="Ir a sede Olaya con Google maps" />
          <LinkMap href={Go}><ButtonMap>Llévame allí</ButtonMap></LinkMap>
          <LinkWrite href={Escribir}><ButtonWrite>Whatsapp</ButtonWrite></LinkWrite>
          <Description>
            <Barrio>Olaya</Barrio>
            <Direccion>Av. Caracas # 25 - 15 Sur</Direccion>
            <small>Bogotá D.C</small>
            <Pbx><strong>PBX :</strong> 786 84 95</Pbx>
            <Extencion><strong>Ext.</strong> 2002</Extencion>
            <a><WhatsappIcon src={Whatsapp} alt="Link de whatsapp punto de venta restrepo"/></a>
          </Description>
      </CardWrapper>
    </LinkCard>
  );
};

export default CardPuntoOlaya;