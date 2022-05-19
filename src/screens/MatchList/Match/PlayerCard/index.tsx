import React from 'react';

import { Participant } from '../../../../__generated__/types';
import { VERSION } from '../../../../constants';

import { Container, Image } from './index.styled';

interface Props {
  player: Participant;
}

const PlayerCard = ({ player }: Props) => {
  const { champion } = player;

  return (
    <Container>
      {champion && <Image
        source={{ uri: `http://ddragon.leagueoflegends.com/cdn/${VERSION}/img/champion/${champion.id}.png` }}
      />}
    </Container>
  );
};

export default PlayerCard;