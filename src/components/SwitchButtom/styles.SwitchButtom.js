import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  height: 45px;
  width: 100%;
  background-color: #6c65ac;
  border-radius: 20px;
  flex-direction: row;
  margin-bottom: 30px;
`;

export const Buttom = styled(RectButton)`
  height: 45px;
  width: 50%;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
`;

export const ButtomUf = styled.View`
  height: 45px;
  width: 50%;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
`;

export const ButtomTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;
