import React from 'react';
import { Grid, BarChart } from 'react-native-svg-charts';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Container, ChartTitle } from './styles.ChartState';

const ChartState = (data) => {
  let datachart = [];
  const fill = 'rgb(134, 65, 244)';

  const resultArray = Object.keys(data).map((index) => data[index]);

  resultArray[0].map((x) => {
    datachart.push(x.last_available_confirmed);
  });

  return (
    <Container>
      <ChartTitle>Curva de Contágio</ChartTitle>
      <BarChart
        style={{ height: hp('24%') }}
        data={datachart.reverse()}
        svg={{ fill }}
        contentInset={{ top: 10, bottom: 32 }}
      >
        <Grid />
      </BarChart>
    </Container>
  );
};

export default ChartState;
