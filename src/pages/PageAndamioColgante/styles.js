import styled from 'styled-components';

import { Colors } from '../../utils/Constants';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
`

export const Data = styled.div`
  width: 100%;
  max-width: 1200px;
  text-align: left;
  margin: 30px auto 0;
`

export const Titulo = styled.h1`
  margin: 30px 30px 0;
`

export const Subtitulo = styled.h3`
  margin: 10px 30px 30px;
`
export const Subcategoria = styled.h3`
  margin: 50px 30px 20px ;
`
export const Descripcion = styled.p`
  margin: 0 30px 0;

`
export const FotoContainer = styled.div`
  width: 100%;
  height: 300px;
  overflow: hidden;
  @media screen and (min-width: 768px) {
    height: 400px;
  }
`
export const Foto = styled.img`
  width: 100%;
`
export const Buttons = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  text-align: center;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
  }
`
export const ButtonServicio = styled.button`
  width: 90%;
  padding: 12px 36px;
  border: none;
  font-size: 16px;
  font-weight: bold;
  border-radius: 10px;
  color: ${Colors.white};
  background-color: ${Colors.mainRed};
  @media screen and (min-width: 768px) {
    width: 100%;
  }
`
export const ButtonDocs = styled.button`
  width: 90%;
  padding: 12px 36px;
  border: none;
  font-size: 16px;
  font-weight: bold;
  border-radius: 10px;
  color: ${Colors.white};
  background-color: ${Colors.mainRed};
  margin-bottom: 50px;
  @media screen and (min-width: 768px) {
    width: 100%; 
  }
`
export const Link = styled.a`
  margin-bottom: 30px;
  @media screen and (min-width: 768px) {
    margin-bottom: 80px;
    margin-left: 40px;
    margin-right: 40px;
  }
`