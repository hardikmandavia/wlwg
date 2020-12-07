import React from 'react';

import { Screen } from '../../components/Common';

import { Routes, PropsWithNavigation } from '../../../routes';



type Props = PropsWithNavigation<{}, Routes.SUMMONER>;

const Summoner = ({ navigation, route }: Props) => {
  const { region, id } = route.params;

  return (
    <Screen>
      {null}
    </Screen>
  );
};

export default Summoner;
