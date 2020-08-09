import React from 'react';

import { FooterContainer, Rrss, Distriandamios, RrssIcons, RrssIcon, LegalWrapper, LegalItems } from './styles';

import LogoMain from '../../assets/tipografiaWhite.svg';
import Facebook from '../../assets/facebook.svg';
import Twitter from '../../assets/twitter.svg';
import Instagram from '../../assets/instagram.svg';
import Linkedin from '../../assets/linkedin.svg';

const Footer = () => {
  return(
    <FooterContainer>
      <Distriandamios src={LogoMain} />
      <Rrss>
        <p>Únete a nuestras redes sociales y haz parte de nuestra gran familia</p>
        <RrssIcons>
          <a><RrssIcon src={Facebook} /></a>
          <a><RrssIcon src={Twitter} /></a>
          <a><RrssIcon src={Instagram} /></a>
          <a><RrssIcon src={Linkedin} /></a>
        </RrssIcons>
        <LegalWrapper>
          <LegalItems><small>Contáctenos</small></LegalItems>
          <LegalItems><small>Productos/Servicios</small></LegalItems>
          <LegalItems><small>Distriandamios</small></LegalItems>
          <LegalItems><small>Privacidad</small></LegalItems>
          <LegalItems><small>Términos y condiciones</small></LegalItems>
        </LegalWrapper>
      </Rrss>

      <small>Sitio web desarrollado por <a herf="https://maoacr.github.io/" >@maoacr</a></small>
    </FooterContainer>
  );
};

export default Footer;