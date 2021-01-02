import React from 'react';
import { TouchableOpacity } from 'react-native';

import { Summoner, LeagueEntry } from '../../__generated__/types';
import { getSoloRanked, getIcon } from '../../selectors/ranked';

import { Text } from '../Common';

import {
  IconContainer,
  Image,
  NameContainer,
  RankedImage,
  RankedImageContainer,
  LevelContainer,
  ResultContainer,
  WinRateContainer
} from './index.styled';

interface Props {
  summoner: Summoner;
  onSelect?: () => void;
}

const SummonerCard = ({ summoner, onSelect }: Props) => {
  const soloq = getSoloRanked(summoner.ranked as LeagueEntry[]);
  const winRate = soloq ? +((soloq.wins / (soloq.wins + soloq.losses)) * 100).toFixed(1) : undefined;
  const winRateColor = winRate ? winRate > 50 ? 'win' : 'loss' : undefined;

  const handleSelect = () => {
    if (onSelect) onSelect();
  };

  return (
    <TouchableOpacity onPress={handleSelect} disabled={!onSelect}>
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
  )
};

export default SummonerCard;