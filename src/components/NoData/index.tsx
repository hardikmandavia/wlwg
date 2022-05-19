import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { Text } from '../Common';

const NoData = () => (
  <>
    <Icon name="info-circle" light style={{ marginRight: 10 }} />
    <Text color="light">No data available</Text>
  </>
);

export default NoData;
