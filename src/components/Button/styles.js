import styled from 'styled-components';
import { Colors } from '../../utils/Constants'

export const Link = styled.a`
  justify-content: center;
`
export const HomeButton = styled.button`
  width: 90%;
  border: none;
  border-radius: 10px;
  padding: 15px;
  background-color: ${Colors.mainRed};
  color: ${Colors.white}
`