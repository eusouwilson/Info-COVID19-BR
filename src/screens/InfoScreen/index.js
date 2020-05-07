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
          pandemia do COVID-19. Dados obtidos pelo projeto covid19-brazil-api
          (https://github.com/devarthurribeiro/covid19-brazil-api) o mesmo usa
          como base os dados do CSSEGIS, Ministério da Saúde Coronavírus Brasil.
          Utilizarmos também o projeto API Dataset covid19 no
          Brasil.IO(https://github.com/turicas/covid19-br) que utiliza como
          Fonte: Secretarias de Saúde das Unidades Federativas, dados tratados
          por Álvaro Justen e colaboradores/Brasil.IO.
        </Content>
        <Content>Desenvolvido por José Wilson (@eusouwilson)</Content>
      </>
    </Header>
  </Container>
);

export default InfoScreen;
