import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;
export const Header = styled.View`
  background-color: #473f97;
  border-bottom-right-radius: 30px;
  border-bottom-left-radius: 30px;
  padding-left: 18px;
  padding-right: 18px;
  padding-bottom: 18px;
`;

export const HeaderTitleContainer = styled.View`
  margin-top: ${hp('7%')}px;
  margin-bottom: ${hp('3%')}px;
`;
export const HeaderTitle = styled.Text`
  font-size: ${hp('2.5%')}px;
  color: #fff;
  font-weight: bold;
`;

export const Body = styled.View`
  padding-left: 18px;
  padding-right: 18px;
`;

export const BodyData = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const Loading = styled.ActivityIndicator.attrs({
  size: 'large',
  color: '#0000ff',
})``;
export const Buttom = styled(RectButton)`
  border-radius: 20px;
  align-items: center;
  justify-content: center;
`;

export const FlatContainer = styled.FlatList.attrs({ horizontal: true })`
  padding: 0px 0 30px 0px;
  width: 100%;
`;
