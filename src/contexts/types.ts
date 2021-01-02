import { Summoner } from "../__generated__/types";

export interface RegionContextData {
  region: string;
  setRegion: (region: string) => void;
}

export interface SummonerContextData {
  summoner?: Summoner;
  setSummoner: (summoner?: Summoner) => void;
}
