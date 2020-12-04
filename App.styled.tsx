import styled from 'styled-components/native';

import { background, secondary } from './colors';

export const View = styled.View`
  flex: 1;
  background-color: ${background};
  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  color: ${secondary};
`;