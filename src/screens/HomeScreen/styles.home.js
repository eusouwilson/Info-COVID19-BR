import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;
export const Header = styled.View`
  height: 280px;
  background-color: #473f97;
  border-bottom-right-radius: 30px;
  border-bottom-left-radius: 30px;
`;

export const HeaderTitleContainer = styled.View`
  margin-top: 65px;
  margin-left: 18px;
`;
export const HeaderTitle = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
`;

export const HeaderSubTitleContainer = styled.View`
  margin-top: 20px;
  margin-left: 18px;
`;
export const HeaderSubTitle = styled.Text`
  font-size: 16px;
  color: #fff;
  font-weight: 500;
`;
export const HeaderContentContainer = styled.View`
  margin-top: 10px;
  margin-left: 18px;
  margin-right: 60px;
  margin-bottom: 10px;
`;
export const HeaderContent = styled.Text`
  font-size: 14px;
  color: #fff;
  font-weight: 300;
`;

export const HeaderButonsContainer = styled.View`
  margin-top: 10px;
  margin-left: 18px;
  margin-right: 18px;
  flex-direction: row;
  justify-content: space-between;
`;
export const ButonTitle = styled.Text`
  font-size: 16px;
  color: #fff;
  font-weight: 500;
`;

export const HeaderButonDisk = styled(RectButton)`
  background-color: #ed4855;
  width: 45%;
  height: 50px;
  padding-left: 5px;
  padding-right: 5px;
  border-radius: 20px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const HeaderButonChat = styled(RectButton)`
  background-color: #4d78f7;
  width: 45%;
  height: 50px;
  padding-left: 5px;
  padding-right: 5px;
  border-radius: 20px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const Body = styled.View`
  height: 60%;
  padding-left: 18px;
  padding-right: 18px;
`;

export const BodyTitleContainer = styled.View`
  margin-top: 30px;
`;
export const BodyTitle = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #0c4280;
`;

export const BodyIconContainer = styled.View`
  margin-top: 20px;
  margin-bottom: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const IconContainer = styled.View`
  width: 32%;
  height: 135px;
  align-items: center;
  justify-content: space-between;
`;
export const Icon = styled.Image`
  width: 90px;
  height: 90px;
`;
export const IconText = styled.Text`
  font-size: 12px;
  font-weight: 600;
  text-align: center;
  color: #0c4280;
`;
export const BotomMapContainer = styled(RectButton)``;

export const BodyMapContainer = styled.Image`
  margin-top: 20px;
  padding-left: 15px;
  padding-right: 15px;
  height: 135px;
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
