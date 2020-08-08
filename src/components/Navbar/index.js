import React from 'react';

import { Menu, Hamburguer, MenuItems, Logotipo, ListItems, Link } from './styles'

import HambMenu from '../../assets/hamburguer.svg';
import Logo from '../../assets/logo.svg';

const Navbar = () => {

    return(
        <Menu>
            <Logotipo src={Logo} alt='Logo de Distriandamios' />
            <MenuItems>
                <ListItems><Link href='/distriandamios'>Quienes somos</Link></ListItems>
                <ListItems><Link href='/productosyservicios'>Productos y servicios</Link></ListItems>
                <ListItems><Link href='/contact'>Contacto</Link></ListItems>
            </MenuItems>
            <Hamburguer src={HambMenu} alt='Menu  hamburguesa'></Hamburguer>
        </Menu>
    )
}

export default Navbar;