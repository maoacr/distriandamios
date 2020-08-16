import React from 'react';

import FacebookColor from '../../assets/facebookColor.png';
import TwitterColor from '../../assets/twitterColor.png';
import InstagramColor from '../../assets/instagramColor.png'
import LinkedinColor from '../../assets/linkedinColor.png';

import { Container, Icon, Titulo} from './styles';

const Redes = () => {
  return(
    <Container>
      <Titulo>Únete a nuestra comunidad</Titulo>
      <a href="https://www.facebook.com/distriandamios" ><Icon src={FacebookColor}/></a>
      <a href="https://twitter.com/distriandamios" ><Icon src={TwitterColor}/></a>
      <a href="https://www.instagram.com/distriandamio" ><Icon src={InstagramColor}/></a>
      <a href="https://www.linkedin.com/company/distriandamios-sas/" ><Icon src={LinkedinColor} /></a>
    </Container>
  );
};

export default Redes;