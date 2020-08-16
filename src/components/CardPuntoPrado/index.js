import React from 'react';

import Prado from '../../assets/prado.png';
import Whatsapp from '../../assets/whatsapp.png';

import { LinkCard, CardWrapper, Description, Barrio, Direccion, Map, ButtonMap, ButtonWrite, WhatsappIcon, LinkMap, LinkWrite, Extencion, Pbx } from './styles';

const Go = 'https://goo.gl/maps/SYoAHqoXvmktngcq6';
const Escribir = 'https://wa.link/pibjbd'
const CardPuntoPrado = () => {
  return(
    <LinkCard href={Go}>
      <CardWrapper>
          <Map src={Prado} alt="Ir a sede Prado con Google maps" />
          <LinkMap href={Go}><ButtonMap>Llévame allí</ButtonMap></LinkMap>
          <LinkWrite href={Escribir}><ButtonWrite>Whatsapp</ButtonWrite></LinkWrite>
          <Description>
            <Barrio>Prado Veraniego</Barrio>
            <Direccion>Calle 129 # 53 - 12</Direccion>
            <small>Bogotá D.C</small>
            <Pbx><strong>PBX :</strong> 786 84 95</Pbx>
            <Extencion><strong>Ext.</strong> 2004</Extencion>
            <a><WhatsappIcon src={Whatsapp} alt="Link de whatsapp punto de venta restrepo"/></a>
          </Description>
      </CardWrapper>
    </LinkCard>
  );
};

export default CardPuntoPrado;