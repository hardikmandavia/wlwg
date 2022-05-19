import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  summoner: Summoner;
  match: Match;
  matchList: MatchList;
};


export type QuerySummonerArgs = {
  name: Scalars['String'];
  region: Scalars['String'];
};


export type QueryMatchArgs = {
  gameId: Scalars['Float'];
  region: Scalars['String'];
};


export type QueryMatchListArgs = {
  accountId: Scalars['String'];
  region: Scalars['String'];
};

export type Summoner = {
  __typename?: 'Summoner';
  id: Scalars['String'];
  accountId: Scalars['String'];
  puuid: Scalars['String'];
  name: Scalars['String'];
  profileIconId: Scalars['Float'];
  revisionDate: Scalars['Float'];
  summonerLevel: Scalars['Float'];
  region: Scalars['String'];
  ranked: Array<LeagueEntry>;
};

export type LeagueEntry = {
  __typename?: 'LeagueEntry';
  leagueId: Scalars['String'];
  summonerId: Scalars['String'];
  summonerName: Scalars['String'];
  queueType: Scalars['String'];
  tier: Scalars['String'];
  rank: Scalars['String'];
  leaguePoints: Scalars['Float'];
  wins: Scalars['Float'];
  losses: Scalars['Float'];
  hotStreak: Scalars['Boolean'];
  veteran: Scalars['Boolean'];
  freshBlood: Scalars['Boolean'];
  inactive: Scalars['Boolean'];
};

export type Match = {
  __typename?: 'Match';
  gameId: Scalars['Float'];
  participantIdentities: Array<ParticipantIdentity>;
  queueId: Scalars['Float'];
  gameType: Scalars['String'];
  gameDuration: Scalars['Float'];
  teams: Array<TeamStats>;
  platformId: Scalars['String'];
  gameCreation: Scalars['Float'];
  seasonId: Scalars['Float'];
  gameVersion: Scalars['String'];
  mapId: Scalars['Float'];
  gameMode: Scalars['String'];
  participants: Array<Participant>;
};

export type ParticipantIdentity = {
  __typename?: 'ParticipantIdentity';
  participantId: Scalars['Float'];
  player: Player;
};

export type Player = {
  __typename?: 'Player';
  profileIcon: Scalars['Float'];
  accountId: Scalars['String'];
  matchHistoryUri: Scalars['String'];
  currentAccountId: Scalars['String'];
  currentPlatformId: Scalars['String'];
  summonerName: Scalars['String'];
  summonerId: Scalars['String'];
  platformId: Scalars['String'];
};

export type TeamStats = {
  __typename?: 'TeamStats';
  towerKills: Scalars['Float'];
  riftHeraldKills: Scalars['Float'];
  firstBlood: Scalars['Boolean'];
  inhibitorKills: Scalars['Float'];
  bans: Array<TeamBans>;
  firstBaron: Scalars['Boolean'];
  firstDragon: Scalars['Boolean'];
  dragonKills: Scalars['Float'];
  baronKills: Scalars['Float'];
  firstInhibitor: Scalars['Boolean'];
  firstTower: Scalars['Boolean'];
  firstRiftHerald: Scalars['Boolean'];
  teamId: Scalars['Float'];
  win: Scalars['String'];
};

export type TeamBans = {
  __typename?: 'TeamBans';
  championId: Scalars['Float'];
};

export type Participant = {
  __typename?: 'Participant';
  participantId: Scalars['Float'];
  championId: Scalars['Float'];
  champion?: Maybe<Champion>;
  stats: ParticipantStats;
  teamId: Scalars['Float'];
  timeline: ParticipantTimeline;
  spell1Id: Scalars['Float'];
  spell2Id: Scalars['Float'];
  highestAchievedSeasonTier?: Maybe<Scalars['String']>;
};

export type Champion = {
  __typename?: 'Champion';
  id: Scalars['String'];
  key: Scalars['String'];
  name: Scalars['String'];
};

