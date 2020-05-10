import styled from 'styled-components/native';
import Colors from '../../../constants/Colors';
import { RectButton } from 'react-native-gesture-handler';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const Container = styled.View`
  justify-content: space-around;
`;
export const TitleContainer = styled(RectButton)`
  width: ${wp('40%')}px;
  height: ${hp('4.5%')}px;
  border-radius: ${wp('3  %')}px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;
export const TitleText = styled.Text`
  font-size: ${hp('3%')}px;
  color: #6c65ac;
  font-weight: 600;
`;

export const SelectContainer = styled.View`
  width: ${wp('40%')}px;
  height: ${hp('20%')}px;
  margin-top: ${hp('5%')}px;
  padding-top: ${hp('2%')}px;
  border-bottom-left-radius: ${wp('3%')}px;
  border-bottom-right-radius: ${wp('3%')}px;
  background-color: #fff;
  justify-content: center;
  align-items: center;
  position: absolute;
`;
export const BtnContainer = styled(RectButton)`
  width: ${wp('39%')}px;
  height: ${hp('5%')}px;
  padding-top: ${hp('0.2%')}px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;
export const TitleSelect = styled.Text`
  font-size: ${hp('3%')}px;
  color: #6c65ac;
  font-weight: 600;
`;

export const FlatList = styled.FlatList`
  width: ${wp('40%')}px;
  height: ${hp('20%')}px;
  position: absolute;
`;

export const FlagUF = styled.Image`
  height: ${hp('3%')}px;
  width: ${wp('8%')}px;
`;
