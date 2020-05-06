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
  height: ${hp('35%')}px;
  background-color: #473f97;
  border-bottom-right-radius: 30px;
  border-bottom-left-radius: 30px;
  padding-left: 18px;
  padding-right: 18px;
`;

export const HeaderTitleContainer = styled.View`
  margin-top: ${wp('12%')}px;
`;
export const HeaderTitle = styled.Text`
  font-size: ${hp('3%')}px;
  color: #fff;
  font-weight: bold;
`;

export const HeaderSubTitleContainer = styled.View`
  margin-top: ${hp('1.5%')}px;
`;
export const HeaderSubTitle = styled.Text`
  font-size: ${hp('2.5%')}px;
  color: #fff;
  font-weight: 500;
`;
export const HeaderContentContainer = styled.View`
  margin-top: 10px;
  margin-right: 60px;
  margin-bottom: 10px;
`;
export const HeaderContent = styled.Text`
  font-size: ${hp('2%')}px;
  color: #fff;
  font-weight: 300;
`;

export const HeaderButonsContainer = styled.View`
  margin-top: ${hp('1.3%')}px;
  flex-direction: row;
  justify-content: space-between;
`;
export const ButonTitle = styled.Text`
  font-size: ${hp('2.5%')}px;
  color: #fff;
  font-weight: 500;
`;

export const HeaderButonDisk = styled(RectButton)`
  background-color: #ed4855;
  width: ${wp('44%')}px;
  height: ${hp('6%')}px;
  padding-left: 5px;
  padding-right: 5px;
  border-radius: ${hp('2.5%')}px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const HeaderButonChat = styled(RectButton)`
  background-color: #4d78f7;
  width: ${wp('44%')}px;
  height: ${hp('6%')}px;
  padding-left: 5px;
  padding-right: 5px;
  border-radius: ${hp('2.5%')}px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const Body = styled.View`
  height: ${hp('60%')}px;
  padding-left: 18px;
  padding-right: 18px;
`;

export const BodyTitleContainer = styled.View`
  margin-top: ${hp('2%')}px;
`;
export const BodyTitle = styled.Text`
  font-size: ${hp('3%')}px;
  font-weight: bold;
  color: #0c4280;
`;

export const BodyIconContainer = styled.View`
  margin-top: ${hp('2%')}px;
  margin-bottom: ${hp('2%')}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const IconContainer = styled.View`
  width: ${wp('30%')}px;
  height: ${hp('18%')}px;
  align-items: center;
  justify-content: space-between;
`;
export const Icon = styled.Image`
  width: 94px;
  height: 94px;
`;
export const IconText = styled.Text`
  font-size: ${hp('1.7%')}px;
  font-weight: 300;
  text-align: center;
  color: #0c4280;
`;
export const BotomMapContainer = styled(RectButton)``;

export const BodyMapContainer = styled.Image`
  margin-top: 20px;
  padding-left: 15px;
  padding-right: 15px;
  height: ${hp('20%')}px;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
`;
export const MapText = styled.Text`
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  color: #0c4280;
`;
