import styled from 'styled-components/native';

import { neutral, secondary, text, background } from '../../../../colors';

const Container = styled.View`
  margin: 10px;
  width: 100%;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  height: 70px;
`;

export const ErrorContainer = styled(Container)`
  justify-content: center;
  align-items: center;
  background-color: ${neutral};
  border: 1px dashed ${text};
  padding: 10px;
  margin: 40px 0;
`;

export const LoadingContainer = styled(Container)`
  justify-content: center;
  align-items: center;
`;
