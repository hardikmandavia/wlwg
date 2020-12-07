import { NavigationProp, RouteProp } from "@react-navigation/native";

export type RootStackParamList = {
  SEARCH: undefined;
  SUMMONER: {
    summonerName: string;
  };
};

export enum Routes {
  SEARCH = "SEARCH",
  SUMMONER = "SUMMONER",
}

export type PropsWithNavigation<T, Route extends Routes> = T & {
  route: RouteProp<RootStackParamList, Route>;
  navigation: NavigationProp<RootStackParamList, Route>;
};
