import React from 'react';
import { ActivityIndicator, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';

import { useSummonerQuery, SummonerQuery, LeagueEntry, Summoner } from '../../../__generated__/types';

import { getSoloRanked, getIcon } from '../../../selectors/ranked';

import {
  ErrorContainer,
  IconContainer,
  Image,
  LevelContainer,
  LevelText,
  LoadingContainer,
  NameContainer,
  NameText,
  Text,
  RankedImage,
  RankedImageContainer,
  RankedText,
  ResultContainer,
  WinRateContainer
} from './index.styled';

interface Props {
  region: string;
  name: string;
  onSelect: (accountId: string, id: string) => void;
}

const Results = ({ region, name, onSelect }: Props) => {
  const { data, loading, error } = useSummonerQuery({ variables: { region, name } });

  const renderError = () => (
    <ErrorContainer>
      <Icon name="info-circle" light style={{ marginRight: 10 }} />
      <Text>Summoner not found</Text>
    </ErrorContainer>
  );

  const renderSummoner = ({ summoner }: SummonerQuery) => {
    const soloq = getSoloRanked(summoner.ranked as LeagueEntry[]);
    const winRate = soloq ? +((soloq.wins / (soloq.wins + soloq.losses)) * 100).toFixed(1) : undefined;
    const winRateColor = winRate ? winRate > 50 ? 'win' : 'loss' : undefined
    return (
      <TouchableOpacity onPress={() => onSelect(summoner.accountId, summoner.id)}>
        <ResultContainer >
          <IconContainer>
            <Image
              source={{ uri: `http://ddragon.leagueoflegends.com/cdn/10.24.1/img/profileicon/${summoner.profileIconId}.png` }}
            />
            <LevelContainer>
              <LevelText>
                {summoner.summonerLevel}
              </LevelText>
            </LevelContainer>
          </IconContainer>
          <NameContainer>
            <NameText>{summoner.name}</NameText>
            <WinRateContainer>
              <Text margin="0 10px 0 0">W: {soloq?.wins || '-'}</Text>
              <Text margin="0 10px 0 0">L: {soloq?.losses || '-'}</Text>
              <Text color={winRateColor}>{winRate ? winRate : '-'}%</Text>
            </WinRateContainer>
          </NameContainer>
          <RankedImageContainer>
            <RankedImage source={getIcon(soloq?.tier || 'Unranked')} />
            {soloq && (
              <>
                <RankedText>{soloq.tier} {soloq.rank}</RankedText>
                <RankedText> LP: {soloq.leaguePoints}</RankedText>
              </>
            )}
          </RankedImageContainer>
        </ResultContainer>
      </TouchableOpacity>
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
