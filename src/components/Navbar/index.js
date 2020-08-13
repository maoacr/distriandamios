import React, { useState } from 'react';

import {
    Menu,
    Hamburguer,
    HamburguerClose,
    MenuItems,
    MenuItems2,
    Logotipo,
    ListItems,
    Link,
    MenuMobile,
    ListItemsMobile,
    LinkMobile,
    LogotipoMenu,
    MenuDivider,
    HeaderMenu
} from "./styles"

import HambMenu from '../../assets/hamburguer.svg';
import HambClose from '../../assets/HamburguerClose.svg'
import Logo from '../../assets/logo.svg';

const Navbar = () => {
    const [menu, setMenu] = useState(true)
    const handleMenu = () => {
        setMenu(!menu)
    }
    return(
        <Menu>
            <a href='/' ><Logotipo src={Logo} alt='Logo de Distriandamios' /></a>
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
                        <MenuMobile>
                            <HeaderMenu>
                                <LogotipoMenu src={Logo} alt='Logo de Distriandamios' />
                                <HamburguerClose onClick={handleMenu} src={HambClose} alt='Menu  hamburguesa'></HamburguerClose>
                            </HeaderMenu>
                            <MenuItems2>
                                <ListItemsMobile><LinkMobile href='/distriandamios'>Quienes somos</LinkMobile></ListItemsMobile>
                                <MenuDivider></MenuDivider>
                                <ListItemsMobile><LinkMobile href='/productos-y-servicios'>Productos y servicios</LinkMobile></ListItemsMobile>
                                <MenuDivider></MenuDivider>
                                <ListItemsMobile><LinkMobile href='/contact'>Contacto</LinkMobile></ListItemsMobile>
                                <MenuDivider></MenuDivider>
                            </MenuItems2>
                        </MenuMobile>
                    )
            }

            <Hamburguer onClick={handleMenu} src={HambMenu} alt='Menu  hamburguesa'></Hamburguer>
        </Menu>
    )
}

export default Navbar;