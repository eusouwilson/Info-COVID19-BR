import React from 'react';
import { View } from 'react-native';

import {
  Container,
  SelectText,
  TitleContainer,
  SelectContainer,
  ModalContainer,
} from './styles.SelectButtom';

const SelectButtom = () => {
  return (
    <Container>
      <SelectContainer>
        <SelectText>BR</SelectText>
      </SelectContainer>

      <TitleContainer>
        <ModalContainer
          animationType="slide"
          transparent={true}
          visible={false}
          onShow={false}
        />
      </TitleContainer>
    </Container>
  );
};

export default SelectButtom;
