import React from 'react';

import { Menu, MenuItems } from './styles'


const Navbar = () => {
    return(
        <Menu>
            <img src='../../assets/logo.svg' alt='Logo de Distriandamios'/>
            <MenuItems>
                <li>Quienes somos ?</li>
                <li>Productos y servicios</li>
                <li>Contacto</li>
            </MenuItems>
        </Menu>
    )
}

export default Navbar;