export type ParticipantStats = {
  __typename?: 'ParticipantStats';
  item0: Scalars['Float'];
  item2: Scalars['Float'];
  totalUnitsHealed: Scalars['Float'];
  item1: Scalars['Float'];
  largestMultiKill: Scalars['Float'];
  goldEarned: Scalars['Float'];
  firstInhibitorKill: Scalars['Boolean'];
  physicalDamageTaken: Scalars['Float'];
  nodeNeutralizeAssist: Scalars['Float'];
  totalPlayerScore: Scalars['Float'];
  champLevel: Scalars['Float'];
  damageDealtToObjectives: Scalars['Float'];
  totalDamageTaken: Scalars['Float'];
  neutralMinionsKilled: Scalars['Float'];
  deaths: Scalars['Float'];
  tripleKills: Scalars['Float'];
  magicDamageDealtToChampions: Scalars['Float'];
  wardsKilled: Scalars['Float'];
  pentaKills: Scalars['Float'];
  damageSelfMitigated: Scalars['Float'];
  largestCriticalStrike: Scalars['Float'];
  nodeNeutralize: Scalars['Float'];
  totalTimeCrowdControlDealt: Scalars['Float'];
  firstTowerKill: Scalars['Boolean'];
  magicDamageDealt: Scalars['Float'];
  totalScoreRank: Scalars['Float'];
  nodeCapture: Scalars['Float'];
  wardsPlaced: Scalars['Float'];
  totalDamageDealt: Scalars['Float'];
  timeCCingOthers: Scalars['Float'];
  magicalDamageTaken: Scalars['Float'];
  largestKillingSpree: Scalars['Float'];
  totalDamageDealtToChampions: Scalars['Float'];
  physicalDamageDealtToChampions: Scalars['Float'];
  neutralMinionsKilledTeamJungle: Scalars['Float'];
  totalMinionsKilled: Scalars['Float'];
  firstInhibitorAssist: Scalars['Boolean'];
  visionWardsBoughtInGame: Scalars['Float'];
  objectivePlayerScore: Scalars['Float'];
  kills: Scalars['Float'];
  firstTowerAssist: Scalars['Boolean'];
  combatPlayerScore: Scalars['Float'];
  inhibitorKills: Scalars['Float'];
  turretKills: Scalars['Float'];
  participantId: Scalars['Float'];
  trueDamageTaken: Scalars['Float'];
  firstBloodAssist: Scalars['Boolean'];
  nodeCaptureAssist: Scalars['Float'];
  assists: Scalars['Float'];
  teamObjective: Scalars['Float'];
  altarsNeutralized: Scalars['Float'];
  goldSpent: Scalars['Float'];
  damageDealtToTurrets: Scalars['Float'];
  altarsCaptured: Scalars['Float'];
  win: Scalars['Boolean'];
  totalHeal: Scalars['Float'];
  unrealKills: Scalars['Float'];
  visionScore: Scalars['Float'];
  physicalDamageDealt: Scalars['Float'];
  firstBloodKill: Scalars['Boolean'];
  longestTimeSpentLiving: Scalars['Float'];
  killingSprees: Scalars['Float'];
  sightWardsBoughtInGame: Scalars['Float'];
  trueDamageDealtToChampions: Scalars['Float'];
  neutralMinionsKilledEnemyJungle: Scalars['Float'];
  doubleKills: Scalars['Float'];
  trueDamageDealt: Scalars['Float'];
  quadraKills: Scalars['Float'];
  item4: Scalars['Float'];
  item3: Scalars['Float'];
  item6: Scalars['Float'];
  item5: Scalars['Float'];
  playerScore0: Scalars['Float'];
  playerScore1: Scalars['Float'];
  playerScore2: Scalars['Float'];
  playerScore3: Scalars['Float'];
  playerScore4: Scalars['Float'];
  playerScore5: Scalars['Float'];
  playerScore6: Scalars['Float'];
  playerScore7: Scalars['Float'];
  playerScore8: Scalars['Float'];
  playerScore9: Scalars['Float'];
  perk0: Scalars['Float'];
  perk1: Scalars['Float'];
  perk2: Scalars['Float'];
  perk3: Scalars['Float'];
  perk4: Scalars['Float'];
  perk5: Scalars['Float'];
  perkPrimaryStyle: Scalars['Float'];
  perkSubStyle: Scalars['Float'];
};

export type ParticipantTimeline = {
  __typename?: 'ParticipantTimeline';
  participantId: Scalars['Float'];
  csDiffPerMin: TimelineDelta;
  damageTakenPerMin: TimelineDelta;
  role: Scalars['String'];
  damageTakenDiffPerMin: TimelineDelta;
  xpPerMin: TimelineDelta;
  xpDiffPerMin: TimelineDelta;
  lane: Scalars['String'];
  creepsPerMin: TimelineDelta;
  goldPerMin: TimelineDelta;
};

