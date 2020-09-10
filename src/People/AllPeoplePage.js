import React, { useEffect, useState } from 'react';
import { Text, Button, View, StyleSheet } from 'react-native';
import { gql, useQuery } from '@apollo/client';
import PeopleList from '../Components/PeopleList';
import LoadingIndicator from '../Components/LoadingIndicator';
import ErrorMessage from '../Components/ErrorMessage';


const AllPeoplePage = () => {

  const { loading, error, data, fetchMore } = useQuery(ALL_PEOPLE_QUERY,
    {
      variables: {
        limit: 5
      },
      fetchPolicy: "cache-and-network"
    });

  if (loading && data === null) return (
    <LoadingIndicator message={"Loading"}/>
  );
    
  if (error) {
    return (
      <ErrorMessage message={"Failed to Load Data"}/>
    );}

  if(data && !error && !loading){
    if(data.allPeople.pageInfo.hasNextPage === true){
      fetchMore({
        variables: {
          after: data.allPeople.pageInfo.endCursor,
          limit: 5
        },
        updateQuery: (prev, { fetchMoreResult }) => {
          if (!fetchMoreResult){
            return prev;
          }
          return Object.assign({}, prev, fetchMoreResult);
        }
       });
    }
  }
  
  return (
      <View>
        {
          data && <PeopleList data={data.allPeople.people} loading={loading}/>
        }
      </View>
  );
};

const ALL_PEOPLE_QUERY = gql`
  query($after: String, $limit: Int) {
    allPeople(after: $after ,first: $limit){
      people{
        id
        name
        species {
          name
        }
      }
      pageInfo{
        endCursor
        hasNextPage
      }
    }
  }
`;

export default AllPeoplePage;
