import styled from 'styled-components/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const Container = styled.View`
  flex: 1;
`;
export const Header = styled.View`
  border-bottom-right-radius: 30px;
  border-bottom-left-radius: 30px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 100px;
  background-color: #473f97;
`;

export const ContainerTitle = styled.View`
  border-bottom-width: 0.3px;
  border-bottom-color: #fff;
  margin-bottom: 20px;
`;

export const Title = styled.Text`
  font-size: ${hp('2.5%')}px;
  font-weight: 600;
  font-style: normal;
  text-align: left;
  color: #fff;
  margin-bottom: 20px;
  line-height: 20px;
  letter-spacing: -0.36px;
`;

export const Content = styled.Text`
  font-size: ${hp('1.5%')}px;
  font-weight: 300;
  text-align: justify;
  color: #fff;
  margin-bottom: 20px;
  line-height: 16px;
  letter-spacing: -0.28px;
`;

export const Body = styled.View`
  width: 100%;
  height: 100px;
  background-color: #ddd;
  align-items: center;
`;
