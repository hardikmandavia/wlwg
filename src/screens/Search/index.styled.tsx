import styled from 'styled-components/native';
import { primary, text } from '../../../colors';

export const Button = styled.TouchableOpacity`
  width: 100%;
  height: 30px;
  background-color: ${primary};
  border-radius: 25px;
  padding: 5px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  color: ${text};
`;

export const Input = styled.TextInput`
  width: 100%;
  height: 40px;
  background-color: white;
  border-radius: 25px;
  padding: 5px 20px;
`;

export const Header = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;
