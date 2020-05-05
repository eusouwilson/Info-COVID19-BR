import React from 'react';
import { Linking } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import { IconCard } from '../../utils/iconsCard';
import Maps from '../../../assets/img/maps.png';

import {
  Container,
  Body,
  Header,
  HeaderTitleContainer,
  HeaderTitle,
  HeaderSubTitleContainer,
  HeaderSubTitle,
  HeaderContentContainer,
  HeaderContent,
  HeaderButonsContainer,
  HeaderButonDisk,
  HeaderButonChat,
  ButonTitle,
  BodyTitleContainer,
  BodyTitle,
  BodyIconContainer,
  IconContainer,
  Icon,
  IconText,
  BodyMapContainer,
  MapText,
  BotomMapContainer,
} from './styles.home';

const HomeScreen = () => {
  const handlerCall = (option) => {
    Linking.openURL(option);
  };
  return (
    <Container>
      <Header>
        <HeaderTitleContainer>
          <HeaderTitle>Covid-19</HeaderTitle>
        </HeaderTitleContainer>
        <HeaderSubTitleContainer>
          <HeaderSubTitle>Tem dúvidas sobre o COVID-19?</HeaderSubTitle>
        </HeaderSubTitleContainer>
        <HeaderContentContainer>
          <HeaderContent>
            Você pode contar com o serviço de informações do Disque Saúde 136 ou
            através do chat
          </HeaderContent>
        </HeaderContentContainer>
        <HeaderButonsContainer>
          <HeaderButonDisk onPress={() => handlerCall('tel:136')}>
            <Ionicons name={'ios-call'} size={32} color={'#FFF'} />
            <ButonTitle>Disque Saúde</ButonTitle>
          </HeaderButonDisk>
          <HeaderButonChat
            onPress={() => handlerCall('https://w.tnh.health/c/5521')}
          >
            <Ionicons name={'ios-chatbubbles'} size={32} color={'#FFF'} />
            <ButonTitle>Chat Saúde</ButonTitle>
          </HeaderButonChat>
        </HeaderButonsContainer>
      </Header>

      <Body>
        <BodyTitleContainer>
          <BodyTitle>Prevenção</BodyTitle>
        </BodyTitleContainer>
        <BodyIconContainer>
          <IconContainer>
            <Icon source={IconCard('distance')} />
            <IconText>
              Mantenha uma distância mínima de cerca de 2 metros
            </IconText>
          </IconContainer>
          <IconContainer>
            <Icon source={IconCard('hands')} />
            <IconText>
              Lave com frequência as mãos até a altura dos punhos
            </IconText>
          </IconContainer>
          <IconContainer>
            <Icon source={IconCard('facemask')} />
            <IconText>
              Utilize máscaras em situações de saída de sua residência.
            </IconText>
          </IconContainer>
        </BodyIconContainer>
        <BotomMapContainer
          onPress={() =>
            handlerCall(
              'https://coronavirus.saude.gov.br/index.php/sobre-a-doenca'
            )
          }
        >
          <BodyMapContainer source={Maps}></BodyMapContainer>
        </BotomMapContainer>
      </Body>
    </Container>
  );
};
export default HomeScreen;
