import React, { useEffect, useState } from 'react';
import { Text, Button } from 'react-native';
import { gql, useQuery } from '@apollo/client';
import PeopleList from '../Components/PeopleList';
import LoadingIndicator from '../Components/LoadingIndicator';

const AllPeoplePage = () => {

  const [styleStatusBar, setStyleStatusBar] = useState('light-content');
  
  const { loading, error, data, fetchMore } = useQuery(ALL_PEOPLE_QUERY,
    {
      variables: {
        limit: 10
      }
    });

  return (
    <>
       {data ?
          (
            <PeopleList data={data.allPeople.people}/>
          ) :
            <LoadingIndicator/>

       }
    </>
  );
};

const ALL_PEOPLE_QUERY = gql`
  query($after: String, $limit: Int) {
    allPeople(after: $after ,first: $limit){
      people{
        id
        birthYear
        skinColor
        hairColor
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

/*  const fetchAfterTime = () => {

    if( data ){
      fetchMore({
              variables: {
                after: data.allPeople.pageInfo.endCursor,
                limit: 5
              },
              updateQuery: (prev, { fetchMoreResult }) => {
                if (!fetchMoreResult) return prev;
                return Object.assign({}, prev, {
                  data: [...prev, ...fetchMoreResult]
                });
              }
          });
      console.log(data);
    }
  }

  if(error){
    console.log(error);
  }*/