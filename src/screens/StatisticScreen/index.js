import React, { useState, useEffect } from 'react';
import CovidData from '../../components/CovidData';
import {
  fetchData,
  fetchDataStates,
  fetchDataState,
  fetchDataStateForDate,
} from '../../services/api';
import moment from 'moment';
import ChartState from '../../components/ChartState';
import SelectButtom from '../../components/SelectButtom';
import {
  Container,
  Header,
  Body,
  BodyData,
  HeaderTitleContainer,
  HeaderTitle,
  Loading,
  MsgContainer,
  MsgTitle,
  CountryContainer,
  CountryButtom,
  CountryTitle,
  UfContainer,
  AvailableDate,
  AvailableDateContainer,
} from './styles.statistic';

const StatisticScreen = () => {
  const [dataCoutry, setdataCoutry] = useState([]);
  const [dataState, setdataState] = useState(null);
  const [dataStateForDate, setdataStateForDate] = useState(null);
  const [hideUF, sethideUF] = useState(null);

  useEffect(() => {
    handleFetchApi('brazil');
    handleFetchApiState();
  }, []);

  const handleFetchApi = async (country) => {
    sethideUF('UF');
    setdataCoutry(await fetchData(country));
  };

  const handleFetchApiStateDetails = async (uf) => {
    const dataStateFiltered = await fetchDataState(uf);
    setdataStateForDate(await fetchDataStateForDate(uf));
    setdataCoutry(dataStateFiltered.results[0]);
    sethideUF(null);
  };

  const handleFetchApiState = async () => {
    setdataState(await fetchDataStates());
  };
  const handleFetchApiStateForDate = async () => {
    setdataStateForDate(await fetchDataStateForDate());
  };

  return (
    <Container>
      {!dataCoutry ? (
        <Loading />
      ) : (
        <>
          <Header>
            <HeaderTitleContainer>
              <HeaderTitle>Estatística Covid-19</HeaderTitle>
              <AvailableDateContainer>
                <AvailableDate>Atualizado em:</AvailableDate>
                <AvailableDate>
                  {dataCoutry.updated_at
                    ? moment.utc(dataCoutry.updated_at).format('DD MMM YYYY')
                    : moment
                        .utc(dataCoutry.last_available_date)
                        .format('DD MMM YYYY')}
                </AvailableDate>
              </AvailableDateContainer>
            </HeaderTitleContainer>

            <CountryContainer>
              <CountryButtom onPress={() => handleFetchApi('brazil')}>
                <CountryTitle>Brasil</CountryTitle>
              </CountryButtom>
              <UfContainer>
                {!dataState ? (
                  <Loading />
                ) : (
                  <SelectButtom
                    data={dataState.results}
                    action={handleFetchApiStateDetails}
                    uf={hideUF}
                  />
                )}
              </UfContainer>
            </CountryContainer>
            <BodyData>
              <CovidData
                color="#F6B258"
                title={dataCoutry.confirmed ? 'Ativos' : 'Novos Confirmados'}
                value={
                  dataCoutry.confirmed
                    ? dataCoutry.cases
                    : dataCoutry.new_confirmed
                }
              />
              <CovidData
                color="#EE5657"
                title="Confirmados"
                value={
                  dataCoutry.confirmed
                    ? dataCoutry.confirmed
                    : dataCoutry.last_available_confirmed
                }
              />
            </BodyData>
            <BodyData>
              <CovidData
                color="#9057F7"
                title="Obitos"
                value={
                  dataCoutry.deaths
                    ? dataCoutry.deaths
                    : dataCoutry.last_available_deaths
                }
              />
              <CovidData
                color="#64D97C"
                title={dataCoutry.recovered ? 'Curados' : 'Letalidade'}
                value={
                  dataCoutry.recovered
                    ? dataCoutry.recovered
                    : (dataCoutry.last_available_death_rate * 100).toFixed(2) +
                      '%'
                }
              />
            </BodyData>
          </Header>
        </>
      )}

      <Body>
        {!hideUF && dataStateForDate ? (
          <ChartState data={dataStateForDate.results} />
        ) : (
          <MsgContainer>
            <MsgTitle>Sem gráfico para o pais selecione uma UF</MsgTitle>
          </MsgContainer>
        )}
      </Body>
    </Container>
  );
};
export default StatisticScreen;
