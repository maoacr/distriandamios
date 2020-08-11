import styled from 'styled-components';

export const Menu = styled.nav`
    display: flex;
    justify-content: space-between;
    /* width: 100%; */
    height: 80px;
    align-items: center;
    padding-left: 30px;
    padding-right: 30px;
`

export const MenuItems = styled.ul`
    display: none;
`

export const MenuItems2 = styled.ul`
    display: block;
`

export const Link = styled.a`
    text-decoration: none;
    list-style: none;
    color: black;
`

export const ListItems = styled.li`
    line-height: 80px;
    margin: 0 10px;
    cursor: pointer;
    display: inline-block;
    /* @media (min-width: 768px) {
        display: inline-block;
    } */
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