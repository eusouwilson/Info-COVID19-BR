import React, { useState, useEffect } from 'react';
import NewsData from '../../components/NewsData';
import { fetchDataNews } from '../../services/api';
import {
  Container,
  Header,
  HeaderTitleContainer,
  HeaderTitle,
  Body,
  FlatContainer,
} from './styles.news';

const NewsScreen = () => {
  const [dataNews, setdataNews] = useState([]);
  const [loading, setloading] = useState(true);
  const fetchApi = async () => {
    setdataNews(await fetchDataNews());
    setloading(false);
  };
  useEffect(() => {
    fetchApi();
  }, []);
  return (
    <Container>
      <Header>
        <HeaderTitleContainer>
          <HeaderTitle>Noticias sobre COVID-19</HeaderTitle>
        </HeaderTitleContainer>
      </Header>
      {!dataNews ? (
        <></>
      ) : (
        <Body>
          <FlatContainer
            onRefresh={() => fetchApi()}
            refreshing={loading}
            data={dataNews}
            keyExtractor={(item) => String(item.url)}
            renderItem={({ item }) => <NewsData data={item} />}
          />
        </Body>
      )}
    </Container>
  );
};
export default NewsScreen;
