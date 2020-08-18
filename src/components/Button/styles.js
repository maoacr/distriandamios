import styled from 'styled-components';
import { Colors } from '../../utils/Constants'

export const Link = styled.a`
  justify-content: center;
`
export const HomeButton = styled.button`
  width: 90%;
  border: none;
  border-radius: 5px;
  padding: 12px 36px;
  background-color: ${Colors.mainRed};
  color: ${Colors.white};
  font-size: 16px;
  font-weight: bold;
  margin-top: 20px;
  @media screen and (min-width: 768px) {
    width: 30%;
    position: absolute;
    left: 100px;
    top: 30%;
  }
  @media screen and (min-width: 1280px) {
    left: 180px;
    top: 45%;
  }
  @media screen and (min-width: 1440px) {
    width: 30%;
    position: absolute;
    top: 55%;
  }
`