import { ApolloClient, InMemoryCache, HttpLink, NormalizedCacheObject, ApolloProvider } from '@apollo/client';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Search from './src/screens/Search';
import Summoner from './src/screens/MatchList';

import AppContext from './src/contexts';
import { RootStackParamList, Routes } from './src/routes';

import { View } from './App.styled';

const Stack = createStackNavigator<RootStackParamList>();
const { Navigator, Screen } = Stack;

const uri = `http://192.168.0.7:4001`

const cache = new InMemoryCache();
const link = new HttpLink({
  uri
});

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache,
  link
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <View>
          <AppContext.AppContextProvider>
            <Navigator headerMode="none">
              <Screen name={Routes.SEARCH} component={Search} />
              <Screen name={Routes.SUMMONER} component={Summoner} />
            </Navigator>
          </AppContext.AppContextProvider>
        </View>
      </NavigationContainer>
    </ApolloProvider>
  );
}
