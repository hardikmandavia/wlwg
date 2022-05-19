import React from 'react';
import { ActivityIndicator } from 'react-native';

import { MatchReference, useMatchQuery, Summoner, Match } from '../../../__generated__/types';

import AppContext from '../../../contexts';
import { getOpponentData, getPlayerData } from '../../../selectors/match';

import { Text } from '../../../components/Common';
import NoData from '../../../components/NoData';
import PlayerCard from './PlayerCard';
import {
  ContentContainer,
  MatchContainer,
  GradientView,
  PlayerContainer,
  OpponentContainer
} from './index.styled';


interface Props {
  matchReference: MatchReference;
  summoner: Summoner;
}

const MatchComponent = ({ matchReference, summoner }: Props) => {
  const { regionState } = AppContext.useAppContext();
  const { region } = regionState;

  const { data, loading, error } = useMatchQuery({ variables: { region, gameId: matchReference.gameId } });

  if (loading) return (
    <ContentContainer>
      <ActivityIndicator />
    </ContentContainer>
  );

  if (!data || !data.match || error) return (
    <ContentContainer>
      <NoData />
    </ContentContainer>
  );

  const player = getPlayerData(summoner.name, data.match as Match);
  const opponent = getOpponentData(data.match as Match, player);

  return (
    <MatchContainer>
      <GradientView />
      <ContentContainer>
        <PlayerCard player={player} />
        <OpponentContainer>
          <Text color="light">Opponent: {opponent.champion?.name}</Text>
        </OpponentContainer>
      </ContentContainer>
    </MatchContainer>
  );
};

export default MatchComponent;
