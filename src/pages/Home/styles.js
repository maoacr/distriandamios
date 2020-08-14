import styled from 'styled-components';

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
  padding-left: 5%;
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
    top: 30%;
    left: 150px;
  }
`