import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View``;

export const ImageNews = styled.Image`
  height: 150px;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const NewTitle = styled.Text`
  font-size: 14px;
  font-weight: 600;
  text-align: justify;
  color: #0c4280;
  margin-bottom: 20px;
`;

export const BottonNewsContainer = styled(RectButton)`
  margin-top: 20px;
  margin-bottom: 10px;
`;
