import React, { useState, useEffect } from 'react';

import {
  Container,
  TitleText,
  TitleContainer,
  SelectContainer,
  FlatList,
  BtnContainer,
  TitleSelect,
  FlagUF,
} from './styles.SelectButtom';

const SelectButtom = ({ data, action, uf }) => {
  const [displayButtom, setdisplayButtom] = useState(true);
  const [ufSelected, setufSelected] = useState('UF');
  const [flagSelected, setflagSelected] = useState('');

  useEffect(() => {
    setdisplayButtom(true);
  }, []);
  useEffect(() => {
    setufSelected(uf === 'UF' ? 'UF' : ufSelected);
    setflagSelected(uf === 'UF' ? '' : flagSelected);
    setdisplayButtom(true);
  }, [uf]);

  const handleActionSelected = (state) => {
    action(state);
    setdisplayButtom(!displayButtom);
    setufSelected(state);
    setflagSelected(state);
  };

  return (
    <Container>
      <TitleContainer onPress={() => setdisplayButtom(!displayButtom)}>
        {!flagSelected ? (
          <></>
        ) : (
          <FlagUF
            source={{
              uri: `https://devarthurribeiro.github.io/covid19-brazil-api/static/flags/${flagSelected}.png`,
            }}
          />
        )}
        <TitleText>{ufSelected}</TitleText>
      </TitleContainer>
      {displayButtom ? (
        <></>
      ) : (
        <SelectContainer>
          <FlatList
            data={data}
            keyExtractor={(item) => String(item.city_ibge_code)}
            renderItem={({ item }) => (
              <BtnContainer onPress={() => handleActionSelected(item.state)}>
                <FlagUF
                  source={{
                    uri: `https://devarthurribeiro.github.io/covid19-brazil-api/static/flags/${item.state}.png`,
                  }}
                />
                <TitleSelect>{item.state}</TitleSelect>
              </BtnContainer>
            )}
          />
        </SelectContainer>
      )}
    </Container>
  );
};

export default SelectButtom;
