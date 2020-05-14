import React from 'react';
import { Grid, BarChart } from 'react-native-svg-charts';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Container, ChartTitle } from './styles.ChartState';

const ChartState = ({ data, title, type }) => {
  let dataNovos = [];
  let dataObitos = [];
  let dataAcumulados = [];

  const fill = 'rgb(134, 65, 244)';

  data.map((x) => {
    dataNovos.push(x.new_confirmed);
    dataObitos.push(x.last_available_deaths);
    dataAcumulados.push(x.last_available_confirmed);
  });

  return (
    <Container>
      <ChartTitle>{title}</ChartTitle>
      <BarChart
        style={{ height: hp('24%'), width: wp('92%'), paddingHorizontal: 10 }}
        data={
          type === 'obitos'
            ? dataObitos.reverse()
            : type === 'novos'
            ? dataNovos.reverse()
            : dataAcumulados.reverse()
        }
        svg={{ fill }}
        contentInset={{ top: 10, bottom: 32 }}
      >
        <Grid style={{ height: hp('24%'), width: wp('100%') }} />
      </BarChart>
    </Container>
  );
};

export default ChartState;
