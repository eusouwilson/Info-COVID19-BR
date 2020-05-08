import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const Container = styled.View`
  height: ${hp('6%')}px;
  width: 100%;
  background-color: #6c65ac;
  border-radius: 20px;
  flex-direction: row;
  margin-bottom: ${hp('3%')}px;
`;

export const Buttom = styled(RectButton)`
  height: ${hp('6%')}px;
  width: ${wp('45%')}px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
`;

export const ButtomUf = styled.View`
  height: ${hp('6%')}px;
  width: ${wp('45%')}px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
`;

export const ButtomTitle = styled.Text`
  font-size: ${hp('3%')}px;
  font-weight: 600;
`;
