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
  height: 130px;
  border-radius: 10px;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 0;
  box-shadow: 5px 5px 5px #e7e7e7;
`
export const Andamio = styled.img`
  width: 130px;
  height: 130px;
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
export const Type = styled.h2`
  margin: 0;
`