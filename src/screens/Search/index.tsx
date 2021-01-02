import React, { useState, useEffect, useRef } from 'react';
import { Animated } from 'react-native';

import AppContext from '../../contexts';
import { PropsWithNavigation, Routes } from '../../routes';

import Logo from '../../components/Logo';
import Picker from '../../components/Picker';
import Results from './Summoner';
import { Screen } from '../../components/Common';

import { Input, Header } from './index.styled';

type Props = PropsWithNavigation<{}, Routes.SEARCH>;

const Home = ({ navigation }: Props) => {
  const { regionState } = AppContext.useAppContext();
  const { region, setRegion } = regionState;

  const [focussed, setFocus] = useState(false);
  const [name, setName] = useState('');

  const fadeAnim = useRef(new Animated.Value(150)).current;

  const handleNameChange = (value: string) => setName(value);
  const handleRegionChange = (value: string) => setRegion(value);
  const handleFocus = () => setFocus(true);
  const handleBlur = () => {
    fadeAnim.setValue(150);
    setFocus(false);
  }

  const handleSelect = (accountId: string) => navigation.navigate(Routes.SUMMONER, { accountId });

  useEffect(() => {
    if (focussed) {
      Animated.timing(
        fadeAnim,
        {
          toValue: 0,
          duration: 1000,
          useNativeDriver: false
        }
      ).start()
    }
  }, [fadeAnim, focussed]);

  return (
    <Screen>
      <Header>
        <Picker
          options={[
            { label: 'EUW', value: 'EUW1' },
            { label: 'NA', value: 'NA1' },
          ]}
          value={region}
          onChange={handleRegionChange}
          placeholder="Select a region"
          width={80}
        />
      </Header>
      {name === '' && (
        <Animated.View
          style={{
            height: focussed ? fadeAnim : 150,
            overflow: 'hidden'
          }}
        >
          <Logo width={150} height={150} />
        </Animated.View>
      )}
      <Input
        keyboardType="web-search"
        value={name}
        placeholder="Search a summoner"
        onChangeText={handleNameChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        autoCorrect={false}
      />
      {name > '' && !focussed && (
        <Results
          name={name}
          onSelect={handleSelect}
        />
      )}
    </Screen>
  );
};

export default Home;
