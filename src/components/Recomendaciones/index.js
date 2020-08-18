import React from 'react';

import { FeedbackCards, FeedbackCard, Photo , Recomendacion, Message, MaxWidth} from './styles';

import Imocom from '../../assets/imocom.png'
import Polyuprotect from '../../assets/polyuprotec.png';
import Sudein from '../../assets/sudein.png'

const Recomendaciones = () => {
  return(
    <MaxWidth>
      <h3>Historias y testimonios</h3>
      <FeedbackCards>
        <FeedbackCard>
          <Photo src={Imocom} alt="Fotografía de cliente" />
          <Recomendacion>
            <Message>"Cumple con toda la especificación de equipos e infraestructura"</Message>
            <small>IMOCOM</small>
          </Recomendacion>
        </FeedbackCard>
        <FeedbackCard>
          <Photo src={Polyuprotect} alt="Fotografía de cliente" />
          <Recomendacion>
            <Message>"Calificamos a Distriandamios como un proveedor óptimo"</Message>
            <small>Polyuprotec S.A.</small>
          </Recomendacion>
        </FeedbackCard>
        <FeedbackCard>
          <Photo src={Sudein} alt="Fotografía de cliente" />
          <Recomendacion>
            <Message>"Excelencia en disponibilidad del producto, tiempos de entrega y calidad"</Message>
            <small>SUDEIN INC S.A.S.</small>
          </Recomendacion>
        </FeedbackCard>
      </FeedbackCards>
    </MaxWidth>  
  );
};

export default Recomendaciones;