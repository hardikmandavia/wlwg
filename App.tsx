import { ApolloClient, InMemoryCache, HttpLink, NormalizedCacheObject, ApolloProvider } from '@apollo/client';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Search from './src/screens/Search';
import Summoner from './src/screens/Summoner';

import { RootStackParamList, Routes } from './routes';

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
          <Navigator headerMode="none">
            <Screen name={Routes.SEARCH} component={Search} />
            <Screen name={Routes.SUMMONER} component={Summoner} />
          </Navigator>
        </View>
      </NavigationContainer>
    </ApolloProvider>
  );
}