export type TimelineDelta = {
  __typename?: 'TimelineDelta';
  p0: Scalars['Float'];
  p1: Scalars['Float'];
  p2: Scalars['Float'];
  p3: Scalars['Float'];
};

export type MatchList = {
  __typename?: 'MatchList';
  startIndex: Scalars['Float'];
  totalGames: Scalars['Float'];
  endIndex: Scalars['Float'];
  matches: Array<MatchReference>;
};

export type MatchReference = {
  __typename?: 'MatchReference';
  gameId: Scalars['Float'];
  role: Scalars['String'];
  season: Scalars['Float'];
  platformId: Scalars['String'];
  champion: Scalars['Float'];
  queue: Scalars['Float'];
  lane: Scalars['String'];
  timestamp: Scalars['Float'];
};

export type MatchQueryVariables = Exact<{
  region: Scalars['String'];
  gameId: Scalars['Float'];
}>;


export type MatchQuery = (
  { __typename?: 'Query' }
  & { match: (
    { __typename?: 'Match' }
    & Pick<Match, 'gameId'>
    & { participantIdentities: Array<(
      { __typename?: 'ParticipantIdentity' }
      & Pick<ParticipantIdentity, 'participantId'>
      & { player: (
        { __typename?: 'Player' }
        & Pick<Player, 'accountId' | 'summonerId' | 'summonerName'>
      ) }
    )>, participants: Array<(
      { __typename?: 'Participant' }
      & Pick<Participant, 'teamId' | 'participantId' | 'championId'>
      & { champion?: Maybe<(
        { __typename?: 'Champion' }
        & Pick<Champion, 'name' | 'key' | 'id'>
      )>, timeline: (
        { __typename?: 'ParticipantTimeline' }
        & Pick<ParticipantTimeline, 'lane' | 'role'>
        & { creepsPerMin: (
          { __typename?: 'TimelineDelta' }
          & Pick<TimelineDelta, 'p0' | 'p1' | 'p2' | 'p3'>
        ), csDiffPerMin: (
          { __typename?: 'TimelineDelta' }
          & Pick<TimelineDelta, 'p0' | 'p1' | 'p2' | 'p3'>
        ), xpDiffPerMin: (
          { __typename?: 'TimelineDelta' }
          & Pick<TimelineDelta, 'p0' | 'p1' | 'p2' | 'p3'>
        ), damageTakenDiffPerMin: (
          { __typename?: 'TimelineDelta' }
          & Pick<TimelineDelta, 'p0' | 'p1' | 'p2' | 'p3'>
        ) }
      ), stats: (
        { __typename?: 'ParticipantStats' }
        & Pick<ParticipantStats, 'kills' | 'deaths' | 'assists' | 'wardsPlaced' | 'win' | 'firstBloodKill' | 'firstBloodAssist' | 'totalMinionsKilled'>
      ) }
    )> }
  ) }
);

export type MatchListQueryVariables = Exact<{
  region: Scalars['String'];
  accountId: Scalars['String'];
}>;


export type MatchListQuery = (
  { __typename?: 'Query' }
  & { matchList: (
    { __typename?: 'MatchList' }
    & Pick<MatchList, 'startIndex' | 'totalGames' | 'endIndex'>
    & { matches: Array<(
      { __typename?: 'MatchReference' }
      & Pick<MatchReference, 'gameId' | 'role' | 'queue' | 'champion' | 'lane' | 'timestamp'>
    )> }
  ) }
);

export type SummonerQueryVariables = Exact<{
  region: Scalars['String'];
  name: Scalars['String'];
}>;


export type SummonerQuery = (
  { __typename?: 'Query' }
  & { summoner: (
    { __typename?: 'Summoner' }
    & Pick<Summoner, 'id' | 'accountId' | 'name' | 'profileIconId' | 'summonerLevel'>
    & { ranked: Array<(
      { __typename?: 'LeagueEntry' }
      & Pick<LeagueEntry, 'queueType' | 'tier' | 'rank' | 'leaguePoints' | 'wins' | 'losses'>
    )> }
  ) }
);


