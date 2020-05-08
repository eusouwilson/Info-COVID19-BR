import styled from 'styled-components/native';
import Colors from '../../../constants/Colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const Container = styled.View`
  justify-content: space-around;
`;
export const SelectContainer = styled.View`
  width: ${wp('20%')}px;
  height: ${hp('3.5%')}px;
  background-color: #fff;
  border-radius: ${wp('3  %')}px;
  justify-content: center;
  align-items: center;
`;
export const SelectText = styled.Text`
  font-size: ${hp('2%')}px;
  color: ${Colors.defaultColor};
  font-weight: bold;
`;

export const TitleContainer = styled.View`
  width: ${wp('20%')}px;
  height: ${hp('10%')}px;
  background-color: #3cc;
  border-radius: ${wp('3%')}px;
  justify-content: center;
  align-items: center;
`;
export const ModalContainer = styled.Modal``;
