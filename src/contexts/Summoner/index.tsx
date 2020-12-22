import React, { createContext, ReactNode, useContext, useMemo, useState } from 'react';

import { Summoner } from '../../__generated__/types';

interface SummonerContextData {
  summoner?: Summoner;
  setSummoner: (summoner?: Summoner) => void;
}

const SummonerContext = createContext<SummonerContextData | undefined>(undefined);

const useSummonerContext = () => {
  const context = useContext(SummonerContext);
  if (!context) {
    throw new Error('useSummonerContext must be used within the SummonerContextProvider');
  }
  return context;
};

interface Props {
  children: ReactNode;
}
const SummonerContextProvider = ({ children }: Props) => {
  const [summoner, setSummoner] = useState<Summoner>();
  const providerValue = useMemo(() => ({ summoner, setSummoner }), [summoner, setSummoner]);

  return (
    <SummonerContext.Provider value={providerValue}>
      {children}
    </SummonerContext.Provider>
  );
}

export default {
  SummonerContext,
  SummonerContextProvider,
  useSummonerContext
};
