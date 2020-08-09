import React from 'react';

import { 
  FooterContainer,
  Rrss,
  Distriandamios,
  RrssIcons,
  RrssIcon, 
  LegalWrapper,
  LegalItems,
  Maoacr,
  Parrafo } from './styles';

import LogoMain from '../../assets/tipografiaWhite.svg';
import Facebook from '../../assets/facebook.svg';
import Twitter from '../../assets/twitter.svg';
import Instagram from '../../assets/instagram.svg';
import Linkedin from '../../assets/linkedin.svg';

const Footer = () => {
  return(
    <FooterContainer>
      <Distriandamios src={LogoMain} alt="Logo de distriandamios"/>
      <Rrss>
        <Parrafo>Únete a nuestras redes sociales y haz parte de nuestra comunidad</Parrafo>
        <RrssIcons>
          <a href="https://www.facebook.com/distriandamios"><RrssIcon src={Facebook} alt="Link to our Facebook page"/></a>
          <a href="https://twitter.com/distriandamios"><RrssIcon src={Twitter} alt="Link to our Twitter profile"/></a>
          <a href="https://www.instagram.com/distriandamio"><RrssIcon src={Instagram} alt="Link to our Instagram profile"/></a>
          <a href="https://www.linkedin.com/company/distriandamios-sas/"><RrssIcon src={Linkedin} alt="Link to our Linkedin page"/></a>
        </RrssIcons>
        <LegalWrapper>
          <LegalItems><small>Contáctenos</small></LegalItems>
          <LegalItems><small>Productos/Servicios</small></LegalItems>
          <LegalItems><small>Distriandamios</small></LegalItems>
          <LegalItems><small>Privacidad</small></LegalItems>
          <LegalItems><small>Términos y condiciones</small></LegalItems>
        </LegalWrapper>
      </Rrss>
      <small>Sitio web desarrollado por <Maoacr href="https://maoacr.github.io/">@maoacr</Maoacr></small>
    </FooterContainer>
  );
};

export default Footer;