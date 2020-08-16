import styled from 'styled-components';

import { Colors } from '../../utils/Constants';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`
export const IlustracionWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  margin: 30px 0 0;
`

export const Ilustracion = styled.img`
  width: 150%;
  object-fit: cover;
  padding-left: -5%;
  @media screen and (min-width: 768px) {
    width: 50%;
    padding-left: 55%;
  }

`
export const Distriandamios = styled.img`
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  @media screen and (min-width: 768px) {
    width: 30%;
    position: absolute;
    top: 18%;
    left: 100px;
  }
  @media screen and (min-width: 1280px) {
    left: 180px;
    top: 25%;
  }
  @media screen and (min-width: 1440px) {
    width: 30%;
    position: absolute;
    top: 30%;
  }
`
export const LastSection = styled.div`
  width: 100%; 
  max-width: 700px;
  margin: 0 auto;
  margin-bottom: 100px;
`
export const GuardarContacto = styled.button`
  width: 90%;
  max-width: 220px;
  border: none;
  padding: 16px 32px;
  background-color: ${Colors.mainRed};
  color: white;
  font-size: 16px;
  font-weight: bold;
  border-radius: 10px;
  cursor: pointer;
  margin: 20px 0;
`
export const Enunciado = styled.h3`
  margin: 40px 0;
  color: ${Colors.grayColor};
  font-weight: lighter;
`
export const Correo = styled.a`
  text-decoration: none;
  font-size: 24px;
  font-weight: bold;
  color: black;
`