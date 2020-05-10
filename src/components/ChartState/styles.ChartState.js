import styled from 'styled-components/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const Container = styled.View``;

export const ChartTitle = styled.Text`
  font-size: ${hp('3%')}px;
  color: #6c6cac;
  font-weight: 300;
  text-align: center;
`;
