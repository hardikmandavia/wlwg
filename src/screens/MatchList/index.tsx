import React, { useState } from 'react';
import { ActivityIndicator, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { Screen } from '../../components/Common';

import { RegionContext } from '../../contexts';
import { Routes, PropsWithNavigation } from '../../routes';
import { useMatchListQuery, MatchListQuery } from '../../__generated__/types';

import { Text } from '../../components/Common';

import { Container } from './index.styled';

type Props = PropsWithNavigation<{}, Routes.SUMMONER>;

const MatchList = ({ navigation, route }: Props) => {
  const { region } = RegionContext.useRegionContext();
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
  // const soloRankedMatchList = data.matchList.matches.filter(m => m.queue === 420);
  // if (soloRankedMatchList.length === 0) return null;
  return renderNoData();





  return (
    <Screen>
      { }
    </Screen>
  );
};

export default MatchList;
