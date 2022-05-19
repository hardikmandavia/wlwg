import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

export const Container = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: ${SCREEN_HEIGHT - 80}px;
  padding: 20px;
`;

export const Image = styled.Image`
  border-radius: 75px;
  width: 150px;
  height: 150px;
`;
