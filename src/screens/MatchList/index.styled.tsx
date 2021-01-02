import styled from 'styled-components/native';

import { Screen as ScreenImported } from '../../components/Common';

import { background } from '../../../colors';

export const Container = styled.View`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${background};
`;

export const Screen = styled(ScreenImported)`
  padding: 0;
`;
