import React, { useEffect } from 'react';
import { ActivityIndicator, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import AppContext from '../../../contexts';
import { useSummonerQuery, SummonerQuery, LeagueEntry, Summoner } from '../../../__generated__/types';
import { getSoloRanked, getIcon } from '../../../selectors/ranked';

import { Text } from '../../../components/Common';
import SummonerCard from '../../../components/SummonerCard';

import {
  ErrorContainer,
  LoadingContainer,
} from './index.styled';

interface Props {
  name: string;
  onSelect: (accountId: string) => void;
}

const Results = ({ name, onSelect }: Props) => {
  const { regionState, summonerState } = AppContext.useAppContext();

  const { region } = regionState;
  const { setSummoner } = summonerState;

  const { data, loading, error } = useSummonerQuery({ variables: { region, name } });

  useEffect(() => {
    setSummoner(data?.summoner as Summoner)
  }, [data]);

  const renderError = () => (
    <ErrorContainer>
      <Icon name="info-circle" light style={{ marginRight: 10 }} />
      <Text>Summoner not found</Text>
    </ErrorContainer>
  );

  const renderSummoner = ({ summoner }: SummonerQuery) => {
    return (
      <SummonerCard
        summoner={summoner as Summoner}
        onSelect={() => onSelect(summoner.accountId)}
      />
    );
  }

  if (loading) return (
    <LoadingContainer>
      <ActivityIndicator />
    </LoadingContainer>
  );
  if (error) return renderError();
  if (data) return renderSummoner(data);
  return null;
};

export default Results;
