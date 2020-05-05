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
  const [loading, setloading] = useState(false);
  const [dataState, setdataState] = useState(null);

  /*   useEffect(() => {
    handleFetchApiState();

    const fetchApi = async () => {
      setdataCoutry(await fetchData('brazil'));
      setdataDetails(await fetchDataDetails(null));
    };
    fetchApi();
    console.log(dataState);
  }, []); */
  useEffect(() => {
    setloading(true);
    handleFetchApi('brazil');
    handleFetchApiState();
  }, []);

  /*   const handleFetchApi = async (country, detail, uf) => {
    setdataCoutry(await fetchData(country, uf));
    setdataDetails(await fetchDataDetails(detail));
  };
 */
  const handleFetchApi = async (country) => {
    setdataCoutry(await fetchData(country));
    setloading(false);
  };

  const handleFetchApiStateDetails = async (uf) => {
    setloading(true);
    const dataStateFiltered = await fetchDataState(uf);
    setdataCoutry(dataStateFiltered.results[0]);

    console.log(dataCoutry);
    setloading(false);

    /*     const dataStateFiltered = await fetchDataState(uf);
    setdataCoutry(await fetchDataState(uf));
 */
  };

  const handleFetchApiState = async () => {
    setdataState(await fetchDataStates(null));
    setloading(false);
  };

  return (
    <Container>
      {!dataCoutry ? (
        <Loading />
      ) : (
        <>
          <Header>
            <HeaderTitleContainer>
              <HeaderTitle>Estatistica Covid-19</HeaderTitle>
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
                    : dataCoutry.last_available_death_rate * 100
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
