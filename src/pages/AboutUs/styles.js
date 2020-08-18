import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
`

export const Data = styled.div`
  width: 100%;
  max-width: 1200px;
  text-align: left;
  margin: 40px auto;
`

export const Titulo = styled.h1`
  margin: 30px;
`
export const Descripcion = styled.p`
  
  margin: 30px 30px 100px;

`
export const FotoContainer = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  background-color: black;
  @media screen and (min-width: 1280px) {
    height: 400px;
  }

`
export const Foto = styled.img`
  width: 100%;
  position: relative;
  top: -40px;
  @media screen and (min-width: 768px) {
    top: -120px;
  }
  @media screen and (min-width: 1280px) {
    top: -200px;
  }
`