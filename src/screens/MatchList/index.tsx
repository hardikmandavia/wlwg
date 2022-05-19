import React, { useState } from 'react';
import { ActivityIndicator, TouchableOpacity } from 'react-native';

import AppContext from '../../contexts';
import { Routes, PropsWithNavigation } from '../../routes';
import { useMatchListQuery, MatchReference, Summoner } from '../../__generated__/types';

import NoData from '../../components/NoData';
import Match from './Match';

import { Container, Screen } from './index.styled';

type Props = PropsWithNavigation<{}, Routes.SUMMONER>;

const MatchList = ({ navigation, route }: Props) => {
  const { regionState, summonerState } = AppContext.useAppContext();
  const { region } = regionState;
  const { summoner } = summonerState;

  if (!summoner) navigation.navigate("SEARCH");

  const { accountId } = route.params;
  const { data, loading, error } = useMatchListQuery({ variables: { region, accountId } });
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  if (loading) return (
    <Container>
      <ActivityIndicator />
    </Container>
  );

  if (!data || data.matchList.matches.length === 0 || error) return (
    <Container>
      <NoData />
    </Container>
  );

  const matchReference = data.matchList.matches[selectedIndex] as MatchReference;

  return (
    <Screen>
      <Container>
        <Match
          matchReference={matchReference}
          summoner={summoner as Summoner}
        />
      </Container>
    </Screen>
  );
};

export default MatchList;
