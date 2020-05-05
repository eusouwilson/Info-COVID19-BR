import React from 'react';

import { Container, DataTitle, DataValue, Loading } from './styles.CovidData';

const CovidData = ({ color, title, value }) => (
  <Container style={{ backgroundColor: color }}>
    <DataTitle>{title}</DataTitle>
    <DataValue>
      {value
        ? value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
        : 'carregando..'}
    </DataValue>
  </Container>
);

export default CovidData;
