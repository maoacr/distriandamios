import styled from 'styled-components';

export const FeedbackCards = styled.div`
  margin-bottom: 30px;
  @media screen and (min-width: 768px) {
    display: flex;
  }
`

export const FeedbackCard =  styled.div`
  display: flex;
  width: 90%;
  height: 150px;
  border-radius: 10px;
  margin-right: auto;
  margin-left: auto;
  box-shadow: 5px 5px 5px #e7e7e7;
  margin-bottom: 15px;
  @media screen and (min-width: 768px) {
    display: block;
    width: 30%;
    height: 200px;
    padding-top: 15px;
  }
  

`
export const Photo = styled.img`
  height: 65%;
  border-radius: 50%;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 4%;
  @media screen and (min-width: 768px) {
    margin-left: 0;
    height: 40%;
  }
`
export const Recomendacion = styled.div`
  display: block;
  padding: 10px;
  margin-top: auto;
  margin-bottom: auto;
`
export const Message = styled.p`
  margin: 0 0 15px;
`