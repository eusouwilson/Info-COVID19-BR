import React, { useState } from 'react';
import {
  Container,
  Buttom,
  ButtomTitle,
  ButtomUf,
} from './styles.SwitchButtom';

const SwitchButtom = ({ titleon, titleoff, onpress }) => {
  const [buttonStatus, setbuttonStatus] = useState(true);

  const handleSwitch = (title) => {
    if (title === 'Brasil') {
      onpress('brazil', null);
    } else {
      onpress('brazil', 'countries');
    }
    setbuttonStatus(!buttonStatus);
  };
  return (
    <Container>
      <Buttom
        onPress={() => handleSwitch(titleon)}
        style={{ backgroundColor: '#ffffff' }}
      >
        <ButtomTitle style={{ color: '#6c65ac' }}>{titleon}</ButtomTitle>
      </Buttom>
      <ButtomUf style={{ backgroundColor: '#6c65ac' }}>
        <ButtomTitle style={{ color: '#ffffff' }}>{titleoff}</ButtomTitle>
      </ButtomUf>
    </Container>
  );
};
export default SwitchButtom;
