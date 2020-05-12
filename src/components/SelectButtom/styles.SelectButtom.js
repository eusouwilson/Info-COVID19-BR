import styled from 'styled-components/native';
import Colors from '../../../constants/Colors';
import { RectButton } from 'react-native-gesture-handler';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const Container = styled.View`
  flex: 1;
`;
export const TitleContainer = styled.View`
  width: ${wp('40%')}px;
  height: ${hp('4.5%')}px;
  flex-direction: row;
  justify-content: space-evenly;
`;
export const TitleText = styled.Text`
  font-size: ${hp('3%')}px;
  color: #6c65ac;
  font-weight: 600;
`;

export const BtnContainer = styled.View`
  width: ${wp('35%')}px;
  height: ${hp('5%')}px;
  padding-top: ${hp('0.2%')}px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
export const TitleSelect = styled.Text`
  font-size: ${hp('3%')}px;
  color: #6c65ac;
  font-weight: 600;
`;

export const FlatList = styled.FlatList``;

export const FlagUF = styled.Image`
  height: ${hp('4%')}px;
  width: ${wp('10%')}px;
  margin-right: 10px;
  border-radius: ${hp('3%')}px;
  border-bottom-left-radius
`;
