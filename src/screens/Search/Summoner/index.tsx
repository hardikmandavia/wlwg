import React, { useEffect } from 'react';
import { ActivityIndicator, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { RegionContext, SummonerContext } from '../../../contexts';
import { useSummonerQuery, SummonerQuery, LeagueEntry, Summoner } from '../../../__generated__/types';
import { getSoloRanked, getIcon } from '../../../selectors/ranked';

import { Text } from '../../../components/Common';

import {
  ErrorContainer,
  IconContainer,
  Image,
  LevelContainer,
  LoadingContainer,
  NameContainer,
  RankedImage,
  RankedImageContainer,
  ResultContainer,
  WinRateContainer
} from './index.styled';

interface Props {
  name: string;
  onSelect: (accountId: string, id: string) => void;
}

const Results = ({ name, onSelect }: Props) => {
  const { region } = RegionContext.useRegionContext();
  const { data, loading, error } = useSummonerQuery({ variables: { region, name } });
  const { setSummoner } = SummonerContext.useSummonerContext();

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
    const soloq = getSoloRanked(summoner.ranked as LeagueEntry[]);
    const winRate = soloq ? +((soloq.wins / (soloq.wins + soloq.losses)) * 100).toFixed(1) : undefined;
    const winRateColor = winRate ? winRate > 50 ? 'win' : 'loss' : undefined;

    return (
      <TouchableOpacity onPress={() => onSelect(summoner.accountId, summoner.id)}>
        <ResultContainer >
          <IconContainer>
            <Image
              source={{ uri: `http://ddragon.leagueoflegends.com/cdn/10.24.1/img/profileicon/${summoner.profileIconId}.png` }}
            />
            <LevelContainer>
              <Text color="light" size="small">
                {summoner.summonerLevel}
              </Text>
            </LevelContainer>
          </IconContainer>
          <NameContainer>
            <Text size="large">{summoner.name}</Text>
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
                <Text size="small">{soloq.tier} {soloq.rank}</Text>
                <Text size="small"> LP: {soloq.leaguePoints}</Text>
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
