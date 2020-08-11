import React from 'react';

import { Link, HomeButton } from './styles';

const Message = "https://wa.link/6g0yiw";

const Button = () => {
  return(
    <Link href={Message}><HomeButton>Solicitar andamio</HomeButton></Link>
  );
};

export default Button;