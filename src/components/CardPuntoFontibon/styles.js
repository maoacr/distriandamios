import styled from 'styled-components';

import { Colors } from '../../utils/Constants'

export const LinkCard = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: ${Colors.grayColor};
`

export const CardWrapper = styled.div`
  width: 90%;
  max-width: 1200px;
  height: 200px;
  border-radius: 10px;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  margin-bottom:  50px;
  box-shadow: 5px 5px 5px #e7e7e7;
  position: relative;
`
export const Map = styled.img`
  width :50%;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;
  @media screen and (min-width: 768px) {
    width: 40%;
  }
`
export const Description = styled.div`
  width: 100%;
  margin-top: 20px;
  text-align: left;
  padding-left: 15px;
  @media screen and (min-width: 768px){
    padding-left: 30px;
    margin-top: 20px;
  }
`
export const Direccion = styled.h5`
  margin : 0;
`
export const Barrio = styled.h3`
  margin: 0;
  font-size: 24px;
  @media screen and (min-width: 768px) {
    font-size: 30px;
  }

`
export const LinkMap = styled.a`
  position: absolute;
  width: 50%;
  bottom: 0;
  @media screen and (min-width: 768px) {
    width: 40%;
  }
`
export const LinkWrite = styled.a`
  position: absolute;
  width: 50%;
  bottom: 0;
  right: 0;
  @media screen and (min-width: 768px) {
    width: 60%;
  }
`
export const ButtonMap = styled.button`
  width: 100%;
  padding: 12px 32px;
  border: none;
  background-color: ${Colors.grayColor};
  color: ${Colors.white};
  overflow: hidden;
  font-weight: bold;
  cursor: pointer;
`
export const ButtonWrite = styled.button`
  width: 100%;
  padding: 12px 32px;
  border: none;
  background-color: #00bb2d;
  color: white;
  font-weight: bold;
  cursor: pointer;
`
export const WhatsappIcon = styled.img`
  display: none;
  @media screen and (min-width: 768px) {
    position: absolute;
    display: none;
    width: 40px;
    height: 40px;
    bottom: 0;
    right: 0;
    margin: 10px;
  }
`
export const Rigth = styled.div`
  width: 50%;
  height: 100%;
`
export const Extencion = styled.small`
  margin: 0;
`
export const Pbx = styled.p`
  margin-bottom: 0;
`