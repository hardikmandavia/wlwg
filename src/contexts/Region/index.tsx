import React, { createContext, ReactNode, useContext, useMemo, useState } from 'react';

const DEFAULT_REGION = 'EUW1';

interface RegionContextData {
  region: string;
  setRegion: (region: string) => void;
}

const RegionContext = createContext<RegionContextData | undefined>(undefined);

const useRegionContext = () => {
  const context = useContext(RegionContext);
  if (!context) {
    throw new Error('useRegionContext must be used within the RegionContextProvider');
  }
  return context;
}

interface Props {
  children: ReactNode;
}
const RegionContextProvider = ({ children }: Props) => {
  const [region, setRegion] = useState<string>(DEFAULT_REGION);
  const providerValue = useMemo(() => ({ region, setRegion }), [region, setRegion]);

  return (
    <RegionContext.Provider value={providerValue}>
      {children}
    </RegionContext.Provider>
  );
}

export default {
  RegionContext,
  RegionContextProvider,
  useRegionContext
};
