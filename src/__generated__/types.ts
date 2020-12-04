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
};


export type QuerySummonerArgs = {
  name: Scalars['String'];
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
};

export type SummonerQueryVariables = Exact<{
  region: Scalars['String'];
  name: Scalars['String'];
}>;


export type SummonerQuery = (
  { __typename?: 'Query' }
  & { summoner: (
    { __typename?: 'Summoner' }
    & Pick<Summoner, 'id' | 'accountId' | 'name'>
  ) }
);


export const SummonerDocument = gql`
    query Summoner($region: String!, $name: String!) {
  summoner(region: $region, name: $name) {
    id
    accountId
    name
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