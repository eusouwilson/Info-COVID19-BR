import React from 'react';

import {
  Container,
  ContainerTitle,
  Title,
  Content,
  Header,
} from './styles.info';

const InfoScreen = () => (
  <Container>
    <Header>
      <ContainerTitle>
        <Title>Sobre o Aplicativo</Title>
      </ContainerTitle>
      <>
        <Content>
          Aplicativo idealizado para disseminação de informações sobre a
          pandemia do COVID-19. Dados obtidas pelo projeto covid19-brazil-api
          (https://github.com/devarthurribeiro/covid19-brazil-api) o mesmo usa
          como base os dados do CSSEGIS, Ministério da Saúde Coronavírus Brasil
        </Content>
      </>
    </Header>
  </Container>
);

export default InfoScreen;
