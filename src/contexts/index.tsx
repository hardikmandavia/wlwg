import React, { createContext, ReactNode, useContext, useMemo, useState } from 'react';

import { Summoner } from '../__generated__/types';
import { RegionContextData, SummonerContextData } from './types';

export interface AppContextData {
  regionState: RegionContextData;
  summonerState: SummonerContextData;
}

const DEFAULT_REGION = 'EUW1';
const AppContext = createContext<AppContextData | undefined>(undefined);

const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within the AppContextProvider');
  }
  return context;
};

interface Props {
  children: ReactNode;
}
const AppContextProvider = ({ children }: Props) => {
  const [region, setRegion] = useState<string>(DEFAULT_REGION);
  const regionState = useMemo(() => ({ region, setRegion }), [region, setRegion]);

  const [summoner, setSummoner] = useState<Summoner>();
  const summonerState = useMemo(() => ({ summoner, setSummoner }), [summoner, setSummoner]);

  const providerValue = {
    regionState,
    summonerState
  };

  return (
    <AppContext.Provider value={providerValue}>
      {children}
    </AppContext.Provider>
  );
};

export default {
  AppContext,
  AppContextProvider,
  useAppContext
};
