import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

import { Container } from '../index.styled';

import { win, lose } from '../../../../colors';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

export const ContentContainer = styled(Container)`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: transparent;
`

export const MatchContainer = styled(Container)`
  flex-direction: column;
  height: ${SCREEN_HEIGHT}px;
`;

export const GradientView = styled(Container)`
  width: 100%;
  height: 0;
  border-top-color: ${win};
  border-top-width: ${SCREEN_HEIGHT}px;
  border-right-width: ${SCREEN_WIDTH}px;
  border-right-color: ${lose};
`;

export const PlayerContainer = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: ${SCREEN_HEIGHT - 80}px;
`;

export const OpponentContainer = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end; 
  height: ${SCREEN_HEIGHT - 80}px;
`;