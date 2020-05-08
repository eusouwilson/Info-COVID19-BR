import React from 'react';
import Shimmer from 'react-native-shimmer';

import { Container, DataTitle, DataValue, Loading } from './styles.CovidData';

const CovidData = ({ color, title, value }) => (
  <Container style={{ backgroundColor: color }}>
    <DataTitle>{title}</DataTitle>
    {value ? (
      <DataValue>
        {value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
      </DataValue>
    ) : (
      <Loading />
    )}
  </Container>
);

export default CovidData;
