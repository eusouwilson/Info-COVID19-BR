import React from 'react';
import { Linking } from 'expo';

import {
  Container,
  ImageNews,
  NewTitle,
  BottonNewsContainer,
} from './styles.NewsData';

const NewsData = ({ data }) => {
  const img = { uri: data.urlToImage };
  const handlerOpenNews = (option) => {
    Linking.openURL(option);
  };
  return (
    <Container>
      <BottonNewsContainer onPress={() => handlerOpenNews(data.url)}>
        <ImageNews source={img} />
      </BottonNewsContainer>
      <>
        <NewTitle>{data.title}</NewTitle>
      </>
    </Container>
  );
};

export default NewsData;
