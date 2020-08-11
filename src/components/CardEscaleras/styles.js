import styled from 'styled-components';

import { Colors } from '../../utils/Constants'

export const LinkCard = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: ${Colors.grayColor}; 
`

export const CardWrapper = styled.div`
  width: 90%;
  height: 90px;
  border-radius: 10px;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  margin-bottom:  10px;
  box-shadow: 5px 5px 5px #e7e7e7;
`
export const Andamio = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 10px;
  object-fit: cover;
`
export const Description = styled.div`
  margin-top: auto;
  margin-bottom: auto;
  text-align: left;
  padding-left: 10px;
  align-items: center;
`
export const Family = styled.h5`
  margin : 0;
`
export const Type = styled.h3`
  margin: 0;
`