export const MatchDocument = gql`
    query Match($region: String!, $gameId: Float!) {
  match(region: $region, gameId: $gameId) {
    gameId
    participantIdentities {
      participantId
      player {
        accountId
        summonerId
        summonerName
      }
    }
    participants {
      teamId
      participantId
      championId
      champion {
        name
        key
        id
      }
      timeline {
        creepsPerMin {
          p0
          p1
          p2
          p3
        }
        csDiffPerMin {
          p0
          p1
          p2
          p3
        }
        xpDiffPerMin {
          p0
          p1
          p2
          p3
        }
        damageTakenDiffPerMin {
          p0
          p1
          p2
          p3
        }
        lane
        role
      }
      stats {
        kills
        deaths
        assists
        wardsPlaced
        win
        firstBloodKill
        firstBloodAssist
        totalMinionsKilled
      }
    }
  }
}
    `;

/**
 * __useMatchQuery__
 *
 * To run a query within a React component, call `useMatchQuery` and pass it any options that fit your needs.
 * When your component renders, `useMatchQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMatchQuery({
 *   variables: {
 *      region: // value for 'region'
 *      gameId: // value for 'gameId'
 *   },
 * });
 */
export function useMatchQuery(baseOptions: Apollo.QueryHookOptions<MatchQuery, MatchQueryVariables>) {
        return Apollo.useQuery<MatchQuery, MatchQueryVariables>(MatchDocument, baseOptions);
      }
export function useMatchLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MatchQuery, MatchQueryVariables>) {
          return Apollo.useLazyQuery<MatchQuery, MatchQueryVariables>(MatchDocument, baseOptions);
        }
export type MatchQueryHookResult = ReturnType<typeof useMatchQuery>;
export type MatchLazyQueryHookResult = ReturnType<typeof useMatchLazyQuery>;
export type MatchQueryResult = Apollo.QueryResult<MatchQuery, MatchQueryVariables>;
export const MatchListDocument = gql`
    query MatchList($region: String!, $accountId: String!) {
  matchList(region: $region, accountId: $accountId) {
    startIndex
    totalGames
    endIndex
    matches {
      gameId
      role
      queue
      champion
      lane
      timestamp
    }
  }
}
    `;

/**
 * __useMatchListQuery__
 *
 * To run a query within a React component, call `useMatchListQuery` and pass it any options that fit your needs.
 * When your component renders, `useMatchListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMatchListQuery({
 *   variables: {
 *      region: // value for 'region'
 *      accountId: // value for 'accountId'
 *   },
 * });
 */
export function useMatchListQuery(baseOptions: Apollo.QueryHookOptions<MatchListQuery, MatchListQueryVariables>) {
        return Apollo.useQuery<MatchListQuery, MatchListQueryVariables>(MatchListDocument, baseOptions);
      }
export function useMatchListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MatchListQuery, MatchListQueryVariables>) {
          return Apollo.useLazyQuery<MatchListQuery, MatchListQueryVariables>(MatchListDocument, baseOptions);
        }
export type MatchListQueryHookResult = ReturnType<typeof useMatchListQuery>;
export type MatchListLazyQueryHookResult = ReturnType<typeof useMatchListLazyQuery>;
export type MatchListQueryResult = Apollo.QueryResult<MatchListQuery, MatchListQueryVariables>;
export const SummonerDocument = gql`
    query Summoner($region: String!, $name: String!) {
  summoner(region: $region, name: $name) {
    id
    accountId
    name
    profileIconId
    summonerLevel
    ranked {
      queueType
      tier
      rank
      leaguePoints
      wins
      losses
    }
  }
}
    `;

/**
 * __useSummonerQuery__
 *
 * To run a query within a React component, call `useSummonerQuery` and pass it any options that fit your needs.
 * When your component renders, `useSummonerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSummonerQuery({
 *   variables: {
 *      region: // value for 'region'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useSummonerQuery(baseOptions: Apollo.QueryHookOptions<SummonerQuery, SummonerQueryVariables>) {
        return Apollo.useQuery<SummonerQuery, SummonerQueryVariables>(SummonerDocument, baseOptions);
      }
export function useSummonerLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SummonerQuery, SummonerQueryVariables>) {
          return Apollo.useLazyQuery<SummonerQuery, SummonerQueryVariables>(SummonerDocument, baseOptions);
        }
export type SummonerQueryHookResult = ReturnType<typeof useSummonerQuery>;
export type SummonerLazyQueryHookResult = ReturnType<typeof useSummonerLazyQuery>;
export type SummonerQueryResult = Apollo.QueryResult<SummonerQuery, SummonerQueryVariables>;