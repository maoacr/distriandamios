import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
`

export const Titulo = styled.h1`
margin: 30px;
`
export const Descripcion = styled.p`
  margin: 0;
  @media screen and (min-width: 1280px) {
    margin-top: 50px;
  }
`
export const MaxWidth = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 30px auto 0;
`
export const FotoContainer = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  @media screen and (min-width: 1280px) {
    height: 400px;
  }

`
export const Foto = styled.img`
  width: 100%;
  position: relative;
  top: -40px;
  @media screen and (min-width: 768px) {
    top: -180px;
  }
  @media screen and (min-width: 1280px) {
    top: -350px;
  }
` 