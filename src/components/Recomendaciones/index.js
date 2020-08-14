import React from 'react';

import { FeedbackCards, FeedbackCard, Photo , Recomendacion, Message, MaxWidth} from './styles';
import Mario from '../../assets/mario.jpg';

const Recomendaciones = () => {
  return(
    <MaxWidth>
      <h3>Historias y testimonios</h3>
      <FeedbackCards>
        <FeedbackCard>
          <Photo src={Mario} alt="Fotografía de cliente" />
          <Recomendacion>
            <Message>"Esta será una recomendación temporal para efectos de ejemplo"</Message>
            <small>Mario Crespo | Tribu</small>
          </Recomendacion>
        </FeedbackCard>
        <FeedbackCard>
          <Photo src={Mario} alt="Fotografía de cliente" />
          <Recomendacion>
            <Message>"Esta será una recomendación temporal para efectos de ejemplo"</Message>
            <small>Mario Crespo | Tribu</small>
          </Recomendacion>
        </FeedbackCard>
        <FeedbackCard>
          <Photo src={Mario} alt="Fotografía de cliente" />
          <Recomendacion>
            <Message>"Esta será una recomendación temporal para efectos de ejemplo"</Message>
            <small>Mario Crespo | Tribu</small>
          </Recomendacion>
        </FeedbackCard>
      </FeedbackCards>
    </MaxWidth>  
  );
};

export default Recomendaciones;