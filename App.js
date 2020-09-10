/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import Routes from './src/Routes';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { concatPagination, offsetLimitPagination } from "@apollo/client/utilities";
import { StatusBar } from 'react-native';

const App: () => React$Node = () => {

  const apolloClient = new ApolloClient({
    cache: new InMemoryCache({
    typePolicies: {
      PeopleConnection: {
        fields: {
          people: offsetLimitPagination(),
        },
      },
    },
  }),
    uri: 'https://swapi-graphql-ravn.herokuapp.com/',
  });

  return (
    <ApolloProvider client={apolloClient}>
      <StatusBar barStyle="ligh-content" backgroundColor={'#121212'} />
      <Routes/>
    </ApolloProvider>
   )
};

export default App;
