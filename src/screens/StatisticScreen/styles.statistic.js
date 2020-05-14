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
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const HeaderTitle = styled.Text`
  font-size: ${hp('2.5%')}px;
  color: #fff;
  font-weight: bold;
`;

export const CountryContainer = styled.View`
  height: ${hp('6%')}px;
  width: 100%;
  background-color: #6c65ac;
  border-radius: 20px;
  flex-direction: row;
  margin-bottom: ${hp('3%')}px;
`;

export const CountryButtom = styled(RectButton)`
  height: ${hp('6%')}px;
  width: ${wp('45%')}px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  background-color: #6c65ac;
`;
export const CountryTitle = styled.Text`
  font-size: ${hp('3%')}px;
  font-weight: 600;
  color: #fff;
`;

export const UfContainer = styled.View`
  height: ${hp('6%')}px;
  width: ${wp('45%')}px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  background-color: #fff;
`;

export const UfTitle = styled.Text`
  font-size: ${hp('3%')}px;
  font-weight: 600;
  color: #6c65ac;
`;

export const Body = styled.View`
  height: ${hp('24%')}px;
  width: ${wp('100%')}px;
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

export const ScrollContainer = styled.ScrollView.attrs({
  horizontal: true,
  decelerationRate: 0.999,
  overScrollMode: 'never',
})`
  padding: 0px 0 0px 0px;
`;
export const MsgContainer = styled.View`
  margin-top: 40px;
  width: 100%;
  align-items: center;
  justify-content: center;
`;
export const MsgTitle = styled.Text`
  font-size: ${hp('4%')}px;
  color: #ddd;
  font-weight: 300;
  text-align: center;
`;

export const AvailableDate = styled.Text`
  font-size: ${hp('1.2%')}px;
  color: #fff;
  font-weight: 300;
`;

export const AvailableDateContainer = styled.View`
  justify-content: center;
  align-items: flex-start;
`;
