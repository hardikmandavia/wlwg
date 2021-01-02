import React, { useState } from 'react';
import { ActivityIndicator, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import AppContext from '../../contexts';
import { Routes, PropsWithNavigation } from '../../routes';
import { useMatchListQuery, MatchReference, Summoner } from '../../__generated__/types';

import { Text } from '../../components/Common';
import Match from './Match';

import { Container, Screen } from './index.styled';

type Props = PropsWithNavigation<{}, Routes.SUMMONER>;

const MatchList = ({ navigation, route }: Props) => {
  const { regionState, summonerState } = AppContext.useAppContext();
  const { region } = regionState;
  const { summoner } = summonerState;

  const { accountId } = route.params;
  const { data, loading, error } = useMatchListQuery({ variables: { region, accountId } });
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const renderNoData = () => {
    return (
      <Container>
        <Icon name="info-circle" light style={{ marginRight: 10 }} />
        <Text color="light">No data available</Text>
      </Container>
    );
  }
  if (loading) return (
    <Container>
      <ActivityIndicator />
    </Container>
  )
  if (!data || error) return renderNoData();
  if (data.matchList.matches.length === 0) return renderNoData();

  const matchReference = data.matchList.matches[selectedIndex] as MatchReference;

  return (
    <Screen>
      <Container>
        <Match matchReference={matchReference} />
      </Container>
    </Screen>
  );
};

export default MatchList;
