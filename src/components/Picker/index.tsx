import React from 'react';
import DropDownPicker from 'react-native-dropdown-picker';

import { background, textLight } from '../../../colors';

interface Option {
  label: string;
  value: string;
}

interface Props {
  value: string;
  options: Option[];
  placeholder?: string;
  width?: number;
  onChange: (value: string) => void;
}

const Picker = ({
  value,
  options,
  placeholder,
  width,
  onChange
}: Props) => {
  return (
    <DropDownPicker
      items={options}
      defaultValue={value}
      containerStyle={{
        height: 40,
        width: width || 100
      }}
      style={{
        backgroundColor: background,
        borderWidth: 0
      }}
      selectedLabelStyle={{
        color: textLight
      }}
      arrowColor={textLight}
      onChangeItem={({ value }) => onChange(value)}
      placeholder={placeholder}
    />
  );
};

export default Picker;
