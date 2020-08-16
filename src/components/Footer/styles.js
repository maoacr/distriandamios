import styled from 'styled-components';
import { Colors } from '../../utils/Constants'

export const Distriandamios = styled.img`
  width: 220px;
  padding: 30px 0px 10px;
`
export const FooterContainer = styled.footer`
  width: 100%;
  height: 330px;
  background: #e11432;
  background: -moz-linear-gradient(-45deg, #e11432 0%, #92272c 100%);
  background: -webkit-gradient(left top, right bottom, color-stop(0%, #e11432), color-stop(100%, #92272c));
  background: -webkit-linear-gradient(-45deg, #e11432 0%, #92272c 100%);
  background: -o-linear-gradient(-45deg, #e11432 0%, #92272c 100%);
  background: -ms-linear-gradient(-45deg, #e11432 0%, #92272c 100%);
  background: linear-gradient(135deg, #e11432 0%, #92272c 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e11432', endColorstr='#92272c', GradientType=1 );
  color: ${Colors.white};
  text-align: center;
`
export const Rrss = styled.div`
  width: 100%;
  padding: 0 0 12px;
  font-size: 12px;
`
export const Parrafo = styled.p`
  width: 90%;
  margin-left: auto;
  margin-right: auto;
`
export const RrssIcons = styled.div`
`
export const RrssIcon = styled.img`
  width: 20px;
  height: 20px;
  padding: 0 10px;
`
export const LegalWrapper = styled.div`
  padding: 20px;
  display: grid;
`
export const LegalItems = styled.a`
  padding: 0 5px;
  margin-left: auto;
  margin-right: auto;
`
export const Maoacr = styled.a`
  text-decoration: none;
  color: ${Colors.white}
`