import styled from 'styled-components/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const Container = styled.View`
  width: ${wp('40%')}px;
  height: ${hp('17%')}px;
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  align-items: flex-start;
  justify-content: space-between;
`;

export const DataTitle = styled.Text`
  font-size: ${hp('2.5%')}px;
  color: #fff;
  font-weight: 600;
`;

export const DataValue = styled.Text`
  font-size: ${hp('2.8%')}px;
  color: #fff;
  font-weight: bold;
`;

export const Loading = styled.ActivityIndicator.attrs({
  size: 'large',
  color: '#0000ff',
})``;
