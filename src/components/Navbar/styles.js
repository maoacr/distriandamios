import styled from 'styled-components';
import { Colors } from '../../utils/Constants';


export const Menu = styled.nav`
    display: flex;
    justify-content: space-between;
    height: 80px;
    align-items: center;
    padding-left: 30px;
    padding-right: 30px;
`

export const MenuItems = styled.ul`
    display: none;
    @media screen and (min-width: 768px) {
        display: inline-block;
    }
`

export const Link = styled.a`
    text-decoration: none;
    list-style: none;
    color: black;
`

export const ListItems = styled.li`

    @media (min-width: 768px) {
        line-height: 80px;
        margin: 0 10px;
        cursor: pointer;
        display: inline-block;
    }
`

export const Logotipo = styled.img`
    width: 40px;
    height: 40px;
`

export const Hamburguer = styled.img`
    width: 40px;
    height: 40px;
    @media (min-width: 768px) {
        display: none;
    }
`

export const MenuMobile = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    text-align: left;
    background-color: rgba(0, 0, 0, 0.8);
    @media screen and (min-width: 768px) {
        display: none;
    }
`
export const MenuItems2 = styled.ul`
    list-style: none;
    text-decoration: none;
    padding-top: 100px;
    padding-left: 30px;
`
export const ListItemsMobile = styled.li`
    list-style: none;
    text-decoration: none;
    margin-bottom: 20px;
    left: 0;

`
export const LinkMobile = styled.a`
    text-decoration: none;
    color: ${Colors.white};
`
export const LogotipoMenu = styled.img`
    width: 40px;
    height: 40px;
    padding: 20px 30px;
`
export const MenuDivider = styled.div`
    width: 90%;
    height: 1px;
    background-color: white;
    margin-bottom: 20px;
`
export const HamburguerClose = styled.img`
    width: 30px;
    height: 30px;
    padding: 28px 35px;

`
export const HeaderMenu = styled.div`
    display: flex;
    justify-content: space-between;
`