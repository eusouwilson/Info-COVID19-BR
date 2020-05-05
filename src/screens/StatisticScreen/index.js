import React, { useState, useEffect } from 'react';
import SwitchButtom from '../../components/SwitchButtom';
import CovidData from '../../components/CovidData';

import { fetchData, fetchDataDetails } from '../../services/api';

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
  const [dataDetails, setdataDetails] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      setdataCoutry(await fetchData('brazil'));
      setdataDetails(await fetchDataDetails(null));
    };
    fetchApi();
  }, []);

  const handleFetchApi = async (country, detail, uf) => {
    setdataCoutry(await fetchData(country, uf));
    setdataDetails(await fetchDataDetails(detail));
  };
  return (
    <Container>
      {dataCoutry === [] ? (
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
                title="Ativos"
                value={
                  dataCoutry.confirmed
                    ? dataCoutry.cases
                    : dataCoutry.cases - dataCoutry.deaths - dataCoutry.refuses
                }
              />
              <CovidData
                color="#EE5657"
                title="Confirmados"
                value={
                  dataCoutry.confirmed ? dataCoutry.confirmed : dataCoutry.cases
                }
              />
            </BodyData>
            <BodyData>
              <CovidData
                color="#9057F7"
                title="Obitos"
                value={dataCoutry.deaths}
              />
              <CovidData
                color="#64D97C"
                title={'Curados'}
                value={
                  dataCoutry.recovered
                    ? dataCoutry.recovered
                    : dataCoutry.refuses
                }
              />
            </BodyData>
          </Header>
          <Body>
            {dataDetails === [] ? (
              <Loading />
            ) : (
              <FlatContainer
                data={dataDetails}
                keyExtractor={(item) =>
                  String(item.country ? item.country : item.state)
                }
                renderItem={({ item }) => (
                  <Buttom
                    onPress={() =>
                      handleFetchApi(item.country, item.country, item.uf)
                    }
                  >
                    <CovidData
                      color="#6C65AC"
                      title={item.country ? item.country : item.state}
                      value={item.cases}
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
