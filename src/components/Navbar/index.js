import React from 'react';

import { Menu, Hamburguer, MenuItems, Logotipo } from './styles'

import HambMenu from '../../assets/hamburguer.svg';
import Logo from '../../assets/logo.svg';

const Navbar = () => {
    return(
        <Menu>
            <Logotipo src={Logo} alt='Logo de Distriandamios'/>
            <MenuItems>
                <li>Quienes somos ?</li>
                <li>Productos y servicios</li>
                <li>Contacto</li>
            </MenuItems>
            <Hamburguer src={HambMenu} alt='Menu  hamburguesa'></Hamburguer>
        </Menu>
    )
}

export default Navbar;