import React, { useState, useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Alert, StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  Container,
  TitleText,
  TitleContainer,
  FlatList,
  BtnContainer,
  TitleSelect,
  FlagUF,
} from './styles.SelectButtom';
import {
  Menu,
  MenuTrigger,
  MenuOptions,
  MenuOption,
} from 'react-native-popup-menu';
Menu.debug = true;

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
      <Menu onSelect={(value) => handleActionSelected(value)}>
        <MenuTrigger customStyles={triggerStyles}>
          <TitleContainer>
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
            <Ionicons name={'ios-arrow-down'} size={28} color={'#6c65ac'} />
          </TitleContainer>
        </MenuTrigger>
        <MenuOptions customStyles={optionsStyles}>
          <FlatList
            data={data}
            keyExtractor={(item) => String(item.city_ibge_code)}
            renderItem={({ item }) => (
              <MenuOption customStyles={optionStyles} value={item.state}>
                <BtnContainer>
                  <FlagUF
                    source={{
                      uri: `https://devarthurribeiro.github.io/covid19-brazil-api/static/flags/${item.state}.png`,
                    }}
                  />
                  <TitleSelect>{item.state}</TitleSelect>
                </BtnContainer>
              </MenuOption>
            )}
            style={{ height: 200 }}
          />
        </MenuOptions>
      </Menu>
    </Container>
  );
};

const triggerStyles = {
  triggerOuterWrapper: {
    height: 50,
    width: wp('35%'),
  },
  triggerWrapper: {
    alignItems: 'center',
    justifyContent: 'space-around',
    flex: 1,
  },
  triggerTouchable: {
    style: {
      flex: 1,
    },
  },
};

const optionStyles = {
  optionWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionText: {
    fontSize: hp('3%'),
    color: '#6c65ac',
    textAlign: 'left',
  },
};

const optionsStyles = {
  optionsContainer: {
    backgroundColor: 'white',
    padding: 5,
    width: wp('35%'),
    borderBottomLeftRadius: wp('3%'),
    borderBottomRightRadius: wp('3%'),
  },
  optionsWrapper: {},
  optionWrapper: {
    margin: 5,
  },
  optionTouchable: {
    underlayColor: '#42d9c8',
    activeOpacity: 70,
  },
  optionText: {
    color: 'black',
  },
};

export default SelectButtom;
