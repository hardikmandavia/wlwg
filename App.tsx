import { ApolloClient, InMemoryCache, HttpLink, NormalizedCacheObject, ApolloProvider } from '@apollo/client';
import React from 'react';
import { Platform } from 'react-native';
import Config from 'react-native-config';
import { StatusBar } from 'expo-status-bar';


import { View, Text } from './App.styled';


const cache = new InMemoryCache();
const link = new HttpLink({
  uri: Platform.select({
    ios: Config.API_ENDPOINT_IOS,
    android: Config.API_ENDPOINT_ANDROID
  })
});

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache,
  link
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <View>
        <Text>Open up App.tsx to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
    </ApolloProvider>
  );
}
