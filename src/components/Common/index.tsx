import styled from 'styled-components/native';

import { background, success, error, textLight, text } from '../../../colors';

export const Screen = styled.View`
  flex: 1;
  background-color: ${background};
  justify-content: flex-start;
  align-items: center;
  padding: 40px;
`;

interface TextProps {
  size?: "small" | "medium" | "large";
  color?: "win" | "loss" | "light";
  margin?: string;
}
export const Text = styled.Text<TextProps>`
  color: ${({ color }) => {
    if (!color) return text;
    switch (color) {
      case "win":
        return success;
      case "loss":
        return error;
      case "light":
        return textLight;
      default:
        return text;
    }
  }};
  font-size: ${({ size }) => {
    if (!size) return "14px";
    switch (size) {
      case "small":
        return "10px";
      case "medium":
        return "14px";
      case "large":
        return "18px";
      default:
        return "14px";
    }
  }};
  ${(({ margin }) => margin && `margin: ${margin};`)}
`;