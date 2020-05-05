import styled from 'styled-components/native';

export const Container = styled.View`
  width: 150px;
  height: 110px;
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  align-items: flex-start;
  justify-content: space-between;
`;

export const DataTitle = styled.Text`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
`;

export const DataValue = styled.Text`
  font-size: 22px;
  color: #fff;
  font-weight: bold;
`;

export const Loading = styled.ActivityIndicator.attrs({
  size: 'large',
  color: '#0000ff',
})``;
