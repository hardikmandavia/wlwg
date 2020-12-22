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
  matchList: MatchList;
};


export type QuerySummonerArgs = {
  name: Scalars['String'];
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

export type MatchList = {
  __typename?: 'MatchList';
  startIndex: Scalars['Float'];
  totalGames: Scalars['Float'];
  endIndex: Scalars['Float'];
  matches: Array<MatchReference>;
};

export type MatchReference = {
  __typename?: 'MatchReference';
  gameId: Scalars['String'];
  role: Scalars['String'];
  season: Scalars['Float'];
  platformId: Scalars['String'];
  champion: Scalars['Float'];
  queue: Scalars['Float'];
  lane: Scalars['String'];
  timestamp: Scalars['Float'];
};

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