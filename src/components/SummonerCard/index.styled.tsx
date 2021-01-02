import styled from 'styled-components/native';

import { neutral, secondary, background } from '../../../colors';

const Container = styled.View`
  margin: 10px;
  width: 100%;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  height: 70px;
`;

export const IconContainer = styled.View`
  flex: 1;
  height: 100%;
  width: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.Image`
  border-radius: 50px;
  width: 50px;
  height: 50px;
`;

export const LevelContainer = styled.View`
  height: 24px;
  padding: 0 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  background-color: ${background};
  position: absolute;
  bottom: 0;
  right: 0;
  border: 1px solid ${secondary};
`;

export const NameContainer = styled(Container)`
  flex: 2;
  flex-direction: column;
`;

export const RankedImage = styled.Image`
  height: 40px;
  width: 40px;
`;

export const RankedImageContainer = styled.View`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-start;
`;

export const ResultContainer = styled(Container)`
  background-color: ${secondary};
  padding: 5px;
  margin: 40px 0;
`;

export const WinRateContainer = styled.View`
  display: flex;
  flex-direction: row;
`;
