import React, { useState, useEffect } from 'react';
import SwitchButtom from '../../components/SwitchButtom';
import CovidData from '../../components/CovidData';

import { fetchData, fetchDataStates, fetchDataState } from '../../services/api';

import {
  Container,
  Header,
  Body,
  BodyData,
  HeaderTitleContainer,
  HeaderTitle,
  Loading,
  FlatContainer,
  Buttom,
} from './styles.statistic';

const StatisticScreen = () => {
  const [dataCoutry, setdataCoutry] = useState([]);
  const [dataState, setdataState] = useState(null);

  useEffect(() => {
    handleFetchApi('brazil');
    handleFetchApiState();
  }, []);

  const handleFetchApi = async (country) => {
    setdataCoutry(await fetchData(country));
  };

  const handleFetchApiStateDetails = async (uf) => {
    const dataStateFiltered = await fetchDataState(uf);
    setdataCoutry(dataStateFiltered.results[0]);
  };

  const handleFetchApiState = async () => {
    setdataState(await fetchDataStates());
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
            </HeaderTitleContainer>
            <SwitchButtom
              titleoff={dataCoutry.state ? dataCoutry.state : 'Geral'}
              titleon={'Brasil'}
              onpress={handleFetchApi}
            />
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
          <Body>
            {!dataState ? (
              <Loading />
            ) : (
              <FlatContainer
                data={dataState.results}
                keyExtractor={(item) => String(item.city_ibge_code)}
                renderItem={({ item }) => (
                  <Buttom
                    onPress={() => handleFetchApiStateDetails(item.state)}
                  >
                    <CovidData
                      color="#6C65AC"
                      title={item.state}
                      value={item.confirmed}
                    />
                  </Buttom>
                )}
              />
            )}
          </Body>
        </>
      )}
    </Container>
  );
};
export default StatisticScreen;
