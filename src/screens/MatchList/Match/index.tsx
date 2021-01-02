import React from 'react';

import { MatchReference, useMatchQuery } from '../../../__generated__/types';

import AppContext from '../../../contexts';

import { Text } from '../../../components/Common';

import { ContentContainer, MatchContainer, GradientView } from './index.styled';

interface Props {
  matchReference: MatchReference;
}

const Match = ({ matchReference }: Props) => {
  const { regionState } = AppContext.useAppContext();
  const { region } = regionState;
  const { data, loading, error } = useMatchQuery({ variables: { region, gameId: matchReference.gameId } });

  return (
    <MatchContainer>
      <GradientView />
      <ContentContainer>
        {/* <Text color="light">{data?.match.gameId}</Text> */}
      </ContentContainer>
    </MatchContainer>
  );
};

export default Match;
