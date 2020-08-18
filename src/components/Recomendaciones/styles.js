import styled from 'styled-components';

export const MaxWidth = styled.div`
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`

export const FeedbackCards = styled.div`
  margin: 50px 0;
  @media screen and (min-width: 768px) {
    display: flex;
    margin-left: auto;
    margin-right: auto;
    padding-bottom: 50px;
  }
`

export const FeedbackCard =  styled.div`
  display: flex;
  width: 90%;
  height: 180px;
  border-radius: 10px;
  margin-right: auto;
  margin-left: auto;
  box-shadow: 5px 5px 5px #e7e7e7;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    display: block;
    width: 30%;
    height: 220px;
    padding-top: 15px;
    margin: 0 20px
  }
  @media screen and (min-width: 1280px) {
    display: block;
    width: 30%;
    height: 200px;
    padding-top: 15px;
    margin: 0 20px
  }
  

`
export const Photo = styled.img`
  height: 65%;
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