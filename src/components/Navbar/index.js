import React, { useState } from 'react';

import {
    Menu,
    Hamburguer,
    MenuItems,
    MenuItems2,
    Logotipo,
    ListItems,
    ListItems2,
    Link
} from "./styles"

import HambMenu from '../../assets/hamburguer.svg';
import Logo from '../../assets/logo.svg';

const Navbar = () => {
    const [menu, setMenu] = useState(true)
    const handleMenu = () => {
        setMenu(!menu)
    }
    return(
        <Menu>
            <Logotipo src={Logo} onClick={handleMenu} alt='Logo de Distriandamios' />
            {
                menu
                    ? (
                        <MenuItems>
                            <ListItems><Link href='/distriandamios'>Quienes somos</Link></ListItems>
                            <ListItems><Link href='/productos-y-servicios'>Productos y servicios</Link></ListItems>
                            <ListItems><Link href='/contact'>Contacto</Link></ListItems>
                        </MenuItems>
                    )
                    : (
                        <MenuItems2>
                            <ListItems><Link href='/distriandamios'>Quienes somos</Link></ListItems>
                            <ListItems><Link href='/productos-y-servicios'>Productos y servicios</Link></ListItems>
                            <ListItems><Link href='/contact'>Contacto</Link></ListItems>
                        </MenuItems2>
                    )
            }

            <Hamburguer onClick={handleMenu} src={HambMenu} alt='Menu  hamburguesa'></Hamburguer>
        </Menu>
    )
}

export default Navbar;