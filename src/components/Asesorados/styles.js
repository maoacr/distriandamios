import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 60px;
  position: relative;
  margin: 0;
  overflow: scroll;
  margin: 50px auto 0;
  max-width: 1440px;
  `
export const Carousel = styled.div`
  width: 235%;
  @media screen and (min-width: 768px) {
    width: 100%;
  }
`
export const Aliado = styled.img`
  height: 50px;
  padding: 0 20px;
`

export const Titulo = styled.h3`
  padding: 0 20px;
`